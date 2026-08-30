import React, { useState } from 'react';

interface InfoTooltipProps {
  term: string;
  description: string;
  formula?: string;
  className?: string;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ term, description, formula, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className={`relative inline-flex items-center group ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="ml-1 inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-slate-200 hover:bg-blue-600 text-slate-700 hover:text-white text-[9px] font-black transition-all cursor-help"
        aria-label={`Explicación de ${term}`}
      >
        !
      </button>

      {isOpen && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white rounded-xl shadow-xl z-50 text-[11px] leading-relaxed border border-slate-700 animate-fadeIn"
        >
          <div className="flex items-center justify-between border-b border-slate-700 pb-1 mb-1.5">
            <span className="font-black text-blue-400 uppercase tracking-wide text-[10px]">{term}</span>
            <span className="text-[9px] text-slate-400">Concepto Biomecánico</span>
          </div>
          <p className="text-slate-200 font-normal">{description}</p>
          {formula && (
            <div className="mt-1.5 pt-1 border-t border-slate-800 text-[10px] font-mono text-emerald-400">
              📐 <strong>Fórmula:</strong> {formula}
            </div>
          )}
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
        </div>
      )}
    </span>
  );
};
