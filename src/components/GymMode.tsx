import { InfoTooltip } from './InfoTooltip';
import React, { useMemo, useState, useEffect } from 'react';
import { Routine, computeGymSequence, MUSCLE_CATALOG, EQUIPMENT_CATALOG, GymInterleavedSet } from '../services/wgerApi';

interface GymModeProps {
	routine: Routine;
	initialDayOrder: number;
	onFinishWorkout: () => void;
}

export const GymMode: React.FC<GymModeProps> = ({ routine, initialDayOrder, onFinishWorkout }) => {
	const sequence = useMemo(() => computeGymSequence(routine, initialDayOrder), [routine, initialDayOrder]);
	const [completed, setCompleted] = useState<Set<string>>(new Set());
	const [restTimer, setRestTimer] = useState<number | null>(null);
	const [isResting, setIsResting] = useState<boolean>(false);

	// Rest countdown timer effect
	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | null = null;
		if (isResting && restTimer !== null && restTimer > 0) {
			interval = setInterval(() => {
				setRestTimer(prev => (prev !== null && prev > 1 ? prev - 1 : 0));
			}, 1000);
		} else if (restTimer === 0) {
			setIsResting(false);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isResting, restTimer]);

	const toggleSet = (item: GymInterleavedSet) => {
		const nextCompleted = new Set(completed);
		const isNowCompleted = !nextCompleted.has(item.id);

		if (isNowCompleted) {
			nextCompleted.add(item.id);
			// Start rest timer automatically
			const restSecs = item.targetRestSeconds || (item.isSuperset ? 45 : 90);
			setRestTimer(restSecs);
			setIsResting(true);
		} else {
			nextCompleted.delete(item.id);
		}
		setCompleted(nextCompleted);
	};

	const getMuscleName = (muscleIds?: number[]) => {
		if (!muscleIds || muscleIds.length === 0) return 'General';
		const m = MUSCLE_CATALOG.find(mc => mc.id === muscleIds[0]);
		return m ? m.name : 'Varios';
	};

	const getEquipmentName = (eqIds?: number[]) => {
		if (!eqIds || eqIds.length === 0) return 'Corporal';
		const eq = EQUIPMENT_CATALOG.find(e => e.id === eqIds[0]);
		return eq ? eq.name : 'Equipo';
	};

	const totalSets = sequence.length;
	const completedCount = completed.size;
	const progressPercent = totalSets > 0 ? Math.round((completedCount / totalSets) * 100) : 0;

	return (
		<section className="space-y-6 animate-fadeIn">
			{/* Top Workout Session Header */}
			<div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
				<div className="flex flex-wrap items-start justify-between gap-4">
					<div>
						<div className="flex items-center gap-2">
							<span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
							<p className="text-xs font-black uppercase tracking-widest text-emerald-600">Sesión en Vivo • Día {initialDayOrder}</p>
						</div>
						<h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">{routine.name}</h2>
						<p className="text-xs font-bold text-slate-400 mt-1">
							{completedCount} de {totalSets} series completadas ({progressPercent}%)
						</p>
					</div>

					<div className="flex items-center gap-3">
						{isResting && restTimer !== null && (
							<div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-2xl flex items-center gap-2 animate-pulse">
								<span className="text-lg">⏱️</span>
								<div>
									<p className="text-[9px] font-black uppercase tracking-wider text-amber-600 leading-none">Descanso</p>
									<p className="text-sm font-black leading-tight">
										{Math.floor(restTimer / 60)}:{(restTimer % 60).toString().padStart(2, '0')} min
									</p>
								</div>
								<button 
									onClick={() => setIsResting(false)} 
									className="ml-2 text-xs font-bold text-amber-600 hover:text-amber-900"
								>
									✕
								</button>
							</div>
						)}

						<button 
							onClick={onFinishWorkout} 
							className="rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-black text-white shadow-md shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center gap-2"
						>
							<span>🏁</span> Finalizar Sesión
						</button>
					</div>
				</div>

				{/* Progress Bar */}
				<div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-6">
					<div 
						className="bg-emerald-500 h-full transition-all duration-500 ease-out"
						style={{ width: `${progressPercent}%` }}
					></div>
				</div>
			</div>

			{/* Exercise Sets Stream */}
			<div className="space-y-4">
				{sequence.length === 0 ? (
					<div className="rounded-3xl bg-white p-12 text-center text-slate-400 border border-dashed border-slate-200">
						<span className="text-4xl block mb-2">🏖️</span>
						<p className="font-bold text-sm">Este día es de descanso o aún no tiene ejercicios asignados.</p>
					</div>
				) : (
					sequence.map(item => {
						const isDone = completed.has(item.id);
						return (
							<div 
								key={item.id} 
								className={`rounded-3xl border p-4 sm:p-6 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
									isDone 
										? 'border-emerald-200 bg-emerald-50/70 shadow-xs' 
										: 'border-slate-200 bg-white shadow-sm hover:border-blue-300'
								}`}
							>
								{/* Exercise Info & Media Asset */}
								<div className="flex items-center gap-4 w-full sm:w-auto">
									{item.exercise.image_url ? (
										<div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white border border-slate-200 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
											<img 
												src={item.exercise.image_url} 
												alt={item.exercise.name} 
												className="max-h-full max-w-full object-contain"
												loading="lazy"
											/>
										</div>
									) : (
										<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-slate-100 border border-slate-200 flex-shrink-0 flex flex-col items-center justify-center text-slate-400">
											<span className="text-xl">🏋️</span>
											<span className="text-[8px] font-black uppercase tracking-wider mt-0.5">Asset</span>
										</div>
									)}

									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
												{getMuscleName(item.exercise.muscles)}
											</span>
											{item.isSuperset && (
												<span className="text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md flex items-center">
													Superserie #{item.supersetGroupOrder}
                          <InfoTooltip term="Superserie" description="Dos ejercicios combinados sin descanso intermedio para elevar la densidad metabólica." />
												</span>
											)}
										</div>

										<h3 className={`text-base sm:text-lg font-black leading-tight ${isDone ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
											{item.exercise.name}
										</h3>

										<p className="text-xs text-slate-500 font-bold">
											{getEquipmentName(item.exercise.equipment)} • ID #{item.exercise.id}
										</p>
									</div>
								</div>

								{/* Biomechanical Target Metrics & Completion Action */}
								<div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
									<div className="text-left sm:text-right">
										<p className="text-xs font-black text-slate-800">
											Serie <span className="text-blue-600 font-black">{item.setIndex}</span> de {item.totalSets}
										</p>
										<div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 mt-0.5">
											<span>{item.targetReps} reps</span>
											{item.targetWeight > 0 && <span>• {item.targetWeight} kg</span>}
											{item.targetRir !== undefined && (
     <span className="inline-flex items-center">
       • RIR {item.targetRir} (RPE {10 - item.targetRir})
       <InfoTooltip term="RIR (Repeticiones en Reserva)" description="Cantidad de repeticiones que te sobran antes del fallo muscular. RIR 2 = Te quedas a 2 reps." formula="RIR = 10 - RPE" />
     </span>
   )}
										</div>
									</div>

									<button 
										onClick={() => toggleSet(item)}
										className={`px-5 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 ${
											isDone 
												? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 hover:bg-emerald-700' 
												: 'bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white border border-slate-200'
										}`}
									>
										<span>{isDone ? '✓' : '○'}</span>
										<span>{isDone ? 'Completada' : 'Registrar'}</span>
									</button>
								</div>
							</div>
						);
					})
				)}
			</div>
		</section>
	);
};
