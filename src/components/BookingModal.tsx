import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Clock, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillGoal?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, prefillGoal }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    goal: prefillGoal || 'Recomposición Corporal (Perder grasa y definir)',
    experience: 'Llevo tiempo intentándolo pero me siento estancado/a',
    daysPerWeek: '3 a 4 días',
    biggestFrustration: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validateStep = (currentStep: number) => {
    const errs: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.goal) errs.goal = 'Selecciona tu objetivo principal';
      if (!formData.daysPerWeek) errs.daysPerWeek = 'Selecciona tu disponibilidad';
    } else if (currentStep === 2) {
      if (!formData.name.trim()) errs.name = 'Por favor escribe tu nombre completo';
      if (!formData.email.trim() || !formData.email.includes('@')) {
        errs.email = 'Introduce un email válido';
      }
      if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
        errs.whatsapp = 'Introduce tu número de WhatsApp con código de país';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
              Proceso de Admisión 1-a-1
            </span>
            <h3 className="text-lg font-bold text-white font-display">
              Solicitud de Consulta con Héctor Montoya
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                ¡Solicitud Recibida Correctamente, {formData.name.split(' ')[0]}!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
                Héctor Montoya revisará personalmente tus respuestas. Te contactará vía WhatsApp en un plazo máximo de 12 horas para coordinar tu llamada de diagnóstico gratuita de 15 minutos.
              </p>

              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-left space-y-2 mt-4">
                <div className="text-xs font-mono uppercase text-zinc-400">Resumen de tu postulación:</div>
                <div className="text-xs text-white"><strong>Objetivo:</strong> {formData.goal}</div>
                <div className="text-xs text-white"><strong>Disponibilidad:</strong> {formData.daysPerWeek}</div>
                <div className="text-xs text-zinc-400"><strong>Contacto:</strong> {formData.whatsapp} · {formData.email}</div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-white hover:bg-zinc-200 text-zinc-950 font-bold rounded-xl text-xs transition-colors mt-4"
              >
                Volver a la Web
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Progress Indicator */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-white' : 'bg-zinc-800'}`} />
                <span className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-white' : 'bg-zinc-800'}`} />
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-200 block mb-2">
                      ¿Cuál es tu principal objetivo para los próximos 90 días?
                    </label>
                    <div className="space-y-2">
                      {[
                        'Recomposición Corporal (Perder grasa y definir masa magra)',
                        'Hipertrofia Muscular Pura & Ganancia de Fuerza',
                        'Pérdida de Peso Acelerada (>8 kg) y Salud Metabólica',
                        'Rendimiento Ejecutivo & Erradicación de Dolores de Espalda'
                      ].map((g) => (
                        <label
                          key={g}
                          onClick={() => setFormData({ ...formData, goal: g })}
                          className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer text-xs transition-all ${
                            formData.goal === g
                              ? 'bg-zinc-900 border-white text-white font-medium'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                        >
                          <span>{g}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              formData.goal === g ? 'border-white bg-white' : 'border-zinc-700'
                            }`}
                          >
                            {formData.goal === g && <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full" />}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-200 block mb-2">
                      ¿Cuántos días por semana puedes dedicar 45-50 min a entrenar?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['2 a 3 días', '3 a 4 días', '5 días'].map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setFormData({ ...formData, daysPerWeek: d })}
                          className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                            formData.daysPerWeek === d
                              ? 'bg-white text-zinc-950 border-white'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-200 block mb-1">
                      ¿Cuál ha sido tu mayor obstáculo hasta ahora? (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Falta de constancia, dolor en lumbares, dieta restrictiva..."
                      value={formData.biggestFrustration}
                      onChange={(e) => setFormData({ ...formData, biggestFrustration: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full py-3 bg-white hover:bg-zinc-200 text-zinc-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg"
                  >
                    <span>Continuar a Datos de Contacto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-200 block mb-1">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Roberto Sánchez"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white"
                    />
                    {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-200 block mb-1">
                      Email Profesional *
                    </label>
                    <input
                      type="email"
                      placeholder="roberto@empresa.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white"
                    />
                    {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-200 block mb-1">
                      WhatsApp (con código de país) *
                    </label>
                    <input
                      type="tel"
                      placeholder="+34 612 345 678"
                      value={formData.whatsapp}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsapp: e.target.value });
                        if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                      }}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white"
                    />
                    {errors.whatsapp && (
                      <span className="text-[11px] text-red-400 mt-1 block">{errors.whatsapp}</span>
                    )}
                    <span className="text-[10px] text-zinc-500 mt-1 block">
                      Héctor te escribirá primero por aquí para confirmar horario de llamada.
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-4 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl text-xs"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-white hover:bg-zinc-200 disabled:opacity-50 text-zinc-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>{isSubmitting ? 'Enviando solicitud...' : 'Confirmar y Solicitar Diagnóstico'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 font-mono text-center pt-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Tus datos se tratan con estricta confidencialidad médica y profesional</span>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
