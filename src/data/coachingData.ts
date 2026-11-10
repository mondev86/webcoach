import { ExerciseItem, ClientCase, CoachingProgram, WeekCheckIn, NutritionTip } from '../types';

import heroCoachImg from '../assets/images/hector_montoya_coaching_hero_1794243559873.jpg';
import portraitCoachImg from '../assets/images/coach_portrait_charismatic_1794242686005.jpg';
import battleRopesImg from '../assets/images/exercise_battle_ropes_1794243563159.jpg';
import kettlebellImg from '../assets/images/exercise_fatloss_kettlebell_1794242685358.jpg';
import benchPressImg from '../assets/images/clean_unbranded_bench_press_1794326987985.jpg';
import backSquatImg from '../assets/images/clean_unbranded_back_squat_1794326986433.jpg';
import deadliftImg from '../assets/images/exercise_hypertrophy_lift_1794242684381.jpg';

export const COACH_INFO = {
  name: 'Héctor Montoya',
  role: 'Entrenador Personal Online & Especialista en Fuerza',
  experienceYears: 11,
  transformedClients: '+450',
  successRate: '98.4%',
  credentials: [
    'Más de 11 años de experiencia como entrenador personal',
    'Especialista en entrenamiento de fuerza y acondicionamiento físico',
    'Técnica de levantamiento y prevención de dolores musculares',
    'Preparación física personalizada para hombres y mujeres'
  ],
  bioExcerpt:
    'Lo mío es la musculación y el entrenamiento de fuerza: cómo reclutar cada fibra, cuidar tus articulaciones y asegurar que cada gota de sudor se traduzca en músculo y salud. No soy nutriólogo ni te voy a poner dietas clínicas cerradas; zapatero a tus zapatos. Lo que te aporto son tips prácticos y principios de nutrición deportiva para que tu alimentación sea el combustible de tu esfuerzo en el gimnasio.',
  heroImage: heroCoachImg,
  portraitImage: portraitCoachImg
};

