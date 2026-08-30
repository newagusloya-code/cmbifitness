// src/services/wgerApi.ts
import { EXTENDED_CLINICAL_EXERCISES } from './exerciseDatabase';
import {
  Exercise,
  Muscle,
  Equipment,
  Routine,
  Day,
  Slot,
  SlotEntry,
  ProgressionConfig,
  WorkoutSession,
  WorkoutLog,
  GymInterleavedSet,
  DateSequenceDisplayDay,
  RoutineStats,
  WgerAuthConfig,
} from '../types/wger';

export * from '../types/wger';

const DEFAULT_BASE_URL = 'https://wger.de/api/v2';
const DEFAULT_AUTH_URL = 'https://wger.de/allauth/app/v1/auth';

const STORAGE_KEYS = {
  AUTH_CONFIG: 'hometherapy_wger_auth',
  WORKOUT_SESSIONS: 'hometherapy_workout_sessions',
  WORKOUT_LOGS: 'hometherapy_workout_logs',
  CUSTOM_ROUTINES: 'hometherapy_custom_routines',
  CLIENTS: 'hometherapy_clients',
};

// -----------------------------------------------------------------------------
// Reference Anatomical & Biomechanical Catalogs
// -----------------------------------------------------------------------------
export const MUSCLE_CATALOG: Muscle[] = [
  { id: 1, name: 'Bíceps Braquial', name_en: 'Biceps brachii', is_front: true },
  { id: 2, name: 'Deltoides Anterior/Lateral', name_en: 'Anterior deltoid', is_front: true },
  { id: 3, name: 'Pectoral Mayor', name_en: 'Pectoralis major', is_front: true },
  { id: 4, name: 'Pectoral', name_en: 'Chest', is_front: true },
  { id: 5, name: 'Tríceps Braquial', name_en: 'Triceps brachii', is_front: false },
  { id: 6, name: 'Abdominales / Recto', name_en: 'Rectus abdominis', is_front: true },
  { id: 7, name: 'Dorsal Ancho', name_en: 'Latissimus dorsi', is_front: false },
  { id: 8, name: 'Trapecio', name_en: 'Trapezius', is_front: false },
  { id: 9, name: 'Tríceps', name_en: 'Triceps', is_front: false },
  { id: 10, name: 'Espalda / Erector Espinal', name_en: 'Lower back', is_front: false },
  { id: 11, name: 'Cuádriceps', name_en: 'Quadriceps femoris', is_front: true },
  { id: 12, name: 'Glúteo Mayor y Medio', name_en: 'Gluteus maximus', is_front: false },
  { id: 13, name: 'Core / Oblicuos', name_en: 'Core / Obliques', is_front: true },
  { id: 14, name: 'Isquiosurales', name_en: 'Hamstrings', is_front: false },
  { id: 15, name: 'Gemelos / Sóleo', name_en: 'Calves', is_front: false },
];

export const EQUIPMENT_CATALOG: Equipment[] = [
  { id: 1, name: 'Banca Plana' },
  { id: 2, name: 'Barra Olímpica' },
  { id: 3, name: 'Mancuernas' },
  { id: 4, name: 'Colchoneta / Mat' },
  { id: 7, name: 'Peso Corporal (Calistenia)' },
  { id: 8, name: 'Banda de Resistencia' },
  { id: 9, name: 'Kettlebell' },
  { id: 10, name: 'Medio Acuático / Piscina' },
];

