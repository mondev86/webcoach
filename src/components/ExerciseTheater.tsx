import React, { useState } from 'react';
import { EXERCISES_DATA } from '../data/coachingData';
import { ExerciseMotionPlayer } from './ExerciseMotionPlayer';
import { Flame, Dumbbell, Sparkles, ChevronRight, Search, Filter, Layers } from 'lucide-react';
import { ExerciseItem } from '../types';

export const ExerciseTheater: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fat_loss' | 'hypertrophy'>('all');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<'all' | 'upper' | 'lower' | 'posterior' | 'core_cardio'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeExercise, setActiveExercise] = useState<ExerciseItem>(EXERCISES_DATA[0]);

  // Filtering logic
  const filteredExercises = EXERCISES_DATA.filter((ex) => {
    const matchesCategory = selectedCategory === 'all' || ex.category === selectedCategory;
    const matchesMuscle = selectedMuscleGroup === 'all' || ex.muscleGroup === selectedMuscleGroup;
    const matchesSearch =
      searchQuery.trim() === '' ||
      ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.targetMuscles.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ex.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesMuscle && matchesSearch;
  });

  const handleSelectExercise = (exercise: ExerciseItem) => {
    setActiveExercise(exercise);
    // Smooth scroll to the player on mobile
    const playerEl = document.getElementById('motion-player-container');
    if (playerEl && window.innerWidth < 1024) {
      playerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ejercicios" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
              <span className="text-white font-bold">02</span>
              <span>/</span>
              <span>GALERÍA DE TÉCNICA, MUSCULACIÓN Y FUERZA</span>
              <span>/</span>
              <span>12 MOVIMIENTOS CLAVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
              Galería de Ejercicios en Movimiento
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Explora nuestra biblioteca de ejercicios de musculación y fuerza. Movimientos de alta transferencia cinética tanto para la quema de grasa y aceleración metabólica como para el aumento estricto de masa muscular e hipertrofia.
            </p>
          </div>

          {/* Objective Switcher Tabs */}
          <div className="flex items-center p-1.5 bg-zinc-900 border border-zinc-800 rounded-xl self-start md:self-auto shrink-0 flex-wrap gap-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Todos ({EXERCISES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('fat_loss')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'fat_loss'
                  ? 'bg-white text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${selectedCategory === 'fat_loss' ? 'text-amber-600' : 'text-zinc-400'}`} />
              Pérdida de Grasa (6)
            </button>
            <button
              onClick={() => setSelectedCategory('hypertrophy')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'hypertrophy'
                  ? 'bg-white text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Dumbbell className={`w-3.5 h-3.5 ${selectedCategory === 'hypertrophy' ? 'text-zinc-900' : 'text-zinc-400'}`} />
              Hipertrofia & Masa (6)
            </button>
          </div>
        </div>

        {/* Filter Bar: Muscle Groups & Search */}
        <div className="mb-8 p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Sub-Filters by Muscle Group */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs font-mono text-zinc-500 uppercase mr-1 shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Enfoque:
            </span>
            {[
              { id: 'all', label: 'Todos' },
              { id: 'upper', label: 'Tren Superior' },
              { id: 'lower', label: 'Tren Inferior' },
              { id: 'posterior', label: 'Cadena Posterior' },
              { id: 'core_cardio', label: 'Core / Metabólico' }
            ].map((grp) => (
              <button
                key={grp.id}
                onClick={() => setSelectedMuscleGroup(grp.id as any)}
                className={`px-2.5 py-1 rounded-md text-xs whitespace-nowrap transition-colors ${
                  selectedMuscleGroup === grp.id
                    ? 'bg-zinc-800 text-white font-semibold border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar ejercicio o músculo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>

        {/* Dynamic Interactive Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Exercise List */}
          <div className="lg:col-span-5 space-y-3 max-h-[780px] overflow-y-auto pr-1">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 px-1 mb-2 flex items-center justify-between">
              <span>Ejercicios Filtrados ({filteredExercises.length}):</span>
              <span className="text-[11px] text-zinc-500">Toca para inspeccionar técnica</span>
            </div>

            {filteredExercises.length === 0 ? (
              <div className="p-8 text-center bg-zinc-900/40 border border-zinc-800 rounded-xl text-zinc-500 text-xs">
                No encontramos ejercicios con ese término de búsqueda. Prueba con otro filtro.
              </div>
            ) : (
              filteredExercises.map((exercise) => {
                const isSelected = activeExercise.id === exercise.id;
                return (
                  <button
                    key={exercise.id}
                    onClick={() => handleSelectExercise(exercise)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-2 ${
                      isSelected
                        ? 'bg-zinc-900 border-white text-white shadow-lg ring-1 ring-white/10'
                        : 'bg-zinc-950/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {exercise.image ? (
                          <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                            <img
                              src={exercise.image}
                              alt={exercise.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                            {exercise.category === 'fat_loss' ? (
                              <Flame className="w-4 h-4 text-amber-500" />
                            ) : (
                              <Dumbbell className="w-4 h-4 text-white" />
                            )}
                          </div>
                        )}
                        <div>
                          <span className="text-sm font-bold font-display text-white block">
                            {exercise.name}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {exercise.category === 'fat_loss' ? 'Quema Grasa' : 'Hipertrofia'} · {exercise.difficulty}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 shrink-0">
                        {exercise.tempo}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{exercise.subtitle}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
                      <div className="flex flex-wrap gap-1">
                        {exercise.targetMuscles.slice(0, 2).map((m) => (
                          <span key={m} className="text-[10px] font-mono text-zinc-500">
                            #{m}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-xs text-white gap-1 font-medium">
                        <span>Ver técnica</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                );
              })
            )}

            {/* Coach Insight Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 mt-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>DIRECTIVA TÉCNICA · HÉCTOR MONTOYA</span>
              </div>
              <p className="text-xs text-zinc-300 italic leading-relaxed">
                "{activeExercise.coachQuote}"
              </p>
            </div>
          </div>

          {/* Right Column: High Quality Motion Player & Anatomical HUD */}
          <div id="motion-player-container" className="lg:col-span-7">
            <ExerciseMotionPlayer exercise={activeExercise} />
          </div>
        </div>
      </div>
    </section>
  );
};
