import React, { useState } from 'react';
import { CLIENT_CASES } from '../data/coachingData';
import { Quote, ArrowRight, TrendingUp, CheckCircle, Award } from 'lucide-react';
import { ClientCase } from '../types';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const [selectedCase, setSelectedCase] = useState<ClientCase>(CLIENT_CASES[0]);

  return (
    <section id="testimonios" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <span className="text-white font-bold">05</span>
            <span>/</span>
            <span>EVIDENCIA Y RESULTADOS REALES</span>
            <span>/</span>
            <span>SIN TRUCOS DE ILUMINACIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Casos de Éxito: Físicos Reales, Vidas Transformadas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
            No mostramos fotos engañosas sacadas con deshidratación. Nuestros alumnos son médicos, empresarios, ingenieros y padres de familia que consiguieron una transformación corporal definitiva manteniendo sus vidas personales.
          </p>
        </div>

        {/* Testimonials Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of Client Selectors */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase text-zinc-400 block px-1">
              Selecciona un caso clínico y deportivo:
            </span>
            {CLIENT_CASES.map((c) => {
              const isSelected = selectedCase.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCase(c)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-zinc-900 border-white text-white shadow-xl ring-1 ring-white/10'
                      : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base font-bold font-display text-white">{c.name}</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">{c.weightChange}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mb-2">{c.profession} · {c.age} años</div>
                  <div className="text-xs text-zinc-300 font-mono flex items-center gap-3">
                    <span>Grasa: {c.bodyFatChange}</span>
                    <span>·</span>
                    <span>{c.durationWeeks} semanas</span>
                  </div>
                </button>
              );
            })}

            {/* Credibility Stamp */}
            <div className="p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl flex items-center gap-4 mt-6">
              <Award className="w-8 h-8 text-white shrink-0" />
              <div className="text-xs text-zinc-400 leading-relaxed">
                Todas las métricas están certificadas mediante bioimpedancia médica y mediciones antropométricas semanales.
              </div>
            </div>
          </div>

          {/* Deep-Dive Case Study Spotlight Card */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between flex-wrap gap-4 pb-6 border-b border-zinc-800">
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                  Transformación en {selectedCase.durationWeeks} Semanas
                </span>
                <h3 className="text-2xl font-bold text-white font-display">{selectedCase.name}</h3>
                <span className="text-xs text-zinc-400">{selectedCase.profession}</span>
              </div>
              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-right">
                <span className="text-[10px] uppercase font-mono text-zinc-400 block">Objetivo Cumplido</span>
                <span className="text-xs font-bold text-emerald-400">{selectedCase.goal}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative">
              <Quote className="w-8 h-8 text-zinc-700 mb-2 opacity-50" />
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                "{selectedCase.testimonial}"
              </p>
            </div>

            {/* Before vs After Biometric Metrics Table */}
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Comparativa de Datos Biométricos Iniciales vs Finales:
              </span>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-zinc-900/70 rounded-lg">
                  <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">Peso Total</span>
                  <div className="text-xs text-zinc-500 line-through">{selectedCase.initialStats.weight}</div>
                  <div className="text-sm font-bold font-mono text-white mt-0.5">{selectedCase.finalStats.weight}</div>
                </div>

                <div className="p-3 bg-zinc-900/70 rounded-lg">
                  <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">% Grasa Corporal</span>
                  <div className="text-xs text-zinc-500 line-through">{selectedCase.initialStats.bodyFat}</div>
                  <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">{selectedCase.finalStats.bodyFat}</div>
                </div>

                <div className="p-3 bg-zinc-900/70 rounded-lg">
                  <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">Marca de Fuerza</span>
                  <div className="text-xs text-zinc-500">{selectedCase.initialStats.benchOrDeadlift}</div>
                  <div className="text-sm font-bold font-mono text-white mt-0.5">{selectedCase.finalStats.benchOrDeadlift}</div>
                </div>
              </div>
            </div>

            {/* Tactical Strategy Implemented */}
            <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl">
              <span className="text-xs font-mono text-white font-bold block mb-1">
                Estrategia Táctica Aplicada por Héctor Montoya:
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">{selectedCase.keyStrategy}</p>
            </div>

            {/* Action */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-zinc-400">¿Quieres resultados similares adaptados a tu vida?</span>
              <button
                onClick={onOpenBooking}
                className="py-2.5 px-5 bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Postular a Asesoría</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