// Fallback Exercises with clinical biomechanical cues for Home Therapy
export const CLINICAL_EXERCISES: Exercise[] = [
  {
    id: 9001,
    name: 'Push-up (Flexión Escapulotorácica)',
    description: '<p>Flexión clásica con control neuromuscular. Mantén el tronco alineado, activación del serrato anterior en el bloqueo y rango completo de flexión de codo.</p>',
    category: 9,
    equipment: [7],
    muscles: [3, 4, 9, 2],
    muscles_secondary: [6, 13],
    image_url: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9002,
    name: 'Goblet Squat (Sentadilla con Carga Frontal)',
    description: '<p>Sentadilla profunda biomecánica. Carga anterior para favorecer la verticalidad del torso, reduciendo el momento de fuerza sobre la columna lumbar y enfatizando cuádriceps.</p>',
    category: 9,
    equipment: [3, 7],
    muscles: [11, 12],
    muscles_secondary: [6, 10],
    image_url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9003,
    name: 'Plank Abdominal con Anti-Extensión',
    description: '<p>Activación isométrica del transverso y recto abdominal. Evita la hiperlordosis lumbar y mantén la pelvis en retroversión activa neutra.</p>',
    category: 9,
    equipment: [7, 4],
    muscles: [6, 13],
    muscles_secondary: [8, 11],
    image_url: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9004,
    name: 'Glute Bridge Unilateral (Puente de Glúteo)',
    description: '<p>Activación de la cadena posterior con disociación lumbo-pélvica. Extensión de cadera a 0° reclutando glúteo mayor sin hiperextender charnela toracolumbar.</p>',
    category: 9,
    equipment: [7, 4],
    muscles: [12, 14],
    muscles_secondary: [10, 6],
    image_url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9005,
    name: 'Remo Unilateral con Mancuerna / Banda',
    description: '<p>Tracción horizontal unilateral. Enfatiza la retracción escapular y activación del dorsal ancho y romboides, manteniendo la columna lumbar neutra.</p>',
    category: 9,
    equipment: [3, 8],
    muscles: [7, 8, 1],
    muscles_secondary: [2, 10],
    image_url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9006,
    name: 'Bird-Dog (Patrón Cruzado Neuromuscular)',
    description: '<p>Estabilización motora raquídea (McGill Big 3). Extensión recíproca contralateral de brazo y pierna manteniendo la pelvis inmóvil para co-activación de multífidos.</p>',
    category: 9,
    equipment: [7, 4],
    muscles: [10, 12, 13],
    muscles_secondary: [8, 6],
    image_url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9007,
    name: 'Sentadilla Búlgara (Split Squat Elevado)',
    description: '<p>Hipertrofia unilateral con reducción de cizalla axial. Mayor estímulo a cuádriceps y glúteo medio, mejorando estabilidad articular de rodilla y cadera.</p>',
    category: 9,
    equipment: [3, 7],
    muscles: [11, 12],
    muscles_secondary: [14, 13],
    image_url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9008,
    name: 'Elevaciones Laterales con Mancuerna / Banda',
    description: '<p>Abducción de hombro en el plano escapular (30° anterior). Máxima tensión sobre el deltoides lateral sin pinzamiento subacromial.</p>',
    category: 9,
    equipment: [3, 8],
    muscles: [2],
    muscles_secondary: [8],
    image_url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9009,
    name: 'Peso Muerto Rumano (RDL Biomecánico)',
    description: '<p>Bisagra de cadera con columna en bloque. Estiramiento activo bajo carga de isquiosurales y estímulo masivo al glúteo mayor.</p>',
    category: 9,
    equipment: [3, 2],
    muscles: [14, 12, 10],
    muscles_secondary: [7, 6],
    image_url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9010,
    name: 'Femoral curl con pelota bobath',
    description: '<p>Acostado boca arriba en un tapete colocar piernas arriba de la pelota dejando las pantorrillas al aire y los talones haciendo presion a la pelota alzando nuestra cadera y flexionando nuestras rodillas llevando la pelota hacia la cadera y extiendiendo hacia fuera llevando las piernas en posicion rectas, repetir movimiento sin perder tension en abdomen y talones hacia pelota.</p>',
    category: 9,
    equipment: [4, 7], // Colchoneta y peso corporal
    muscles: [14], // Isquiosurales
    muscles_secondary: [12, 6, 15],
    image_url: '/src/assets/femoral-bobath.png',
  },
];