export const EXERCISES_DATA: ExerciseItem[] = [
  // PÉRDIDA DE GRASA & QUEMA METABÓLICA
  {
    id: 'battle-ropes',
    name: 'Battle Ropes Doble Onda Continua',
    category: 'fat_loss',
    muscleGroup: 'core_cardio',
    subtitle: 'Acondicionamiento anaeróbico extremo, quema calórica masiva y resistencia de hombros y core',
    targetMuscles: ['Deltoides Anterior y Lateral', 'Core Profundo', 'Dorsal Ancho', 'Antebrazo / Agarre'],
    tempo: 'Explosivo continuo (30s ON / 30s OFF)',
    difficulty: 'Intermedio',
    repsRange: '5 rondas × 30s de oleaje máximo',
    image: battleRopesImg,
    biomechanicKeys: [
      'Posición atlética en media sentadilla con pecho erguido y core acorazado.',
      'El movimiento nace desde las escápulas y deltoides, no de muñecas sueltas.',
      'Mantén tensión isométrica en cuádriceps y glúteos para anclarte al suelo sin balanceo.',
      'Respiración rítmica forzada sincronizada con el impacto de las cuerdas.'
    ],
    commonMistakes: [
      'Erguirse demasiado perdiendo la base atlética de cadera.',
      'Dejar que los hombros se encojan hacia las orejas por fatiga.'
    ],
    coachQuote: 'Las cuerdas de batalla eliminan el impacto articular del running y producen un gasto de ~18-20 kcal/min con un estímulo neuromuscular tremendo.',
    caloricBurnOrTension: '~18-22 kcal/min (alta quema calórica continua)',
    animationType: 'battle_ropes'
  },
  {
    id: 'kettlebell-swings',
    name: 'Kettlebell Swing Balístico',
    category: 'fat_loss',
    muscleGroup: 'posterior',
    subtitle: 'Potencia de cadera, demanda cardiorrespiratoria acelerada y preservación de masa glútea',
    targetMuscles: ['Glúteo Mayor', 'Isquiotibiales', 'Dorsal Ancho', 'Core / Recto Abdominal'],
    tempo: 'Explosivo (1-0-X-0)',
    difficulty: 'Intermedio',
    repsRange: '4 series × 15-20 reps (descanso 45s)',
    image: kettlebellImg,
    biomechanicKeys: [
      'Bisagra pura de cadera: flexiona caderas hacia atrás, no rodillas en sentadilla.',
      'Espalda neutra con dorsales activos protegiendo la columna lumbar.',
      'Extensión explosiva terminal activando glúteos al máximo en el punto alto.',
      'Los brazos actúan como cuerdas que guían el peso; la fuerza nace 100% de la cadera.'
    ],
    commonMistakes: [
      'Convertirlo en una sentadilla con elevación frontal de hombro.',
      'Hipersensibilizar la columna lumbar arqueando en el bloqueo final.'
    ],
    coachQuote: 'Este movimiento eleva tu consumo de oxígeno posterior al ejercicio quemando calorías durante horas mientras refuerza tu cadena posterior.',
    caloricBurnOrTension: '~16-18 kcal/min (alto impacto metabólico)',
    animationType: 'kettlebell_swing'
  },
  {
    id: 'dumbbell-thruster',
    name: 'Thruster con Mancuernas',
    category: 'fat_loss',
    muscleGroup: 'lower',
    subtitle: 'El rey de la transferencia cinética: sentadilla frontal combinada con empuje vertical',
    targetMuscles: ['Cuádriceps', 'Deltoides', 'Tríceps', 'Core', 'Glúteos'],
    tempo: '2-0-X-0 continuo',
    difficulty: 'Intermedio',
    repsRange: '4 series × 12 reps en circuito metabólico',
    biomechanicKeys: [
      'Inicia con sentadilla profunda manteniendo codos altos y torso firme.',
      'Aprovecha el rebote elástico de la subida para transferir la inercia a los hombros.',
      'Bloquea los brazos sobre la corona de la cabeza sin proyectar el cuello hacia adelante.',
      'Inhala en la bajada, exhala con fuerza en el empuje vertical.'
    ],
    commonMistakes: [
      'Pausar en la transición entre la sentadilla y el press, perdiendo la inercia metabólica.',
      'Dejar caer los codos hacia abajo en la fase profunda comprometiendo la postura dorsal.'
    ],
    coachQuote: 'Recluta más del 70% de la masa muscular total en un solo ciclo, disparando la frecuencia cardíaca sin impacto articular dañino.',
    caloricBurnOrTension: '~19 kcal/min (pico anaeróbico)',
    animationType: 'thruster'
  },
  {
    id: 'burpee-explosive',
    name: 'Burpee Táctico con Salto Controlado',
    category: 'fat_loss',
    muscleGroup: 'core_cardio',
    subtitle: 'Condicionamiento cardiovascular de cuerpo completo sin desgaste articular innecesario',
    targetMuscles: ['Pectoral', 'Psoas / Core', 'Cuádriceps', 'Gemelos'],
    tempo: 'Fluido y rítmico',
    difficulty: 'Principiante',
    repsRange: 'Intervalos 40s activo / 20s descanso × 5 rondas',
    biomechanicKeys: [
      'Baja las manos al suelo de forma controlada amortiguando con pies firmes.',
      'Lanza las piernas atrás asegurando que la pelvis no se hunda hacia el piso.',
      'Empuje explosivo de pectoral regresando los pies hacia la anchura de las caderas.',
      'Salto vertical suave aterrizando con punta-talón para cuidar los meniscos.'
    ],
    commonMistakes: [
      'Dejar caer la cadera al suelo en hiperextensión lumbar.',
      'Aterrizar con las rodillas bloqueadas.'
    ],
    coachQuote: 'Cuando se realiza con técnica limpia y sin descontrol, es la herramienta más eficiente para quemar grasa con peso corporal puro.',
    caloricBurnOrTension: '~14-17 kcal/min (capacidad glucolítica)',
    animationType: 'burpee'
  },
  {
    id: 'mountain-climbers',
    name: 'Mountain Climbers en Tensión Isométrica',
    category: 'fat_loss',
    muscleGroup: 'core_cardio',
    subtitle: 'Estabilidad antirrotacional de core, flexores de cadera y resistencia láctica',
    targetMuscles: ['Transverso Abdominal', 'Recto Anterior', 'Deltoides', 'Psoas'],
    tempo: 'Cadencia rápida pero controlada',
    difficulty: 'Principiante',
    repsRange: '4 series × 45 segundos',
    biomechanicKeys: [
      'Bloqueo de plancha alta con muñecas directamente bajo los hombros.',
      'Rodillas viajan hacia el pecho en línea recta sin elevar los glúteos.',
      'Mantén la pelvis neutra y empuja el suelo con las palmas para fijar escápulas.'
    ],
    commonMistakes: [
      'Rebotar la cadera arriba y abajo en lugar de mantener la línea paralela.',
      'Adelantar los hombros más allá de la línea de las muñecas.'
    ],
    coachQuote: 'Quema grasa a nivel sistémico mientras fortalece la pared abdominal profunda que previene lesiones lumbares.',
    caloricBurnOrTension: '~12-15 kcal/min',
    animationType: 'mountain_climber'
  },
  {
    id: 'box-jump',
    name: 'Salto al Cajón Pliométrico con Amortiguación',
    category: 'fat_loss',
    muscleGroup: 'lower',
    subtitle: 'Reclutamiento de unidades motoras rápidas tipo II y potencia elástica reactiva',
    targetMuscles: ['Cuádriceps', 'Glúteos', 'Gemelos', 'Isquiotibiales'],
    tempo: 'Máxima explosión concéntrica',
    difficulty: 'Intermedio',
    repsRange: '4 series × 8-10 saltos máximos',
    biomechanicKeys: [
      'Carga de cadera en bisagra explosiva antes del despegue.',
      'Aterriza sobre el cajón en silencio amortiguando con flexión coordinada.',
      'Extiende cadera completamente arriba antes de bajar dando un paso (no saltando hacia atrás).'
    ],
    commonMistakes: [
      'Bajar de espaldas rebotando en el suelo (alto riesgo para tendón de Aquiles).',
      'Aterrizar en cuclillas excesivamente profundas con impacto ruidoso.'
    ],
    coachQuote: 'La pliometría bien programada no solo quema calorías: despierta tu sistema nervioso para rendir más en las sesiones de fuerza.',
    caloricBurnOrTension: '~15 kcal/min (potencia elástica)',
    animationType: 'box_jump'
  },

  // HIPERTROFIA & GANANCIA MUSCULAR
  {
    id: 'barbell-bench-press',
    name: 'Press de Banca Plano con Barra',
    category: 'hypertrophy',
    muscleGroup: 'upper',
    subtitle: 'El patrón rey de empuje horizontal para densidad masiva en pectoral, deltoides y tríceps',
    targetMuscles: ['Pectoral Mayor', 'Deltoides Anterior', 'Tríceps Braquial', 'Serrato'],
    tempo: '3-1-X-0 (3s descenso controlado, pausa en esternón, explosión)',
    difficulty: 'Intermedio',
    repsRange: '4 series × 6-8 reps (con peso exigente pero seguro)',
    image: benchPressImg,
    biomechanicKeys: [
      'Retracción y depresión escapular clavadas en el banco (crea una plataforma sólida).',
      'Leg drive activo: empuja el suelo con los talones sin despegar los glúteos del banco.',
      'Bar path en ligera parábola: baja al esternón inferior y sube sobre la línea de los hombros.',
      'Codos a 45° del torso, nunca abiertos a 90° para salvaguardar el manguito rotador.'
    ],
    commonMistakes: [
      'Rebotar la barra en la caja torácica perdiendo tensión mecánica activa.',
      'Despegar las escápulas del banco en la cima del movimiento.'
    ],
    coachQuote: 'El secreto de un pectoral denso no es mover kilos a lo loco, sino clavar las escápulas y controlar los 3 segundos de descenso.',
    caloricBurnOrTension: 'Tensión mecánica máxima y sobrecarga progresiva',
    animationType: 'bench_press'
  },
  {
    id: 'back-squat',
    name: 'Sentadilla Trasera con Barra en Foso',
    category: 'hypertrophy',
    muscleGroup: 'lower',
    subtitle: 'Sobrecarga masiva en cuádriceps y glúteos eliminando el rebote pasivo articular',
    targetMuscles: ['Cuádriceps', 'Glúteo Mayor', 'Aductores', 'Core Profundo'],
    tempo: '3-1-X-0 (1s de pausa isométrica en paralelo)',
    difficulty: 'Avanzado',
    repsRange: '4 series × 6-8 reps (fuerza e hipertrofia funcional)',
    image: backSquatImg,
    biomechanicKeys: [
      'Apoya la barra sobre el trapecio superior creando una plataforma compacta con los codos.',
      'Presión plantar en tres puntos: dedo gordo, meñique y talón bien anclados.',
      'Desciende abriendo rodillas en la misma dirección de la punta de los pies.',
      'Pausa nítida de 1 segundo en el punto de máxima flexión antes de explotar arriba.'
    ],
    commonMistakes: [
      'Colapso en valgo de rodillas al subir (meter rodillas hacia dentro).',
      'Despegar los talones del suelo por falta de dorsiflexión de tobillo.'
    ],
    coachQuote: 'La pausa en la sentadilla disipa la energía elástica y obliga a tus fibras musculares a reclutarse desde cero: hipertrofia pura y articulaciones sanas.',
    caloricBurnOrTension: 'Reclutamiento de unidades motoras de alto umbral',
    animationType: 'squat'
  },
  {
    id: 'romanian-deadlift',
    name: 'Peso Muerto Rumano (RDL)',
    category: 'hypertrophy',
    muscleGroup: 'posterior',
    subtitle: 'Máxima tensión mecánica y estiramiento excéntrico bajo carga en glúteos e isquios',
    targetMuscles: ['Glúteo Mayor', 'Isquiosurales', 'Erectores Espinales', 'Dorsal Ancho'],
    tempo: '3-1-1-0 (3s excéntrica controlada)',
    difficulty: 'Avanzado',
    repsRange: '3-4 series × 8-10 reps (con peso exigente pero seguro)',
    image: deadliftImg,
    biomechanicKeys: [
      'Empuja las caderas hacia la pared trasera como si cerraras una puerta con los glúteos.',
      'Mantén la barra en contacto permanente con los muslos y espinillas.',
      'Flexión de rodilla mínima y fija (15° a 20°); el movimiento ocurre solo en la pelvis.',
      'Siente la tensión brutal en los isquios en el punto más bajo antes de iniciar la subida.'
    ],
    commonMistakes: [
      'Flexionar la columna lumbar para bajar la barra más allá del rango activo de la cadera.',
      'Alejar la barra del centro de gravedad aumentando el brazo de palanca lesivo.'
    ],
    coachQuote: 'El RDL es insustituible para construir densidad en la espalda baja y unos isquiotibiales rocosos. La clave está en los 3 segundos de descenso.',
    caloricBurnOrTension: 'Tensión mecánica ultra-alta en estiramiento',
    animationType: 'deadlift'
  },
  {
    id: 'weighted-pullup',
    name: 'Dominadas Pronas Estrictas Lastradas',
    category: 'hypertrophy',
    muscleGroup: 'upper',
    subtitle: 'La prueba definitiva de fuerza relativa y desarrollo en V para la espalda dorsal',
    targetMuscles: ['Dorsal Ancho', 'Redondo Mayor', 'Bíceps Braquial', 'Trapecio Medio e Inferior'],
    tempo: '2-1-1-1 (1s contracción en pico)',
    difficulty: 'Intermedio',
    repsRange: '4 series × 6-10 reps (o peso corporal hasta fallo técnico)',
    biomechanicKeys: [
      'Agarre algo más ancho que los hombros con las manos en pronación.',
      'Inicia con una depresión y retracción escapular activa antes de tirar con los codos.',
      'Dirige el pecho hacia la barra, no la barbilla (evita hiperextensión cervical).',
      'Desciende hasta el bloqueo controlado de brazos sin balanceo inercial.'
    ],
    commonMistakes: [
      'Kipping o balancear las piernas para impulsarse.',
      'Hombros rodados hacia adelante en la cima por debilidad en rotadores externos.'
    ],
    coachQuote: 'Si quieres una cintura visualmente estrecha y una espalda en V imponente, las dominadas con rango completo son la prioridad número uno.',
    caloricBurnOrTension: 'Tensión longitudinal de fibras dorsales',
    animationType: 'pullup'
  },
  {
    id: 'overhead-press',
    name: 'Press Militar de Hombros de Pie',
    category: 'hypertrophy',
    muscleGroup: 'upper',
    subtitle: 'Fuerza funcional vertical de torso, estabilidad escapular y rocosidad en deltoides',
    targetMuscles: ['Deltoides Anterior y Lateral', 'Haz Clavicular Pectoral', 'Tríceps', 'Core'],
    tempo: '2-1-1-0',
    difficulty: 'Intermedio',
    repsRange: '4 series × 6-8 reps',
    biomechanicKeys: [
      'Glúteos y abdomen fuertemente contraídos para crear un bloque rígido.',
      'Barra descansa en las clavículas; los codos apuntan ligeramente hacia adelante.',
      'La cabeza se aparta un instante para permitir la trayectoria vertical de la barra.',
      'Bloqueo con trapecios encogidos arriba para estabilizar la articulación glenohumeral.'
    ],
    commonMistakes: [
      'Arqueo lumbar excesivo para compensar falta de movilidad en hombros.',
      'Impulsar el peso con las piernas convirtiéndolo en un push press.'
    ],
    coachQuote: 'Construye hombros 3D y una armadura en el core que transferirá fuerza a todos tus otros levantamientos.',
    caloricBurnOrTension: 'Sobrecarga de fibras tipo II en deltoides',
    animationType: 'overhead_press'
  },
  {
    id: 'pendlay-row',
    name: 'Remo Pendlay Estricto desde el Suelo',
    category: 'hypertrophy',
    muscleGroup: 'posterior',
    subtitle: 'Grosor en espalda alta, romboides y densidad escapular sin inercia tramposa',
    targetMuscles: ['Dorsal Ancho', 'Romboides', 'Trapecio Medio', 'Erectores Espinales'],
    tempo: 'Explosivo arriba / 2s bajada / reposo en suelo',
    difficulty: 'Avanzado',
    repsRange: '4 series × 6-8 reps',
    biomechanicKeys: [
      'Torso paralelo al suelo a 90°; la barra se inicia muerta en el suelo en cada repetición.',
      'Tira con los codos hacia la cadera apretando las escápulas al final.',
      'Cero impulso de cadera o rebote: la espalda alta hace el 100% del trabajo.'
    ],
    commonMistakes: [
      'Levantar el torso a 45° convirtiéndolo en un remo convencional tramposo.',
      'No dejar que la barra repose un segundo en el piso antes de la siguiente repetición.'
    ],
    coachQuote: 'Elimina el impulso elástico y te obliga a reclutar toda la masa de la espalda desde cero.',
    caloricBurnOrTension: 'Desarrollo de masa y densidad en romboides',
    animationType: 'pendlay_row'
  }
];

