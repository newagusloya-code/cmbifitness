// glossaryData.ts — Fuente de verdad de datos clínicos.
// Separado del componente para que el árbol de renderizado no recalcule
// el array en cada re-render (sin necesidad de useMemo externo).

export type ConceptCategory =
  | 'Fuerza'
  | 'Composición'
  | 'Carga y Fatiga'
  | 'Fisiología'
  | 'Periodización';

export type Concept = {
  id: string;
  term: string;
  category: ConceptCategory;
  formula: string;
  description: string;
  clinicalNote: string;
};

// Mapa de color semántico por categoría — solo utilidades Tailwind válidas.
// Usado para el dot-indicator en las tarjetas colapsadas.
export const CATEGORY_COLOR: Record<ConceptCategory, string> = {
  Fuerza:          'bg-red-500',
  Composición:     'bg-violet-500',
  'Carga y Fatiga':'bg-amber-500',
  Fisiología:      'bg-teal-500',
  Periodización:   'bg-blue-500',
};

// Texto de badge por categoría (contraste sobre fondo oscuro para modo gym)
export const CATEGORY_BADGE: Record<ConceptCategory, string> = {
  Fuerza:          'bg-red-100 text-red-700',
  Composición:     'bg-violet-100 text-violet-700',
  'Carga y Fatiga':'bg-amber-100 text-amber-700',
  Fisiología:      'bg-teal-100 text-teal-700',
  Periodización:   'bg-blue-100 text-blue-700',
};

export const ALL_CATEGORIES: ConceptCategory[] = [
  'Fuerza',
  'Composición',
  'Carga y Fatiga',
  'Periodización',
  'Fisiología',
];

export const CONCEPTS_DB: Concept[] = [
  {
    id: '1',
    term: 'RPE - Borg/Foster',
    category: 'Carga y Fatiga',
    formula: 'FC ≈ RPE(6-20) × 10',
    description: 'Mide la percepción subjetiva del esfuerzo de un individuo durante la actividad física.',
    clinicalNote:
      'Novatos sobreestiman sistemáticamente el esfuerzo. No aplicable en aislamiento puro.',
  },
  {
    id: '2',
    term: 'RIR - Zourdos',
    category: 'Carga y Fatiga',
    formula: 'RPE = 10 - RIR',
    description: 'Mide las repeticiones en reserva, es decir, cuántas repeticiones adicionales podría haber realizado el sujeto antes del fallo muscular.',
    clinicalNote:
      'Precisión decae drásticamente a >15 repeticiones por fatiga del SNC.',
  },
  {
    id: '3',
    term: '1RM Absoluto',
    category: 'Fuerza',
    formula: '1RM = Carga (kg)',
    description: 'Mide la fuerza máxima real de un individuo, definida como la mayor cantidad de peso que puede levantar en un solo esfuerzo máximo.',
    clinicalNote:
      'Medición directa no recomendada en poblaciones clínicas o novatos por riesgo de lesión.',
  },
  {
    id: '4',
    term: 'Brzycki',
    category: 'Fuerza',
    formula: '1RM = Peso × (36 / (37 - Reps))',
    description: 'Fórmula para estimar la fuerza máxima (1RM) basándose en el peso levantado y el número de repeticiones realizadas.',
    clinicalNote:
      'Asintótica y sobreestima brutalmente a >10 repeticiones.',
  },
  {
    id: '5',
    term: 'Epley',
    category: 'Fuerza',
    formula: '1RM = Peso × (1 + (Reps / 30))',
    description: 'Estima la fuerza máxima (1RM) permitiendo usar un mayor número de repeticiones para el cálculo.',
    clinicalNote:
      'Lineal; requiere ajuste algorítmico si Reps=1 para no fallar la lógica de base.',
  },
  {
    id: '6',
    term: 'FFMI Normalizado',
    category: 'Composición',
    formula: 'FFMI_norm = FFMI + 6.1 × (1.8 - Altura)',
    description: 'Mide el Índice de Masa Libre de Grasa normalizado para evaluar de forma justa la muscularidad sin importar la altura.',
    clinicalNote:
      'El corte de sospecha es >25 en hombres. Requiere corrección alométrica por altura.',
  },
  {
    id: '7',
    term: 'sRPE (Foster)',
    category: 'Carga y Fatiga',
    formula: 'sRPE = RPE × Tiempo (min)',
    description: 'Mide la carga de entrenamiento interna, multiplicando la percepción del esfuerzo por la duración de la sesión.',
    clinicalNote:
      'Extraer el calentamiento inactivo, de lo contrario la carga interna (AU) se falsea.',
  },
  {
    id: '8',
    term: 'Volumen (Tonelaje)',
    category: 'Periodización',
    formula: 'VL = Sets × Reps × Peso',
    description: 'Mide el trabajo mecánico total realizado en una sesión mediante la suma del peso total desplazado.',
    clinicalNote:
      'Engañoso comparando diferentes ejercicios. Requiere flag para masa corporal.',
  },
  {
    id: '9',
    term: 'Densidad (Superset)',
    category: 'Periodización',
    formula: 'D = Σ(VL) / Tiempo Total',
    description: 'Mide la cantidad de trabajo realizado por unidad de tiempo, indicando la intensidad y estrés metabólico de la sesión.',
    clinicalNote:
      'El ratio explota si el tiempo tiende a 0. Excelente métrica metabólica.',
  },
  {
    id: '10',
    term: 'Katch-McArdle',
    category: 'Composición',
    formula: 'BMR = 370 + (21.6 × LBM)',
    description: 'Calcula la tasa metabólica basal (BMR) basándose exclusivamente en la masa corporal magra (LBM).',
    clinicalNote:
      'Superior a Mifflin si el % de grasa es exacto. Mifflin subestima fuertemente en hipertrofia.',
  },
];

