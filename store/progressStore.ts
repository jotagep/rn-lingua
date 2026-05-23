import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type LessonStatus = "locked" | "unlocked" | "in_progress" | "completed"

interface LessonProgress {
	lessonId: string
	status: LessonStatus
	completedActivities: number
	totalActivities: number
	lastAccessedAt?: string
}

interface ProgressStore {
	lessonProgress: Record<string, LessonProgress>
	setLessonStatus: (
		lessonId: string,
		status: LessonStatus,
		totalActivities?: number,
	) => void
	setLessonCompleted: (lessonId: string, totalActivities: number) => void
	setLessonInProgress: (lessonId: string, completedActivities: number, totalActivities: number) => void
	getLessonStatus: (lessonId: string) => LessonStatus
	getLessonProgress: (lessonId: string) => LessonProgress | undefined
	resetProgress: () => void
	hasHydrated: boolean
	setHasHydrated: (state: boolean) => void
}

export const useProgressStore = create<ProgressStore>()(
	persist(
		(set, get) => ({
			lessonProgress: {},
			setLessonStatus: (lessonId, status, totalActivities = 6) =>
				set((state) => ({
					lessonProgress: {
						...state.lessonProgress,
						[lessonId]: {
							lessonId,
							status,
							completedActivities:
								state.lessonProgress[lessonId]?.completedActivities ?? 0,
							totalActivities,
							lastAccessedAt: new Date().toISOString(),
						},
					},
				})),
			setLessonCompleted: (lessonId, totalActivities) =>
				set((state) => ({
					lessonProgress: {
						...state.lessonProgress,
						[lessonId]: {
							lessonId,
							status: "completed",
							completedActivities: totalActivities,
							totalActivities,
							lastAccessedAt: new Date().toISOString(),
						},
					},
				})),
			setLessonInProgress: (lessonId, completedActivities, totalActivities) =>
				set((state) => ({
					lessonProgress: {
						...state.lessonProgress,
						[lessonId]: {
							lessonId,
							status: "in_progress",
							completedActivities,
							totalActivities,
							lastAccessedAt: new Date().toISOString(),
						},
					},
				})),
			getLessonStatus: (lessonId) => {
				return get().lessonProgress[lessonId]?.status ?? "unlocked"
			},
			getLessonProgress: (lessonId) => {
				return get().lessonProgress[lessonId]
			},
			resetProgress: () => set({ lessonProgress: {} }),
			hasHydrated: false,
			setHasHydrated: (state) => set({ hasHydrated: state }),
		}),
		{
			name: "progress-storage",
			storage: createJSONStorage(() => AsyncStorage),
			onRehydrateStorage: () => (state, error) => {
				if (!error) {
					state?.setHasHydrated(true)
				}
			},
		},
	),
)