// Pre-built clinical routines adhering to wger object hierarchy
export const PREBUILT_ROUTINES: Routine[] = [
  {
    id: 101,
    name: 'Protocolo de Readaptación Lumbar y Estabilidad Central',
    description: 'Rutina terapéutica basada en los principios de Stuart McGill y estabilización neuromuscular para discopatías, lumbalgias y control motor.',
    start_date: new Date().toISOString().split('T')[0],
    end_date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    fit_in_week: true,
    days: [
      {
        id: 201,
        routine: 101,
        order: 1,
        description: 'Día 1: Control Motor y Superserie Posterior',
        need_logs_to_advance: true,
        is_rest: false,
        slots: [
          {
            id: 301,
            day: 201,
            order: 1,
            is_superset: true, // Superset with 2 entries
            entries: [
              {
                id: 401,
                slot: 301,
                exercise: 9004, // Glute bridge
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9004),
                sets_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 12, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 45, operation: 'r', step: 'abs', repeat: true }],
              },
              {
                id: 402,
                slot: 301,
                exercise: 9003, // Plank
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9003),
                sets_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 10, operation: 'r', step: 'abs', repeat: true }], // 10 segs / reps
                rir_configs: [{ iteration: 1, value: 2, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 60, operation: 'r', step: 'abs', repeat: true }],
              },
            ],
          },
          {
            id: 302,
            day: 201,
            order: 2,
            is_superset: false,
            entries: [
              {
                id: 403,
                slot: 302,
                exercise: 9006, // Bird-Dog
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9006),
                sets_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 10, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 60, operation: 'r', step: 'abs', repeat: true }],
              },
            ],
          },
        ],
      },
      {
        id: 202,
        routine: 101,
        order: 2,
        description: 'Día 2: Descanso Activo / Hidroterapia',
        need_logs_to_advance: false,
        is_rest: true,
        slots: [],
      },
      {
        id: 203,
        routine: 101,
        order: 3,
        description: 'Día 3: Fuerza Funcional & Cadena Cinética',
        need_logs_to_advance: true,
        is_rest: false,
        slots: [
          {
            id: 303,
            day: 203,
            order: 1,
            is_superset: false,
            entries: [
              {
                id: 404,
                slot: 303,
                exercise: 9002, // Goblet squat
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9002),
                weight_configs: [
                  { iteration: 1, value: 12, operation: 'r', step: 'abs', repeat: false },
                  { iteration: 2, value: 2, operation: '+', step: 'abs', repeat: true }, // +2kg each iteration
                ],
                sets_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 10, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 2, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 90, operation: 'r', step: 'abs', repeat: true }],
              },
            ],
          },
          {
            id: 304,
            day: 203,
            order: 2,
            is_superset: false,
            entries: [
              {
                id: 405,
                slot: 304,
                exercise: 9005, // Remo con mancuerna
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9005),
                weight_configs: [{ iteration: 1, value: 10, operation: 'r', step: 'abs', repeat: true }],
                sets_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 12, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 2, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 75, operation: 'r', step: 'abs', repeat: true }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 102,
    name: 'Hipertrofia Funcional Push-Pull-Legs con RIR Regulado',
    description: 'Periodización ondulante enfocada en estímulo mecánico de alta calidad, control de fatiga (RIR 1-3) y sobrecarga progresiva.',
    start_date: new Date().toISOString().split('T')[0],
    end_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    fit_in_week: true,
    days: [
      {
        id: 204,
        routine: 102,
        order: 1,
        description: 'Día 1: Push (Patrón de Empuje y Deltoides)',
        need_logs_to_advance: true,
        is_rest: false,
        slots: [
          {
            id: 305,
            day: 204,
            order: 1,
            is_superset: true,
            entries: [
              {
                id: 406,
                slot: 305,
                exercise: 9001, // Push-up
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9001),
                weight_configs: [{ iteration: 1, value: 0, operation: 'r', step: 'abs', repeat: true }],
                sets_configs: [{ iteration: 1, value: 4, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 15, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 1, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 60, operation: 'r', step: 'abs', repeat: true }],
              },
              {
                id: 407,
                slot: 305,
                exercise: 9008, // Laterales
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9008),
                weight_configs: [{ iteration: 1, value: 8, operation: 'r', step: 'abs', repeat: true }],
                sets_configs: [{ iteration: 1, value: 4, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 12, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 1, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 75, operation: 'r', step: 'abs', repeat: true }],
              },
            ],
          },
        ],
      },
      {
        id: 205,
        routine: 102,
        order: 2,
        description: 'Día 2: Pull (Tracción Horizontal y Core)',
        need_logs_to_advance: true,
        is_rest: false,
        slots: [
          {
            id: 306,
            day: 205,
            order: 1,
            is_superset: false,
            entries: [
              {
                id: 408,
                slot: 306,
                exercise: 9005, // Remo unilateral
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9005),
                weight_configs: [{ iteration: 1, value: 16, operation: 'r', step: 'abs', repeat: true }],
                sets_configs: [{ iteration: 1, value: 4, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 10, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 2, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 90, operation: 'r', step: 'abs', repeat: true }],
              },
            ],
          },
        ],
      },
      {
        id: 206,
        routine: 102,
        order: 3,
        description: 'Día 3: Legs (Cadena Anterior y Posterior)',
        need_logs_to_advance: true,
        is_rest: false,
        slots: [
          {
            id: 307,
            day: 206,
            order: 1,
            is_superset: true,
            entries: [
              {
                id: 409,
                slot: 307,
                exercise: 9007, // Sentadilla búlgara
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9007),
                weight_configs: [{ iteration: 1, value: 14, operation: 'r', step: 'abs', repeat: true }],
                sets_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 8, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 2, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 60, operation: 'r', step: 'abs', repeat: true }],
              },
              {
                id: 410,
                slot: 307,
                exercise: 9009, // RDL
                exercise_detail: CLINICAL_EXERCISES.find(e => e.id === 9009),
                weight_configs: [{ iteration: 1, value: 22, operation: 'r', step: 'abs', repeat: true }],
                sets_configs: [{ iteration: 1, value: 3, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: 10, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 2, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 90, operation: 'r', step: 'abs', repeat: true }],
              },
            ],
          },
        ],
      },
      {
        id: 207,
        routine: 102,
        order: 4,
        description: 'Día 4: Descanso Metabólico & Movilidad Articular',
        need_logs_to_advance: false,
        is_rest: true,
        slots: [],
      },
    ],
  },
];

