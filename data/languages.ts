/**
 * Supported Languages
 *
 * Hardcoded language catalogue. Add new languages here to make them available
 * in the language selection screen.
 */

import type { Language, LanguageMap } from "@/types/learning"

export const languages: LanguageMap = {
	en: {
		id: "en",
		code: "en",
		name: "English",
		nativeName: "English",
		flag: "https://flagcdn.com/w320/gb.png",
		direction: "ltr",
		color: "#3B82F6",
		isAvailable: true,
		learnerCount: "45.2M learners",
	},
	es: {
		id: "es",
		code: "es",
		name: "Spanish",
		nativeName: "Español",
		flag: "https://flagcdn.com/w320/es.png",
		direction: "ltr",
		color: "#58CC02",
		isAvailable: true,
		learnerCount: "28.4M learners",
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
		learnerCount: "19.4M learners",
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
		learnerCount: "12.7M learners",
	},
	de: {
		id: "de",
		code: "de",
		name: "German",
		nativeName: "Deutsch",
		flag: "https://flagcdn.com/w320/de.png",
		direction: "ltr",
		color: "#FFC800",
		isAvailable: true,
		learnerCount: "8.1M learners",
	},
	it: {
		id: "it",
		code: "it",
		name: "Italian",
		nativeName: "Italiano",
		flag: "https://flagcdn.com/w320/it.png",
		direction: "ltr",
		color: "#00BFA5",
		isAvailable: true,
		learnerCount: "6.5M learners",
	},
	ko: {
		id: "ko",
		code: "ko",
		name: "Korean",
		nativeName: "한국어",
		flag: "https://flagcdn.com/w320/kr.png",
		direction: "ltr",
		color: "#8B5CF6",
		isAvailable: true,
		learnerCount: "5.8M learners",
	},
	zh: {
		id: "zh",
		code: "zh",
		name: "Chinese",
		nativeName: "中文",
		flag: "https://flagcdn.com/w320/cn.png",
		direction: "ltr",
		color: "#F97316",
		isAvailable: true,
		learnerCount: "4.2M learners",
	},
	pt: {
		id: "pt",
		code: "pt",
		name: "Portuguese",
		nativeName: "Português",
		flag: "https://flagcdn.com/w320/pt.png",
		direction: "ltr",
		color: "#0EA5E9",
		isAvailable: true,
		learnerCount: "3.1M learners",
	},
}

export const availableLanguages: Language[] = Object.values(languages).filter(
	(l) => l.isAvailable,
)

export const getLanguageById = (id: string): Language | undefined =>
	languages[id]
