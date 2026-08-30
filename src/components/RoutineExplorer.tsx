import React, { useState, useEffect } from 'react';
import { 
  Routine, 
  Exercise, 
  getExercises, 
  saveCustomRoutine, 
  deleteCustomRoutine, 
  getRoutinesSync,
  Day, 
  Slot, 
  SlotEntry 
} from '../services/wgerApi';
import { RoutineBuilder } from './RoutineBuilder';

interface RoutineExercise extends Exercise {
  instanceId: string;
  sets: number;
  reps: number;
}

interface RoutineExplorerProps {
	routines: Routine[];
	selectedRoutine: Routine | null;
	onSelectRoutine: (routine: Routine) => void;
	onStartGymMode: (routine: Routine, dayOrder: number) => void;
}

export const RoutineExplorer: React.FC<RoutineExplorerProps> = ({
	routines: initialRoutines,
	selectedRoutine,
	onSelectRoutine,
	onStartGymMode,
}) => {
    const [routinesList, setRoutinesList] = useState<Routine[]>(initialRoutines);
	const [dayOrder, setDayOrder] = useState(1);
    const [isEditingDay, setIsEditingDay] = useState(false);
    const [allExercises, setAllExercises] = useState<Exercise[]>([]);

    // Modals
    const [showEditRoutineModal, setShowEditRoutineModal] = useState(false);
    const [showCreateRoutineModal, setShowCreateRoutineModal] = useState(false);
    const [showEditDayModal, setShowEditDayModal] = useState(false);

    // Form states for Routine Edit/Create
    const [formRoutineName, setFormRoutineName] = useState('');
    const [formRoutineDesc, setFormRoutineDesc] = useState('');

    // Form states for Day Edit
    const [formDayTitle, setFormDayTitle] = useState('');
    const [formDayIsRest, setFormDayIsRest] = useState(false);

    useEffect(() => {
        getExercises().then(setAllExercises);
        setRoutinesList(getRoutinesSync());
    }, []);

    // Sync active routine
	const activeRoutine = selectedRoutine || routinesList[0];

    const activeDay = activeRoutine?.days.find(d => d.order === dayOrder) || activeRoutine?.days[0];

    // Convert Slot/Entries to RoutineExercise[] for the Builder
    const initialRoutineList: RoutineExercise[] = [];
    if (activeDay && activeDay.slots) {
        activeDay.slots.forEach(slot => {
            slot.entries.forEach(entry => {
                const ex = allExercises.find(e => e.id === entry.exercise);
                if (ex) {
                    initialRoutineList.push({
                        ...ex,
                        instanceId: `inst-${crypto.randomUUID()}`,
                        sets: entry.sets_configs?.[0] ? entry.sets_configs[0].value : 4,
                        reps: entry.repetitions_configs?.[0] ? entry.repetitions_configs[0].value : 10
                    });
                }
            });
        });
    }

    const refreshRoutines = (newActive?: Routine) => {
        const list = getRoutinesSync();
        setRoutinesList(list);
        if (newActive) {
            onSelectRoutine(newActive);
        } else if (list.length > 0) {
            onSelectRoutine(list[0]);
        }
    };

    // 1. CREATE NEW ROUTINE
    const handleCreateRoutine = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRoutineName.trim()) return;

        const newRoutine: Routine = {
            id: -(Date.now()),
            name: formRoutineName.trim(),
            description: formRoutineDesc.trim() || 'Protocolo personalizado.',
            start_date: new Date().toISOString().split('T')[0],
            end_date: '',
            fit_in_week: true,
            days: [
                {
                    id: -(Date.now() + 1),
                    order: 1,
                    description: 'Día 1: Evaluación / Adaptación',
                    is_rest: false,
                    routine: -(Date.now()), need_logs_to_advance: true,
                    slots: []
                },
                {
                    id: -(Date.now() + 2),
                    order: 2,
                    description: 'Día 2: Fuerza / Hipertrofia',
                    is_rest: false,
                    routine: -(Date.now()), need_logs_to_advance: true,
                    slots: []
                },
                {
                    id: -(Date.now() + 3),
                    order: 3,
                    description: 'Día 3: Descanso Activo',
                    is_rest: true,
                    routine: -(Date.now()), need_logs_to_advance: false,
                    slots: []
                }
            ]
        };

        saveCustomRoutine(newRoutine);
        refreshRoutines(newRoutine);
        setFormRoutineName('');
        setFormRoutineDesc('');
        setShowCreateRoutineModal(false);
        setDayOrder(1);
    };

    // 2. EDIT ROUTINE METADATA
    const handleOpenEditRoutine = () => {
        if (!activeRoutine) return;
        setFormRoutineName(activeRoutine.name);
        setFormRoutineDesc(activeRoutine.description);
        setShowEditRoutineModal(true);
    };

    const handleSaveRoutineMetadata = (e: React.FormEvent) => {
        e.preventDefault();
        if (!activeRoutine || !formRoutineName.trim()) return;

        const updated: Routine = {
            ...activeRoutine,
            name: formRoutineName.trim(),
            description: formRoutineDesc.trim()
        };

        saveCustomRoutine(updated);
        refreshRoutines(updated);
        setShowEditRoutineModal(false);
    };

    // 3. DELETE ROUTINE
    const handleDeleteRoutine = () => {
        if (!activeRoutine) return;
        if (confirm(`¿Estás seguro de eliminar la rutina "${activeRoutine.name}"?`)) {
            deleteCustomRoutine(activeRoutine.id);
            refreshRoutines();
            setShowEditRoutineModal(false);
        }
    };

    // 4. ADD NEW DAY TO CURRENT ROUTINE
    const handleAddDay = () => {
        if (!activeRoutine) return;
        const newOrder = activeRoutine.days.length + 1;
        const newDay: Day = {
            id: -(Date.now()),
            order: newOrder,
            description: `Día ${newOrder}: Nuevo bloque`,
            is_rest: false,
            routine: -(Date.now()), need_logs_to_advance: true,
            slots: []
        };

        const updated: Routine = {
            ...activeRoutine,
            days: [...activeRoutine.days, newDay]
        };

        saveCustomRoutine(updated);
        refreshRoutines(updated);
        setDayOrder(newOrder);
    };

    // 5. EDIT DAY METADATA
    const handleOpenEditDay = () => {
        if (!activeDay) return;
        setFormDayTitle(activeDay.description || '');
        setFormDayIsRest(activeDay.is_rest || false);
        setShowEditDayModal(true);
    };

    const handleSaveDayMetadata = (e: React.FormEvent) => {
        e.preventDefault();
        if (!activeRoutine || !activeDay) return;

        const updatedDay: Day = {
            ...activeDay,
            description: formDayTitle.trim() || `Día ${activeDay.order}`,
            is_rest: formDayIsRest
        };

        const updated: Routine = {
            ...activeRoutine,
            days: activeRoutine.days.map(d => d.order === activeDay.order ? updatedDay : d)
        };

        saveCustomRoutine(updated);
        refreshRoutines(updated);
        setShowEditDayModal(false);
    };

    // 6. DELETE DAY
    const handleDeleteDay = (dayToDeleteOrder: number) => {
        if (!activeRoutine || activeRoutine.days.length <= 1) {
            alert('Una rutina debe tener al menos 1 día de entrenamiento.');
            return;
        }

        if (confirm(`¿Eliminar el Día ${dayToDeleteOrder}?`)) {
            const filteredDays = activeRoutine.days
                .filter(d => d.order !== dayToDeleteOrder)
                .map((d, index) => ({
                    ...d,
                    order: index + 1 // Re-index days sequentially
                }));

            const updated: Routine = {
                ...activeRoutine,
                days: filteredDays
            };

            saveCustomRoutine(updated);
            refreshRoutines(updated);
            setDayOrder(1);
            setShowEditDayModal(false);
        }
    };

    // 7. SAVE EXERCISES FROM DRAG & DROP
    const handleSaveDayExercises = (newRoutine: RoutineExercise[]) => {
        if (!activeDay) return;
        
        const newSlots: Slot[] = newRoutine.map((r, i) => {
            const entry: SlotEntry = {
                id: -(Date.now() + i * 1000),
                slot: -(Date.now() + i * 1000),
                exercise: r.id,
                exercise_detail: r,
                sets_configs: [{ iteration: 1, value: r.sets, operation: 'r', step: 'abs', repeat: true }],
                repetitions_configs: [{ iteration: 1, value: r.reps, operation: 'r', step: 'abs', repeat: true }],
                rir_configs: [{ iteration: 1, value: 8, operation: 'r', step: 'abs', repeat: true }],
                rest_configs: [{ iteration: 1, value: 90, operation: 'r', step: 'abs', repeat: true }]
            };
            return {
                id: -(Date.now() + i * 1000),
                day: activeDay.id,
                order: i + 1,
                is_superset: false,
                entries: [entry]
            };
        });

        const updatedDay: Day = {
            ...activeDay,
            slots: newSlots
        };

        const updatedRoutine: Routine = {
            ...activeRoutine,
            days: activeRoutine.days.map(d => d.order === dayOrder ? updatedDay : d)
        };

        saveCustomRoutine(updatedRoutine);
        refreshRoutines(updatedRoutine);
    };

	if (!activeRoutine) {
		return (
            <div className="rounded-3xl bg-white p-12 text-center text-slate-500 border border-slate-200">
                <p className="font-bold mb-4">No hay rutinas disponibles.</p>
                <button 
                    onClick={() => setShowCreateRoutineModal(true)}
                    className="bg-blue-600 text-white font-black px-6 py-3 rounded-2xl text-xs hover:bg-blue-700 shadow-md shadow-blue-200"
                >
                    + Crear Primera Rutina
                </button>
            </div>
        );
	}

	return (
		<section className="grid gap-8 lg:grid-cols-[300px_1fr] animate-fadeIn">
            {/* Sidebar con Lista de Rutinas y Botón de Creación */}
			<aside className="space-y-4">
				<div className="flex items-center justify-between">
					<h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Tus Rutinas</h2>
					<button
						onClick={() => setShowCreateRoutineModal(true)}
						className="text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl text-xs font-black hover:bg-blue-600 hover:text-white transition-all shadow-xs"
					>
						+ Nueva Rutina
					</button>
				</div>

				<div className="space-y-2">
					{routinesList.map(routine => (
						<button
							key={routine.id}
							onClick={() => {
                                onSelectRoutine(routine);
                                setIsEditingDay(false);
                                setDayOrder(1);
                            }}
							className={`w-full rounded-2xl border p-4 text-left transition-all ${
								routine.id === activeRoutine.id 
                                    ? 'border-blue-700 bg-blue-600 text-white shadow-md shadow-blue-200' 
                                    : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300'
							}`}
						>
							<div className="flex justify-between items-center">
								<span className="font-black text-sm block leading-tight">{routine.name}</span>
								<span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
									routine.id === activeRoutine.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
								}`}>
									{routine.days.length} días
								</span>
							</div>
							<p className={`text-xs mt-1.5 line-clamp-1 font-medium ${
								routine.id === activeRoutine.id ? 'text-blue-100' : 'text-slate-500'
							}`}>
								{routine.description}
							</p>
						</button>
					))}
				</div>
			</aside>

            {/* Panel Principal: Editor y Visor de Rutina */}
			<div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                {/* Header de la Rutina Activa */}
				<div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
					<div>
						<div className="flex items-center gap-2">
							<span className="text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
								Protocolo de Entrenamiento
							</span>
						</div>
						<h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{activeRoutine.name}</h2>
						<p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">{activeRoutine.description}</p>
					</div>

					<button
						onClick={handleOpenEditRoutine}
						className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-xs"
					>
						<span>⚙️</span> Editar Rutina
					</button>
				</div>
				
                {/* Selector de Días y Acciones de Día */}
                <div className="mt-6">
					<div className="flex items-center justify-between mb-3">
						<h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Días de Entrenamiento</h4>
						<div className="flex items-center gap-2">
							{activeDay && (
								<button
									onClick={handleOpenEditDay}
									className="text-[11px] font-bold text-slate-600 hover:text-blue-600 flex items-center gap-1"
								>
									<span>✏️</span> Renombrar Día
								</button>
							)}
							<button
								onClick={handleAddDay}
								className="text-[11px] font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg hover:bg-blue-100 transition-colors"
							>
								+ Añadir Día
							</button>
						</div>
					</div>

					<div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
						{activeRoutine.days.map(day => (
							<button
								key={day.id}
								onClick={() => {
									setDayOrder(day.order);
									setIsEditingDay(false);
								}}
								className={`min-w-[150px] rounded-2xl border p-3.5 text-left transition-all ${
									day.order === dayOrder 
										? 'border-blue-600 bg-blue-50/80 shadow-xs' 
										: 'border-slate-200 bg-slate-50/70 hover:bg-slate-100'
								}`}
							>
								<div className="flex justify-between items-center">
									<span className={`text-[10px] font-black uppercase ${day.order === dayOrder ? 'text-blue-700' : 'text-slate-400'}`}>
										Día {day.order}
									</span>
									{day.is_rest && (
										<span className="text-[9px] font-black uppercase bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded">
											Descanso
										</span>
									)}
								</div>
								<span className="mt-1 block text-xs font-bold text-slate-800 line-clamp-1">
									{day.description || 'Sin título'}
								</span>
								<span className="text-[10px] text-slate-400 font-medium mt-1 block">
									{day.slots ? `${day.slots.length} ejercicio(s)` : '0 ejercicios'}
								</span>
							</button>
						))}
					</div>
				</div>

                {/* Editor Drag & Drop o Vista Previa del Día */}
                {isEditingDay ? (
                    <div className="mt-6 border-t border-slate-100 pt-6">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-black text-lg text-slate-900">
                                    Editando Ejercicios: <span className="text-blue-600">{activeDay?.description}</span>
                                </h3>
                                <p className="text-xs text-slate-400 font-medium">Usa el buscador o arrastra ejercicios directamente a la rutina.</p>
                            </div>
                            <button 
                                onClick={() => setIsEditingDay(false)} 
                                className="text-xs bg-slate-100 text-slate-700 px-4 py-2 rounded-xl font-black hover:bg-slate-200 transition-colors"
                            >
                                ✓ Finalizar Edición
                            </button>
                        </div>

                        {allExercises.length > 0 ? (
                            <RoutineBuilder 
                                availableExercises={allExercises} 
                                initialRoutine={initialRoutineList} 
                                onSave={handleSaveDayExercises} 
                                dayTitle={activeDay?.description || ''}
                            />
                        ) : (
                            <div className="p-12 text-center text-slate-400 font-bold text-xs">Cargando catálogo...</div>
                        )}
                    </div>
                ) : (
                    <div className="mt-8 space-y-6">
                        {/* Resumen de Ejercicios del Día Activo */}
                        <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                                    Contenido del {activeDay?.description || `Día ${dayOrder}`}
                                </h4>
                                <span className="text-xs font-black text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-xl">
                                    {initialRoutineList.length} Ejercicio{initialRoutineList.length !== 1 ? 's' : ''} Asignado{initialRoutineList.length !== 1 ? 's' : ''}
                                </span>
                            </div>

                            {activeDay?.is_rest ? (
                                <div className="text-center py-10 text-slate-400">
                                    <span className="text-4xl block mb-2">🏖️</span>
                                    <p className="font-bold text-sm text-slate-700">Día de Descanso Programado</p>
                                    <p className="text-xs mt-1">Este día está configurado para recuperación activa o reposo.</p>
                                </div>
                            ) : initialRoutineList.length === 0 ? (
                                <div className="text-center py-10 text-slate-400">
                                    <span className="text-4xl block mb-2">📝</span>
                                    <p className="font-bold text-sm text-slate-700">No hay ejercicios agregados a este día</p>
                                    <p className="text-xs mt-1 mb-4">Usa el editor con buscador y Drag & Drop para armar este día.</p>
                                    <button 
                                        onClick={() => setIsEditingDay(true)}
                                        className="bg-blue-600 text-white font-black px-5 py-2.5 rounded-xl text-xs hover:bg-blue-700 shadow-md shadow-blue-200"
                                    >
                                        + Agregar Ejercicios
                                    </button>
                                </div>
                            ) : (
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {initialRoutineList.map((item, idx) => (
                                        <div key={item.instanceId || idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
                                            {item.image_url ? (
                                                <img src={item.image_url} alt="" className="w-12 h-12 rounded-xl object-contain bg-slate-50 border border-slate-100 flex-shrink-0" />
                                            ) : (
                                                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center text-xs font-black text-slate-400">
                                                    🏋️
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <p className="font-black text-xs text-slate-900 truncate">{idx + 1}. {item.name}</p>
                                                <p className="text-[11px] font-bold text-blue-600 mt-0.5">
                                                    {item.sets} series × {item.reps} reps
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Botones de Acción Primaria */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => onStartGymMode(activeRoutine, dayOrder)} 
                                className="flex-1 rounded-2xl bg-blue-600 px-6 py-4 text-xs font-black text-white shadow-md shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                            >
                                <span>⚡</span> Iniciar Entrenamiento en Modo Gym
                            </button>
                            <button 
                                onClick={() => setIsEditingDay(true)} 
                                className="flex-1 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 text-xs font-black text-slate-700 hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-xs"
                            >
                                <span>✏️</span> Editar Ejercicios y Cargas (Drag & Drop)
                            </button>
                        </div>
                    </div>
                )}
			</div>

            {/* MODAL: Crear Nueva Rutina */}
            {showCreateRoutineModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 relative">
                        <h3 className="text-lg font-black text-slate-900 mb-1">Crear Nueva Rutina</h3>
                        <p className="text-xs text-slate-500 mb-4">Define el nombre y el objetivo biomecánico de este protocolo.</p>

                        <form onSubmit={handleCreateRoutine} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Nombre de la Rutina *</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formRoutineName}
                                    onChange={(e) => setFormRoutineName(e.target.value)}
                                    placeholder="Ej. Torso / Pierna Frecuencia 2"
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Descripción / Enfoque</label>
                                <textarea 
                                    rows={3}
                                    value={formRoutineDesc}
                                    onChange={(e) => setFormRoutineDesc(e.target.value)}
                                    placeholder="Ej. Protocolo enfocado en hipertrofia y readaptación de hombro..."
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => setShowCreateRoutineModal(false)}
                                    className="flex-1 bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-200 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 bg-blue-600 text-white font-black px-4 py-2.5 rounded-xl text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                                >
                                    Crear Rutina
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL: Editar Metadatos de la Rutina */}
            {showEditRoutineModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 relative">
                        <h3 className="text-lg font-black text-slate-900 mb-1">Editar Información de la Rutina</h3>
                        <p className="text-xs text-slate-500 mb-4">Modifica los detalles generales del protocolo actual.</p>

                        <form onSubmit={handleSaveRoutineMetadata} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Nombre de la Rutina *</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formRoutineName}
                                    onChange={(e) => setFormRoutineName(e.target.value)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Descripción / Enfoque</label>
                                <textarea 
                                    rows={3}
                                    value={formRoutineDesc}
                                    onChange={(e) => setFormRoutineDesc(e.target.value)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button 
                                    type="button" 
                                    onClick={handleDeleteRoutine}
                                    className="bg-rose-50 text-rose-600 border border-rose-200 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-rose-600 hover:text-white transition-colors"
                                >
                                    Eliminar
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => setShowEditRoutineModal(false)}
                                    className="flex-1 bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-200 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 bg-blue-600 text-white font-black px-4 py-2.5 rounded-xl text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL: Renombrar y Configurar Día */}
            {showEditDayModal && activeDay && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 relative">
                        <h3 className="text-lg font-black text-slate-900 mb-1">Configurar Día {activeDay.order}</h3>
                        <p className="text-xs text-slate-500 mb-4">Edita el título descriptivo o define si es día de descanso.</p>

                        <form onSubmit={handleSaveDayMetadata} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Título del Día *</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formDayTitle}
                                    onChange={(e) => setFormDayTitle(e.target.value)}
                                    placeholder="Ej. Día 1: Pierna / Isquiosurales"
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>

                            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                                <input 
                                    type="checkbox"
                                    id="isRestDay"
                                    checked={formDayIsRest}
                                    onChange={(e) => setFormDayIsRest(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                />
                                <label htmlFor="isRestDay" className="text-xs font-bold text-slate-700 cursor-pointer">
                                    Marcar como Día de Descanso / Recuperación
                                </label>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => handleDeleteDay(activeDay.order)}
                                    className="bg-rose-50 text-rose-600 border border-rose-200 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-rose-600 hover:text-white transition-colors"
                                >
                                    Eliminar Día
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => setShowEditDayModal(false)}
                                    className="flex-1 bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-200 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 bg-blue-600 text-white font-black px-4 py-2.5 rounded-xl text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                                >
                                    Guardar Día
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
		</section>
	);
};