// Initial mock logs for immediate rich stats visualization
export const INITIAL_WORKOUT_LOGS: WorkoutLog[] = [
  {
    id: 1,
    session: 1,
    exercise: 9001,
    exercise_name: 'Push-up (Flexión Escapulotorácica)',
    weight: 0,
    repetitions: 15,
    rir: 2,
    rest: 60,
    weight_target: 0,
    repetitions_target: 15,
    rir_target: 2,
    rest_target: 60,
    iteration: 1,
    set_number: 1,
    timestamp: new Date(Date.now() - 4 * 86400000).toISOString(),
  },
  {
    id: 2,
    session: 1,
    exercise: 9001,
    exercise_name: 'Push-up (Flexión Escapulotorácica)',
    weight: 0,
    repetitions: 14,
    rir: 1,
    rest: 60,
    weight_target: 0,
    repetitions_target: 15,
    rir_target: 2,
    rest_target: 60,
    iteration: 1,
    set_number: 2,
    timestamp: new Date(Date.now() - 4 * 86400000).toISOString(),
  },
  {
    id: 3,
    session: 1,
    exercise: 9008,
    exercise_name: 'Elevaciones Laterales con Mancuerna / Banda',
    weight: 8,
    repetitions: 12,
    rir: 2,
    rest: 60,
    weight_target: 8,
    repetitions_target: 12,
    rir_target: 2,
    rest_target: 60,
    iteration: 1,
    set_number: 1,
    timestamp: new Date(Date.now() - 4 * 86400000).toISOString(),
  },
  {
    id: 4,
    session: 2,
    exercise: 9002,
    exercise_name: 'Goblet Squat (Sentadilla con Carga Frontal)',
    weight: 16,
    repetitions: 10,
    rir: 2,
    rest: 90,
    weight_target: 16,
    repetitions_target: 10,
    rir_target: 2,
    rest_target: 90,
    iteration: 1,
    set_number: 1,
    timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
  {
    id: 5,
    session: 2,
    exercise: 9002,
    exercise_name: 'Goblet Squat (Sentadilla con Carga Frontal)',
    weight: 18,
    repetitions: 8,
    rir: 1,
    rest: 90,
    weight_target: 18,
    repetitions_target: 8,
    rir_target: 1,
    rest_target: 90,
    iteration: 1,
    set_number: 2,
    timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
  {
    id: 6,
    session: 2,
    exercise: 9009,
    exercise_name: 'Peso Muerto Rumano (RDL Biomecánico)',
    weight: 24,
    repetitions: 10,
    rir: 2,
    rest: 90,
    weight_target: 24,
    repetitions_target: 10,
    rir_target: 2,
    rest_target: 90,
    iteration: 1,
    set_number: 1,
    timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
];

export const INITIAL_WORKOUT_SESSIONS: WorkoutSession[] = [
  {
    id: 1,
    routine: 102,
    date: new Date(Date.now() - 4 * 86400000).toISOString().split('T')[0],
    impression: 4,
    notes: 'Excelente activación en pectoral y deltoides lateral sin dolor articular.',
  },
  {
    id: 2,
    routine: 102,
    date: new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0],
    impression: 5,
    notes: 'Gran estímulo en cuádriceps y femorales. Buena profundidad en sentadilla frontal.',
  },
];

// -----------------------------------------------------------------------------
// Auth Configuration State & Helpers
// -----------------------------------------------------------------------------
export function getStoredAuthConfig(): WgerAuthConfig {
  const envKey = import.meta.env.VITE_WGER_API_KEY?.trim();
  const saved = localStorage.getItem(STORAGE_KEYS.AUTH_CONFIG);

  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fallback
    }
  }

  if (envKey) {
    if (envKey.includes('.')) {
      return {
        baseUrl: DEFAULT_BASE_URL,
        authType: 'jwt',
        accessToken: envKey,
      };
    }
    return {
      baseUrl: DEFAULT_BASE_URL,
      authType: 'token',
      permanentToken: envKey,
    };
  }

  return {
    baseUrl: DEFAULT_BASE_URL,
    authType: 'anonymous',
  };
}

export function saveAuthConfig(config: WgerAuthConfig) {
  localStorage.setItem(STORAGE_KEYS.AUTH_CONFIG, JSON.stringify(config));
}

export function buildAuthHeaders(config: WgerAuthConfig): HeadersInit {
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  if (config.authType === 'jwt' && config.accessToken) {
    headers['Authorization'] = `Bearer ${config.accessToken}`;
  } else if (config.authType === 'token' && config.permanentToken) {
    headers['Authorization'] = `Token ${config.permanentToken}`;
  }

  return headers;
}

