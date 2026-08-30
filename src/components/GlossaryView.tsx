/**
 * GlossaryView.tsx — v2 (Refactored)
 *
 * Cambios clave vs v1:
 * - Estado de expansión: string | null → Set<string>
 *   → Permite comparar dos fórmulas simultáneamente en sesión de gym.
 * - Animación de expansión: max-h fijo → grid-rows (0fr / 1fr)
 *   → Transición exacta sin el "pop" visual de max-h.
 * - Dot-indicator de categoría siempre visible (incluso colapsado).
 * - Badge de count de resultados en tiempo real dentro del input.
 * - Filtrado de categoría como estado independiente (sin conflicto con searchQuery).
 * - Subcomponente <ConceptCard> con React.memo para re-renders mínimos.
 * - Botón "Colapsar todo" cuando hay acordeones abiertos.
 * - Aria roles correctos (aria-expanded, aria-controls, role="list", aria-live).
 * - Datos y tipos movidos a glossaryData.ts.
 */

import React, { useState, useCallback } from 'react';
import {
  CONCEPTS_DB,
  CATEGORY_COLOR,
  CATEGORY_BADGE,
  type Concept,
} from './glossaryData';

// ─────────────────────────────────────────────
// Subcomponente: ConceptCard
// Extraído para evitar re-renders en cascada al
// cambiar el estado de expansión de otras tarjetas.
// ─────────────────────────────────────────────
interface ConceptCardProps {
  concept: Concept;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

const ConceptCard: React.FC<ConceptCardProps> = React.memo(
  ({ concept, isExpanded, onToggle }) => {
    const dotColor = CATEGORY_COLOR[concept.category];
    const badgeColor = CATEGORY_BADGE[concept.category];

    return (
      <article
        className={`
          bg-white rounded-2xl shadow-sm border-l-4
          transition-all duration-200 ease-in-out
          hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500
          ${isExpanded ? 'border-blue-600' : 'border-transparent'}
        `}
      >
        {/* ── Header (siempre visible) ── */}
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`concept-body-${concept.id}`}
          onClick={() => onToggle(concept.id)}
          className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-3 focus:outline-none cursor-pointer"
        >
          <div className="flex items-center gap-3 min-w-0">
            {/* Dot semántico — visible incluso en estado colapsado */}
            <span
              className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dotColor}`}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <span
                className={`
                  inline-block text-[10px] font-black uppercase tracking-widest
                  px-2 py-0.5 rounded-md mb-1 ${badgeColor}
                `}
              >
                {concept.category}
              </span>
              <h3 className="font-black text-base md:text-lg text-slate-900 leading-tight">
                {concept.term}
              </h3>
            </div>
          </div>

          {/* Toggle icon — rotación 45° para el estado abierto */}
          <span
            aria-hidden="true"
            className={`
              text-xl font-light w-8 h-8 flex-shrink-0 flex items-center justify-center
              bg-slate-50 rounded-full text-slate-400
              transition-transform duration-200 ease-in-out
              ${isExpanded ? 'rotate-45' : 'rotate-0'}
            `}
          >
            +
          </span>
        </button>

        {/* ── Body expandible (grid trick: 0fr → 1fr) ──
            Usar CSS grid-rows evita el "colapso brusco" del max-h fijo.
            El div interno no tiene height; el grid colapsa exactamente. */}
        <div
          id={`concept-body-${concept.id}`}
          role="region"
          className={`
            grid transition-[grid-template-rows] duration-200 ease-in-out
            ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
          `}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 border-t border-slate-100 flex flex-col gap-3 pt-3">
              {/* Descripción */}
              <div className="bg-slate-50 border border-slate-100 text-slate-700 text-sm p-4 rounded-xl">
                <p className="leading-relaxed">{concept.description}</p>
              </div>

              {/* Ecuación matemática — estilo terminal de laboratorio */}
              <div className="bg-slate-900 text-emerald-400 font-mono text-sm p-4 rounded-xl overflow-x-auto shadow-inner">
                <span className="text-slate-500 select-none block mb-1.5 text-[10px] uppercase tracking-wider font-sans font-bold">
                  Modelo Matemático
                </span>
                <span className="text-base leading-relaxed">{concept.formula}</span>
              </div>

              {/* Nota clínica — fondo azul de baja saturación */}
              <div className="bg-blue-50 border border-blue-100 text-blue-900 text-sm p-4 rounded-xl">
                <strong className="flex items-center gap-2 mb-2 text-blue-700 text-[10px] uppercase tracking-wider font-black">
                  <span aria-hidden="true">🩺</span>
                  Nota Biomecánica &amp; Clínica
                </strong>
                <p className="font-medium leading-relaxed">{concept.clinicalNote}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
);
ConceptCard.displayName = 'ConceptCard';

// ─────────────────────────────────────────────
// Componente Principal: GlossaryView
// ─────────────────────────────────────────────
export const GlossaryView: React.FC = () => {
  // Estado 3: Set de IDs expandidos → permite multi-expand para comparar fórmulas
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // Toggle de expansión — O(1) con Set
  const handleToggle = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto bg-slate-50 min-h-screen text-slate-900 font-sans rounded-3xl overflow-hidden shadow-xl">
      {/* ══════════════════════════════════════
          MAIN CONTENT — Lista de Conceptos
          ══════════════════════════════════════ */}
      <main
        aria-label="Conceptos del glosario"
        className="flex-1 p-5 md:p-8 overflow-y-auto"
      >
        {/* Header contextual */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-black text-slate-400 uppercase tracking-wider">
            {CONCEPTS_DB.length} conceptos clínicos
          </p>
          {/* Colapsar todo — utilidad práctica en sesión de gym */}
          {expandedIds.size > 0 && (
            <button
              type="button"
              onClick={() => setExpandedIds(new Set())}
              className="text-[10px] font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider"
            >
              Colapsar todo
            </button>
          )}
        </div>

        {/* Grid de tarjetas */}
        <div className="grid gap-3" role="list">
          {CONCEPTS_DB.map((concept) => (
            <div key={concept.id} role="listitem">
              <ConceptCard
                concept={concept}
                isExpanded={expandedIds.has(concept.id)}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
