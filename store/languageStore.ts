import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface LanguageStore {
	selectedLanguageId: string | null
	setSelectedLanguageId: (id: string | null) => void
	clearLanguage: () => void
	hasHydrated: boolean
	setHasHydrated: (state: boolean) => void
}

export const useLanguageStore = create<LanguageStore>()(
	persist(
		(set) => ({
			selectedLanguageId: null,
			setSelectedLanguageId: (id) => set({ selectedLanguageId: id }),
			clearLanguage: () => set({ selectedLanguageId: null }),
			hasHydrated: false,
			setHasHydrated: (state) => set({ hasHydrated: state }),
		}),
		{
			name: "language-storage",
			storage: createJSONStorage(() => AsyncStorage),
			onRehydrateStorage: () => (state, error) => {
				if (!error) {
					state?.setHasHydrated(true)
				}
			},
		},
	),
)