// -----------------------------------------------------------------------------
// JWT Headless Login & Refresh (/allauth/app/v1/auth/login, /api/v2/token/refresh)
// -----------------------------------------------------------------------------
export async function loginWithWgerCredentials(
  username: string,
  password: string,
  authUrl = DEFAULT_AUTH_URL
): Promise<{ success: boolean; accessToken?: string; refreshToken?: string; error?: string }> {
  try {
    const res = await fetch(`${authUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      if (res.status === 429) {
        return { success: false, error: 'Demasiadas solicitudes. Límite de tasa alcanzado en wger.' };
      }
      return { success: false, error: `Credenciales inválidas (HTTP ${res.status}).` };
    }

    const data = await res.json();
    const tokens = data?.data || data;
    const access = tokens?.access;
    const refresh = tokens?.refresh;

    if (!access) {
      return { success: false, error: 'No se recibió token de acceso en la respuesta de wger.' };
    }

    const newConfig: WgerAuthConfig = {
      baseUrl: DEFAULT_BASE_URL,
      authType: 'jwt',
      accessToken: access,
      refreshToken: refresh,
      username,
    };
    saveAuthConfig(newConfig);

    return { success: true, accessToken: access, refreshToken: refresh };
  } catch (err) {
    return { success: false, error: (err as Error).message || 'Error de conexión con wger.' };
  }
}

export async function refreshWgerJwtToken(): Promise<boolean> {
  const config = getStoredAuthConfig();
  if (!config.refreshToken) return false;

  try {
    const res = await fetch(`${config.baseUrl}/token/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ refresh: config.refreshToken }),
    });

    if (!res.ok) return false;

    const data = await res.json();
    if (data.access) {
      config.accessToken = data.access;
      if (data.refresh) config.refreshToken = data.refresh;
      saveAuthConfig(config);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// -----------------------------------------------------------------------------
// Exercise API Services
// -----------------------------------------------------------------------------
export async function getExercises(limit = 40): Promise<Exercise[]> {
  const config = getStoredAuthConfig();
  const headers = buildAuthHeaders(config);

  try {
    const exerciseUrl = `${config.baseUrl}/exercise/?language=4&limit=${limit}`;
    const imageUrl = `${config.baseUrl}/exerciseimage/?limit=${limit * 2}`;

    const [exerciseRes, imageRes] = await Promise.all([
      fetch(exerciseUrl, { headers }),
      fetch(imageUrl, { headers }),
    ]);

    if (!exerciseRes.ok) {
      throw new Error(`HTTP ${exerciseRes.status}`);
    }

    const exerciseData = await exerciseRes.json();
    const imageData = imageRes.ok ? await imageRes.json() : { results: [] };

    const imageByExercise = new Map<number, string>();
    (imageData.results || []).forEach((img: { exercise?: number; exercise_base?: number; image: string; is_main?: boolean }) => {
      const exId = img.exercise_base ?? img.exercise;
      if (exId && img.image) {
        if (!imageByExercise.has(exId) || img.is_main) {
          imageByExercise.set(exId, img.image);
        }
      }
    });

    const parsed: Exercise[] = (exerciseData.results || [])
      .filter((ex: { description: string }) => ex.description && ex.description.length > 5)
      .map((ex: Exercise) => ({
        ...ex,
        image_url: imageByExercise.get(ex.id) || null,
      }));

    // Merge API with offline fallback to ensure we always have all exercises
    const allExercises = [...parsed, ...CLINICAL_EXERCISES, ...EXTENDED_CLINICAL_EXERCISES];
    
    // Deduplicate by ID
    const uniqueExercises = Array.from(new Map(allExercises.map(e => [e.id, e])).values());

    return uniqueExercises;
  } catch (error) {
    console.warn("Usando catálogo clínico local (fallback wger):", error);
    return [...CLINICAL_EXERCISES, ...EXTENDED_CLINICAL_EXERCISES];
  }
}

// -----------------------------------------------------------------------------
// Routine API Services (Routines, Days, Slots, Supersets)
// -----------------------------------------------------------------------------
export async function getRoutines(): Promise<Routine[]> {
  const config = getStoredAuthConfig();
  const headers = buildAuthHeaders(config);

  // Load custom local routines saved by user
  const localRoutinesStr = localStorage.getItem(STORAGE_KEYS.CUSTOM_ROUTINES);
  const localRoutines: Routine[] = localRoutinesStr ? JSON.parse(localRoutinesStr) : [];

  if (config.authType !== 'anonymous') {
    try {
      const res = await fetch(`${config.baseUrl}/routine/`, { headers });
      if (res.ok) {
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          // Fetch nested structure for each routine
          const detailedRoutines = await Promise.all(
            data.results.map(async (r: Routine) => {
              try {
                const structRes = await fetch(`${config.baseUrl}/routine/${r.id}/structure/`, { headers });
                if (structRes.ok) {
                  return await structRes.json();
                }
              } catch {
                // Return shallow routine
              }
              return r;
            })
          );
          return [...detailedRoutines, ...localRoutines];
        }
      }
    } catch (e) {
      console.warn("No se pudieron cargar rutinas remotas de wger, usando preconstruidas:", e);
    }
  }

  return [...PREBUILT_ROUTINES, ...localRoutines];
}

export function saveCustomRoutine(routine: Routine): Routine[] {
  const localRoutinesStr = localStorage.getItem(STORAGE_KEYS.CUSTOM_ROUTINES);
  let localRoutines: Routine[] = localRoutinesStr ? JSON.parse(localRoutinesStr) : [];
  
  const existingIdx = localRoutines.findIndex(r => r.id === routine.id);
  if (existingIdx >= 0) {
    localRoutines[existingIdx] = routine;
  } else {
    localRoutines.unshift(routine);
  }
  localStorage.setItem(STORAGE_KEYS.CUSTOM_ROUTINES, JSON.stringify(localRoutines));
  return getRoutinesSync();
}

