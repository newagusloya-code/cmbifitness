import { InfoTooltip } from './InfoTooltip';
import React, { useState, useEffect } from 'react';
import { WorkoutLog, WorkoutSession, computeRoutineStats } from '../services/wgerApi';

interface StatsDashboardProps {
	logs: WorkoutLog[];
	sessions: WorkoutSession[];
}

interface PersonalRecord {
  id: string;
  exerciseName: string;
  weight: number;
  unit: 'kg' | 'lbs';
  weightKg: number;
  weightLbs: number;
  reps: number;
  estimated1RMKg: number;
  estimated1RMLbs: number;
  date: string;
}

const STORAGE_KEY_PRS = 'hometherapy_personal_records';
const STORAGE_KEY_ANTHRO = 'hometherapy_anthro_profile';

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ logs, sessions }) => {
	const routineStats = computeRoutineStats(logs);
    const [activeSubTab, setActiveSubTab] = useState<'1rm' | 'anthro' | 'srpe' | 'prs'>('1rm');

    // -------------------------------------------------------------
    // 1. CALCULADORA 1RM STATE
    // -------------------------------------------------------------
    const [calcExercise, setCalcExercise] = useState('Sentadilla con Barra (Back Squat)');
    const [calcWeight, setCalcWeight] = useState<number>(100);
    const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
    const [calcReps, setCalcReps] = useState<number>(5);
    const [calcRir, setCalcRir] = useState<number>(1);

    // -------------------------------------------------------------
    // 2. ANTROPOMETRÍA & COMPOSICIÓN CORPORAL STATE
    // -------------------------------------------------------------
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState<number>(25);
    const [bodyWeight, setBodyWeight] = useState<number>(75);
    const [heightCm, setHeightCm] = useState<number>(175);
    const [neckCm, setNeckCm] = useState<number>(38);
    const [waistCm, setWaistCm] = useState<number>(82);
    const [hipCm, setHipCm] = useState<number>(95);
    const [activityLevel, setActivityLevel] = useState<number>(1.55); // Moderadamente activo

    // -------------------------------------------------------------
    // 3. sRPE / CARGA DE SESIÓN STATE
    // -------------------------------------------------------------
    const [srpeRating, setSrpeRating] = useState<number>(7);
    const [sessionDurationMinutes, setSessionDurationMinutes] = useState<number>(60);

    // -------------------------------------------------------------
    // 4. HISTORIAL DE PRS STATE
    // -------------------------------------------------------------
    const [records, setRecords] = useState<PersonalRecord[]>([]);

    useEffect(() => {
        const savedPRs = localStorage.getItem(STORAGE_KEY_PRS);
        if (savedPRs) {
            try {
                setRecords(JSON.parse(savedPRs));
            } catch {
                // fallback
            }
        } else {
            // Default initial PRs
            const initialPRs: PersonalRecord[] = [
                { id: '1', exerciseName: 'Sentadilla con Barra', weight: 120, unit: 'kg', weightKg: 120, weightLbs: 264.6, reps: 5, estimated1RMKg: 139.5, estimated1RMLbs: 307.5, date: '2026-08-15' },
                { id: '2', exerciseName: 'Press de Banca', weight: 90, unit: 'kg', weightKg: 90, weightLbs: 198.4, reps: 6, estimated1RMKg: 108.0, estimated1RMLbs: 238.1, date: '2026-08-18' },
                { id: '3', exerciseName: 'Peso Muerto Rumano', weight: 140, unit: 'kg', weightKg: 140, weightLbs: 308.6, reps: 4, estimated1RMKg: 157.5, estimated1RMLbs: 347.2, date: '2026-08-22' },
            ];
            setRecords(initialPRs);
            localStorage.setItem(STORAGE_KEY_PRS, JSON.stringify(initialPRs));
        }

        const savedAnthro = localStorage.getItem(STORAGE_KEY_ANTHRO);
        if (savedAnthro) {
            try {
                const a = JSON.parse(savedAnthro);
                if (a.gender) setGender(a.gender);
                if (a.age) setAge(a.age);
                if (a.bodyWeight) setBodyWeight(a.bodyWeight);
                if (a.heightCm) setHeightCm(a.heightCm);
                if (a.neckCm) setNeckCm(a.neckCm);
                if (a.waistCm) setWaistCm(a.waistCm);
                if (a.hipCm) setHipCm(a.hipCm);
            } catch {
                // ignore
            }
        }
    }, []);

    // -------------------------------------------------------------
    // CÁLCULOS 1RM
    // -------------------------------------------------------------
    const effectiveReps = calcReps + calcRir;
    
    // Normalize input to KG for biomechanical precision
    const calcWeightKg = weightUnit === 'lbs' ? calcWeight * 0.45359237 : calcWeight;
    const calcWeightLbs = weightUnit === 'kg' ? calcWeight * 2.20462 : calcWeight;

    // Fórmulas Clásicas de Biomecánica (en KG)
    const brzycki = calcWeightKg * (36 / (37 - effectiveReps));
    const epley = calcWeightKg * (1 + 0.0333 * effectiveReps);
    const lander = (100 * calcWeightKg) / (101.3 - 2.67123 * effectiveReps);
    const lombardi = calcWeightKg * Math.pow(effectiveReps, 0.10);
    const average1RM = Math.round(((brzycki + epley + lander + lombardi) / 4) * 10) / 10;
    const average1RMLbs = Math.round((average1RM * 2.20462) * 10) / 10;

    const percentages = [
        { pct: 100, reps: '1', goal: 'Fuerza Máxima / Potencia Pura' },
        { pct: 95, reps: '2', goal: 'Fuerza Máxima Neural' },
        { pct: 90, reps: '3-4', goal: 'Fuerza / Tensión Mecánica Alta' },
        { pct: 85, reps: '5-6', goal: 'Fuerza-Hipertrofia Funcional' },
        { pct: 80, reps: '7-8', goal: 'Hipertrofia Óptima (Tensión/Volumen)' },
        { pct: 75, reps: '9-10', goal: 'Hipertrofia / Estrés Metabólico' },
        { pct: 70, reps: '11-12', goal: 'Hipertrofia Metabólica / Resistencia' },
        { pct: 65, reps: '13-15', goal: 'Resistencia Muscular y Capilarización' },
    ];

    
    const handleToggleUnit = (newUnit: 'kg' | 'lbs') => {
        if (newUnit === weightUnit) return;
        if (newUnit === 'lbs') {
            setCalcWeight(Math.round((calcWeight * 2.20462) * 10) / 10);
        } else {
            setCalcWeight(Math.round((calcWeight * 0.45359237) * 10) / 10);
        }
        setWeightUnit(newUnit);
    };

    const handleSavePR = () => {
        const rawWeight = calcWeight;
        const inputUnit = weightUnit;
        const weightInKg = inputUnit === 'lbs' ? Math.round((rawWeight * 0.45359237) * 10) / 10 : rawWeight;
        const weightInLbs = inputUnit === 'kg' ? Math.round((rawWeight * 2.20462) * 10) / 10 : rawWeight;

        const newPR: PersonalRecord = {
            id: `pr-${Date.now()}`,
            exerciseName: calcExercise,
            weight: rawWeight,
            unit: inputUnit,
            weightKg: weightInKg,
            weightLbs: weightInLbs,
            reps: calcReps,
            estimated1RMKg: average1RM,
            estimated1RMLbs: average1RMLbs,
            date: new Date().toISOString().split('T')[0]
        };
        const updated = [newPR, ...records];
        setRecords(updated);
        localStorage.setItem(STORAGE_KEY_PRS, JSON.stringify(updated));
        alert(`¡Récord guardado para ${calcExercise}!\nMarca: ${rawWeight} ${inputUnit} (${inputUnit === 'lbs' ? weightInKg + ' kg' : weightInLbs + ' lbs'})\n1RM Estimado: ${average1RM} kg (${average1RMLbs} lbs)`);
    };

    const handleDeletePR = (id: string) => {
        const updated = records.filter(r => r.id !== id);
        setRecords(updated);
        localStorage.setItem(STORAGE_KEY_PRS, JSON.stringify(updated));
    };

    // -------------------------------------------------------------
    // CÁLCULOS ANTROPOMÉTRICOS & COMPOSICIÓN CORPORAL
    // -------------------------------------------------------------
    const heightM = heightCm / 100;
    const bmi = Math.round((bodyWeight / (heightM * heightM)) * 10) / 10;
    
    // US Navy Body Fat Formula
    let bodyFatPct = 15;
    if (gender === 'male') {
        const diff = Math.max(1, waistCm - neckCm);
        bodyFatPct = 495 / (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(heightCm)) - 450;
    } else {
        const sumDiff = Math.max(1, waistCm + hipCm - neckCm);
        bodyFatPct = 495 / (1.29579 - 0.35004 * Math.log10(sumDiff) + 0.22100 * Math.log10(heightCm)) - 450;
    }
    bodyFatPct = Math.max(3, Math.min(55, Math.round(bodyFatPct * 10) / 10));

    const fatMassKg = Math.round((bodyWeight * (bodyFatPct / 100)) * 10) / 10;
    const leanMassKg = Math.round((bodyWeight - fatMassKg) * 10) / 10;
    
    // FFMI (Fat-Free Mass Index) normalizado a 1.80m
    const rawFfmi = leanMassKg / (heightM * heightM);
    const normalizedFfmi = Math.round((rawFfmi + 6.1 * (1.8 - heightM)) * 10) / 10;

    // BMR (Mifflin - St Jeor)
    const bmr = gender === 'male'
        ? Math.round(10 * bodyWeight + 6.25 * heightCm - 5 * age + 5)
        : Math.round(10 * bodyWeight + 6.25 * heightCm - 5 * age - 161);
    
    const tdee = Math.round(bmr * activityLevel);

    const handleSaveAnthro = () => {
        const profile = { gender, age, bodyWeight, heightCm, neckCm, waistCm, hipCm };
        localStorage.setItem(STORAGE_KEY_ANTHRO, JSON.stringify(profile));
        alert('¡Perfil antropométrico guardado con éxito!');
    };

    // -------------------------------------------------------------
    // CÁLCULOS sRPE & CARGA DE SESIÓN (Foster et al.)
    // -------------------------------------------------------------
    const sessionLoadAU = srpeRating * sessionDurationMinutes; // Unidades Arbitrarias (AU)
    
    const getLoadZone = (au: number) => {
        if (au < 300) return { text: 'Carga Ligera / Regenerativa', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
        if (au < 500) return { text: 'Carga Óptima de Desarrollo', color: 'text-blue-700 bg-blue-50 border-blue-200' };
        if (au < 700) return { text: 'Carga Alta / Sobrecarga Progresiva', color: 'text-amber-700 bg-amber-50 border-amber-200' };
        return { text: 'Carga Excesiva / Riesgo de Sobreentrenamiento', color: 'text-rose-700 bg-rose-50 border-rose-200' };
    };

	return (
		<section className="space-y-8 animate-fadeIn">
            {/* Header Principal */}
			<div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
                            Laboratorio de Biomecánica & Rendimiento
                        </span>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mt-2">Biometría, 1RM & Cargas Clínicas</h2>
                    <p className="text-slate-500 text-xs font-medium mt-1">
                        Monitoreo integral de fuerza máxima, composición corporal, índice de fatiga sRPE y volumen muscular.
                    </p>
                </div>

                {/* Sub-Tabs Selector */}
                <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                    <button
                        onClick={() => setActiveSubTab('1rm')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                            activeSubTab === '1rm' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        🎯 Calculadora 1RM
                    </button>
                    <button
                        onClick={() => setActiveSubTab('anthro')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                            activeSubTab === 'anthro' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        ⚖️ Antropometría & FFMI
                    </button>
                    <button
                        onClick={() => setActiveSubTab('srpe')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                            activeSubTab === 'srpe' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        ⚡ Carga sRPE & Fatiga
                    </button>
                    <button
                        onClick={() => setActiveSubTab('prs')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                            activeSubTab === 'prs' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        🏆 Récords Personales ({records.length})
                    </button>
                </div>
            </div>

            {/* ========================================================= */}
            {/* SUBTAB 1: CALCULADORA 1RM & TABLA DE PORCENTAJES          */}
            {/* ========================================================= */}
            {activeSubTab === '1rm' && (
                <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
                    {/* Inputs Panel */}
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Parámetros de Levantamiento</h3>
                            <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">Multi-Fórmula</span>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Ejercicio Base</label>
                            <select
                                value={calcExercise}
                                onChange={(e) => setCalcExercise(e.target.value)}
                                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-semibold focus:outline-none focus:border-blue-500"
                            >
                                <option value="Sentadilla con Barra (Back Squat)">Sentadilla con Barra (Back Squat)</option>
                                <option value="Press de Banca Plano (Bench Press)">Press de Banca Plano (Bench Press)</option>
                                <option value="Peso Muerto Convencional (Deadlift)">Peso Muerto Convencional (Deadlift)</option>
                                <option value="Peso Muerto Rumano (RDL)">Peso Muerto Rumano (RDL)</option>
                                <option value="Press Militar con Barra (Overhead Press)">Press Militar con Barra (Overhead Press)</option>
                                <option value="Dominadas Lastradas (Pull-Ups)">Dominadas Lastradas (Pull-Ups)</option>
                                <option value="Hip Thrust con Barra">Hip Thrust con Barra</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="text-xs font-bold text-slate-700">Peso Levantado</label>
                                    <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                                        <button
                                            type="button"
                                            onClick={() => handleToggleUnit('kg')}
                                            className={`px-2 py-0.5 text-[10px] font-black rounded-md transition-all ${weightUnit === 'kg' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                                        >
                                            KG
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleToggleUnit('lbs')}
                                            className={`px-2 py-0.5 text-[10px] font-black rounded-md transition-all ${weightUnit === 'lbs' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                                        >
                                            LBS
                                        </button>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="1"
                                        max="1500"
                                        step="0.5"
                                        value={calcWeight}
                                        onChange={(e) => setCalcWeight(parseFloat(e.target.value) || 0)}
                                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500 pr-12"
                                    />
                                    <span className="absolute right-3 top-2.5 text-xs font-black text-slate-400 uppercase">
                                        {weightUnit}
                                    </span>
                                </div>
                                <p className="text-[10px] font-medium text-slate-400 mt-1">
                                    ≈ {weightUnit === 'kg' ? (Math.round((calcWeight * 2.20462) * 10) / 10) + ' lbs' : (Math.round((calcWeight * 0.45359237) * 10) / 10) + ' kg'}
                                </p>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Repeticiones Hechas</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={calcReps}
                                    onChange={(e) => setCalcReps(parseInt(e.target.value) || 1)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="text-xs font-bold text-slate-700">RIR (Reps en Reserva)</label>
                                <span className="text-xs font-black text-blue-600">RIR {calcRir} (RPE {10 - calcRir})</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="4"
                                step="1"
                                value={calcRir}
                                onChange={(e) => setCalcRir(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-bold">
                                <span>RIR 0 (Fallo)</span>
                                <span>RIR 2 (Ideal)</span>
                                <span>RIR 4 (Lejano)</span>
                            </div>
                        </div>

                        {/* Resultado Destacado */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-md shadow-blue-200 text-center space-y-1">
                            <div className="flex items-center justify-center gap-1 text-[10px] uppercase font-black tracking-widest text-blue-200">
     <span>1RM Promedio Estimado</span>
     <InfoTooltip term="1RM (Repetición Máxima)" description="Peso máximo que puedes mover en 1 repetición con técnica perfecta. Calculado mediante fórmulas submáximas." formula="W × (36 / (37 - Reps))" />
   </div>
                            <p className="text-3xl sm:text-4xl font-black">{average1RM} <span className="text-xl font-bold text-blue-200">kg</span> <span className="text-lg font-medium text-blue-300">({average1RMLbs} lbs)</span></p>
                            <p className="text-[11px] text-blue-100 font-medium pt-1">
                                {calcWeight} kg × {calcReps} reps @ RIR {calcRir}
                            </p>
                        </div>

                        <button
                            onClick={handleSavePR}
                            className="w-full bg-slate-900 text-white font-black py-3 rounded-xl text-xs hover:bg-slate-800 transition-colors shadow-xs"
                        >
                            💾 Guardar como Récord Personal (PR)
                        </button>
                    </div>

                    {/* Tabla de Porcentajes de Carga y Modelos Comparativos */}
                    <div className="space-y-6">
                        {/* Comparación de Ecuaciones Científicas */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                                <div className="flex items-center justify-center gap-1"><p className="text-[9px] font-black uppercase text-slate-400">Brzycki</p><InfoTooltip term="Fórmula de Brzycki" description="Óptima para 1-10 repeticiones. Relación lineal." formula="W × (36 / (37 - Reps))" /></div>
                                <p className="text-base font-black text-slate-900 mt-0.5">{Math.round(brzycki * 10) / 10} kg</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                                <div className="flex items-center justify-center gap-1"><p className="text-[9px] font-black uppercase text-slate-400">Epley</p><InfoTooltip term="Fórmula de Epley" description="Estándar en fuerza e hipertrofia. Suma 3.33% por repetición." formula="W × (1 + 0.0333 × Reps)" /></div>
                                <p className="text-base font-black text-slate-900 mt-0.5">{Math.round(epley * 10) / 10} kg</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                                <div className="flex items-center justify-center gap-1"><p className="text-[9px] font-black uppercase text-slate-400">Lander</p><InfoTooltip term="Fórmula de Lander" description="Ecuación exponencial de fatiga acumulada." formula="(100 × W) / (101.3 - 2.67123 × Reps)" /></div>
                                <p className="text-base font-black text-slate-900 mt-0.5">{Math.round(lander * 10) / 10} kg</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                                <div className="flex items-center justify-center gap-1"><p className="text-[9px] font-black uppercase text-slate-400">Lombardi</p><InfoTooltip term="Fórmula de Lombardi" description="Modelo potencial de potencia biomecánica." formula="W × Reps^0.10" /></div>
                                <p className="text-base font-black text-slate-900 mt-0.5">{Math.round(lombardi * 10) / 10} kg</p>
                            </div>
                        </div>

                        {/* Tabla de Periodización y Cargas */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                                    Tabla de Prescripción de Cargas (% 1RM)
                                </h3>
                                <span className="text-[10px] font-bold text-slate-500">Para {calcExercise}</span>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead>
                                        <tr className="border-b border-slate-100 text-[10px] font-black uppercase text-slate-400">
                                            <th className="pb-2">% 1RM</th>
                                            <th className="pb-2">Carga (kg)</th>
                                            <th className="pb-2">Carga (lbs)</th>
                                            <th className="pb-2">Rango Reps</th>
                                            <th className="pb-2">Zona de Adaptación Fisiológica</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {percentages.map(row => {
                                            const weightKg = Math.round((average1RM * (row.pct / 100)) * 2) / 2;
                                            return (
                                                <tr key={row.pct} className="hover:bg-slate-50/80 transition-colors">
                                                    <td className="py-2.5 font-black text-blue-600">{row.pct}%</td>
                                                    <td className="py-2.5 font-black text-slate-900">{weightKg} kg</td>
                                                    <td className="py-2.5 font-black text-blue-700">{Math.round((weightKg * 2.20462) * 2) / 2} lbs</td>
                                                    <td className="py-2.5 text-slate-600 font-bold">{row.reps} reps</td>
                                                    <td className="py-2.5 text-slate-500 font-medium">{row.goal}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* SUBTAB 2: ANTROPOMETRÍA, COMPOSICIÓN & FFMI               */}
            {/* ========================================================= */}
            {activeSubTab === 'anthro' && (
                <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Mediciones Antropométricas</h3>
                        
                        <div className="flex gap-2">
                            <button
                                onClick={() => setGender('male')}
                                className={`flex-1 py-2 rounded-xl text-xs font-black border transition-all ${
                                    gender === 'male' ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-slate-50 border-slate-200 text-slate-600'
                                }`}
                            >
                                ♂ Masculino
                            </button>
                            <button
                                onClick={() => setGender('female')}
                                className={`flex-1 py-2 rounded-xl text-xs font-black border transition-all ${
                                    gender === 'female' ? 'bg-pink-50 border-pink-300 text-pink-800' : 'bg-slate-50 border-slate-200 text-slate-600'
                                }`}
                            >
                                ♀ Femenino
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Peso (kg)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={bodyWeight}
                                    onChange={(e) => setBodyWeight(parseFloat(e.target.value) || 0)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Altura (cm)</label>
                                <input
                                    type="number"
                                    value={heightCm}
                                    onChange={(e) => setHeightCm(parseInt(e.target.value) || 0)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Cuello (cm)</label>
                                <input
                                    type="number"
                                    step="0.5"
                                    value={neckCm}
                                    onChange={(e) => setNeckCm(parseFloat(e.target.value) || 0)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Cintura (cm)</label>
                                <input
                                    type="number"
                                    step="0.5"
                                    value={waistCm}
                                    onChange={(e) => setWaistCm(parseFloat(e.target.value) || 0)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {gender === 'female' && (
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Cadera (cm)</label>
                                <input
                                    type="number"
                                    step="0.5"
                                    value={hipCm}
                                    onChange={(e) => setHipCm(parseFloat(e.target.value) || 0)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Factor de Actividad (TDEE)</label>
                            <select
                                value={activityLevel}
                                onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-semibold focus:outline-none focus:border-blue-500"
                            >
                                <option value={1.2}>Sedentario (Poco o ningún ejercicio)</option>
                                <option value={1.375}>Ligero (Ejercicio 1-3 días/semana)</option>
                                <option value={1.55}>Moderado (Ejercicio 3-5 días/semana)</option>
                                <option value={1.725}>Intenso (Entrenamiento diario duro)</option>
                                <option value={1.9}>Atleta / Fisioterapeuta en movimiento</option>
                            </select>
                        </div>

                        <button
                            onClick={handleSaveAnthro}
                            className="w-full bg-blue-600 text-white font-black py-3 rounded-xl text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                        >
                            💾 Guardar Mediciones
                        </button>
                    </div>

                    {/* Resultados Clínicos y Biomecánicos */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
                                <div className="flex items-center justify-between"><p className="text-[10px] font-black uppercase text-slate-400">% Grasa</p><InfoTooltip term="% Grasa Corporal (US Navy)" description="Estimación mediante circunferencias corporales (cuello, cintura y cadera)." /></div>
                                <p className="text-3xl font-black text-slate-900 mt-1">{bodyFatPct}%</p>
                                <span className="text-[10px] font-bold text-blue-600 mt-1 block">
                                    {fatMassKg} kg grasa
                                </span>
                            </div>

                            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
                                <p className="text-[10px] font-black uppercase text-slate-400">Masa Magra (LBM)</p>
                                <p className="text-3xl font-black text-emerald-600 mt-1">{leanMassKg} <span className="text-sm font-bold">kg</span></p>
                                <span className="text-[10px] font-bold text-slate-400 mt-1 block">
                                    {Math.round((100 - bodyFatPct) * 10) / 10}% masa libre
                                </span>
                            </div>

                            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
                                <div className="flex items-center justify-between"><p className="text-[10px] font-black uppercase text-slate-400">FFMI Normalizado</p><InfoTooltip term="FFMI (Fat-Free Mass Index)" description="Índice de masa muscular magra ajustado a 1.80m de estatura. Límite natural ~25." formula="Masa Magra / Altura² + 6.1 × (1.8 - Altura)" /></div>
                                <p className="text-3xl font-black text-purple-600 mt-1">{normalizedFfmi}</p>
                                <span className="text-[10px] font-bold text-purple-800 bg-purple-50 px-1.5 py-0.2 rounded mt-1 inline-block">
                                    {normalizedFfmi > 22 ? 'Excelente Hipertrofia' : normalizedFfmi > 19 ? 'Promedio Atleta' : 'Base de Desarrollo'}
                                </span>
                            </div>

                            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
                                <div className="flex items-center justify-between"><p className="text-[10px] font-black uppercase text-slate-400">Gasto TDEE</p><InfoTooltip term="TDEE (Gasto Energético Total)" description="Calorías totales quemadas al día según BMR y factor de actividad." formula="BMR (Mifflin-St Jeor) × Factor Actividad" /></div>
                                <p className="text-3xl font-black text-amber-600 mt-1">{tdee} <span className="text-sm font-bold">kcal</span></p>
                                <span className="text-[10px] font-bold text-slate-400 mt-1 block">
                                    BMR: {bmr} kcal/día
                                </span>
                            </div>
                        </div>

                        {/* Barra de Distribución Grasa vs Masa Magra */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-4">
                                Proporción Tisular Corporal
                            </h4>
                            <div className="w-full h-6 bg-slate-100 rounded-full overflow-hidden flex">
                                <div style={{ width: `${100 - bodyFatPct}%` }} className="bg-emerald-500 h-full flex items-center justify-center text-[10px] font-black text-white">
                                    Masa Magra ({leanMassKg} kg)
                                </div>
                                <div style={{ width: `${bodyFatPct}%` }} className="bg-amber-400 h-full flex items-center justify-center text-[10px] font-black text-slate-900">
                                    Grasa ({fatMassKg} kg)
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-xs text-slate-500 font-bold mt-3">
                                <span>IMC Clínico: <strong className="text-slate-800">{bmi} kg/m²</strong></span>
                                <span>Estatura: <strong className="text-slate-800">{heightCm} cm</strong></span>
                                <span>Peso Total: <strong className="text-slate-800">{bodyWeight} kg</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* SUBTAB 3: CARGA sRPE (SESSION RPE) & CONTROL DE FATIGA    */}
            {/* ========================================================= */}
            {activeSubTab === 'srpe' && (
                <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Calculadora de Carga de Sesión (sRPE)</h3>
                        
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="text-xs font-bold text-slate-700">RPE Global de la Sesión (Borg CR-10)</label>
                                <span className="text-xs font-black text-blue-600">{srpeRating} / 10</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                step="0.5"
                                value={srpeRating}
                                onChange={(e) => setSrpeRating(parseFloat(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-bold">
                                <span>1 (Muy Fácil)</span>
                                <span>5 (Moderado)</span>
                                <span>7-8 (Duro)</span>
                                <span>10 (Extenuante)</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Duración Total de Sesión (Minutos)</label>
                            <input
                                type="number"
                                min="10"
                                max="180"
                                value={sessionDurationMinutes}
                                onChange={(e) => setSessionDurationMinutes(parseInt(e.target.value) || 0)}
                                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-1">
                            <div className="flex items-center justify-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
     <span>Carga Calculada (Foster AU)</span>
     <InfoTooltip term="sRPE (Session RPE)" description="Cuantificación de carga interna de entrenamiento en Unidades Arbitrarias." formula="RPE Global (1-10) × Minutos Sesión" />
   </div>
                            <p className="text-4xl font-black text-slate-900">{sessionLoadAU} <span className="text-sm font-bold text-slate-400">AU</span></p>
                            <div className={`mt-2 py-1 px-3 rounded-lg text-xs font-black border inline-block ${getLoadZone(sessionLoadAU).color}`}>
                                {getLoadZone(sessionLoadAU).text}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                            Pautas Biomecánicas de Fatiga y Recuperación
                        </h4>
                        <div className="space-y-3">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                                <span className="text-xl">🧠</span>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-800">Fatiga del Sistema Nervioso Central (SNC)</h5>
                                    <p className="text-[11px] text-slate-600 mt-0.5">
                                        Generada principalmente por series llevadas a RPE 9.5-10 en ejercicios multiarticulares pesados (Sentadilla/Peso Muerto). Requiere 48-72 hrs de recuperación para máxima adaptación neural.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                                <span className="text-xl">💪</span>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-800">Fatiga Periférica e Hipertrofia</h5>
                                    <p className="text-[11px] text-slate-600 mt-0.5">
                                        Generada por volumen acumulado y estrés metabólico en rango RPE 7-8. Permite mayor frecuencia semanal sin comprometer articulaciones ni el eje neuroendocrino.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* SUBTAB 4: HISTORIAL DE RÉCORDS PERSONALES (PRS)           */}
            {/* ========================================================= */}
            {activeSubTab === 'prs' && (
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Marcas Máximas Guardadas</h3>
                        <button
                            onClick={() => setActiveSubTab('1rm')}
                            className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-xl text-xs font-black hover:bg-blue-600 hover:text-white transition-all"
                        >
                            + Calcular y Guardar Nuevo PR
                        </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {records.map(record => (
                            <div key={record.id} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs relative">
                                <button
                                    onClick={() => handleDeletePR(record.id)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 text-xs font-black p-1"
                                    title="Eliminar PR"
                                >
                                    ✕
                                </button>

                                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                                    PR Registrado
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2 line-clamp-1">{record.exerciseName}</h4>
                                
                                <div className="flex flex-wrap items-baseline gap-1.5 mt-2">
                                    <span className="text-2xl font-black text-slate-900">
                                        {record.estimated1RMKg || (record as any).estimated1RM} kg
                                    </span>
                                    <span className="text-xs font-bold text-blue-600">
                                        ({record.estimated1RMLbs || Math.round(((record as any).estimated1RM * 2.20462) * 10) / 10} lbs)
                                    </span>
                                    <span className="text-[10px] font-black uppercase text-slate-400 block w-full">1RM Estimado</span>
                                </div>

                                <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500 font-semibold">
                                    <span>
                                        Marca: <strong className="text-slate-800">{record.weight} {record.unit || 'kg'}</strong>
                                        <span className="text-[11px] text-slate-400 ml-1">
                                            ({record.unit === 'lbs' ? (record.weightKg || Math.round((record.weight * 0.45359237) * 10) / 10) + ' kg' : (record.weightLbs || Math.round((record.weight * 2.20462) * 10) / 10) + ' lbs'})
                                        </span>
                                        <span className="ml-1 text-blue-600 font-bold">× {record.reps} reps</span>
                                    </span>
                                    <span className="text-[11px] text-slate-400">{new Date(record.date).toLocaleDateString('es-MX', { day: '2-digit', month: 'short' })}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
		</section>
	);
};
