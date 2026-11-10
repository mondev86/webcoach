import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { ExerciseTheater } from './components/ExerciseTheater';
import { NutritionTips } from './components/NutritionTips';
import { ProgressHub } from './components/ProgressHub';
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { CoachBio } from './components/CoachBio';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledGoal, setPrefilledGoal] = useState<string | undefined>(undefined);

  const handleOpenBooking = (goal?: string) => {
    setPrefilledGoal(goal);
    setIsBookingOpen(true);
  };

  const handleScrollToPhilosophy = () => {
    const el = document.getElementById('filosofia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-zinc-950">
      {/* Top Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreSystem={handleScrollToPhilosophy}
        />

        {/* Philosophy & Methodology */}
        <Philosophy />

        {/* High Quality GIF-style Motion, Musculación & Fuerza Theater */}
        <ExerciseTheater />

        {/* Athletic Nutrition Tips & Fueling Principles */}
        <NutritionTips />

        {/* Personalized Progress Tracking Hub & Energy Estimator */}
        <ProgressHub onOpenBooking={handleOpenBooking} />

        {/* Coaching Programs */}
        <Programs onSelectProgram={(programTitle) => handleOpenBooking(`Programa: ${programTitle}`)} />

        {/* Testimonials & Verified Client Proof */}
        <Testimonials onOpenBooking={() => handleOpenBooking()} />

        {/* About Coach Héctor Montoya */}
        <CoachBio onOpenBooking={() => handleOpenBooking()} />

        {/* Final Persuasive Call To Action Strip */}
        <section className="py-20 bg-zinc-900 border-t border-b border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-900 to-zinc-950 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Sparkles className="w-4 h-4 text-white" />
              <span>EL MOMENTO DE ACTUAR ES HOY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display [text-wrap:balance]">
              ¿Dónde estará tu condición física dentro de 90 días si no tomas una decisión diferente hoy?
            </h2>

            <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              No necesitas más motivación efímera; necesitas un sistema riguroso que no te permita fallar y un entrenador que vele por tu progreso cada semana.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenBooking()}
                className="py-4 px-8 bg-white hover:bg-zinc-200 text-zinc-950 font-extrabold rounded-xl text-sm transition-all shadow-2xl hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Agendar Mi Llamada de Diagnóstico Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantía de reembolso de 30 días · Sin compromiso de permanencia</span>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking and Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefillGoal={prefilledGoal}
      />
    </div>
  );
}
