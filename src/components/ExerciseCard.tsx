import React, { useState } from 'react';
import { Exercise, MUSCLE_CATALOG, EQUIPMENT_CATALOG } from '../services/wgerApi';

interface ExerciseCardProps {
  exercise: Exercise;
  onOpenDetails?: (exercise: Exercise) => void;
  onAddToRoutine?: (exercise: Exercise) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onAddToRoutine, onOpenDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Map muscle IDs to readable names
  const primaryMuscles = (exercise.muscles || []).map(id => {
    const found = MUSCLE_CATALOG.find(m => m.id === id);
    return found ? found.name : `Músculo #${id}`;
  });

  // Map equipment IDs
  const equipmentNames = (exercise.equipment || []).map(id => {
    const found = EQUIPMENT_CATALOG.find(e => e.id === id);
    return found ? found.name : `Equipo #${id}`;
  });

  return (
    <div className="flex flex-col h-full bg-white border border-gray-300 shadow-sm overflow-hidden group font-sans text-gray-800">
      
      {/* Title area - Wikipedia style */}
      <div className="px-4 pt-4 pb-2 border-b border-gray-200 bg-[#f8f9fa]">
        <h3 className="text-lg sm:text-xl font-serif text-black leading-tight">
          {exercise.name}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-wrap gap-1">
            {primaryMuscles.map((name, i) => (
              <span key={i} className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded uppercase tracking-wide">
                {name}
              </span>
            ))}
          </div>
          <span className="text-[9px] text-gray-500 uppercase">ID: {exercise.id}</span>
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        
        {/* Media area - object-contain to show full image */}
        {exercise.image_url ? (
          <div className="relative h-40 w-full mb-4 bg-white border border-gray-200 p-1 flex items-center justify-center">
            <img
              src={exercise.image_url}
              alt={`Imagen de ${exercise.name}`}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ) : null}

        {/* Wikipedia Extract / Description */}
        <div className="flex-grow">
          <div
            className={`text-gray-700 text-xs leading-relaxed prose prose-sm max-w-none ${!isExpanded ? 'line-clamp-4' : ''}`}
            dangerouslySetInnerHTML={{
              __html: exercise.description || '<i>Sin descripción disponible.</i>',
            }}
          />
          {exercise.description && exercise.description.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[11px] font-semibold text-[#0645ad] hover:underline mt-1 focus:outline-none"
            >
              {isExpanded ? 'Ocultar' : 'Leer más...'}
            </button>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 mt-4 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-500">
           <div className="truncate pr-2">
             <b>Equipamiento:</b> {equipmentNames.length > 0 ? equipmentNames.join(', ') : 'Ninguno (Peso Corporal)'}
           </div>
           
           {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(exercise)}
              className="text-xs font-bold text-[#0645ad] hover:underline px-2"
            >
              Ver Detalles
            </button>
           )}
           {onAddToRoutine && (
            <button
              onClick={() => onAddToRoutine(exercise)}
              className="text-xs font-bold text-[#0645ad] bg-[#f8f9fa] border border-[#a2a9b1] hover:bg-gray-100 px-2.5 py-1 rounded-sm whitespace-nowrap"
            >
              [ editar ]
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