export const CLIENT_CASES: ClientCase[] = [
  {
    id: 'alejandro-gomez',
    name: 'Alejandro Gómez',
    age: 38,
    profession: 'Director Financiero & Padre de 2 niños',
    goal: 'Pérdida de grasa visceral y aumento de energía vital',
    durationWeeks: 16,
    weightChange: '-14.6 kg',
    bodyFatChange: 'De 26.2% a 13.1%',
    strengthGain: '+35 kg en Peso Muerto',
    testimonial:
      'Pasé 5 años apuntándome a gimnasios y abandonando al mes por falta de tiempo. Con Héctor no tuve que dejar de comer fuera con clientes ni pasar 2 horas al día en una elíptica. Su plan de 3 entrenamientos de 50 minutos y el seguimiento semanal por WhatsApp marcaron la diferencia. Hoy tengo más energía que a mis 25 años.',
    keyStrategy: 'Déficit calórico moderado sin restricciones sociales, 3 sesiones de fuerza enfocadas en multiarticulares y meta de 9.000 pasos diarios garantizados.',
    initialStats: { weight: '93.4 kg', bodyFat: '26.2%', benchOrDeadlift: '80 kg Deadlift' },
    finalStats: { weight: '78.8 kg', bodyFat: '13.1%', benchOrDeadlift: '115 kg Deadlift' }
  },
  {
    id: 'sofia-navarro',
    name: 'Dra. Sofía Navarro',
    age: 34,
    profession: 'Cirujana General',
    goal: 'Eliminar dolor lumbar crónico y ganar masa muscular magra',
    durationWeeks: 20,
    weightChange: '+3.8 kg (Masa Magra)',
    bodyFatChange: 'De 22.0% a 17.5%',
    strengthGain: 'De 0 a 6 dominadas estrictas',
    testimonial:
      'Por mis turnos de guardia en el hospital, mi horario es caótico. Héctor adaptó cada microciclo a mis semanas de trabajo de 60 horas. Mi dolor de espalda desapareció en el segundo mes gracias al trabajo de bisagra de cadera y estabilidad de core. Es el entrenador más riguroso y humano que he conocido.',
    keyStrategy: 'Reeducación postural y técnica de musculación, periodización ondulante según guardias hospitalarias y aumento gradual de densidad proteica.',
    initialStats: { weight: '57.2 kg', bodyFat: '22.0%', benchOrDeadlift: '0 dominadas' },
    finalStats: { weight: '61.0 kg', bodyFat: '17.5%', benchOrDeadlift: '6 dominadas estrictas' }
  },
  {
    id: 'marcos-prieto',
    name: 'Marcos Prieto',
    age: 29,
    profession: 'Ingeniero de Software Senior',
    goal: 'Hipertrofia muscular y salir de la contextura delgada / "Skinny Fat"',
    durationWeeks: 24,
    weightChange: '+7.2 kg de músculo',
    bodyFatChange: 'Mantuvo 12.8% estable',
    strengthGain: 'Press Banca de 65 kg a 102.5 kg',
    testimonial:
      'Llevaba 3 años estancado en los mismos pesos sintiendo que mi genética no servía para tener un físico atlético. Héctor analizó mis vídeos de técnica y descubrió que no aplicaba tensión mecánica real ni progresaba en sobrecarga. En 6 meses cambié de talla de ropa y gané una seguridad que impactó hasta en mi trabajo.',
    keyStrategy: 'Ligero superávit calórico (+280 kcal), control semanal del nivel de esfuerzo real y corrección técnica por vídeo en cada ejercicio.',
    initialStats: { weight: '68.5 kg', bodyFat: '16.5%', benchOrDeadlift: '65 kg Bench Press' },
    finalStats: { weight: '75.7 kg', bodyFat: '12.8%', benchOrDeadlift: '102.5 kg Bench Press' }
  }
];

