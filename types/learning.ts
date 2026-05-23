/**
 * Learning Content Types
 *
 * These types define the shape of all hardcoded learning content in the app.
 * They are designed to be simple, typed, and easy to extend as new languages
 * or lesson formats are added.
 */

// ─── Core Identifiers ────────────────────────────────────────────────────────

export type LanguageId = string
export type UnitId = string
export type LessonId = string

// ─── Language ────────────────────────────────────────────────────────────────

export type TextDirection = "ltr" | "rtl"

export interface Language {
	id: LanguageId
	code: string // ISO 639-1, e.g. "es"
	name: string // Display name, e.g. "Spanish"
	nativeName: string // Local name, e.g. "Español"
	flag: string // Flag image URL
	direction: TextDirection
	color: string // Theme hex color, e.g. "#58CC02"
	isAvailable: boolean
	learnerCount: string // e.g. "28.4M learners"
}

// ─── Unit ────────────────────────────────────────────────────────────────────

export interface Unit {
	id: UnitId
	languageId: LanguageId
	title: string
	description: string
	order: number
	color: string
	icon: string // Emoji or icon name
	lessonIds: LessonId[]
}

// ─── Lesson ──────────────────────────────────────────────────────────────────

export interface Lesson {
	id: LessonId
	unitId: UnitId
	title: string
	description: string
	order: number
	activities: Activity[]
	vocabulary: VocabularyItem[]
	phrases: Phrase[]
	goals: LessonGoal[]
	xpReward: number
	estimatedTimeMinutes: number
	aiTeacherPrompt?: AITeacherPrompt // Optional for audio/video AI lessons
	image?: string // Lesson illustration URL
}

// ─── Activities ──────────────────────────────────────────────────────────────

export type ActivityType =
	| "multiple_choice"
	| "translation"
	| "listening"
	| "speaking"
	| "chat"
	| "video"

export interface BaseActivity {
	id: string
	type: ActivityType
	instruction: string
	hint?: string
}

export interface MultipleChoiceActivity extends BaseActivity {
	type: "multiple_choice"
	question: string
	options: string[]
	correctOptionIndex: number
	explanation: string
}

export interface TranslationActivity extends BaseActivity {
	type: "translation"
	prompt: string // Text in source language
	sourceLanguage: LanguageId
	targetLanguage: LanguageId
	correctAnswer: string
	acceptableAnswers?: string[] // Alternative correct answers
}

export interface ListeningActivity extends BaseActivity {
	type: "listening"
	audioTranscript: string // Text that the audio says
	question: string
	options: string[]
	correctOptionIndex: number
}

export interface SpeakingActivity extends BaseActivity {
	type: "speaking"
	prompt: string // What the user should say
	targetPhrase: string
	pronunciationHint?: string
}

export interface ChatActivity extends BaseActivity {
	type: "chat"
	scenario: string // e.g. "Ordering coffee at a café"
	initialMessage: string // First message from AI tutor
	expectedResponses: string[] // Key phrases the user should practice
}

export interface VideoActivity extends BaseActivity {
	type: "video"
	scenario: string
	objectives: string[]
	aiTeacherPrompt: AITeacherPrompt
}

export type Activity =
	| MultipleChoiceActivity
	| TranslationActivity
	| ListeningActivity
	| SpeakingActivity
	| ChatActivity
	| VideoActivity

// ─── Vocabulary & Phrases ────────────────────────────────────────────────────

export interface VocabularyItem {
	id: string
	word: string // In target language
	translation: string // In user's language (English)
	pronunciation?: string // IPA or romanization
	partOfSpeech: "noun" | "verb" | "adjective" | "adverb" | "phrase" | "other"
	exampleSentence?: string
	exampleTranslation?: string
}

export interface Phrase {
	id: string
	text: string // In target language
	translation: string // In English
	context?: string // When to use this phrase
	pronunciation?: string
}

// ─── Lesson Goals ────────────────────────────────────────────────────────────

export type GoalType =
	| "speak"
	| "listen"
	| "read"
	| "write"
	| "grammar"
	| "culture"

export interface LessonGoal {
	id: string
	description: string
	icon: string // Emoji or icon name
	type: GoalType
}

// ─── AI Teacher Prompts ──────────────────────────────────────────────────────

export interface AITeacherPrompt {
	role: string // e.g. "Beginner Spanish Teacher"
	personality: string // e.g. "Encouraging, patient, and playful"
	instructions: string[] // Step-by-step behavior instructions
	vocabularyFocus: string[] // Words to emphasize
	grammarFocus?: string[] // Grammar points to cover
	scenario: string // Lesson scenario context
	openingLine: string // First thing the AI says
	closingLine?: string // Final wrap-up message
}

// ─── Content Lookup Helpers ──────────────────────────────────────────────────

export type LanguageMap = Record<LanguageId, Language>
export type UnitMap = Record<UnitId, Unit>
export type LessonMap = Record<LessonId, Lesson>
