import { create } from "zustand"

interface LanguageStore {
	selectedLanguageId: string | null
	setSelectedLanguageId: (id: string | null) => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
	selectedLanguageId: null,
	setSelectedLanguageId: (id) => set({ selectedLanguageId: id }),
}))
