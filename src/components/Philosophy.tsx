import React from 'react';
import { Shield, Flame, Activity, Brain, CheckCircle2 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <span className="text-white font-bold">01</span>
            <span>/</span>
            <span>METODOLOGÍA CIENTÍFICA</span>
            <span>/</span>
            <span>EL ENFOQUE MONTOYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Por Qué el 95% de los Planes Fracasa y Cómo Marcamos la Diferencia
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Internet está saturado de tablas de ejercicios copiadas y dietas de pollo con arroz hervido que nadie puede sostener más de dos meses. El Método Montoya se sostiene sobre cuatro pilares inquebrantables.
          </p>
        </div>

        {/* Asymmetric Bento Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Pillar 1: Large Span (col-span-7) */}
          <div className="md:col-span-7 p-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white font-bold">01. MUSCULACIÓN Y FUERZA REAL</span>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                No adaptas tu cuerpo al ejercicio; adaptamos el ejercicio a tus palancas anatómicas.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Si tienes fémures largos, una sentadilla tradicional te destrozará las rodillas o la espalda baja. Analizamos los ángulos de tus articulaciones mediante vídeo para seleccionar los ejercicios con mayor estímulo por unidad de fatiga articular. Cero dolor de espalda, máximo reclutamiento de fibras musculares.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Técnica al Milímetro</span>
                <span className="text-xs text-white font-medium">Revisión constante de tus vídeos</span>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Eficiencia de Tiempo</span>
                <span className="text-xs text-white font-medium">45-55 min por sesión es todo lo que necesitas</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Regular Span (col-span-5) */}
          <div className="md:col-span-5 p-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white font-bold">02. TIPS NUTRICIONALES DEPORTIVOS</span>
                <Flame className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                No soy nutriólogo; lo mío es el entrenamiento y darte energía para rendir.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                En lugar de menús clínicos cerrados, te enseño tips prácticos: cómo asegurar tu proteína, qué comer antes de entrenar para no desfallecer y cómo disfrutar de cenas con amigos sin sabotear tus semanas de gimnasio.
              </p>
            </div>

            <div className="p-3.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-zinc-400">
              <span className="text-white font-semibold block mb-0.5">La regla de oro:</span>
              La comida es el combustible de tu fuerza, no un castigo mental.
            </div>
          </div>

          {/* Pillar 3: Regular Span (col-span-5) */}
          <div className="md:col-span-5 p-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white font-bold">03. MONITORIZACIÓN & AJUSTES</span>
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Si no se mide, no se puede optimizar. Cada domingo analizamos tu caso.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                Tu metabolismo no es una máquina fija; se adapta. Por eso cada semana ajustamos calorías, volumen de series y descansos según tu fatiga, pasos y biofeedback real.
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Vídeo personalizado de 10-15 min con tus ajustes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Control de fatiga del sistema nervioso y sueño</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Large Span (col-span-7) */}
          <div className="md:col-span-7 p-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white font-bold">04. MENTALIDAD & SOSTENIBILIDAD</span>
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                No creamos dependencias; te educamos para que seas dueño de tu físico para siempre.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                El valor de un verdadero entrenador de élite no es darte una hoja con ejercicios, sino enseñarte a gestionar tus días de estrés, prevenir el sabotaje emocional y construir la disciplina de un atleta aplicable a tu carrera y tu vida.
              </p>
            </div>

            <div className="p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl flex items-center justify-between">
              <span className="text-xs font-semibold text-white">Objetivo final:</span>
              <span className="text-xs text-zinc-400 font-mono">Autonomía total + Físico inquebrantable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
