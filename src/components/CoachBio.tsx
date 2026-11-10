import React from 'react';
import { COACH_INFO } from '../data/coachingData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

interface CoachBioProps {
  onOpenBooking: () => void;
}

export const CoachBio: React.FC<CoachBioProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-zinc-900/40 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coach Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group">
              <img
                src={COACH_INFO.portraitImage}
                alt="Héctor Montoya - Entrenador Personal Online"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              {/* Bottom Card Identity */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-xl">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                  Fundador & Entrenador Principal
                </span>
                <h3 className="text-lg font-bold text-white font-display">Héctor Montoya</h3>
                <span className="text-xs text-zinc-400">11 años de experiencia clínica y deportiva</span>
              </div>
            </div>
          </div>

          {/* Coach Story and Credentials Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-white font-bold">SOBRE EL ENTRENADOR</span>
              <span aria-hidden="true">·</span>
              <span>RIGOR, EMPATÍA & CARISMA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display [text-wrap:balance]">
              "No vendo fórmulas mágicas de 30 días. Te enseño a dominar tu fisiología."
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              Durante más de una década he visto a personas extraordinarias frustrarse por seguir planes de entrenamiento genéricos que ignoran sus articulaciones, su trabajo y su vida familiar. Mi compromiso contigo es absoluto: no seré un espectador pasivo, sino tu estratega personal en cada entrenamiento y cada decisión nutricional.
            </p>

            {/* Academic Credentials */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Experiencia & Enfoque Deportivo</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {COACH_INFO.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Manifesto Quote */}
            <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-start gap-4">
              <HeartHandshake className="w-6 h-6 text-white shrink-0 mt-1" />
              <div className="text-xs text-zinc-300 leading-relaxed italic">
                "Mi satisfacción no es ver que bajes 5 kilos rápido para luego recuperarlos. Mi orgullo es cuando me escribes 1 año después y me dices que el gimnasio se convirtió en tu mejor terapia y que tu energía diaria está por las nubes."
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="py-3 px-6 bg-white hover:bg-zinc-200 text-zinc-950 font-bold rounded-xl text-xs transition-colors shadow-lg"
              >
                Conocer Más y Solicitar Entrevista Inicial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