export function deleteCustomRoutine(routineId: number): Routine[] {
  const localRoutinesStr = localStorage.getItem(STORAGE_KEYS.CUSTOM_ROUTINES);
  let localRoutines: Routine[] = localRoutinesStr ? JSON.parse(localRoutinesStr) : [];
  localRoutines = localRoutines.filter(r => r.id !== routineId);
  localStorage.setItem(STORAGE_KEYS.CUSTOM_ROUTINES, JSON.stringify(localRoutines));
  return getRoutinesSync();
}

export function getRoutinesSync(): Routine[] {
  const localRoutinesStr = localStorage.getItem(STORAGE_KEYS.CUSTOM_ROUTINES);
  const localRoutines: Routine[] = localRoutinesStr ? JSON.parse(localRoutinesStr) : [];
  const customIds = new Set(localRoutines.map(r => r.id));
  const basePrebuilt = PREBUILT_ROUTINES.filter(r => !customIds.has(r.id));
  return [...localRoutines, ...basePrebuilt];
}

// -----------------------------------------------------------------------------
// Computed Gym Sequence Algorithm (/date-sequence-gym/)
// Interleaves superset sets (Ex1 Set 1 -> Ex2 Set 1 -> Ex1 Set 2 -> Ex2 Set 2...)
// -----------------------------------------------------------------------------
export function computeGymSequence(routine: Routine, dayOrder: number, iteration = 1): GymInterleavedSet[] {
  const day = routine.days.find(d => d.order === dayOrder) || routine.days[0];
  if (!day || day.is_rest || !day.slots || day.slots.length === 0) {
    return [];
  }

  const interleavedItems: GymInterleavedSet[] = [];

  day.slots.forEach(slot => {
    const isSuperset = slot.entries.length > 1;

    // Collect max sets across entries in this slot
    const entriesWithSets = slot.entries.map(entry => {
      const setsConfig = entry.sets_configs?.find(c => c.iteration <= iteration) || entry.sets_configs?.[0];
      const weightConfig = entry.weight_configs?.find(c => c.iteration <= iteration) || entry.weight_configs?.[0];
      const repsConfig = entry.repetitions_configs?.find(c => c.iteration <= iteration) || entry.repetitions_configs?.[0];
      const rirConfig = entry.rir_configs?.find(c => c.iteration <= iteration) || entry.rir_configs?.[0];
      const restConfig = entry.rest_configs?.find(c => c.iteration <= iteration) || entry.rest_configs?.[0];

      const allLocalExercises = [...CLINICAL_EXERCISES, ...EXTENDED_CLINICAL_EXERCISES];
      const exercise = entry.exercise_detail || allLocalExercises.find(e => e.id === entry.exercise) || {
        id: entry.exercise,
        name: `Ejercicio #${entry.exercise}`,
        description: '',
        category: 9,
        equipment: [7],
        muscles: [4],
        image_url: null,
      };

      // Calculate progressive weight
      let targetWeight = weightConfig ? weightConfig.value : 0;
      if (weightConfig && weightConfig.repeat && iteration > weightConfig.iteration) {
        const deltaIterations = iteration - weightConfig.iteration;
        if (weightConfig.operation === '+' && weightConfig.step === 'abs') {
          targetWeight += deltaIterations * weightConfig.value;
        }
      }

      return {
        entry,
        exercise,
        totalSets: setsConfig ? setsConfig.value : 3,
        targetWeight,
        targetReps: repsConfig ? repsConfig.value : 10,
        targetRir: rirConfig ? rirConfig.value : 2,
        targetRestSeconds: restConfig ? restConfig.value : (isSuperset ? 45 : 90),
      };
    });

    const maxSets = Math.max(...entriesWithSets.map(e => e.totalSets));

    // Interleave sets across slot entries
    for (let setIdx = 1; setIdx <= maxSets; setIdx++) {
      entriesWithSets.forEach((item, entryIdx) => {
        if (setIdx <= item.totalSets) {
          interleavedItems.push({
            id: `day${day.id}_slot${slot.id}_entry${item.entry.id}_set${setIdx}`,
            dayOrder: day.order,
            dayId: day.id,
            slotId: slot.id,
            slotEntryId: item.entry.id,
            exercise: item.exercise,
            setIndex: setIdx,
            totalSets: item.totalSets,
            targetWeight: item.targetWeight,
            targetReps: item.targetReps,
            targetRir: item.targetRir,
            targetRestSeconds: item.targetRestSeconds,
            isSuperset,
            supersetGroupOrder: entryIdx + 1,
            completed: false,
          });
        }
      });
    }
  });

  return interleavedItems;
}

