import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Necesito estar apuntado a un gimnasio o puedo entrenar en mi casa?',
      a: 'El programa se adapta 100% a tus recursos. Tenemos clientes que entrenan en gimnasios comerciales con toda la maquinaria, y otros que por falta de tiempo disponen de mancuernas ajustables, banco y bandas elásticas en su casa. La clave de la hipertrofia o la quema de grasa es la tensión mecánica efectiva y la sobrecarga progresiva, no la marca de las máquinas.'
    },
    {
      q: '¿Cómo revisas mi técnica de levantamiento si estamos a distancia?',
      a: 'A través de nuestro canal directo de WhatsApp. Te enseño en qué ángulo colocar el móvil para grabarte en 2 o 3 series principales de tus ejercicios clave. Recibes un vídeo o nota de voz con anotaciones visuales sobre tus rodillas, cadera, tempo y posición de columna en menos de 24 horas.'
    },
    {
      q: '¿Eres nutriólogo o me vas a poner una dieta médica cerrada?',
      a: 'No, no soy nutriólogo; mi especialidad y pasión absoluta es la musculación y el entrenamiento de fuerza. Desconfía de entrenadores que te prescriban dietas clínicas sin ser nutricionistas colegiados. Lo que te aporto son tips y principios de nutrición deportiva: qué comer antes y después de entrenar, cómo asegurar tu proteína para reparar músculo y cómo disfrutar de cenas fuera sin sabotear tus semanas de gimnasio.'
    },
    {
      q: '¿Cuánto tiempo por sesión necesito dedicarle a la semana?',
      a: 'Entre 3 y 4 sesiones semanales de 45 a 55 minutos es el punto óptimo para el 90% de las transformaciones que ves en la web. Entrenar 2 horas diarias solo genera fatiga sistémica acumulada y abandono.'
    },
    {
      q: '¿Qué garantía tengo de que el método funcionará para mí?',
      a: 'Ofrecemos una Garantía de Compromiso Mutuo: Si sigues al 90% las pautas acordadas, completas tus check-ins de los domingos y al cabo de 30 días no ves una mejora medible en tu composición corporal o marcas de fuerza, te reintegro el 100% de tu dinero sin preguntas.'
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <span className="text-white font-bold">06</span>
            <span>/</span>
            <span>TRANSPARENCIA TOTAL</span>
            <span>/</span>
            <span>PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Respuestas Claras a tus Dudas Antes de Empezar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Todo lo que necesitas saber sobre el funcionamiento del servicio y nuestra forma de trabajar juntos.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-semibold text-white font-display">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