export const PROGRAMS_DATA: CoachingProgram[] = [
  {
    id: 'body-recomp',
    title: 'Recomposición Corporal 1-a-1',
    badge: 'PROGRAMA INSIGNIA',
    popular: true,
    tagline: 'Pierde grasa rebelde mientras construyes tono y densidad muscular sólida',
    idealFor: 'Personas que quieren transformar su silueta sin perder masa muscular ni someterse a dietas insostenibles.',
    features: [
      'Plan de entrenamiento individualizado (3 a 4 días/semana) adaptado a tu gimnasio o casa',
      'Guía de Tips Nutricionales y Pautas de Combustible: cómo distribuir tu proteína y carbohidratos sin pesarlo todo',
      'Check-in semanal exhaustivo con análisis en vídeo de 10-15 min de tu evolución y cargas',
      'Corrección técnica ilimitada: envías tus vídeos de levantamiento y recibes correcciones al milímetro',
      'Contacto directo por WhatsApp de lunes a sábado con Héctor Montoya',
      'Acceso a la plataforma privada de seguimiento y marcas de fuerza'
    ],
    deliverables: [
      'Pérdida promedio de 0.5 a 0.8 kg de grasa/semana manteniendo masa magra',
      'Aumento sostenido de fuerza y densidad muscular en zonas diana',
      'Hábitos sostenibles para rendir a tope sin dietas destructivas'
    ],
    spotsRemaining: 3
  },
  {
    id: 'hypertrophy-elite',
    title: 'Hipertrofia & Fuerza de Élite',
    badge: 'ALTO RENDIMIENTO',
    tagline: 'Construcción sistemática de masa muscular magra y aumento de marcas de fuerza',
    idealFor: 'Levantadores y atletas que quieren superar estancamientos y desarrollar un físico denso, atlético y fuerte.',
    features: [
      'Planificación individualizada por niveles de esfuerzo real y sobrecarga progresiva',
      'Consejos de nutrición peri-entreno (pre y post) para maximizar síntesis proteica y reponer glucógeno',
      'Optimización del sueño, recuperación muscular y control del descanso',
      'Revisión semanal de marcas de peso y levantamientos principales',
      'Soporte prioritario y llamadas mensuales de estrategia 1-a-1 con Héctor Montoya'
    ],
    deliverables: [
      'Ganancia mensual neta de masa muscular magra verificada',
      'Aumento medible de +15-25% en tus levantamientos principales',
      'Dominio técnico en los ejercicios clave de musculación y fuerza'
    ],
    spotsRemaining: 2
  },
  {
    id: 'executive-performance',
    title: 'Longevidad & Rendimiento Ejecutivo',
    badge: 'MÁXIMA EFICIENCIA',
    tagline: 'Fuerza, salud metabólica y energía sostenida para profesionales con poco tiempo libre',
    idealFor: 'CEOs, directivos y profesionales ocupados que disponen de 30 a 45 minutos al día y buscan máximo retorno.',
    features: [
      'Rutinas de alta densidad temporal (35-45 minutos) con máxima eficiencia de estímulo',
      'Estrategias nutricionales para viajes de negocios, aeropuertos y restaurantes',
      'Protocolos de movilidad articular y erradicación de dolor de cuello, hombros y espalda baja',
      'Adaptación continua del plan según tu nivel de energía, descanso y agenda de viajes',
      'Ajustes de rutina en tiempo real para que nunca pierdas el ritmo'
    ],
    deliverables: [
      'Reducción drástica de marcadores de estrés e inflamación',
      'Eliminación de molestias posturales de oficina',
      'Físico ágil, estético y energizado para jornadas exigentes'
    ],
    spotsRemaining: 4
  }
];

