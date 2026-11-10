import React from 'react';
import { ArrowRight, Shield, Award, Sparkles, Check } from 'lucide-react';
import { COACH_INFO } from '../data/coachingData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreSystem: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreSystem }) => {
  return (
    <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden bg-zinc-950">
      {/* Background subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-zinc-800/20 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Charismatic Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-white font-bold tracking-wider">MÉTODO MONTOYA</span>
              <span aria-hidden="true">·</span>
              <span>MUSCULACIÓN & FUERZA</span>
              <span aria-hidden="true">·</span>
              <span>100% ONLINE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.08] [text-wrap:balance]">
              Transformación física real. Sin dogmas, sin dietas extremas y sin perder el tiempo.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Soy Héctor Montoya. Enseño a profesionales y personas exigentes a reprogramar su metabolismo, construir músculo denso y erradicar grasa rebelde mediante entrenamiento de musculación y fuerza con un sistema de seguimiento semanal que garantiza resultados.
            </p>

            {/* Charismatic Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Entrenamientos de 45-55 min adaptados a tu vida</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Nutrición flexible: comes fuera sin culpas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Revisión técnica en vídeo de tus levantamientos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Contacto directo de lunes a sábado por WhatsApp</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="py-3.5 px-7 bg-white hover:bg-zinc-200 text-zinc-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-white/10"
              >
                <span>Solicitar Asesoría Personalizada</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSystem}
                className="py-3.5 px-6 bg-zinc-900/90 hover:bg-zinc-800 text-white font-medium rounded-xl text-sm transition-all border border-zinc-800 flex items-center justify-center gap-2"
              >
                <span>Ver Metodología & Casos</span>
              </button>
            </div>

            {/* Social Trust Markers */}
            <div className="pt-2 text-xs text-zinc-500 font-mono flex items-center gap-2 flex-wrap">
              <span>Cupo limitado por mes</span>
              <span aria-hidden="true">·</span>
              <span>Atención 1-a-1 sin intermediarios</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-400">Garantía de progreso mutuo</span>
            </div>
          </div>

          {/* Column 2: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <img
                src={COACH_INFO.heroImage}
                alt="Héctor Montoya entrenando a una cliente en musculación y fuerza"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] sm:aspect-[16/11] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              {/* Floating Live Metric Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800/80 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    Caso Activo de la Semana
                  </span>
                  <p className="text-xs font-bold text-white">Recomposición: -8.4 kg grasa / +3.2 kg masa</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-400">98.4% éxito</span>
                  <span className="text-[10px] font-mono text-zinc-500 block">verificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI Trust Strip below hero split */}
        <div className="mt-16 pt-10 border-t border-zinc-800/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="p-4 bg-zinc-900/30 border border-zinc-800/60 rounded-xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
              +450
            </div>
            <div className="text-xs text-zinc-400 mt-1">Físicos transformados con analíticas médicas y fotos</div>
          </div>

          <div className="p-4 bg-zinc-900/30 border border-zinc-800/60 rounded-xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
              11 Años
            </div>
            <div className="text-xs text-zinc-400 mt-1">De experiencia en musculación, fuerza y rendimiento físico</div>
          </div>

          <div className="p-4 bg-zinc-900/30 border border-zinc-800/60 rounded-xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
              0 Lesiones
            </div>
            <div className="text-xs text-zinc-400 mt-1">Gracias a la individualización estricta de cada ejercicio</div>
          </div>

          <div className="p-4 bg-zinc-900/30 border border-zinc-800/60 rounded-xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
              100%
            </div>
            <div className="text-xs text-zinc-400 mt-1">Personalizado: sin plantillas de Word ni bots genéricos</div>
          </div>
        </div>
      </div>
    </section>
  );
};