// -----------------------------------------------------------------------------
// Computed Date Sequence Display (/date-sequence-display/)
// Computes full calendar sequence of days, rest days, and folded exercises
// -----------------------------------------------------------------------------
export function computeDateSequenceDisplay(routine: Routine, iterationsCount = 3): DateSequenceDisplayDay[] {
  const result: DateSequenceDisplayDay[] = [];
  const startDate = new Date(routine.start_date || Date.now());

  let dayIndex = 0;
  for (let iter = 1; iter <= iterationsCount; iter++) {
    routine.days.forEach(day => {
      const curDate = new Date(startDate);
      curDate.setDate(curDate.getDate() + dayIndex);

      const exercises = day.is_rest ? [] : day.slots.flatMap(slot =>
        slot.entries.map(entry => {
          const ex = entry.exercise_detail || CLINICAL_EXERCISES.find(e => e.id === entry.exercise);
          const sets = entry.sets_configs?.[0]?.value || 3;
          const reps = entry.repetitions_configs?.[0]?.value || 10;
          const weight = entry.weight_configs?.[0]?.value || 0;
          const rir = entry.rir_configs?.[0]?.value || 2;
          return {
            name: ex?.name || `Ejercicio #${entry.exercise}`,
            sets,
            reps,
            weight,
            rir,
          };
        })
      );

      result.push({
        date: curDate.toISOString().split('T')[0],
        dayNumber: day.order,
        iteration: iter,
        isRest: day.is_rest,
        dayName: day.description || (day.is_rest ? 'Descanso Activo' : `Día ${day.order}`),
        exercises,
      });

      dayIndex++;
    });
  }

  return result;
}

// -----------------------------------------------------------------------------
// Brzycki 1RM Estimation Formula & Routine Stats Engine
// 1RM = Weight * (36 / (37 - Reps))
// -----------------------------------------------------------------------------
export function calculateBrzycki1RM(weight: number, reps: number): number {
  if (reps <= 0 || weight <= 0) return 0;
  if (reps === 1) return weight;
  if (reps >= 37) return weight * 1.5; // Boundary safety
  const est = weight * (36 / (37 - reps));
  return Math.round(est * 10) / 10;
}

export function computeRoutineStats(logs: WorkoutLog[]): RoutineStats {
  if (!logs || logs.length === 0) {
    return {
      totalVolume: 0,
      totalSets: 0,
      totalReps: 0,
      averageEstimated1RM: 0,
      highestEstimated1RM: null,
      muscleDistribution: [],
      kineticChain: { push: 25, pull: 25, legs: 35, core: 15 },
    };
  }

  let totalVolume = 0;
  let totalReps = 0;
  let totalSets = logs.length;
  let highest1RMVal = 0;
  let highest1RMObj: RoutineStats['highestEstimated1RM'] = null;
  let sum1RM = 0;
  let count1RM = 0;

  const volumeByMuscle = new Map<number, { sets: number; volume: number; name: string }>();

  let pushSets = 0;
  let pullSets = 0;
  let legSets = 0;
  let coreSets = 0;

  logs.forEach(log => {
    const vol = (log.weight > 0 ? log.weight : 50) * (log.repetitions || 1); // 50kg approx for bodyweight volume
    totalVolume += vol;
    totalReps += log.repetitions || 0;

    const est1RM = calculateBrzycki1RM(log.weight > 0 ? log.weight : 0, log.repetitions || 0);
    if (est1RM > 0) {
      sum1RM += est1RM;
      count1RM++;
      if (est1RM > highest1RMVal) {
        highest1RMVal = est1RM;
        highest1RMObj = {
          exerciseName: log.exercise_name || `Ejercicio #${log.exercise}`,
          estimated1RM: est1RM,
          weight: log.weight,
          reps: log.repetitions,
        };
      }
    }

    const exDetail = CLINICAL_EXERCISES.find(e => e.id === log.exercise);
    if (exDetail) {
      // Kinetic chain analysis
      const primaryMuscles = exDetail.muscles || [];
      if (primaryMuscles.some(m => [3, 4, 2, 5, 9].includes(m))) pushSets++;
      if (primaryMuscles.some(m => [7, 8, 1].includes(m))) pullSets++;
      if (primaryMuscles.some(m => [11, 12, 14, 15].includes(m))) legSets++;
      if (primaryMuscles.some(m => [6, 10, 13].includes(m))) coreSets++;

      primaryMuscles.forEach(mId => {
        const muscleInfo = MUSCLE_CATALOG.find(m => m.id === mId);
        const name = muscleInfo?.name || `Músculo #${mId}`;
        const prev = volumeByMuscle.get(mId) || { sets: 0, volume: 0, name };
        volumeByMuscle.set(mId, {
          sets: prev.sets + 1,
          volume: prev.volume + vol,
          name,
        });
      });
    }
  });

  const muscleDistribution: RoutineStats['muscleDistribution'] = Array.from(volumeByMuscle.entries()).map(([mId, data]) => ({
    muscleId: mId,
    muscleName: data.name,
    totalSets: data.sets,
    totalVolumeKg: Math.round(data.volume),
  })).sort((a, b) => b.totalVolumeKg - a.totalVolumeKg);

  const totalChainSets = (pushSets + pullSets + legSets + coreSets) || 1;

  return {
    totalVolume: Math.round(totalVolume),
    totalSets,
    totalReps,
    averageEstimated1RM: count1RM > 0 ? Math.round((sum1RM / count1RM) * 10) / 10 : 0,
    highestEstimated1RM: highest1RMObj,
    muscleDistribution,
    kineticChain: {
      push: Math.round((pushSets / totalChainSets) * 100),
      pull: Math.round((pullSets / totalChainSets) * 100),
      legs: Math.round((legSets / totalChainSets) * 100),
      core: Math.round((coreSets / totalChainSets) * 100),
    },
  };
}