export const SIMULATED_WEEKLY_CHECKINS: WeekCheckIn[] = [
  {
    week: 1,
    date: 'Semana 1 · Calibración inicial',
    weight: 88.5,
    bodyFat: 24.5,
    stepsAvg: 7200,
    nutritionAdherence: 88,
    trainingAdherence: 100,
    sleepScore: 6.8,
    coachFeedbackTitle: '¡Fase de calibración completada con éxito!',
    coachFeedbackSummary: 'Excelente primera semana. Registraste tus comidas al 88% y completaste los 3 entrenamientos. Detectamos que en la sentadilla estabas despegando ligeramente el talón izquierdo; te dejé una pauta para trabajar dorsiflexión. Vamos a mantener las 2.250 kcal.',
    audioDuration: '02:14 min',
    audioTranscript: 'Hola Carlos, aquí Héctor Montoya revisando las métricas de tu check-in de domingo. La adaptación fue genial, el peso bajó 700g de agua e inflamación. Te sentiste con buena energía. Para la semana 2 vamos a sumar 1.000 pasos diarios para llegar a 8.500 y en el peso muerto rumano quiero que marques 3 segundos en la bajada.',
    adjustmentsNextWeek: [
      'Subir pasos diarios a 8.500 prom.',
      'Ajustar tempo en Peso Muerto Rumano a 3-1-1-0.',
      'Mantener ingesta hídrica en 3 litros/día.'
    ]
  },
  {
    week: 4,
    date: 'Semana 4 · Primera fase consolidada',
    weight: 86.2,
    bodyFat: 22.8,
    stepsAvg: 9400,
    nutritionAdherence: 95,
    trainingAdherence: 100,
    sleepScore: 7.9,
    coachFeedbackTitle: '-2.3 kg netos y aumento de 7.5 kg en Press Militar',
    coachFeedbackSummary: 'Sensacional primer mes. El perímetro de cintura se redujo 3.5 cm mientras tus cargas en el gimnasio aumentaron. La adherencia a los 160g de proteína diaria es impecable. El cansancio del viernes se solucionó mejorando el sueño.',
    audioDuration: '02:45 min',
    audioTranscript: 'Carlos, felicidades por el primer mes de parte de todo el equipo y mía. Las fotos comparativas de frente y espalda ya muestran una diferencia notable en la zona del abdomen y la postura de los hombros. Reducimos 100 kcal en los días de descanso para acelerar la quema de grasa sin tocar tu rendimiento.',
    adjustmentsNextWeek: [
      'Déficit dinámico: 2.200 kcal días de entreno, 1.950 kcal días de descanso.',
      'Sumar 1 serie efectiva al curl femoral tumbado.',
      'Probar sal marina previa al entreno para mejorar congestión muscular.'
    ]
  },
  {
    week: 8,
    date: 'Semana 8 · Definición acelerada',
    weight: 83.4,
    bodyFat: 19.4,
    stepsAvg: 10200,
    nutritionAdherence: 94,
    trainingAdherence: 100,
    sleepScore: 8.3,
    coachFeedbackTitle: 'Rompiendo la barrera de los 84 kg con energía plena',
    coachFeedbackSummary: 'Tu cuerpo está respondiendo de libro. Menos de 20% de grasa por primera vez en 6 años. La masa muscular se mantiene intacta porque priorizamos la intensidad y no el volumen basura. Vamos a programar una semana de refeed estructurado.',
    audioDuration: '03:02 min',
    audioTranscript: 'Qué tal Carlos, Héctor por aquí. Has cumplido 8 semanas impecables. Para evitar adaptaciones metabólicas o fatiga acumulada en el SNC, este fin de semana introduciremos un refeed de 2 días aumentando carbohidratos en 100g para rellenar glucógeno. El lunes volvemos a tope.',
    adjustmentsNextWeek: [
      'Refeed estratégico el sábado y domingo (+400 kcal de carbohidratos complejos).',
      'Comprobación de progreso en Peso Muerto con carga exigente pero controlada.',
      'Mantener los 10.000 pasos automáticos.'
    ]
  },
  {
    week: 12,
    date: 'Semana 12 · Transformación total',
    weight: 79.8,
    bodyFat: 15.1,
    stepsAvg: 11000,
    nutritionAdherence: 98,
    trainingAdherence: 100,
    sleepScore: 8.7,
    coachFeedbackTitle: '-8.7 kg de grasa, cintura de acero y fuerza récord',
    coachFeedbackSummary: 'Objetivo del trimestre no solo alcanzado, sino superado con creces. 79.8 kg, un 15.1% de grasa corporal real y levantando 20 kg más que al inicio. Pasamos a la fase de mantenimiento inverso para fijar este físico de por vida.',
    audioDuration: '03:30 min',
    audioTranscript: 'Brutal, Carlos. Mira las fotos del día 1 frente a hoy. No solo te ves como otra persona, te mueves como un atleta. Hemos construido un metabolismo rápido y una disciplina que nadie te puede quitar. Ahora pasamos a la fase de Reverse Dieting para comer más manteniendo este porcentaje.',
    adjustmentsNextWeek: [
      'Inicio de Dieta Inversa (+150 kcal semanales hasta normocalórica).',
      'Cambio a bloque de especialización en hipertrofia de torso.',
      'Sesión de videollamada 1-a-1 de cierre de ciclo y fijación de nuevos objetivos.'
    ]
  }
];

