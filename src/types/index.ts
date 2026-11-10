export interface ExerciseItem {
  id: string;
  name: string;
  category: 'fat_loss' | 'hypertrophy';
  muscleGroup: 'upper' | 'lower' | 'posterior' | 'core_cardio';
  subtitle: string;
  targetMuscles: string[];
  tempo: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  repsRange: string;
  image?: string;
  biomechanicKeys: string[];
  commonMistakes: string[];
  coachQuote: string;
  caloricBurnOrTension: string;
  animationType:
    | 'kettlebell_swing'
    | 'deadlift'
    | 'thruster'
    | 'squat'
    | 'pullup'
    | 'burpee'
    | 'bench_press'
    | 'battle_ropes'
    | 'mountain_climber'
    | 'box_jump'
    | 'overhead_press'
    | 'pendlay_row';
}

export interface ClientCase {
  id: string;
  name: string;
  age: number;
  profession: string;
  goal: string;
  durationWeeks: number;
  weightChange: string;
  bodyFatChange: string;
  strengthGain: string;
  testimonial: string;
  keyStrategy: string;
  initialStats: { weight: string; bodyFat: string; benchOrDeadlift: string };
  finalStats: { weight: string; bodyFat: string; benchOrDeadlift: string };
}

export interface CoachingProgram {
  id: string;
  title: string;
  badge?: string;
  tagline: string;
  idealFor: string;
  features: string[];
  deliverables: string[];
  spotsRemaining: number;
  popular?: boolean;
}

export interface WeekCheckIn {
  week: number;
  date: string;
  weight: number;
  bodyFat: number;
  stepsAvg: number;
  nutritionAdherence: number;
  trainingAdherence: number;
  sleepScore: number;
  coachFeedbackTitle: string;
  coachFeedbackSummary: string;
  audioDuration: string;
  audioTranscript: string;
  adjustmentsNextWeek: string[];
}

export interface NutritionTip {
  id: string;
  category: 'combustible' | 'recuperacion' | 'habitos' | 'suplementos';
  categoryLabel: string;
  title: string;
  subtitle: string;
  summary: string;
  actionPoints: string[];
  coachQuote: string;
  importance: string;
}
