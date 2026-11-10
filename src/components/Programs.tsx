import React from 'react';
import { PROGRAMS_DATA } from '../data/coachingData';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { CoachingProgram } from '../types';

interface ProgramsProps {
  onSelectProgram: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programas" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <span className="text-white font-bold">04</span>
            <span>/</span>
            <span>PROGRAMAS DE ASESORÍA</span>
            <span>/</span>
            <span>CUPO ESTRICTAMENTE LIMITADO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Programas Diseñados Para tu Biología Específica
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Para garantizar la más alta calidad y un contacto diario y cercano, solo acepto un número máximo de 15 alumnos activos en simultáneo. Selecciona el programa que mejor describe tu meta actual:
          </p>
        </div>

        {/* 3 Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROGRAMS_DATA.map((program) => {
            return (
              <div
                key={program.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                  program.popular
                    ? 'bg-zinc-900 border-2 border-white shadow-2xl shadow-white/5'
                    : 'bg-zinc-900/60 border border-zinc-800'
                }`}
              >
                {/* Popular Indicator */}
                {program.badge && (
                  <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-3">
                    {program.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white font-display mb-2">{program.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">{program.tagline}</p>

                  <div className="p-3 bg-zinc-950/80 border border-zinc-800/80 rounded-xl mb-6">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
                      Ideal si tu situación es:
                    </span>
                    <p className="text-xs text-zinc-300">{program.idealFor}</p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                      Qué incluye tu membresía:
                    </span>
                    <ul className="space-y-2.5">
                      {program.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                          <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA block */}
                <div className="pt-6 border-t border-zinc-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">Disponibilidad actual:</span>
                    <span className="text-emerald-400 font-bold">{program.spotsRemaining} plazas libres</span>
                  </div>

                  <button
                    onClick={() => onSelectProgram(program.title)}
                    className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      program.popular
                        ? 'bg-white hover:bg-zinc-200 text-zinc-950 shadow-lg'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                    }`}
                  >
                    <span>Aplicar a {program.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 font-mono text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Sin permanencia obligatoria · Cancelación libre</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
