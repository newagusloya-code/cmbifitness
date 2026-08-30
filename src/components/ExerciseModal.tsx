import React, { useState, useEffect } from 'react';
import { Exercise, Routine, MUSCLE_CATALOG, EQUIPMENT_CATALOG, getRoutinesSync, saveCustomRoutine, Day, Slot, SlotEntry } from '../services/wgerApi';

interface ExerciseModalProps {
  exercise: Exercise;
  onClose: () => void;
  onGoToRoutines: () => void;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({ exercise, onClose, onGoToRoutines }) => {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [showAddMenu, setShowAddMenu] = useState(false);

  useEffect(() => {
    setRoutines(getRoutinesSync());
  }, []);

  const getPrimaryMuscle = (ex: Exercise) => {
    if (!ex.muscles || ex.muscles.length === 0) return 'Varios';
    const m = MUSCLE_CATALOG.find(m => m.id === ex.muscles[0]);
    return m ? m.name : 'Varios';
  };

  const getEquipment = (ex: Exercise) => {
    if (!ex.equipment || ex.equipment.length === 0) return 'Peso Corporal';
    return ex.equipment.map(id => EQUIPMENT_CATALOG.find(e => e.id === id)?.name || `Equipo #${id}`).join(', ');
  };

  // Encontrar en qué rutinas está este ejercicio
  const linkedRoutines = routines.filter(r => {
     return r.days.some(d => d.slots?.some(s => s.entries.some(e => e.exercise === exercise.id)));
  });

  const handleAddToRoutine = (routine: Routine, dayOrder: number) => {
     const day = routine.days.find(d => d.order === dayOrder);
     if (!day) return;

     const newEntry: SlotEntry = {
        id: -(Date.now()),
        slot: -(Date.now()),
        exercise: exercise.id,
        exercise_detail: exercise,
        sets_configs: [{ iteration: 1, value: 4, operation: 'r', step: 'abs', repeat: true }],
        repetitions_configs: [{ iteration: 1, value: 10, operation: 'r', step: 'abs', repeat: true }],
        rir_configs: [{ iteration: 1, value: 8, operation: 'r', step: 'abs', repeat: true }],
        rest_configs: [{ iteration: 1, value: 90, operation: 'r', step: 'abs', repeat: true }]
     };

     const newSlot: Slot = {
         id: -(Date.now()),
         day: day.id,
         order: (day.slots?.length || 0) + 1,
         is_superset: false,
         entries: [newEntry]
     };

     const updatedDay: Day = {
         ...day,
         slots: [...(day.slots || []), newSlot]
     };

     const updatedRoutine: Routine = {
         ...routine,
         id: routine.id < 0 ? routine.id : -(Date.now()), 
         days: routine.days.map(d => d.order === dayOrder ? updatedDay : d)
     };

     saveCustomRoutine(updatedRoutine);
     setRoutines(getRoutinesSync());
     setShowAddMenu(false);
     alert(`Ejercicio añadido a ${routine.name} - Día ${day.order}`);
  };

  const handleCreateRoutine = () => {
      onClose();
      onGoToRoutines();
  };

  const cleanExerciseName = exercise.name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "+").toLowerCase();

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative">
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-10">
          ✕
        </button>

        <div className="overflow-y-auto p-8 no-scrollbar flex-grow">
           <div className="flex flex-col md:flex-row gap-8">
              {/* Media Column */}
              <div className="w-full md:w-1/2 flex-shrink-0 flex flex-col gap-4">
                 {exercise.youtube_url ? (
                     <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                         <iframe 
                             src={exercise.youtube_url.replace("watch?v=", "embed/")} 
                             title="YouTube video player" 
                             className="w-full h-full"
                             frameBorder="0" 
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen
                         ></iframe>
                     </div>
                 ) : exercise.image_url ? (
                     <img src={exercise.image_url} alt={exercise.name} className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm object-contain bg-slate-50" />
                 ) : (
                     <div className="w-full h-64 rounded-2xl bg-slate-100 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200">
                         <span className="text-4xl mb-2">📷</span>
                         <span className="text-xs font-bold uppercase tracking-wider">Imagen en progreso</span>
                     </div>
                 )}

                 {!exercise.youtube_url && (
                     <div className="flex gap-2">
                         <a 
                            href={`https://www.youtube.com/results?search_query=${cleanExerciseName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 text-xs font-bold py-2.5 px-3 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                         >
                            <span>▶️</span> YouTube
                         </a>
                         <a 
                            href={`https://www.google.com/search?tbm=isch&q=${cleanExerciseName}+ejercicio+gif`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 text-xs font-bold py-2.5 px-3 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                         >
                            <span>🔍</span> Animación
                         </a>
                     </div>
                 )}
              </div>
              
              {/* Info Column */}
              <div className="flex-1">
                 <h2 className="text-3xl font-black text-slate-900 leading-tight mb-2">{exercise.name}</h2>
                 <div className="flex gap-2 mb-6">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-lg">
                        Músculo Principal: {getPrimaryMuscle(exercise)}
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-lg">
                        ID #{exercise.id}
                    </span>
                 </div>
                 
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Equipamiento</h4>
                 <p className="text-sm text-slate-800 mb-6 font-medium">{getEquipment(exercise)}</p>

                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Biomecánica / Ejecución</h4>
                 <div className="prose prose-sm prose-slate max-w-none text-slate-600" dangerouslySetInnerHTML={{ __html: exercise.description || 'Sin descripción detallada.' }} />
              </div>
           </div>

           <div className="mt-10 border-t border-slate-100 pt-8">
               <h3 className="text-lg font-black text-slate-900 mb-4">Módulo de Rutinas</h3>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                     <h4 className="text-sm font-bold text-slate-800 mb-2">Rutinas Vinculadas</h4>
                     {linkedRoutines.length > 0 ? (
                        <ul className="space-y-1">
                           {linkedRoutines.map(r => (
                               <li key={r.id} className="text-xs text-slate-600 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                  {r.name}
                               </li>
                           ))}
                        </ul>
                     ) : (
                        <p className="text-xs text-slate-500 italic">No está asignado a ninguna rutina activa.</p>
                     )}
                  </div>
                  
                  <div className="flex flex-col gap-3 justify-center">
                     <div className="relative">
                         <button 
                             onClick={() => setShowAddMenu(!showAddMenu)} 
                             className="w-full bg-blue-600 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
                         >
                             + Añadir a Rutina Existente
                         </button>
                         {showAddMenu && (
                             <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto">
                                 {routines.map(r => (
                                     <div key={r.id} className="border-b last:border-0 border-slate-50">
                                         <div className="px-4 py-2 bg-slate-50 text-[10px] font-black uppercase text-slate-400">{r.name}</div>
                                         {r.days.map(d => (
                                             <button 
                                                 key={d.id} 
                                                 onClick={() => handleAddToRoutine(r, d.order)}
                                                 className="w-full text-left px-6 py-2.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-semibold"
                                             >
                                                 Día {d.order}: {d.description || 'Sin título'}
                                             </button>
                                         ))}
                                     </div>
                                 ))}
                             </div>
                         )}
                     </div>

                     <button 
                         onClick={handleCreateRoutine} 
                         className="w-full bg-white text-slate-700 border border-slate-200 font-black text-sm px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-colors"
                     >
                         📋 Crear Nueva Rutina
                     </button>
                  </div>
               </div>
           </div>

        </div>
      </div>
    </div>
  );
};
