import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Activity, ShieldCheck, Zap } from 'lucide-react';
import { ExerciseItem } from '../types';

interface ExerciseMotionPlayerProps {
  exercise: ExerciseItem;
}

export const ExerciseMotionPlayer: React.FC<ExerciseMotionPlayerProps> = ({ exercise }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'loop' | 'photo'>(exercise.image ? 'photo' : 'loop');
  const [progress, setProgress] = useState(0); // 0 to 100
  const [repCount, setRepCount] = useState(1);
  const [speed, setSpeed] = useState<number>(1);

  // If exercise changes, set viewMode according to available image or loop
  useEffect(() => {
    if (exercise.image) {
      setViewMode('photo');
    } else {
      setViewMode('loop');
    }
    setProgress(0);
    setRepCount(1);
  }, [exercise.id]);

  // Smooth continuous animation cycle simulating high quality biomechanic loop
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 20; // 50fps
    const step = 0.5 * speed;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          setRepCount((r) => (r >= 12 ? 1 : r + 1));
          return 0;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, speed]);

  let currentPhase = 'Excéntrica (Control)';
  let phaseColor = 'text-amber-400';
  let muscleTension = 60;

  if (progress < 45) {
    currentPhase = 'Fase Excéntrica (3s acumulando tensión)';
    phaseColor = 'text-blue-400';
    muscleTension = 50 + (progress / 45) * 45;
  } else if (progress < 55) {
    currentPhase = 'Pausa Isométrica (Punto de máxima tensión)';
    phaseColor = 'text-emerald-400';
    muscleTension = 100;
  } else if (progress < 90) {
    currentPhase = 'Fase Concéntrica (Aceleración y empuje)';
    phaseColor = 'text-amber-400';
    muscleTension = 90 - ((progress - 55) / 35) * 40;
  } else {
    currentPhase = 'Bloqueo & Respiración';
    phaseColor = 'text-zinc-400';
    muscleTension = 40;
  }

  // Calculate dynamic coordinates for biomechanical skeleton loop based on exercise
  const renderBiomechanicalVisualizer = () => {
    const rad = (progress / 100) * Math.PI * 2;
    const sinCycle = Math.sin(rad - Math.PI / 2);
    const normHinge = (sinCycle + 1) / 2; // 0 to 1

    switch (exercise.animationType) {
      case 'battle_ropes': {
        // Double ropes wave simulation
        const waveOffset1 = (progress * 15) % 360;
        const waveOffset2 = (progress * 15 + 180) % 360;
        const armY1 = 150 + Math.sin((waveOffset1 * Math.PI) / 180) * 25;
        const armY2 = 150 + Math.sin((waveOffset2 * Math.PI) / 180) * 25;

        return (
          <svg viewBox="0 0 360 360" className="w-full h-full">
            <defs>
              <pattern id="grid-br" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="360" height="360" fill="url(#grid-br)" />
            <line x1="30" y1="310" x2="330" y2="310" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />

            {/* Standing athlete in athletic quarter squat */}
            {/* Foot */}
            <circle cx="90" cy="305" r="6" fill="#71717a" />
            <circle cx="120" cy="305" r="6" fill="#71717a" />
            {/* Knees */}
            <circle cx="85" cy="245" r="6" fill="#a1a1aa" />
            <line x1="90" y1="305" x2="85" y2="245" stroke="#a1a1aa" strokeWidth="5" strokeLinecap="round" />
            {/* Hips */}
            <circle cx="110" cy="195" r="8" fill="#ffffff" />
            <line x1="85" y1="245" x2="110" y2="195" stroke="#f4f4f5" strokeWidth="6" strokeLinecap="round" />
            {/* Torso */}
            <line x1="110" y1="195" x2="135" y2="135" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" />
            <circle cx="140" cy="110" r="14" fill="#ffffff" />

            {/* Arms pumping */}
            <line x1="135" y1="140" x2="170" y2={armY1} stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <line x1="135" y1="140" x2="165" y2={armY2} stroke="#a1a1aa" strokeWidth="4" strokeLinecap="round" />

            {/* Animated battle ropes waves propagating to anchor */}
            <path
              d={`M 170 ${armY1} Q 210 ${180 + Math.sin(rad * 4) * 35}, 250 ${190 + Math.cos(rad * 4) * 30} T 320 290`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
            />
            <path
              d={`M 165 ${armY2} Q 205 ${180 - Math.sin(rad * 4) * 35}, 245 ${190 - Math.cos(rad * 4) * 30} T 320 295`}
              fill="none"
              stroke="#71717a"
              strokeWidth="4"
            />
            {/* Anchor point */}
            <circle cx="320" cy="292" r="9" fill="#ef4444" />
            <text x="260" y="325" fill="#ef4444" fontSize="10" fontFamily="Space Mono">PUNTO ANCLA</text>

            <text x="30" y="40" fill="#ffffff" fontSize="13" fontWeight="bold">
              CADENCIA ONDULATORIA: <tspan fill="#38bdf8">140 BPM</tspan>
            </text>
            <text x="30" y="60" fill="#71717a" fontSize="11" fontFamily="Space Mono">
              ESTIMULO CARDIOVASCULAR PURO
            </text>
          </svg>
        );
      }

      case 'bench_press': {
        // Barbell bench press on flat bench
        const barY = 160 + normHinge * 65; // Bar moves from 160 down to 225 at chest
        const shoulderX = 230;
        const shoulderY = 220;
        const elbowX = 230 - (1 - normHinge) * 15;
        const elbowY = 190 + normHinge * 35;

        return (
          <svg viewBox="0 0 360 360" className="w-full h-full">
            <defs>
              <pattern id="grid-bp" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="360" height="360" fill="url(#grid-bp)" />

            {/* Bench structure */}
            <line x1="80" y1="230" x2="280" y2="230" stroke="#71717a" strokeWidth="8" strokeLinecap="round" />
            <line x1="100" y1="230" x2="100" y2="310" stroke="#52525b" strokeWidth="6" />
            <line x1="260" y1="230" x2="260" y2="310" stroke="#52525b" strokeWidth="6" />
            <line x1="40" y1="310" x2="320" y2="310" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />

            {/* Lifter Body on Bench */}
            {/* Head */}
            <circle cx="260" cy="215" r="13" fill="#ffffff" />
            {/* Torso with tight arch */}
            <path d="M 250 225 Q 210 215, 170 226" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
            <text x="180" y="205" fill="#22c55e" fontSize="9" fontWeight="bold">ARCO ESCAPULAR ✓</text>
            {/* Hips & Glutes firmly on bench */}
            <circle cx="170" cy="226" r="8" fill="#ffffff" />
            {/* Legs & Feet on floor (Leg drive) */}
            <line x1="170" y1="226" x2="135" y2="260" stroke="#f4f4f5" strokeWidth="6" strokeLinecap="round" />
            <line x1="135" y1="260" x2="135" y2="305" stroke="#a1a1aa" strokeWidth="5" strokeLinecap="round" />
            <circle cx="135" cy="305" r="6" fill="#71717a" />
            <text x="90" y="300" fill="#38bdf8" fontSize="9" fontFamily="Space Mono">LEG DRIVE</text>

            {/* Lifter Arms extending up to Barbell */}
            <line x1={shoulderX} y1={shoulderY} x2={elbowX} y2={elbowY} stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            <line x1={elbowX} y1={elbowY} x2="225" y2={barY} stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />

            {/* Barbell & Plates */}
            <line x1="140" y1={barY} x2="310" y2={barY} stroke="#ffffff" strokeWidth="5" />
            <circle cx="155" cy={barY} r="24" fill="#18181b" stroke="#ffffff" strokeWidth="3" />
            <circle cx="295" cy={barY} r="24" fill="#18181b" stroke="#ffffff" strokeWidth="3" />

            {/* Path indicator */}
            <line x1="225" y1="150" x2="225" y2="235" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

            <text x="30" y="40" fill="#ffffff" fontSize="13" fontWeight="bold">
              ESTIRAMIENTO PECTORAL: <tspan fill="#38bdf8">{Math.round(40 + normHinge * 55)}%</tspan>
            </text>
            <text x="30" y="60" fill="#71717a" fontSize="11" fontFamily="Space Mono">
              ÁNGULO DE CODO: 45° (SALUD ARTICULAR)
            </text>
          </svg>
        );
      }

      case 'kettlebell_swing': {
        const hipX = 140 - normHinge * 25;
        const hipY = 180 + normHinge * 15;
        const chestX = 170 - normHinge * 45;
        const chestY = 130 + normHinge * 35;
        const headX = chestX + 15;
        const headY = chestY - 30;

        const armAngle = -normHinge * 65 + (1 - normHinge) * 55;
        const kbX = chestX + Math.sin((armAngle * Math.PI) / 180) * 110;
        const kbY = chestY + Math.cos((armAngle * Math.PI) / 180) * 110;

        return (
          <svg viewBox="0 0 360 360" className="w-full h-full">
            <defs>
              <pattern id="grid-pattern-kb" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="360" height="360" fill="url(#grid-pattern-kb)" />

            <line x1="40" y1="320" x2="320" y2="320" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="160" cy="315" r="7" fill="#71717a" />
            <circle cx="150" cy="250" r="6" fill="#a1a1aa" />
            <line x1="160" y1="315" x2="150" y2="250" stroke="#a1a1aa" strokeWidth="5" strokeLinecap="round" />

            <line x1="150" y1="250" x2={hipX} y2={hipY} stroke="#f4f4f5" strokeWidth="6" strokeLinecap="round" />
            <circle cx={hipX} cy={hipY} r="8" fill="#ffffff" />

            <line x1={hipX} y1={hipY} x2={chestX} y2={chestY} stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" />
            <circle cx={headX} cy={headY} r="14" fill="#f4f4f5" />
            <line x1={chestX} y1={chestY} x2={kbX} y2={kbY} stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />

            <circle cx={kbX} cy={kbY} r="18" fill="#ffffff" stroke="#71717a" strokeWidth="2" />
            <path d={`M ${kbX - 8} ${kbY - 14} C ${kbX - 8} ${kbY - 26}, ${kbX + 8} ${kbY - 26}, ${kbX + 8} ${kbY - 14}`} fill="none" stroke="#ffffff" strokeWidth="3" />

            <text x="30" y="40" fill="#ffffff" fontSize="13" fontWeight="bold">
              ÁNGULO BISAGRA: <tspan fill="#38bdf8">{Math.round(80 + normHinge * 65)}°</tspan>
            </text>
            <text x="30" y="60" fill="#71717a" fontSize="11" fontFamily="Space Mono">
              CADENA POSTERIOR ACTIVA
            </text>
          </svg>
        );
      }

      case 'deadlift': {
        const hipX = 140 - normHinge * 35;
        const hipY = 170 + normHinge * 10;
        const chestX = 175 - normHinge * 50;
        const chestY = 120 + normHinge * 45;
        const headX = chestX + 15;
        const headY = chestY - 26;
        const barX = 195;
        const barY = 170 + normHinge * 95;

        return (
          <svg viewBox="0 0 360 360" className="w-full h-full">
            <defs>
              <pattern id="grid-pattern-dl2" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="360" height="360" fill="url(#grid-pattern-dl2)" />
            <line x1="40" y1="320" x2="320" y2="320" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
            <line x1={barX} y1="130" x2={barX} y2="310" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

            <circle cx="180" cy="315" r="7" fill="#71717a" />
            <circle cx="170" cy="245" r="6" fill="#a1a1aa" />
            <line x1="180" y1="315" x2="170" y2="245" stroke="#a1a1aa" strokeWidth="5" strokeLinecap="round" />

            <line x1="170" y1="245" x2={hipX} y2={hipY} stroke="#f4f4f5" strokeWidth="6" strokeLinecap="round" />
            <circle cx={hipX} cy={hipY} r="8" fill="#ffffff" />

            <line x1={hipX} y1={hipY} x2={chestX} y2={chestY} stroke="#22c55e" strokeWidth="7" strokeLinecap="round" />
            <circle cx={headX} cy={headY} r="14" fill="#f4f4f5" />
            <line x1={chestX} y1={chestY} x2={barX} y2={barY} stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />

            <circle cx={barX} cy={barY} r="22" fill="#18181b" stroke="#ffffff" strokeWidth="3" />
            <line x1={barX - 25} y1={barY} x2={barX + 25} y2={barY} stroke="#ffffff" strokeWidth="4" />

            <text x="30" y="40" fill="#ffffff" fontSize="13" fontWeight="bold">
              ESTIRAMIENTO ISQUIOS: <tspan fill="#fbbf24">{Math.round(40 + normHinge * 55)}%</tspan>
            </text>
            <text x="30" y="60" fill="#71717a" fontSize="11" fontFamily="Space Mono">
              TEMPO EXCENTRICO: 3 SEGUNDOS
            </text>
          </svg>
        );
      }

      default: {
        // Squat / Overhead default
        const depth = normHinge * 55;
        const hipX = 150 - depth * 0.4;
        const hipY = 175 + depth * 0.9;
        const kneeX = 185 + depth * 0.2;
        const kneeY = 245 + depth * 0.3;
        const chestX = 160;
        const chestY = 125 + depth * 0.9;
        const headX = 160;
        const headY = 95 + depth * 0.9;
        const barY = chestY - 10;

        return (
          <svg viewBox="0 0 360 360" className="w-full h-full">
            <defs>
              <pattern id="grid-pattern-sq2" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="360" height="360" fill="url(#grid-pattern-sq2)" />
            <line x1="40" y1="320" x2="320" y2="320" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />

            <circle cx="170" cy="315" r="7" fill="#71717a" />
            <line x1="170" y1="315" x2={kneeX} y2={kneeY} stroke="#a1a1aa" strokeWidth="5" strokeLinecap="round" />
            <circle cx={kneeX} cy={kneeY} r="6" fill="#ffffff" />

            <line x1={kneeX} y1={kneeY} x2={hipX} y2={hipY} stroke="#f4f4f5" strokeWidth="6" strokeLinecap="round" />
            <circle cx={hipX} cy={hipY} r="8" fill="#ffffff" />

            <line x1={hipX} y1={hipY} x2={chestX} y2={chestY} stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" />
            <circle cx={headX} cy={headY} r="14" fill="#f4f4f5" />

            <circle cx={chestX} cy={barY} r="20" fill="#18181b" stroke="#ffffff" strokeWidth="3" />
            <line x1={chestX - 35} y1={barY} x2={chestX + 35} y2={barY} stroke="#ffffff" strokeWidth="4" />

            <text x="30" y="40" fill="#ffffff" fontSize="13" fontWeight="bold">
              PROFUNDIDAD: <tspan fill="#22c55e">{normHinge > 0.8 ? 'PARALELO ÓPTIMO' : 'EN TRAYECTO'}</tspan>
            </text>
            <text x="30" y="60" fill="#71717a" fontSize="11" fontFamily="Space Mono">
              RECLUTAMIENTO CUÁDRICEPS Y GLÚTEO
            </text>
          </svg>
        );
      }
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
      {/* Control Bar Header */}
      <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between flex-wrap gap-3 bg-zinc-950/60">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
            {exercise.category === 'fat_loss' ? 'Circuito Quema Grasa' : 'Sobrecarga Hipertrofia'}
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-400 font-mono">Dificultad: {exercise.difficulty}</span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg text-xs font-medium">
          <button
            onClick={() => setViewMode('loop')}
            className={`px-3 py-1 rounded-md transition-colors ${
              viewMode === 'loop' ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Animación de Movimiento
          </button>
          {exercise.image && (
            <button
              onClick={() => setViewMode('photo')}
              className={`px-3 py-1 rounded-md transition-colors ${
                viewMode === 'photo' ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Foto Técnica HD
            </button>
          )}
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-zinc-950 flex items-center justify-center overflow-hidden">
        {viewMode === 'loop' ? (
          <div className="w-full h-full relative flex items-center justify-center">
            {renderBiomechanicalVisualizer()}

            {/* Rep & Phase HUD Overlay */}
            <div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 px-4 py-2.5 rounded-xl flex items-center gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-400 block">Repetición</span>
                <span className="text-lg font-bold font-mono text-white tabular-nums">#{repCount}</span>
              </div>
              <div className="h-7 w-[1px] bg-zinc-800" />
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-400 block">Tensión Fibras</span>
                <span className="text-sm font-semibold font-mono text-emerald-400 tabular-nums">
                  {Math.round(muscleTension)}%
                </span>
              </div>
            </div>

            {/* Bottom Phase Indicator Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 px-4 py-2.5 rounded-xl flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-white" />
                <span className={`text-xs font-semibold ${phaseColor}`}>{currentPhase}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-zinc-400 font-mono">Tempo: {exercise.tempo}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative group">
            <img
              src={exercise.image}
              alt={exercise.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl">
              <p className="text-xs font-semibold text-white mb-1">Claves de Musculación y Fuerza por Héctor Montoya</p>
              <p className="text-xs text-zinc-300 leading-relaxed">{exercise.coachQuote}</p>
            </div>
          </div>
        )}
      </div>

      {/* Playback Controls & Progress Scrubber */}
      <div className="px-5 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pausar animación' : 'Reproducir animación'}
            className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>
          <button
            onClick={() => {
              setProgress(0);
              setRepCount(1);
            }}
            aria-label="Reiniciar ciclo"
            className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-zinc-800"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1 ml-2 text-xs text-zinc-400">
            <span className="font-mono">Vel:</span>
            {[0.5, 1, 1.5].map((spd) => (
              <button
                key={spd}
                onClick={() => setSpeed(spd)}
                className={`px-2 py-0.5 rounded-text-[11px] font-mono transition-colors ${
                  speed === spd ? 'bg-zinc-700 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>

        {/* Progress Timeline Bar */}
        <div className="flex-1 max-w-xs flex items-center gap-3">
          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 tabular-nums shrink-0">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Technical Breakdown & Form Keys */}
      <div className="p-6 bg-zinc-900/70 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-zinc-200">
              Claves de Ejecución Perfecta
            </h4>
          </div>
          <ul className="space-y-2 text-xs text-zinc-300 leading-relaxed">
            {exercise.biomechanicKeys.map((key, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">0{i + 1}.</span>
                <span>{key}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-zinc-200">
              Impacto & Activación Muscular
            </h4>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-[11px] text-zinc-400 block mb-1">Músculos reclutados en este ejercicio:</span>
              <div className="flex flex-wrap gap-1.5">
                {exercise.targetMuscles.map((muscle) => (
                  <span
                    key={muscle}
                    className="text-xs font-mono px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-zinc-200"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-zinc-950/60 border border-zinc-800 rounded-lg">
              <span className="text-[11px] uppercase font-mono text-zinc-400 block mb-1">Demanda Biológica</span>
              <span className="text-xs font-semibold text-white">{exercise.caloricBurnOrTension}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
