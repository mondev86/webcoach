import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="text-xl font-black tracking-tight text-white font-display block">
              HÉCTOR MONTOYA
            </a>
            <p className="text-zinc-400 max-w-sm leading-relaxed text-xs">
              Asesoría de musculación, fuerza y alto rendimiento físico. Transformamos tu composición corporal con técnica sólida, seguimiento semanal implacable y cercanía humana.
            </p>
            <div className="pt-2 text-zinc-500 font-mono text-[11px]">
              Madrid · Barcelona · Asesoría Internacional Online
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-white font-semibold font-display uppercase tracking-wider block mb-2 text-xs">
              Navegación
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#filosofia" className="hover:text-white transition-colors">Filosofía</a>
              <a href="#ejercicios" className="hover:text-white transition-colors">Ejercicios GIF</a>
              <a href="#nutricion-tips" className="hover:text-white transition-colors">Tips Nutrición</a>
              <a href="#seguimiento" className="hover:text-white transition-colors">Progress Hub</a>
              <a href="#programas" className="hover:text-white transition-colors">Programas</a>
              <a href="#testimonios" className="hover:text-white transition-colors">Casos Reales</a>
              <button onClick={onOpenBooking} className="text-left text-white hover:underline">
                Aplicar Ahora
              </button>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-white font-semibold font-display uppercase tracking-wider block mb-2 text-xs">
              Contacto Directo
            </span>
            <p className="text-zinc-400 text-xs">
              Email: <span className="text-zinc-200">coaching@hectormontoya.com</span>
            </p>
            <p className="text-zinc-400 text-xs">
              WhatsApp: <span className="text-zinc-200">+34 600 000 000</span>
            </p>
            <p className="text-zinc-500 text-[11px] pt-1">
              Atención personalizada de lunes a sábado.
            </p>
          </div>
        </div>

        {/* Medical disclaimer & bottom copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p className="max-w-2xl leading-relaxed">
            Aviso de Responsabilidad: El contenido y las pautas de este sitio tienen fines de acondicionamiento físico general y mejora de hábitos saludables. Siempre es recomendable consultar con un médico antes de comenzar cualquier programa de ejercicio de alta intensidad.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <span>© {new Date().getFullYear()} Héctor Montoya Coaching. Todos los derechos reservados.</span>
            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
