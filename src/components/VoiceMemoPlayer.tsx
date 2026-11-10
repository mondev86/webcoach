import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Radio, Sparkles } from 'lucide-react';

interface VoiceMemoPlayerProps {
  transcript: string;
  durationLabel: string;
  coachName?: string;
}

export const VoiceMemoPlayer: React.FC<VoiceMemoPlayerProps> = ({
  transcript,
  durationLabel,
  coachName = 'Héctor Montoya'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalEstimatedDuration, setTotalEstimatedDuration] = useState(25);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number>(-1);
  const [hasSpeechSupport, setHasSpeechSupport] = useState(true);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const sentencesRef = useRef<string[]>([]);
  const currentSentenceRef = useRef<number>(0);
  const timerRef = useRef<number | null>(null);
  const keepAliveIntervalRef = useRef<number | null>(null);

  // Split transcript into natural sentences for robust multi-browser synthesis
  useEffect(() => {
    const rawSentences = transcript
      .split(/(?<=[.?!])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    sentencesRef.current = rawSentences.length > 0 ? rawSentences : [transcript];

    // Estimate realistic total seconds based on words (~130 words per minute at 1.0x)
    const wordCount = transcript.split(/\s+/).length;
    const estSecs = Math.max(12, Math.round((wordCount / 130) * 60));
    setTotalEstimatedDuration(estSecs);

    // Reset playback when transcript changes (e.g. week switch)
    stopAudio();
  }, [transcript]);

  // Check speech synthesis support on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      setHasSpeechSupport(true);

      // Pre-load voices if needed
      const handleVoices = () => {
        if (synthRef.current) {
          synthRef.current.getVoices();
        }
      };
      synthRef.current.onvoiceschanged = handleVoices;
      handleVoices();
    } else {
      setHasSpeechSupport(false);
    }

    return () => {
      stopAudio();
    };
  }, []);

  // Web Audio Context initialization for crisp tactile audio cues & fallback
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Play pleasant start chime or beep
  const playChime = useCallback((isStart: boolean) => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      if (isStart) {
        // High-tech ascending walkie-talkie cue: 540Hz -> 820Hz
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.exponentialRampToValueAtTime(820, now + 0.12);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else {
        // Soft click cue: 420Hz -> 280Hz
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(280, now + 0.08);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch {
      // AudioContext unavailable or restricted
    }
  }, [getAudioContext, isMuted]);

  // Clean stop of all timers and speech
  const stopAudio = useCallback(() => {
    if (synthRef.current) {
      try {
        synthRef.current.cancel();
      } catch {
        // ignore
      }
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (keepAliveIntervalRef.current) {
      clearInterval(keepAliveIntervalRef.current);
      keepAliveIntervalRef.current = null;
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
    setActiveSentenceIndex(-1);
    currentSentenceRef.current = 0;
  }, []);

  // Speak a specific sentence via SpeechSynthesis
  const speakSentence = useCallback((index: number) => {
    if (!synthRef.current || index >= sentencesRef.current.length) {
      stopAudio();
      return;
    }

    currentSentenceRef.current = index;
    setActiveSentenceIndex(index);

    const sentence = sentencesRef.current[index];
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.rate = playbackRate;
    utterance.pitch = 0.95;
    utterance.volume = isMuted ? 0 : 1;

    // Pick Spanish voice
    const voices = synthRef.current.getVoices();
    const spanishVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('es'));
    if (spanishVoices.length > 0) {
      const preferred = spanishVoices.find(
        (v) =>
          v.name.toLowerCase().includes('jorge') ||
          v.name.toLowerCase().includes('pablo') ||
          v.name.toLowerCase().includes('diego') ||
          v.name.toLowerCase().includes('male') ||
          v.name.toLowerCase().includes('carlos')
      ) || spanishVoices[0];
      utterance.voice = preferred;
      utterance.lang = preferred.lang;
    } else {
      utterance.lang = 'es-ES';
    }

    utterance.onend = () => {
      const nextIdx = index + 1;
      if (nextIdx < sentencesRef.current.length) {
        speakSentence(nextIdx);
      } else {
        stopAudio();
      }
    };

    utterance.onerror = (e) => {
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      const nextIdx = index + 1;
      if (nextIdx < sentencesRef.current.length) {
        speakSentence(nextIdx);
      } else {
        stopAudio();
      }
    };

    try {
      synthRef.current.speak(utterance);
    } catch {
      stopAudio();
    }
  }, [playbackRate, isMuted, stopAudio]);

  // Main Play / Resume handler
  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause
      playChime(false);
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.pause();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setIsPlaying(false);
      setIsPaused(true);
    } else if (isPaused) {
      // Resume
      playChime(true);
      if (synthRef.current && synthRef.current.paused) {
        synthRef.current.resume();
      } else {
        speakSentence(currentSentenceRef.current);
      }
      setIsPlaying(true);
      setIsPaused(false);
      startTimer();
    } else {
      // Start fresh playback
      playChime(true);
      if (synthRef.current) {
        try {
          synthRef.current.cancel();
        } catch {
          // ignore
        }
      }
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentTime(0);
      currentSentenceRef.current = 0;
      // Short 30ms timeout ensures previous cancel is cleared in Chromium
      setTimeout(() => {
        speakSentence(0);
      }, 40);
      startTimer();
    }
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentTime((prev) => {
        // Chrome speech synthesis keep-alive ping to prevent 15-second idle pause
        if (synthRef.current && synthRef.current.speaking && !synthRef.current.paused) {
          synthRef.current.pause();
          synthRef.current.resume();
        }
        return prev + 1;
      });
    }, 1000);
  };

  // Speed change toggle
  const handleCycleSpeed = () => {
    const nextRate = playbackRate === 1.0 ? 1.25 : playbackRate === 1.25 ? 1.5 : 1.0;
    setPlaybackRate(nextRate);
    if (isPlaying && synthRef.current) {
      // Restart current sentence at new speed
      synthRef.current.cancel();
      speakSentence(currentSentenceRef.current);
    }
  };

  // Seek / jump when clicking on waveform bar
  const handleSeek = (index: number, totalBars: number) => {
    const fraction = index / totalBars;
    const targetSentenceIdx = Math.min(
      sentencesRef.current.length - 1,
      Math.floor(fraction * sentencesRef.current.length)
    );
    const targetTime = Math.round(fraction * totalEstimatedDuration);
    setCurrentTime(targetTime);

    if (isPlaying || isPaused) {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      speakSentence(targetSentenceIdx);
      if (isPaused) {
        setIsPlaying(true);
        setIsPaused(false);
        startTimer();
      }
    } else {
      // Start playback from this sentence
      playChime(true);
      setIsPlaying(true);
      setIsPaused(false);
      speakSentence(targetSentenceIdx);
      startTimer();
    }
  };

  const formatSeconds = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Waveform bars simulation & interactive scrubbing
  const totalBars = 32;
  const progressRatio = Math.min(1, currentTime / (totalEstimatedDuration / playbackRate));
  const activeBarsCount = Math.round(progressRatio * totalBars);

  return (
    <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-4 shadow-lg">
      {/* Top Header with live badge */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
            <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'text-emerald-400 animate-pulse' : 'text-zinc-400'}`} />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">
              Audio Feedback de {coachName}
            </span>
            <span className="text-[10px] font-mono text-zinc-400">
              {isPlaying
                ? '● En reproducción (Voz en directo)'
                : isPaused
                ? '❚❚ Pausado'
                : 'Nota de voz de WhatsApp del domingo'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Speed Toggle */}
          <button
            onClick={handleCycleSpeed}
            title="Velocidad de reproducción"
            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-[10px] font-mono text-zinc-300 font-bold transition-colors"
          >
            {playbackRate}x
          </button>

          {/* Mute toggle */}
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              if (synthRef.current && isPlaying) {
                // re-apply
                synthRef.current.cancel();
                speakSentence(currentSentenceRef.current);
              }
            }}
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
            {durationLabel}
          </span>
        </div>
      </div>

      {/* Main Interactive Waveform Player Bar */}
      <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center gap-3">
        {/* Big Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio feedback'}
          className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all shadow-md ${
            isPlaying
              ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 ring-2 ring-emerald-500/30'
              : 'bg-white text-zinc-950 hover:bg-zinc-200'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-zinc-950" />
          ) : (
            <Play className="w-4 h-4 fill-zinc-950 ml-0.5" />
          )}
        </button>

        {/* Reset Button */}
        <button
          onClick={stopAudio}
          title="Reiniciar nota de voz"
          className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        {/* Dynamic Waveform Scrubber */}
        <div
          className="flex-1 flex items-center gap-1 h-8 px-1 cursor-pointer group"
          title="Haz clic en cualquier barra para saltar en la nota de voz"
        >
          {Array.from({ length: totalBars }).map((_, i) => {
            const isPlayed = i < activeBarsCount;
            // Realistic waveform profile with slight randomness based on index
            const baseH = [3, 5, 2, 6, 4, 7, 3, 5, 6, 4, 7, 5, 3, 6, 8, 4, 6, 7, 3, 5, 4, 6, 8, 5, 4, 6, 3, 5, 4, 3, 5, 2][i % 32];
            const livePulse = isPlaying && isPlayed ? 'scale-y-110' : '';

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSeek(i, totalBars)}
                aria-label={`Saltar a posición ${i + 1}`}
                className="flex-1 h-full flex items-center justify-center p-0 bg-transparent focus:outline-none"
              >
                <span
                  style={{ height: `${baseH * 3.2}px` }}
                  className={`w-full max-w-[4px] rounded-full transition-all duration-200 ${
                    isPlayed
                      ? isPlaying
                        ? 'bg-emerald-400'
                        : 'bg-white'
                      : 'bg-zinc-800 group-hover:bg-zinc-700'
                  } ${livePulse}`}
                />
              </button>
            );
          })}
        </div>

        {/* Time counter: elapsed / total */}
        <div className="text-right shrink-0">
          <span className="text-xs font-mono font-bold text-white block tabular-nums">
            {formatSeconds(currentTime)}
          </span>
          <span className="text-[10px] font-mono text-zinc-500 block">
            {formatSeconds(Math.round(totalEstimatedDuration / playbackRate))}
          </span>
        </div>
      </div>

      {/* Interactive Transcript with Karaoke / Current Sentence Highlight */}
      <div className="p-3.5 bg-zinc-950/80 rounded-xl border border-zinc-800/80 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Transcripción de la nota de voz:
          </span>
          {isPlaying && (
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Sincronizado
            </span>
          )}
        </div>

        <p className="text-xs text-zinc-300 leading-relaxed font-normal">
          {sentencesRef.current.map((sentence, idx) => {
            const isActive = activeSentenceIndex === idx;
            return (
              <span
                key={idx}
                onClick={() => {
                  playChime(true);
                  setIsPlaying(true);
                  setIsPaused(false);
                  speakSentence(idx);
                  startTimer();
                }}
                className={`transition-colors cursor-pointer rounded px-1 py-0.5 mr-1 inline-block ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold border-b border-emerald-400'
                    : 'hover:text-white hover:bg-zinc-800/60'
                }`}
                title="Toca para escuchar este fragmento"
              >
                {sentence}{' '}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
