import { GlossaryView } from './components/GlossaryView';
// src/App.tsx
import { useEffect, useState } from 'react';
import logoUrl from './assets/cmbi-logo.png';
import {
  Exercise,
  Routine,
  WorkoutLog,
  WorkoutSession,
  getExercises,
  searchExercisesAPI,
  getRoutines,
  getSavedWorkoutLogs,
  getSavedWorkoutSessions,
  getStoredAuthConfig,
  MUSCLE_CATALOG,
  EQUIPMENT_CATALOG,
  getRoutinesSync,
} from './services/wgerApi';
import ExerciseCard from './components/ExerciseCard';
import { ExerciseModal } from './components/ExerciseModal';
import { ClientDashboard } from './components/ClientDashboard';
import { RoutineExplorer } from './components/RoutineExplorer';
import { GymMode } from './components/GymMode';
import { StatsDashboard } from './components/StatsDashboard';
import { AuthSettingsModal } from './components/AuthSettingsModal';

type ActiveTab = 'routines' | 'gym' | 'stats' | 'exercises' | 'clients' | 'glossary';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('routines');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);
  const [selectedExerciseModal, setSelectedExerciseModal] = useState<Exercise | null>(null);
  const [activeGymDayOrder, setActiveGymDayOrder] = useState<number>(1);
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [sessions, setSessions] = useState<WorkoutSession[]>([]);
  
  // Exercise catalog filters
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [apiSearchResults, setApiSearchResults] = useState<Exercise[] | null>(null);
  const [selectedMuscle, setSelectedMuscle] = useState<number | 'all'>('all');
  const [selectedEquipment, setSelectedEquipment] = useState<number | 'all'>('all');

  // Loading & Modals
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authConfig, setAuthConfig] = useState(getStoredAuthConfig());

  // Load all initial data
  const loadData = async () => {
    try {
      setLoading(true);
      const [exData, routData] = await Promise.all([
        getExercises(60),
        getRoutines(),
      ]);
      setExercises(exData);
      setRoutines(routData);
      if (routData.length > 0 && !selectedRoutine) {
        setSelectedRoutine(routData[0]);
      }
      setLogs(getSavedWorkoutLogs());
      setSessions(getSavedWorkoutSessions());
      setAuthConfig(getStoredAuthConfig());
    } catch (err) {
      console.error("Error loading app data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Effect for API text search with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setApiSearchResults(null);
      setIsSearching(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const results = await searchExercisesAPI(searchQuery);
        setApiSearchResults(results);
      } catch (err) {
        console.error("Search error", err);
        setApiSearchResults(null); // Fallback to local
      } finally {
        setIsSearching(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);


  
  const handleRoutineSelect = (routine: Routine) => {
    setSelectedRoutine(routine);
    // Sync routines quietly without triggering the global loading state
    setRoutines(getRoutinesSync());
  };


  const handleStartGymFromRoutine = (routine: Routine, dayOrder: number) => {
    setSelectedRoutine(routine);
    setActiveGymDayOrder(dayOrder);
    setActiveTab('gym');
  };

  const handleFinishGymWorkout = () => {
    setLogs(getSavedWorkoutLogs());
    setSessions(getSavedWorkoutSessions());
    setActiveTab('stats');
  };

  // Filtered exercises
  
  const filteredExercises = (apiSearchResults || exercises).filter(ex => {
    // If we have API results, the text query is already applied by the API (or its fallback). 
    // If not, we do it locally.
    const matchesQuery = apiSearchResults ? true : (!searchQuery || ex.name.toLowerCase().includes(searchQuery.toLowerCase()) || ex.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesMuscle = selectedMuscle === 'all' || (ex.muscles && ex.muscles.includes(selectedMuscle as number));
    const matchesEquipment = selectedEquipment === 'all' || (ex.equipment && ex.equipment.includes(selectedEquipment as number));
    
    return matchesQuery && matchesMuscle && matchesEquipment;
  });


  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 flex flex-col relative overflow-hidden">
      {/* Decorative Background Layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Subtle Blue Glows */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        <div className="absolute -left-20 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-200 opacity-20 blur-[120px]"></div>
        <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-300 opacity-10 blur-[150px]"></div>
      </div>
      
      {/* Top Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="CMBI Logo" className="w-12 h-12 object-contain drop-shadow-md" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-tight text-slate-900 leading-none">
                  CMBI <span className="text-blue-600">FITNESS</span>
                </h1>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-0.5">
                Centro Médico de Bienestar Integral
              </p>
            </div>
          </div>

          {/* Right Action / Auth Status */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-xl text-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-105 shadow-sm text-slate-700"
              title="Configuración de Sistema"
            >
              <span>⚙️</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto no-scrollbar gap-2 border-t border-slate-100 py-3">
          <button
            onClick={() => setActiveTab('routines')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-105 hover:shadow-md ${
              activeTab === 'routines'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-100 shadow-sm'
            }`}
          >
            <span>Rutinas</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-bold">{routines.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('gym')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-105 hover:shadow-md ${
              activeTab === 'gym'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-100 shadow-sm'
            }`}
          >
            <span>Sesion Activa</span>
            <span className="text-[9px] uppercase tracking-wider bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.5 rounded">En vivo</span>
          </button>

          <button
            onClick={() => {
              setLogs(getSavedWorkoutLogs());
              setActiveTab('stats');
            }}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-105 hover:shadow-md ${
              activeTab === 'stats'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-100 shadow-sm'
            }`}
          >
            <span>Biometria</span>
          </button>

          <button
            onClick={() => setActiveTab('clients')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-105 hover:shadow-md ${
              activeTab === 'clients'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-100 shadow-sm'
            }`}
          >
            <span>Pacientes</span>
          </button>

          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-105 hover:shadow-md ${
              activeTab === 'exercises'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-100 shadow-sm'
            }`}
          >
            <span>Ejercicios</span>
            <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-full font-bold">{exercises.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-105 hover:shadow-md ${
              activeTab === 'glossary'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-100 shadow-sm'
            }`}
          >
            <span>Glosario</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-grow w-full relative z-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-36">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <p className="mt-6 text-slate-400 font-black uppercase tracking-[0.25em] text-xs">
              Sincronizando con wger API...
            </p>
          </div>
        ) : (
          <>
            {/* Tab 1: Routines Explorer */}
            {activeTab === 'routines' && (
              <RoutineExplorer
                routines={routines}
                selectedRoutine={selectedRoutine}
                onSelectRoutine={handleRoutineSelect}
                onStartGymMode={handleStartGymFromRoutine}
              />
            )}

            {/* Tab 2: Gym Mode Execution */}
            {activeTab === 'gym' && (
              selectedRoutine ? (
                <GymMode
                  routine={selectedRoutine}
                  initialDayOrder={activeGymDayOrder}
                  onFinishWorkout={handleFinishGymWorkout}
                />
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-md mx-auto">
                  <p className="text-slate-500 font-bold mb-4">Selecciona una rutina primero para entrenar.</p>
                  <button
                    onClick={() => setActiveTab('routines')}
                    className="bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl text-xs"
                  >
                    Ver Rutinas Disponibles
                  </button>
                </div>
              )
            )}

            {/* Tab 5: Clients & Reports */}
            {activeTab === 'clients' && (
              <ClientDashboard />
            )}

            {/* Tab 6: Biomechanical Glossary & Concepts */}
            {activeTab === 'glossary' && (
              <GlossaryView />
            )}

            {/* Tab 3: Biometrics & 1RM Stats */}
            {activeTab === 'stats' && (
              <StatsDashboard logs={logs} sessions={sessions} />
            )}

            {/* Tab 4: Exercises Catalog & Search */}
            {activeTab === 'exercises' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Search & Filter Bar */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Buscar ejercicio biomecánico (ej: Sentadilla, Plank, Remo, Push-up)..."
                        className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                      {isSearching ? <span className="absolute left-3.5 top-3.5 w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span> : <span className="absolute left-3.5 top-3.5 text-slate-400 text-base">🔍</span>}
                    </div>

                    {/* Muscle Filter */}
                    <select
                      value={selectedMuscle}
                      onChange={e => setSelectedMuscle(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
                      className="px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Todos los Músculos</option>
                      {MUSCLE_CATALOG.map(m => (
                        <option key={m.id} value={m.id}>{m.name}</option>
                      ))}
                    </select>

                    {/* Equipment Filter */}
                    <select
                      value={selectedEquipment}
                      onChange={e => setSelectedEquipment(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
                      className="px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Todo el Equipamiento</option>
                      {EQUIPMENT_CATALOG.map(eq => (
                        <option key={eq.id} value={eq.id}>{eq.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Exercises Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredExercises.map(item => (
                    <ExerciseCard key={item.id} exercise={item} onOpenDetails={setSelectedExerciseModal} />
                  ))}

                  {filteredExercises.length === 0 && (
                    <div className="col-span-full text-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                      <span className="text-3xl">🔎</span>
                      <p className="text-slate-500 font-bold mt-2">No se encontraron ejercicios con los filtros seleccionados.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      
            {selectedExerciseModal && (
               <ExerciseModal
                  exercise={selectedExerciseModal}
                  onClose={() => setSelectedExerciseModal(null)}
                  onGoToRoutines={() => {
                      setSelectedExerciseModal(null);
                      setActiveTab('routines');
                  }}
               />
            )}
        </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white/80 backdrop-blur-md mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-700">Home Therapy</strong> • Ensenada, B.C. | Impulsado por <strong className="text-blue-600">wger REST API</strong>
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-600 transition-colors">Biomecánica & Rehabilitación</span>
            <span>•</span>
            <span className="hover:text-slate-600 transition-colors">Hipertrofia Funcional</span>
          </div>
        </div>
      </footer>

      {/* Auth Settings Modal */}
      <AuthSettingsModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onConfigUpdated={() => loadData()}
      />
    </div>
  );
}

export default App;