// -----------------------------------------------------------------------------
// Workout Logging Local Storage and REST Persistence
// -----------------------------------------------------------------------------

export function getSavedClients(): ClientProfile[] {
  const data = localStorage.getItem(STORAGE_KEYS.CLIENTS);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
  return [
    {
      id: crypto.randomUUID(),
      name: "Paciente Demo (Rehabilitación)",
      age: 42,
      history: [
        {
          date: new Date().toISOString(),
          notes: "Fase 1 completada. Buena movilidad articular.",
          adherenceRate: 90,
          expectedResults: "Aumento de rango de movimiento (ROM) en un 15% para la próxima semana.",
          nextProgressionRecommendation: "Aumentar volumen a 12 repeticiones en ejercicios base."
        }
      ]
    }
  ];
}

export function saveClient(client: ClientProfile): void {
  const clients = getSavedClients();
  const idx = clients.findIndex(c => c.id === client.id);
  if (idx >= 0) {
    clients[idx] = client;
  } else {
    clients.push(client);
  }
  localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
}

export function getSavedWorkoutLogs(): WorkoutLog[] {
  const saved = localStorage.getItem(STORAGE_KEYS.WORKOUT_LOGS);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fallback
    }
  }
  return INITIAL_WORKOUT_LOGS;
}

export function saveWorkoutLog(log: WorkoutLog): WorkoutLog[] {
  const current = getSavedWorkoutLogs();
  const newLog = {
    ...log,
    id: Date.now(),
    timestamp: new Date().toISOString(),
  };
  const updated = [newLog, ...current];
  localStorage.setItem(STORAGE_KEYS.WORKOUT_LOGS, JSON.stringify(updated));
  return updated;
}

export function getSavedWorkoutSessions(): WorkoutSession[] {
  const saved = localStorage.getItem(STORAGE_KEYS.WORKOUT_SESSIONS);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fallback
    }
  }
  return INITIAL_WORKOUT_SESSIONS;
}

export function saveWorkoutSession(session: WorkoutSession): WorkoutSession[] {
  const current = getSavedWorkoutSessions();
  const newSession = {
    ...session,
    id: Date.now(),
  };
  const updated = [newSession, ...current];
  localStorage.setItem(STORAGE_KEYS.WORKOUT_SESSIONS, JSON.stringify(updated));
  return updated;
}

export async function searchExercisesAPI(query: string): Promise<Exercise[]> {
  const config = getStoredAuthConfig();
  const headers = buildAuthHeaders(config);
  try {
    // Petición a la API de wger usando su buscador por texto
    const res = await fetch(`${config.baseUrl}/exercise/search/?term=${encodeURIComponent(query)}`, { headers });
    if (res.ok) {
      const data = await res.json();
      if (data.suggestions) {
        // Mapear el formato de autocompletado de wger a nuestro tipo Exercise
        return data.suggestions.map((s: any) => ({
           id: s.data.id,
           name: s.value,
           description: s.data.description || '',
           category: s.data.category,
           image_url: s.data.image || s.data.image_url || null,
           equipment: [],
           muscles: [],
           muscles_secondary: []
        }));
      }
    }
  } catch (e) {
    console.warn("Wger search API unavailable, falling back to local search", e);
  }
  
  // Local fallback: search in our merged catalog
  const lowerQuery = query.toLowerCase();
  const allExercises = [...CLINICAL_EXERCISES, ...EXTENDED_CLINICAL_EXERCISES];
  
  // Deduplicate first
  const uniqueExercises = Array.from(new Map(allExercises.map(e => [e.id, e])).values());
  
  return uniqueExercises.filter(ex => 
     ex.name.toLowerCase().includes(lowerQuery) || 
     (ex.description && ex.description.toLowerCase().includes(lowerQuery))
  );
}

export interface ClientProgressEntry {
  date: string;
  notes: string;
  weightKgs?: number;
  adherenceRate?: number;
  nextProgressionRecommendation?: string;
  expectedResults?: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  age?: number;
  activeRoutineId?: number;
  history: ClientProgressEntry[];
}
