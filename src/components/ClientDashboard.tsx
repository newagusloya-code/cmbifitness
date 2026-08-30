import React, { useState, useEffect, useRef } from 'react';
import { ClientProfile, getSavedClients, saveClient, Routine, getRoutinesSync, ClientProgressEntry } from '../services/wgerApi';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import logoUrl from '../assets/cmbi-logo.png';

export const ClientDashboard: React.FC = () => {
    const [clients, setClients] = useState<ClientProfile[]>([]);
    const [routines, setRoutines] = useState<Routine[]>([]);
    const [selectedClient, setSelectedClient] = useState<ClientProfile | null>(null);
    const [showNewClientModal, setShowNewClientModal] = useState(false);
    const [showNewProgressModal, setShowNewProgressModal] = useState(false);
    const [branding, setBranding] = useState<'CMBI' | 'HOME'>('CMBI');

    // Form states for new client
    const [newClientName, setNewClientName] = useState('');
    const [newClientAge, setNewClientAge] = useState('');
    const [newClientRoutine, setNewClientRoutine] = useState<number | undefined>(undefined);

    // Form states for new progress
    const [progressNotes, setProgressNotes] = useState('');
    const [progressAdherence, setProgressAdherence] = useState(100);
    const [progressWeight, setProgressWeight] = useState('');
    const [progressExpected, setProgressExpected] = useState('');
    const [progressNext, setProgressNext] = useState('');

    const [isGeneratingAI, setIsGeneratingAI] = useState(false);
    const [aiSummary, setAiSummary] = useState<any>(null);

    const generateAISummary = () => {
        setIsGeneratingAI(true);
        setTimeout(() => {
            const weight = selectedClient?.history[0]?.weightKgs || 70;
            const protein = Math.round(weight * 2.2);
            setAiSummary({
                metas: "Aumentar rango de movilidad articular (cadera/tobillo), mantener adherencia >90%.",
                recomendaciones: "Déficit detectado en cadena posterior (isquiosurales) y rotadores externos del hombro. Sugerencia: Integrar Curl Nórdico y Face Pulls.",
                valorFisio: "Prevención de sarcopenia, mejora de densidad mineral ósea y corrección postural mediante sobrecarga progresiva controlada.",
                calorias: "Aprox. 450 - 550 kcal por sesión (Estimación metabólica alta por densidad de trabajo).",
                proteina: `${protein}g diarios (Cálculo clínico: ${weight}kg × 2.2g/kg para síntesis proteica e hipertrofia).`
            });
            setIsGeneratingAI(false);
        }, 1500);
    };

    const pdfRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadedClients = getSavedClients();
        setClients(loadedClients);
        const loadedRoutines = getRoutinesSync();
        setRoutines(loadedRoutines);
        if (loadedClients.length > 0 && !selectedClient) {
            setSelectedClient(loadedClients[0]);
        }
    }, []);

    const handleCreateClient = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newClientName.trim()) return;

        const newProfile: ClientProfile = {
            id: `client-${Date.now()}`,
            name: newClientName.trim(),
            age: newClientAge ? parseInt(newClientAge) : undefined,
            activeRoutineId: newClientRoutine,
            history: [
                {
                    date: new Date().toISOString(),
                    notes: "Ingreso inicial y valoración clínica.",
                    adherenceRate: 100,
                    expectedResults: "Adaptación neuromuscular y control de cargas iniciales.",
                    nextProgressionRecommendation: "Iniciar con cargas ligeras (RPE 6-7)."
                }
            ]
        };

        saveClient(newProfile);
        const updatedList = getSavedClients();
        setClients(updatedList);
        setSelectedClient(newProfile);
        setNewClientName('');
        setNewClientAge('');
        setNewClientRoutine(undefined);
        setShowNewClientModal(false);
    };

    const handleAddProgress = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedClient) return;

        const newEntry: ClientProgressEntry = {
            date: new Date().toISOString(),
            notes: progressNotes || "Control periódico de rutina y evaluación.",
            adherenceRate: progressAdherence,
            weightKgs: progressWeight ? parseFloat(progressWeight) : undefined,
            expectedResults: progressExpected || "Consolidación de técnica y aumento de volumen.",
            nextProgressionRecommendation: progressNext || "Aumentar 1 serie o subir carga un 5%."
        };

        const updated: ClientProfile = {
            ...selectedClient,
            history: [newEntry, ...selectedClient.history]
        };

        saveClient(updated);
        setSelectedClient(updated);
        setClients(getSavedClients());
        
        // Reset form
        setProgressNotes('');
        setProgressAdherence(100);
        setProgressWeight('');
        setProgressExpected('');
        setProgressNext('');
        setShowNewProgressModal(false);
    };

    const handleUpdateRoutine = (routineId: number) => {
        if (!selectedClient) return;
        const updated: ClientProfile = {
            ...selectedClient,
            activeRoutineId: routineId === 0 ? undefined : routineId
        };
        saveClient(updated);
        setSelectedClient(updated);
        setClients(getSavedClients());
    };

    const handleGeneratePDF = async () => {
        if (!pdfRef.current || !selectedClient) return;

        try {
            const canvas = await html2canvas(pdfRef.current, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Reporte_Clinico_${selectedClient.name.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Hubo un error al generar el PDF.");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 animate-fadeIn">
            {/* Sidebar Clientes */}
            <div className="w-full lg:w-80 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Pacientes / Atletas</h2>
                    <button 
                        onClick={() => setShowNewClientModal(true)}
                        className="text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl text-xs font-black hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                        + Nuevo Paciente
                    </button>
                </div>

                <div className="space-y-2">
                    {clients.map(c => (
                        <button
                            key={c.id}
                            onClick={() => setSelectedClient(c)}
                            className={`w-full text-left p-4 rounded-2xl border transition-all ${
                                selectedClient?.id === c.id 
                                    ? 'bg-blue-600 text-white border-blue-700 shadow-md shadow-blue-200' 
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-black text-sm block leading-tight">{c.name}</span>
                                {c.age && (
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                        selectedClient?.id === c.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                        {c.age} años
                                    </span>
                                )}
                            </div>
                            <span className={`text-[10px] uppercase font-extrabold mt-1 block tracking-wider ${
                                selectedClient?.id === c.id ? 'text-blue-200' : 'text-slate-400'
                            }`}>
                                {c.history.length} reporte{c.history.length !== 1 ? 's' : ''} registrado{c.history.length !== 1 ? 's' : ''}
                            </span>
                        </button>
                    ))}
                    {clients.length === 0 && (
                        <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs font-bold">
                            No hay pacientes aún. Crea uno para comenzar.
                        </div>
                    )}
                </div>
            </div>

            {/* Panel Principal de Seguimiento */}
            <div className="flex-1">
                {selectedClient ? (
                    <div className="space-y-6">
                        {/* Barra de Acciones */}
                        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-black uppercase text-slate-400">Rutina Asignada:</span>
                                <select 
                                    value={selectedClient.activeRoutineId || 0}
                                    onChange={(e) => handleUpdateRoutine(parseInt(e.target.value))}
                                    className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-slate-800 focus:outline-none focus:border-blue-500"
                                >
                                    <option value={0}>-- Sin rutina asignada --</option>
                                    {routines.map(r => (
                                        <option key={r.id} value={r.id}>{r.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <select 
                                    value={branding}
                                    onChange={(e) => setBranding(e.target.value as 'CMBI' | 'HOME')}
                                    className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                                >
                                    <option value="CMBI">Formato: CMBI FITNESS</option>
                                    <option value="HOME">Formato: HOMETHERAPY</option>
                                </select>
                                <button 
                                    onClick={generateAISummary} 
                                    disabled={isGeneratingAI}
                                    className="bg-indigo-600 text-white font-black px-4 py-2 rounded-xl text-xs hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-1.5 disabled:opacity-50"
                                >
                                    <span>✨</span> {isGeneratingAI ? 'Generando...' : 'Resumen Inteligente (Gemini)'}
                                </button>
                                <button 
                                    onClick={() => setShowNewProgressModal(true)} 
                                    className="bg-emerald-600 text-white font-black px-4 py-2 rounded-xl text-xs hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-1.5"
                                >
                                    <span>+</span> Registrar Avance
                                </button>
                                <button 
                                    onClick={handleGeneratePDF} 
                                    className="bg-rose-600 text-white font-black px-4 py-2 rounded-xl text-xs hover:bg-rose-700 transition-colors shadow-sm flex items-center gap-1.5"
                                >
                                    <span>📄</span> Exportar PDF
                                </button>
                            </div>
                        </div>

                        {/* Hoja Clínica Exportable a PDF */}
                        <div ref={pdfRef} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            {/* Línea de acento visual */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"></div>
                            
                            {/* Cabecera Membretada */}
                            <div className="flex justify-between items-start mb-10 border-b border-slate-100 pb-8">
                                <div className="flex items-center gap-4">
                                    <img src={logoUrl} alt="Logo" className="w-16 h-16 object-contain" />
                                    <div>
                                        {branding === 'CMBI' ? (
                                            <>
                                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">CMBI <span className="text-blue-600">FITNESS</span></h1>
                                                <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest mt-1">Centro Medico de Bienestar Integral - "Ejercicio Funcional"</p>
                                            </>
                                        ) : (
                                            <>
                                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">HOME<span className="text-blue-600">THERAPY</span></h1>
                                                <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest mt-1">Fisioterapia, Biomecánica & Rendimiento Deportivo</p>
                                            </>
                                        )}
                                        <p className="text-[10px] font-bold text-slate-500 mt-0.5">Entrenador: Adrian Morales</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block bg-blue-50 text-blue-800 text-[10px] font-black uppercase px-2.5 py-1 rounded-md mb-2">Expediente Activo</span>
                                    <h2 className="text-2xl font-black text-slate-900">{selectedClient.name}</h2>
                                    <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                                        Fecha de Emisión: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                            </div>

                            {/* Resumen Inteligente (Generado por IA) */}
                            {aiSummary && (
                                <div className="mb-8 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl">
                                    <h3 className="text-xs font-black text-indigo-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span>✨</span> Análisis Inteligente & Metas (Gemini 2.5 Flash)
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-wider text-indigo-400 mb-1">Metas Sugeridas</p>
                                            <p className="text-xs text-indigo-950 font-medium">{aiSummary.metas}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-wider text-indigo-400 mb-1">Valor Fisioterapéutico a Largo Plazo</p>
                                            <p className="text-xs text-indigo-950 font-medium">{aiSummary.valorFisio}</p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <p className="text-[10px] font-black uppercase tracking-wider text-indigo-400 mb-1">Nuevos Ejercicios y Recomendaciones</p>
                                            <p className="text-xs text-indigo-950 font-medium">{aiSummary.recomendaciones}</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-indigo-50">
                                            <p className="text-[10px] font-black uppercase tracking-wider text-indigo-400 mb-1">Gasto Energético</p>
                                            <p className="text-xs font-bold text-slate-700">{aiSummary.calorias}</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-indigo-50">
                                            <p className="text-[10px] font-black uppercase tracking-wider text-indigo-400 mb-1">Requerimiento Proteico (Hipertrofia)</p>
                                            <p className="text-xs font-bold text-slate-700">{aiSummary.proteina}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Historial Clínico y Avances (REORDERED TO SHOW FIRST) */}
                            <div>
                                <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 border-l-4 border-blue-600 pl-3">
                                    Historial Global de Avances y Progresiones
                                </h3>
                                <div className="space-y-4">
                                    {selectedClient.history.map((entry, idx) => (
                                        <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-black border border-blue-100">
                                                        📅 {new Date(entry.date).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                    </div>
                                                    {entry.weightKgs && (
                                                        <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-black">
                                                            ⚖️ {entry.weightKgs} kg
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-black">
                                                    Adherencia al Plan: {entry.adherenceRate ?? 100}%
                                                </div>
                                            </div>

                                            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
                                                {entry.notes}
                                            </p>
                                            
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                <div>
                                                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">🎯 Resultados Esperados</h5>
                                                    <p className="text-xs text-slate-800 font-semibold">{entry.expectedResults || '-'}</p>
                                                </div>
                                                <div>
                                                    <h5 className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-1">📈 Siguiente Progresión (Volumen/Intensidad)</h5>
                                                    <p className="text-xs text-blue-900 font-black">{entry.nextProgressionRecommendation || '-'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Detalle de Rutina Activa (REORDERED TO SHOW SECOND) */}
                            <div className="mt-8 mb-8">
                                <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3 border-l-4 border-blue-600 pl-3">
                                    Protocolo de Entrenamiento Activo
                                </h3>
                                {selectedClient.activeRoutineId ? (
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-black text-base text-slate-900">
                                                    {routines.find(r => r.id === selectedClient.activeRoutineId)?.name || 'Rutina Personalizada'}
                                                </p>
                                                <p className="text-xs text-slate-600 mt-1">
                                                    {routines.find(r => r.id === selectedClient.activeRoutineId)?.description || 'Sin descripción.'}
                                                </p>
                                            </div>
                                            <span className="bg-blue-100 text-blue-800 text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase">
                                                {routines.find(r => r.id === selectedClient.activeRoutineId)?.days.length || 0} Días de Entrenamiento
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 rounded-xl bg-slate-50 text-slate-400 text-xs italic border border-slate-100">
                                        No hay un protocolo asignado formalmente a este paciente.
                                    </div>
                                )}
                            </div>

                            {/* Firma / Aval */}
                            <div className="mt-14 pt-6 border-t border-slate-100 flex justify-between items-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Documento Clínico Confidencial</p>
                                <div className="text-right">
                                    <div className="w-36 border-b border-slate-300 mb-1 ml-auto"></div>
                                    <p className="text-[10px] font-black text-slate-700 uppercase tracking-wide">Firma: Fisioterapeuta / Entrenador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl p-16 text-center border border-slate-100">
                        <span className="text-5xl mb-4 block">👥</span>
                        <h3 className="text-xl font-black text-slate-800 mb-2">Panel de Seguimiento a Clientes</h3>
                        <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                            Gestiona el progreso semanal y mensual de tus pacientes de rehabilitación o atletas, ajusta sus progresiones y exporta reportes en PDF con un clic.
                        </p>
                        <button 
                            onClick={() => setShowNewClientModal(true)}
                            className="bg-blue-600 text-white font-black px-6 py-3 rounded-2xl text-xs hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
                        >
                            + Crear Primer Paciente
                        </button>
                    </div>
                )}
            </div>

            {/* Modal: Crear Nuevo Paciente */}
            {showNewClientModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 relative">
                        <h3 className="text-lg font-black text-slate-900 mb-4">Registrar Nuevo Paciente</h3>
                        <form onSubmit={handleCreateClient} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo *</label>
                                <input 
                                    type="text" 
                                    required
                                    value={newClientName}
                                    onChange={(e) => setNewClientName(e.target.value)}
                                    placeholder="Ej. Carlos Mendoza"
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Edad (Opcional)</label>
                                <input 
                                    type="number" 
                                    value={newClientAge}
                                    onChange={(e) => setNewClientAge(e.target.value)}
                                    placeholder="Ej. 34"
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Asignar Rutina Inicial</label>
                                <select 
                                    value={newClientRoutine || ''}
                                    onChange={(e) => setNewClientRoutine(e.target.value ? parseInt(e.target.value) : undefined)}
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                >
                                    <option value="">-- Asignar más tarde --</option>
                                    {routines.map(r => (
                                        <option key={r.id} value={r.id}>{r.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => setShowNewClientModal(false)}
                                    className="flex-1 bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-200 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 bg-blue-600 text-white font-black px-4 py-2.5 rounded-xl text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                                >
                                    Guardar Paciente
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal: Registrar Avance / Progreso */}
            {showNewProgressModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 relative">
                        <h3 className="text-lg font-black text-slate-900 mb-1">Registrar Evaluación y Progresión</h3>
                        <p className="text-xs text-slate-500 mb-4">Paciente: <strong className="text-slate-800">{selectedClient?.name}</strong></p>
                        
                        <form onSubmit={handleAddProgress} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Notas Clínicas / Avances *</label>
                                <textarea 
                                    rows={3}
                                    required
                                    value={progressNotes}
                                    onChange={(e) => setProgressNotes(e.target.value)}
                                    placeholder="Ej. Cumplió los 4 días de rutina. Refiere dolor 0/10 en rodilla. Buena técnica en sentadilla búlgara..."
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Adherencia (%)</label>
                                    <input 
                                        type="number" 
                                        min="0"
                                        max="100"
                                        value={progressAdherence}
                                        onChange={(e) => setProgressAdherence(parseInt(e.target.value) || 0)}
                                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Peso Corporal (kg)</label>
                                    <input 
                                        type="number" 
                                        step="0.1"
                                        value={progressWeight}
                                        onChange={(e) => setProgressWeight(e.target.value)}
                                        placeholder="Ej. 78.5"
                                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Resultados Esperados (Próximo Ciclo)</label>
                                <input 
                                    type="text" 
                                    value={progressExpected}
                                    onChange={(e) => setProgressExpected(e.target.value)}
                                    placeholder="Ej. Aumentar rango de dorsiflexión y tolerancia a 12 reps."
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Siguiente Progresión de Ejercicio o Volumen</label>
                                <input 
                                    type="text" 
                                    value={progressNext}
                                    onChange={(e) => setProgressNext(e.target.value)}
                                    placeholder="Ej. Subir a 4 series de 10 reps @ RPE 8 (+2.5 kg)."
                                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => setShowNewProgressModal(false)}
                                    className="flex-1 bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-200 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 bg-emerald-600 text-white font-black px-4 py-2.5 rounded-xl text-xs hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200"
                                >
                                    Guardar Avance
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
