import React, { useState, useMemo } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import { Exercise, MUSCLE_CATALOG } from '../services/wgerApi';

interface RoutineExercise extends Exercise {
  instanceId: string;
  sets: number;
  reps: number;
}

interface RoutineBuilderProps {
  availableExercises: Exercise[];
  initialRoutine?: RoutineExercise[];
  onSave?: (routine: RoutineExercise[]) => void;
  dayTitle?: string;
}

export const RoutineBuilder: React.FC<RoutineBuilderProps> = ({ availableExercises, initialRoutine = [], onSave, dayTitle = '' }) => {
  const [routine, setRoutine] = useState<RoutineExercise[]>(initialRoutine);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuscleFilter, setSelectedMuscleFilter] = useState<number | 'all'>('all');
  const [selectedForDeletion, setSelectedForDeletion] = useState<Set<string>>(new Set());

  // Helper to get primary muscle name
  const getPrimaryMuscle = (ex: Exercise) => {
    if (!ex.muscles || ex.muscles.length === 0) return 'Varios';
    const m = MUSCLE_CATALOG.find(m => m.id === ex.muscles[0]);
    return m ? m.name : 'Varios';
  };

  const getRecommendedKeywords = (title: string): string[] => {
      const lower = title.toLowerCase();
      if (lower.includes('pierna') || lower.includes('leg')) return ['cuádriceps', 'isquiosurales', 'gemelos', 'pantorrilla', 'femoral', 'piernas'];
      if (lower.includes('push') || lower.includes('empuje')) return ['pectoral', 'deltoides', 'tríceps'];
      if (lower.includes('pull') || lower.includes('tirón') || lower.includes('espalda')) return ['dorsal', 'bíceps', 'trapecio'];
      return [];
  };

  const recommendedKeywords = useMemo(() => getRecommendedKeywords(dayTitle), [dayTitle]);

  // Filtered exercises for the bank
  const filteredExercises = useMemo(() => {
    return availableExercises.filter(ex => {
      const primaryMuscle = getPrimaryMuscle(ex).toLowerCase();
      const exName = ex.name.toLowerCase();
      const search = searchTerm.toLowerCase();

      // Custom keyword mapping
      const searchMatches = (
          exName.includes(search) ||
          primaryMuscle.includes(search) ||
          (search === 'piernas' && (primaryMuscle.includes('cuádriceps') || primaryMuscle.includes('isquiosurales') || primaryMuscle.includes('glúteo'))) ||
          (search === 'quadriceps' && primaryMuscle.includes('cuádriceps')) ||
          (search === 'femoral' && primaryMuscle.includes('isquiosurales')) ||
          (search === 'pantorrilla' && primaryMuscle.includes('gemelos')) ||
          (search === 'peso corporal' && ex.equipment?.includes(7))
      );

      const matchesSearch = searchTerm ? searchMatches : true;
      
      const matchesMuscle = 
        selectedMuscleFilter === 'all' || 
        (ex.muscles && ex.muscles.includes(selectedMuscleFilter as number));

      return matchesSearch && matchesMuscle;
    }).sort((a, b) => {
        // Boost recommended exercises based on dayTitle
        if (recommendedKeywords.length > 0) {
            const aPrimary = getPrimaryMuscle(a).toLowerCase();
            const bPrimary = getPrimaryMuscle(b).toLowerCase();
            const aRecom = recommendedKeywords.some(kw => aPrimary.includes(kw) || a.name.toLowerCase().includes(kw));
            const bRecom = recommendedKeywords.some(kw => bPrimary.includes(kw) || b.name.toLowerCase().includes(kw));
            if (aRecom && !bRecom) return -1;
            if (!aRecom && bRecom) return 1;
        }
        return 0;
    });
  }, [availableExercises, searchTerm, selectedMuscleFilter, recommendedKeywords]);

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // CASO A: Arrastrar desde la Librería hacia la Rutina (COPIAR / CLONAR)
    if (
      source.droppableId === 'EXERCISE_BANK' &&
      destination.droppableId === 'ROUTINE_DROP_ZONE'
    ) {
      const selectedExercise = filteredExercises[source.index];
      if (!selectedExercise) return;

      const newRoutineItem: RoutineExercise = {
        ...selectedExercise,
        instanceId: `inst-${crypto.randomUUID()}`,
        sets: 4,
        reps: 10,
      };

      const newRoutine = Array.from(routine);
      newRoutine.splice(destination.index, 0, newRoutineItem);
      setRoutine(newRoutine);
      if(onSave) onSave(newRoutine);
      return;
    }

    // CASO B: Reordenar dentro de la misma Rutina
    if (
      source.droppableId === 'ROUTINE_DROP_ZONE' &&
      destination.droppableId === 'ROUTINE_DROP_ZONE'
    ) {
      const reorderedRoutine = Array.from(routine);
      const [movedItem] = reorderedRoutine.splice(source.index, 1);
      reorderedRoutine.splice(destination.index, 0, movedItem);
      setRoutine(reorderedRoutine);
      if(onSave) onSave(reorderedRoutine);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 font-sans mt-4">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        
        {/* ================= COLUMNA 1: BANCO DE EJERCICIOS ================= */}
        <div className="w-full lg:w-96 bg-slate-50 p-4 rounded-3xl border border-slate-200 flex flex-col max-h-[78vh] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
              <span>📚</span> Banco de Ejercicios
            </h3>
            <span className="text-[10px] bg-slate-200 text-slate-700 font-extrabold px-2 py-0.5 rounded-full">
              {filteredExercises.length} disponibles
            </span>
          </div>

          {/* Search & Filter Bar */}
          <div className="space-y-2 mb-3">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar ejercicio (ej. Sentadilla, Press)..."
                className="w-full text-xs bg-white border border-slate-200 rounded-xl pl-8 pr-7 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 font-medium shadow-xs"
              />
              <span className="absolute left-2.5 top-2 text-slate-400 text-xs">🔍</span>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-700 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Muscle quick filter tags */}
            <div className="flex overflow-x-auto no-scrollbar gap-1 pb-1">
              <button
                onClick={() => setSelectedMuscleFilter('all')}
                className={`text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap transition-all ${
                  selectedMuscleFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                Todos
              </button>
              {MUSCLE_CATALOG.slice(0, 8).map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMuscleFilter(selectedMuscleFilter === m.id ? 'all' : m.id)}
                  className={`text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap transition-all ${
                    selectedMuscleFilter === m.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {m.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
          
          {/* Draggable Exercise Bank List */}
          <div className="overflow-y-auto flex-grow no-scrollbar pr-1">
            <Droppable droppableId="EXERCISE_BANK" isDropDisabled={true}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="min-h-[250px] flex flex-col gap-2"
                >
                  {filteredExercises.map((exercise, index) => (
                    <Draggable key={`bank-${exercise.id}`} draggableId={`bank-${exercise.id}`} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`
                            select-none p-3 rounded-2xl border transition-all flex items-center gap-3 cursor-grab active:cursor-grabbing
                            ${snapshot.isDragging ? 'bg-blue-50 border-blue-300 shadow-xl scale-105 z-50' : 'bg-white border-slate-200 hover:border-blue-200 shadow-xs'}
                          `}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                        >
                          {exercise.image_url ? (
                            <img src={exercise.image_url} alt="" className="w-11 h-11 rounded-xl object-contain bg-slate-50 border border-slate-100 flex-shrink-0" />
                          ) : (
                            <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center text-[9px] font-black text-slate-400">
                              🏋️
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <strong className="block text-xs text-slate-900 leading-snug truncate">{exercise.name}</strong>
                            <div className="flex flex-wrap items-center gap-1 mt-0.5">
                              <span className="text-[9px] font-extrabold uppercase bg-blue-50 text-blue-700 px-1.5 py-0.2 rounded tracking-wide">
                                {getPrimaryMuscle(exercise)}
                              </span>
                              {recommendedKeywords.some(kw => getPrimaryMuscle(exercise).toLowerCase().includes(kw) || exercise.name.toLowerCase().includes(kw)) && (
                                <span className="text-[9px] font-extrabold uppercase bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded tracking-wide">
                                  ⭐ Recomendado
                                </span>
                              )}
                              <span className="text-[9px] text-slate-400">#{exercise.id}</span>
                            </div>
                          </div>
                          <span className="text-xs text-slate-300 font-bold">⠿</span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  {filteredExercises.length === 0 && (
                    <div className="p-8 text-center text-slate-400 text-xs font-bold">
                      No se encontraron ejercicios con "{searchTerm}"
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          </div>
        </div>

        {/* ================= COLUMNA 2: CREADOR DE RUTINA ================= */}
        <div className="flex-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                <span>📋</span> Zona de Entrenamiento del Día
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                Arrastra ejercicios desde el banco o reordénalos libremente.
              </p>
            </div>
            <div className="flex items-center gap-3">
                {selectedForDeletion.size > 0 && (
                    <button 
                        onClick={() => {
                            if (confirm(`¿Eliminar ${selectedForDeletion.size} ejercicios seleccionados?`)) {
                                const newRoutine = routine.filter(r => !selectedForDeletion.has(r.instanceId));
                                setRoutine(newRoutine);
                                setSelectedForDeletion(new Set());
                                if(onSave) onSave(newRoutine);
                            }
                        }}
                        className="text-xs font-black bg-red-100 text-red-700 px-3 py-1.5 rounded-xl hover:bg-red-200 transition-colors"
                    >
                        🗑️ Eliminar ({selectedForDeletion.size})
                    </button>
                )}
                <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl">
                {routine.length} ejercicio{routine.length !== 1 ? 's' : ''}
                </span>
            </div>
          </div>
          
          <Droppable droppableId="ROUTINE_DROP_ZONE">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`
                  min-h-[350px] flex-1 flex flex-col gap-3 p-4 rounded-2xl border-2 border-dashed transition-all
                  ${snapshot.isDraggingOver ? 'bg-blue-50/60 border-blue-400' : 'bg-slate-50/70 border-slate-200'}
                `}
              >
                {routine.length === 0 && (
                  <div className="flex flex-col items-center justify-center flex-1 text-center py-16 text-slate-400 font-bold text-xs space-y-2">
                    <span className="text-4xl">📥</span>
                    <p>Arrastra ejercicios desde el banco izquierdo hasta esta zona.</p>
                  </div>
                )}

                {routine.map((item, index) => (
                  <Draggable key={item.instanceId} draggableId={item.instanceId} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`
                          select-none p-4 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3
                          ${snapshot.isDragging ? 'bg-emerald-50 border-emerald-300 shadow-xl scale-102 z-50' : 'bg-white border-slate-200 shadow-xs'}
                          ${selectedForDeletion.has(item.instanceId) ? 'ring-2 ring-red-400 bg-red-50/50' : ''}
                        `}
                        style={{
                          ...provided.draggableProps.style,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox"
                            checked={selectedForDeletion.has(item.instanceId)}
                            onChange={(e) => {
                                const newSet = new Set(selectedForDeletion);
                                if (e.target.checked) newSet.add(item.instanceId);
                                else newSet.delete(item.instanceId);
                                setSelectedForDeletion(newSet);
                            }}
                            className="w-4 h-4 text-red-600 rounded border-slate-300 cursor-pointer"
                          />
                          <span className="text-xs font-black text-slate-300 w-5">#{index + 1}</span>
                          {item.image_url ? (
                            <img src={item.image_url} alt="" className="w-12 h-12 rounded-xl object-contain bg-slate-50 border border-slate-100 flex-shrink-0" />
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center text-xs">🏋️</div>
                          )}
                          <div>
                            <span className="block font-black text-sm text-slate-900 leading-tight">{item.name}</span>
                            <span className="inline-block text-[9px] font-extrabold uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md mt-1">
                              {getPrimaryMuscle(item)}
                            </span>
                          </div>
                        </div>

                        {/* Series, Reps & Delete */}
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                           <div className="text-xs font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5">
                             <input
                               type="number"
                               min="1"
                               max="20"
                               value={item.sets}
                               onChange={(e) => {
                                 const val = parseInt(e.target.value) || 1;
                                 const updated = routine.map(r => r.instanceId === item.instanceId ? { ...r, sets: val } : r);
                                 setRoutine(updated);
                                 if(onSave) onSave(updated);
                               }}
                               className="w-8 text-center font-black text-blue-600 bg-white border border-slate-200 rounded p-0.5 focus:outline-none"
                             />
                             <span className="text-slate-400">series ×</span>
                             <input
                               type="number"
                               min="1"
                               max="100"
                               value={item.reps}
                               onChange={(e) => {
                                 const val = parseInt(e.target.value) || 1;
                                 const updated = routine.map(r => r.instanceId === item.instanceId ? { ...r, reps: val } : r);
                                 setRoutine(updated);
                                 if(onSave) onSave(updated);
                               }}
                               className="w-10 text-center font-black text-blue-600 bg-white border border-slate-200 rounded p-0.5 focus:outline-none"
                             />
                             <span className="text-slate-400">reps</span>
                           </div>

                           <button 
                             onClick={() => {
                                const newR = routine.filter(r => r.instanceId !== item.instanceId);
                                setRoutine(newR);
                                if(onSave) onSave(newR);
                             }}
                             title="Eliminar de la rutina"
                             className="w-8 h-8 flex items-center justify-center bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-colors text-xs font-black"
                           >
                             ✕
                           </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

      </DragDropContext>
    </div>
  );
};