export const NUTRITION_TIPS_DATA: NutritionTip[] = [
  {
    id: 'pre-workout-fuel',
    category: 'combustible',
    categoryLabel: 'Pre-Entrenamiento',
    title: 'Combustible Pre-Entreno: Energía Real Sin Pesadez',
    subtitle: 'Qué comer entre 60 y 90 minutos antes para mover más peso sin bajones de azúcar',
    summary:
      'No necesitas pre-entrenos químicos cargados de estimulantes. El mejor combustible previo a una sesión exigente de fuerza o quema metabólica son carbohidratos de fácil digestión con bajo contenido en grasa y fibra para no ralentizar el vaciado gástrico.',
    actionPoints: [
      'Timing óptimo: 60-90 minutos antes de entrenar.',
      'La combinación dorada: 1 plátano maduro + 2 tortitas de arroz con un toque de miel o avena instantánea con canela.',
      'Sal marina previa: Una pizca de sal en tu botella de agua 30 min antes mejora la volemia plasmática, la congestión muscular y previene calambres.',
      'Evita grasas pesadas o lácteos grasos justo antes: secuestran sangre en el estómago en lugar de tus músculos.'
    ],
    coachQuote:
      'Si entrenas con el estómago pesado o completamente vacío sin energía, estás desperdiciando el 40% de tu potencial en cada serie. La comida previa es tu armadura.',
    importance: 'Impacto directo en la fuerza y resistencia de la sesión'
  },
  {
    id: 'protein-rule',
    category: 'recuperacion',
    categoryLabel: 'Síntesis Muscular',
    title: 'La Regla de la Proteína Sin Obsesión',
    subtitle: 'Cómo asegurar suficiente material para reparar fibras sin pasarte el día pesando comida',
    summary:
      'El músculo no se crea en el gimnasio; en el gimnasio se destruye. Se reconstruye con descanso y aminoácidos esenciales. No necesitas complicarte con fórmulas astronómicas.',
    actionPoints: [
      'Diana sencilla: Busca consumir entre 1.8g y 2.2g de proteína por kilo de peso corporal al día.',
      'Regla visual de la palma de la mano: En cada una de tus 3 o 4 comidas principales, incluye una porción de proteína del tamaño de la palma de tu mano (pollo, ternera magra, salmón, huevos, tofu o legumbres).',
      'Variedad de fuentes: Combina fuentes completas animales y vegetales; no dependas solo de pechuga de pollo.',
      'Si te cuesta llegar por falta de apetito o tiempo: un batido de proteína de suero (Whey aislada) con agua o bebida vegetal es una ayuda cómoda y segura.'
    ],
    coachQuote:
      'La proteína no engorda ni daña riñones sanos: te mantiene saciado durante horas y protege tu masa magra cuando buscas perder grasa.',
    importance: 'Pilar no negociable para preservar y construir masa magra'
  },
  {
    id: 'post-workout-truth',
    category: 'recuperacion',
    categoryLabel: 'Post-Entrenamiento',
    title: 'Post-Entreno: Desmontando el Mito de los 30 Minutos',
    subtitle: 'Por qué no tienes que beberte un batido en el vestuario con prisa agónica',
    summary:
      'Durante años las marcas de suplementos nos hicieron creer que si no comías proteína en los 30 minutos posteriores a soltar la mancuerna, perdías todo el entrenamiento. La ciencia moderna ha demostrado que la "ventana anabólica" dura de 3 a 5 horas.',
    actionPoints: [
      'Prioridad número 1: Rehidratarte con agua y electrolitos perdidos en el sudor.',
      'Tu comida sólida en las siguientes 2 horas: Una comida balanceada con proteína magra y carbohidratos complejos (arroz, patata, boniato o quinoa) para rellenar los depósitos de glucógeno.',
      'Si entrenaste en ayunas: Entonces sí conviene ingerir proteína y algo de carbohidratos en la primera hora para frenar el catabolismo.',
      'La tranquilidad mental: Relájate, dúchate, baja tus pulsaciones y disfruta tu comida con calma.'
    ],
    coachQuote:
      'El total de nutrientes al final de las 24 horas del día importa diez veces más que los minutos exactos en que te tomas el batido. Consistencia sobre histeria.',
    importance: 'Recuperación del glucógeno muscular y reducción de agujetas'
  },
  {
    id: 'hydration-electrolytes',
    category: 'combustible',
    categoryLabel: 'Hidratación & Fuerza',
    title: 'Hidratación: El Impulsor Oculto de la Fuerza',
    subtitle: 'Una deshidratación de apenas el 2% reduce tu fuerza máxima hasta un 15%',
    summary:
      'El músculo está compuesto en más de un 70% por agua. Si estás deshidratado, tus células musculares pierden turgencia, la conducción nerviosa empeora y el riesgo de contracturas y lesiones articulares se dispara.',
    actionPoints: [
      'El test de la mañana: Bebe 400-500ml de agua nada más levantarte para compensar la pérdida nocturna por respiración.',
      'Métrica visual: El color de tu orina a lo largo del día debe ser amarillo pálido, nunca ámbar oscuro.',
      'Durante el entrenamiento: Da pequeños sorbos constantes (unos 150-200ml cada 15-20 minutos) en lugar de beberte medio litro de golpe.',
      'Electrolitos en días de calor o sudor intenso: Añade un toque de zumo de limón y sal marina a tu agua de entrenamiento.'
    ],
    coachQuote:
      'Muchas veces me dicen "Héctor, hoy me sentía sin energía en sentadillas", y al indagar descubro que solo habían bebido un café en toda la mañana. El agua es fuerza líquida.',
    importance: 'Prevención de lesiones, calambres y fatiga prematura'
  },
  {
    id: 'social-life-weekends',
    category: 'habitos',
    categoryLabel: 'Vida Social & Eventos',
    title: 'Cenas con Amigos y Fines de Semana Sin Culpas',
    subtitle: 'Cómo disfrutar de una cena fuera sin arruinar tus 4 días de disciplina en el gimnasio',
    summary:
      'Una vida en la que no puedes salir a cenar con tu pareja o amigos es una vida insostenible. El Método Montoya no te aísla socialmente; te enseña a navegar los eventos con inteligencia y cero remordimientos.',
    actionPoints: [
      'Estrategia de ahorro diurno: En los días de cena especial, mantén tus comidas del día ricas en proteína magra y vegetales para ahorrar margen calórico para la noche.',
      'Prioriza lo que de verdad disfrutas: Si lo tuyo es un buen plato principal o un postre, pídelo y disfrútalo sin culpa. No piques pan o aperitivos por aburrimiento.',
      'Alcohol con moderación: El alcohol deshidrata y frena la síntesis proteica; bebe un vaso de agua por cada copa y limita los combinados azucarados.',
      'La perspectiva global: Una sola comida no arruina un físico, igual que una ensalada no te pone en forma. Al día siguiente vuelves a tu rutina con normalidad, sin castigarte con cardio compensatorio.'
    ],
    coachQuote:
      'El fitness debe sumar a tu vida, no restarle amigos ni momentos felices. Aprende a disfrutar con conciencia y sin culpabilidad.',
    importance: 'Sostenibilidad psicológica a largo plazo'
  },
  {
    id: 'supplements-truth',
    category: 'suplementos',
    categoryLabel: 'Suplementación Real',
    title: 'Suplementos: Lo Que Sí Funciona vs. Dinero Tirado',
    subtitle: 'El 90% de los botes en las tiendas son puro marketing. Aquí solo lo que tiene aval científico',
    summary:
      'No gastes cientos de euros en pastillas milagro, quemadores de grasa o potenciadores de testosterona sin base científica. Solo tres suplementos cuentan con grado de evidencia científica A.',
    actionPoints: [
      'Creatina Monohidrato en polvo normal: 3 a 5 gramos al día, todos los días (incluso días de descanso). Te ayuda a tener más fuerza en las últimas repeticiones y acelerar la recuperación.',
      'Proteína Whey (o vegetal de guisante/arroz): No es magia, es comida práctica y pura proteína de alto valor biológico para los días ajetreados.',
      'Cafeína (café solo o cápsula 3-5 mg/kg): El estimulante más seguro y estudiado para reducir la percepción de esfuerzo y mejorar la potencia.',
      'Lo que NO necesitas: Quemadores de grasa "termogénicos", BCAA (si ya consumes suficiente proteína), ni bloqueadores de carbohidratos.'
    ],
    coachQuote:
      'Los suplementos representan apenas el 5% de tu resultado. El 95% restante es cómo te mueves bajo la barra, cuánto duermes y qué comes a diario.',
    importance: 'Ahorro de dinero y optimización basada en ciencia'
  }
];
