/**
 * Units
 *
 * Each language is divided into units. A unit groups related lessons together.
 * This file defines the sample units for our supported languages.
 */

import type { Unit, UnitMap } from "@/types/learning"

export const units: UnitMap = {
	// ─── Spanish ────────────────────────────────────────────────────────────────
	"es-basics": {
		id: "es-basics",
		languageId: "es",
		title: "Basics 1",
		description: "Learn essential greetings, introductions, and common phrases.",
		order: 1,
		color: "#58CC02",
		icon: "👋",
		lessonIds: ["es-greetings", "es-introduce-yourself", "es-common-phrases"],
	},
	"es-travel": {
		id: "es-travel",
		languageId: "es",
		title: "Travel",
		description: "Navigate airports, hotels, and restaurants with confidence.",
		order: 2,
		color: "#58CC02",
		icon: "✈️",
		lessonIds: ["es-at-the-airport", "es-at-the-hotel"],
	},

	// ─── French ─────────────────────────────────────────────────────────────────
	"fr-basics": {
		id: "fr-basics",
		languageId: "fr",
		title: "Basics 1",
		description: "Master greetings, introductions, and everyday expressions.",
		order: 1,
		color: "#1CB0F6",
		icon: "👋",
		lessonIds: ["fr-greetings", "fr-introduce-yourself", "fr-common-phrases"],
	},

	// ─── Japanese ───────────────────────────────────────────────────────────────
	"ja-basics": {
		id: "ja-basics",
		languageId: "ja",
		title: "Basics 1",
		description: "Start with hiragana greetings, introductions, and set phrases.",
		order: 1,
		color: "#FF4B4B",
		icon: "👋",
		lessonIds: ["ja-greetings", "ja-introduce-yourself", "ja-common-phrases"],
	},
}

export const getUnitsForLanguage = (languageId: string): Unit[] =>
	Object.values(units)
		.filter((u) => u.languageId === languageId)
		.sort((a, b) => a.order - b.order)

export const getUnitById = (id: string): Unit | undefined => units[id]
