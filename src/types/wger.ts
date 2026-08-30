export interface Exercise {
	id: number;
	name: string;
	description: string;
	category: number;
	equipment: number[];
	muscles: number[];
	muscles_secondary?: number[];
	image_url: string | null;
	youtube_url?: string;
}

export interface Muscle {
	id: number;
	name: string;
	name_en: string;
	is_front: boolean;
}

export interface Equipment {
	id: number;
	name: string;
}

export interface ProgressionConfig {
	iteration: number;
	value: number;
	operation: 'r' | '+' | '-' | '*' | '/';
	step: 'abs' | '%';
	repeat: boolean;
}

export interface SlotEntry {
	id: number;
	slot: number;
	exercise: number;
	exercise_detail?: Exercise;
	weight_configs?: ProgressionConfig[];
	sets_configs?: ProgressionConfig[];
	repetitions_configs?: ProgressionConfig[];
	rir_configs?: ProgressionConfig[];
	rest_configs?: ProgressionConfig[];
}

export interface Slot {
	id: number;
	day: number;
	order: number;
	is_superset: boolean;
	entries: SlotEntry[];
}

export interface Day {
	id: number;
	routine: number;
	order: number;
	description: string;
	need_logs_to_advance: boolean;
	is_rest: boolean;
	slots: Slot[];
}

export interface Routine {
	id: number;
	name: string;
	description: string;
	start_date: string;
	end_date: string;
	fit_in_week: boolean;
	days: Day[];
}

export interface WorkoutSession {
	id: number;
	routine: number;
	date: string;
	impression: number;
	notes: string;
}

export interface WorkoutLog {
	id: number;
	session: number;
	exercise: number;
	exercise_name?: string;
	weight: number;
	repetitions: number;
	rir: number;
	rest: number;
	weight_target: number;
	repetitions_target: number;
	rir_target: number;
	rest_target: number;
	iteration: number;
	set_number: number;
	timestamp: string;
}

export interface GymInterleavedSet {
	id: string;
	dayOrder: number;
	dayId: number;
	slotId: number;
	slotEntryId: number;
	exercise: Exercise;
	setIndex: number;
	totalSets: number;
	targetWeight: number;
	targetReps: number;
	targetRir: number;
	targetRestSeconds: number;
	isSuperset: boolean;
	supersetGroupOrder: number;
	completed: boolean;
}

export interface DateSequenceDisplayDay {
	date: string;
	dayNumber: number;
	iteration: number;
	isRest: boolean;
	dayName: string;
	exercises: Array<{
		name: string;
		sets: number;
		reps: number;
		weight: number;
		rir: number;
	}>;
}

export interface RoutineStats {
	totalVolume: number;
	totalSets: number;
	totalReps: number;
	averageEstimated1RM: number;
	highestEstimated1RM: {
		exerciseName: string;
		estimated1RM: number;
		weight: number;
		reps: number;
	} | null;
	muscleDistribution: Array<{
		muscleId: number;
		muscleName: string;
		totalSets: number;
		totalVolumeKg: number;
	}>;
	kineticChain: {
		push: number;
		pull: number;
		legs: number;
		core: number;
	};
}

export interface WgerAuthConfig {
	baseUrl: string;
	authType: 'anonymous' | 'token' | 'jwt';
	permanentToken?: string;
	accessToken?: string;
	refreshToken?: string;
	username?: string;
}


export interface ClientProgressEntry {
  date: string;
  notes: string;
  weightKgs?: number;
  adherenceRate?: number; // percentage
  nextProgressionRecommendation?: string;
  expectedResults?: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  age?: number;
  activeRoutineId?: number;
  history: ClientProgressEntry[];
}
