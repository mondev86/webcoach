import React, { useState } from 'react';
import { SIMULATED_WEEKLY_CHECKINS } from '../data/coachingData';
import {
  TrendingDown,
  Scale,
  Percent,
  Footprints,
  Moon,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Target
} from 'lucide-react';

import { VoiceMemoPlayer } from './VoiceMemoPlayer';

interface ProgressHubProps {
  onOpenBooking: (prefillGoal?: string) => void;
}

export const ProgressHub: React.FC<ProgressHubProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'calculator'>('simulator');
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(3); // Week 12 by default

  // Calculator state
  const [calcGoal, setCalcGoal] = useState<'fat_loss' | 'recomp' | 'hypertrophy'>('fat_loss');
  const [calcWeight, setCalcWeight] = useState(82);
  const [calcHeight, setCalcHeight] = useState(178);
  const [calcAge, setCalcAge] = useState(32);
  const [calcGender, setCalcGender] = useState<'male' | 'female'>('male');
  const [calcActivity, setCalcActivity] = useState<number>(1.4); // sedentary=1.2, moderate=1.4, intense=1.6

  const activeCheckIn = SIMULATED_WEEKLY_CHECKINS[selectedWeekIndex];

  // Real formula: Mifflin-St Jeor equation for basal metabolic rate
  const bmr =
    calcGender === 'male'
      ? 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge + 5
      : 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge - 161;

  const tdee = Math.round(bmr * calcActivity);

  let targetCalories = tdee;
  let proteinGrams = Math.round(calcWeight * 2.2); // 2.2g/kg
  let projectedLossOrGain = '';

  if (calcGoal === 'fat_loss') {
    targetCalories = Math.round(tdee - 500); // 500 kcal deficit
    projectedLossOrGain = '-6.0 a -8.5 kg de grasa pura en 12 semanas';
  } else if (calcGoal === 'recomp') {
    targetCalories = Math.round(tdee - 200); // slight recomp deficit
    projectedLossOrGain = '-4.0 kg grasa + 2.5 kg masa magra';
  } else {
    targetCalories = Math.round(tdee + 300); // lean surplus
    projectedLossOrGain = '+3.5 a +5.0 kg de músculo denso';
  }

  const fatGrams = Math.round((targetCalories * 0.25) / 9);
  const carbGrams = Math.max(50, Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4));

  return (
    <section id="seguimiento" className="py-24 bg-zinc-900/50 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <span className="text-white font-bold">03</span>
            <span>/</span>
            <span>SISTEMA DE SEGUIMIENTO CIENTÍFICO</span>
            <span>/</span>
            <span>MÉTRICAS REALES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Montoya Progress Hub: Sin Espacio al Azar
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
            La mayoría fracasa porque nadie mide sus variables con rigor. Nuestro portal exclusivo monitoriza tu peso, grasa visceral, marcas de fuerza y biofeedback cada semana, con retroalimentación personalizada de Héctor.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-zinc-950 border border-zinc-800 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'simulator'
                ? 'bg-white text-zinc-950 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Portal de Check-In del Cliente (Demo)
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'calculator'
                ? 'bg-white text-zinc-950 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Estimador de Energía de Entrenamiento
          </button>
        </div>

        {/* TAB 1: SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Top Bar of the Dashboard Demo */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                  Expediente de Alumno Activo · ID #VC-4091
                </span>
                <h3 className="text-xl font-bold text-white font-display">Carlos Méndez (36 años)</h3>
                <span className="text-xs text-zinc-400">Objetivo: Recomposición Corporal Avanzada & Reducción Grasa</span>
              </div>

              {/* Week Selector Chips */}
              <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
                {SIMULATED_WEEKLY_CHECKINS.map((chk, idx) => (
                  <button
                    key={chk.week}
                    onClick={() => {
                      setSelectedWeekIndex(idx);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedWeekIndex === idx
                        ? 'bg-white text-zinc-950 shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Semana {chk.week}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-mono uppercase">Peso Báscula</span>
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {activeCheckIn.weight} <span className="text-xs text-zinc-400 font-sans">kg</span>
                </div>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                  <TrendingDown className="w-3.5 h-3.5" /> -{(88.5 - activeCheckIn.weight).toFixed(1)} kg totales
                </span>
              </div>

              <div className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-mono uppercase">% Grasa Estimado</span>
                  <Percent className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {activeCheckIn.bodyFat}%
                </div>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                  -{(24.5 - activeCheckIn.bodyFat).toFixed(1)}% vs inicio
                </span>
              </div>

              <div className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-mono uppercase">Pasos Diarios Prom.</span>
                  <Footprints className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {activeCheckIn.stepsAvg.toLocaleString()}
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">
                  Adherencia: {activeCheckIn.trainingAdherence}%
                </span>
              </div>

              <div className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-mono uppercase">Calidad de Sueño</span>
                  <Moon className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {activeCheckIn.sleepScore} <span className="text-xs text-zinc-400 font-sans">/ 10</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">Recuperación SNC óptima</span>
              </div>
            </div>

            {/* Interactive Weight & Bodyfat Trend Chart */}
            <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-white" />
                  <h4 className="text-sm font-semibold text-white">Curva de Pérdida de Grasa (12 Semanas)</h4>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-white rounded-full inline-block" />
                    <span>Peso (kg)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-emerald-400 rounded-full inline-block" />
                    <span>% Grasa</span>
                  </div>
                </div>
              </div>

              {/* Dynamic SVG Spark Chart */}
              <div className="h-44 w-full relative">
                <svg viewBox="0 0 700 160" className="w-full h-full overflow-visible">
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="700" y2="40" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="700" y2="80" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="120" x2="700" y2="120" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Weight curve: points at x = 70, 260, 470, 640 */}
                  {/* W1: 88.5kg -> y: 30, W4: 86.2kg -> y: 60, W8: 83.4kg -> y: 95, W12: 79.8kg -> y: 135 */}
                  <path
                    d="M 70 30 C 160 40, 200 55, 260 60 C 350 75, 410 88, 470 95 C 550 115, 590 125, 640 135"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />

                  {/* Bodyfat curve */}
                  {/* W1: 24.5% -> y: 45, W4: 22.8% -> y: 65, W8: 19.4% -> y: 105, W12: 15.1% -> y: 145 */}
                  <path
                    d="M 70 45 C 160 55, 200 62, 260 68 C 350 82, 410 98, 470 108 C 550 128, 590 138, 640 148"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />

                  {/* Checkin Dots */}
                  {[
                    { x: 70, y: 30, week: 1, label: '88.5 kg' },
                    { x: 260, y: 60, week: 4, label: '86.2 kg' },
                    { x: 470, y: 95, week: 8, label: '83.4 kg' },
                    { x: 640, y: 135, week: 12, label: '79.8 kg' }
                  ].map((pt, i) => {
                    const isSelected = selectedWeekIndex === i;
                    return (
                      <g key={pt.week} className="cursor-pointer" onClick={() => setSelectedWeekIndex(i)}>
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isSelected ? 7 : 4}
                          fill={isSelected ? '#ffffff' : '#a1a1aa'}
                          stroke="#09090b"
                          strokeWidth="2"
                        />
                        <text
                          x={pt.x}
                          y={pt.y - 12}
                          textAnchor="middle"
                          fill={isSelected ? '#ffffff' : '#71717a'}
                          fontSize="11"
                          fontFamily="Space Mono"
                          fontWeight={isSelected ? 'bold' : 'normal'}
                        >
                          {pt.label}
                        </text>
                        <text
                          x={pt.x}
                          y="160"
                          textAnchor="middle"
                          fill="#71717a"
                          fontSize="10"
                          fontFamily="Space Mono"
                        >
                          Semana {pt.week}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Coach Voice Memo & Tactical Plan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Real Voice Memo Player */}
              <VoiceMemoPlayer
                transcript={activeCheckIn.audioTranscript}
                durationLabel={activeCheckIn.audioDuration}
                coachName="Héctor Montoya"
              />

              {/* Tactical Adjustments Checklist */}
              <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                  Ajustes Tácticos Prescritos para la Próxima Semana
                </span>
                <h4 className="text-sm font-bold text-white font-display">
                  {activeCheckIn.coachFeedbackTitle}
                </h4>
                <ul className="space-y-2.5 pt-1">
                  {activeCheckIn.adjustmentsNextWeek.map((adj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{adj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Calculator Controls Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-400">
                <span className="text-white font-semibold block mb-0.5">Nota del Coach Héctor:</span>
                No soy nutriólogo. Esta herramienta estima tus requerimientos energéticos y reparto orientativo de macros para asegurarnos de que rindes y te recuperas de las sesiones de fuerza.
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                  Paso 1: Define tu Enfoque de Entrenamiento
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'fat_loss', label: 'Pérdida de Grasa', desc: 'Déficit óptimo' },
                    { id: 'recomp', label: 'Recomposición', desc: 'Grasa off + Tono on' },
                    { id: 'hypertrophy', label: 'Hipertrofia Pura', desc: 'Superávit limpio' }
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setCalcGoal(g.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        calcGoal === g.id
                          ? 'bg-zinc-900 border-white text-white ring-1 ring-white/10'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold font-display">{g.label}</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{g.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders and Biometrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-400">Peso actual</span>
                    <span className="text-white font-mono font-bold">{calcWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min={45}
                    max={140}
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(Number(e.target.value))}
                    className="w-full accent-white bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-400">Altura</span>
                    <span className="text-white font-mono font-bold">{calcHeight} cm</span>
                  </div>
                  <input
                    type="range"
                    min={145}
                    max={210}
                    value={calcHeight}
                    onChange={(e) => setCalcHeight(Number(e.target.value))}
                    className="w-full accent-white bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-400">Edad</span>
                    <span className="text-white font-mono font-bold">{calcAge} años</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={75}
                    value={calcAge}
                    onChange={(e) => setCalcAge(Number(e.target.value))}
                    className="w-full accent-white bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <span className="text-xs text-zinc-400 block mb-1.5">Género biológico</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCalcGender('male')}
                      className={`py-1.5 text-xs rounded-lg border font-medium ${
                        calcGender === 'male' ? 'bg-white text-zinc-950 border-white' : 'border-zinc-800 text-zinc-400'
                      }`}
                    >
                      Hombre
                    </button>
                    <button
                      onClick={() => setCalcGender('female')}
                      className={`py-1.5 text-xs rounded-lg border font-medium ${
                        calcGender === 'female' ? 'bg-white text-zinc-950 border-white' : 'border-zinc-800 text-zinc-400'
                      }`}
                    >
                      Mujer
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity Level Selector */}
              <div>
                <span className="text-xs text-zinc-400 block mb-2">Nivel de Actividad Diaria</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 1.2, label: 'Sedentario', sub: 'Oficina / <5k pasos' },
                    { val: 1.4, label: 'Moderado', sub: '3-4 entrenos + 8k pasos' },
                    { val: 1.6, label: 'Intenso', sub: '5+ entrenos + trabajo activo' }
                  ].map((act) => (
                    <button
                      key={act.val}
                      onClick={() => setCalcActivity(act.val)}
                      className={`p-2.5 rounded-lg border text-left text-xs ${
                        calcActivity === act.val
                          ? 'bg-zinc-800 border-white text-white font-semibold'
                          : 'border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div>{act.label}</div>
                      <div className="text-[10px] text-zinc-500">{act.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Diagnostic Card */}
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
                  <Calculator className="w-4 h-4 text-white" />
                  <span>PREDICCIONES DEL MÉTODO MONTOYA</span>
                </div>

                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 mb-6">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase block mb-1">
                    Calorías Diana Recomendadas
                  </span>
                  <div className="text-3xl font-extrabold font-mono text-white tabular-nums">
                    {targetCalories.toLocaleString()} <span className="text-sm font-sans font-normal text-zinc-400">kcal/día</span>
                  </div>
                  <span className="text-xs text-zinc-400 mt-1 block">
                    (Gasto total estimado: {tdee} kcal)
                  </span>
                </div>

                {/* Macro Split */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-mono uppercase text-zinc-400 block">Distribución de Macros Diana:</span>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block">Proteína</span>
                      <span className="text-base font-bold font-mono text-white">{proteinGrams}g</span>
                      <span className="text-[10px] text-zinc-500 block">2.2 g/kg</span>
                    </div>
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block">Grasas</span>
                      <span className="text-base font-bold font-mono text-white">{fatGrams}g</span>
                      <span className="text-[10px] text-zinc-500 block">Salud hormonal</span>
                    </div>
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block">Carbohidratos</span>
                      <span className="text-base font-bold font-mono text-white">{carbGrams}g</span>
                      <span className="text-[10px] text-zinc-500 block">Energía glucolítica</span>
                    </div>
                  </div>
                </div>

                {/* Forecast Outcome */}
                <div className="p-3 bg-zinc-950/80 border border-zinc-800 rounded-lg mb-6">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-0.5">
                    Proyección Realista a 12 Semanas:
                  </span>
                  <span className="text-xs font-semibold text-white">{projectedLossOrGain}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onOpenBooking(
                    `Plan Personalizado: ${calcGoal} (${calcWeight}kg, ${calcHeight}cm, ${calcAge}a)`
                  )
                }
                className="w-full py-3 px-4 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Agendar Consulta con Héctor Usando Estos Datos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
