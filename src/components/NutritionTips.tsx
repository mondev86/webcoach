import React, { useState } from 'react';
import { NUTRITION_TIPS_DATA } from '../data/coachingData';
import { Apple, Dumbbell, Sparkles, Check, AlertCircle, ChevronDown, Flame, Droplets, Heart } from 'lucide-react';
import { NutritionTip } from '../types';

export const NutritionTips: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'combustible' | 'recuperacion' | 'habitos' | 'suplementos'>('all');
  const [expandedTipId, setExpandedTipId] = useState<string>(NUTRITION_TIPS_DATA[0].id);

  const filteredTips = NUTRITION_TIPS_DATA.filter(
    (tip) => selectedCategory === 'all' || tip.category === selectedCategory
  );

  return (
    <section id="nutricion-tips" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <span className="text-white font-bold">04</span>
            <span>/</span>
            <span>COMBUSTIBLE DE RENDIMIENTO</span>
            <span>/</span>
            <span>TIPS PRÁCTICOS DEL COACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Tips Nutricionales Para Exprimir tu Entrenamiento
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
            No soy nutriólogo ni te voy a poner a pesar cada grano de arroz. Lo mío es la musculación y el entrenamiento de fuerza. Pero para que tus series pesadas tengan sentido, necesitas combustible real. Aquí tienes mis reglas y consejos prácticos sin mitos ni dogmas.
          </p>
        </div>

        {/* Honest Positioning Banner */}
        <div className="mb-10 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-white">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                Zapatero a tus zapatos: Mi terreno es el gimnasio
              </span>
              <p className="text-xs text-zinc-400">
                Si requieres un tratamiento dietoterapéutico clínico o patológico, te derivaré a un profesional de la nutrición. Mi rol es darte los tips deportivos para que no te desmayes bajo la barra y recuperes tus músculos.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 border border-zinc-700/60 px-3 py-1.5 rounded-lg shrink-0">
            Enfoque Deportivo Real
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {[
            { id: 'all', label: 'Todos los Tips (6)' },
            { id: 'combustible', label: 'Energía Pre-Entreno & Hidratación' },
            { id: 'recuperacion', label: 'Proteína & Post-Entreno' },
            { id: 'habitos', label: 'Vida Social & Cenas' },
            { id: 'suplementos', label: 'Suplementos Que Sí Funcionan' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-zinc-950 shadow-md font-bold'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTips.map((tip) => {
            const isExpanded = expandedTipId === tip.id;
            return (
              <div
                key={tip.id}
                className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden ${
                  isExpanded
                    ? 'bg-zinc-900 border-zinc-700 shadow-xl ring-1 ring-white/10'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="p-6">
                  {/* Category Pill and Importance */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                      {tip.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      ✓ {tip.importance}
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-xl font-bold text-white font-display mb-1">{tip.title}</h3>
                  <p className="text-xs text-zinc-400 mb-4">{tip.subtitle}</p>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">{tip.summary}</p>

                  {/* Action Points */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
                      Pautas Prácticas Directas:
                    </span>
                    {tip.actionPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coach Quote Footer */}
                <div className="px-6 py-4 bg-zinc-950/70 border-t border-zinc-800 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-400 italic">
                    "{tip.coachQuote}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Summary Pill Strip */}
        <div className="mt-12 p-6 bg-zinc-900/30 border border-zinc-800/70 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-start gap-3">
            <Apple className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Sin Dietas de 1.200 kcal</span>
              <p className="text-[11px] text-zinc-400">
                El hambre extrema solo destruye tu masa muscular y ralentiza tu tiroides.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Droplets className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Agua y Sal Marina</span>
              <p className="text-[11px] text-zinc-400">
                La hidratación celular es el mejor suplemento de fuerza legal que existe.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Flexibilidad y Vida Real</span>
              <p className="text-[11px] text-zinc-400">
                El plan debe caber en tu vida con familia y amigos, no al revés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
