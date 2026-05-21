/**
 * Supported Languages
 *
 * Hardcoded language catalogue. Add new languages here to make them available
 * in the language selection screen.
 */

import type { Language, LanguageMap } from "@/types/learning"

export const languages: LanguageMap = {
	es: {
		id: "es",
		code: "es",
		name: "Spanish",
		nativeName: "Español",
		flag: "https://flagcdn.com/w320/es.png",
		direction: "ltr",
		color: "#58CC02",
		isAvailable: true,
	},
	fr: {
		id: "fr",
		code: "fr",
		name: "French",
		nativeName: "Français",
		flag: "https://flagcdn.com/w320/fr.png",
		direction: "ltr",
		color: "#1CB0F6",
		isAvailable: true,
	},
	ja: {
		id: "ja",
		code: "ja",
		name: "Japanese",
		nativeName: "日本語",
		flag: "https://flagcdn.com/w320/jp.png",
		direction: "ltr",
		color: "#FF4B4B",
		isAvailable: true,
	},
	de: {
		id: "de",
		code: "de",
		name: "German",
		nativeName: "Deutsch",
		flag: "https://flagcdn.com/w320/de.png",
		direction: "ltr",
		color: "#FFC800",
		isAvailable: false,
	},
}

export const availableLanguages: Language[] = Object.values(languages).filter(
	(l) => l.isAvailable
)

export const getLanguageById = (id: string): Language | undefined =>
	languages[id]
