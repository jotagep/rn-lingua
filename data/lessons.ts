/**
 * Lessons
 *
 * Hardcoded lesson content including activities, vocabulary, phrases, goals,
 * and AI teacher prompts. Designed for beginners and easy to extend.
 */

import type { Lesson, LessonMap } from "@/types/learning"
import { getUnitsForLanguage } from "./units"

// ─── Helper to keep IDs readable ─────────────────────────────────────────────
const mc = (
	id: string,
	instruction: string,
	question: string,
	options: string[],
	correctIndex: number,
	explanation: string,
	hint?: string
) => ({
	id,
	type: "multiple_choice" as const,
	instruction,
	question,
	options,
	correctOptionIndex: correctIndex,
	explanation,
	hint,
})

const tr = (
	id: string,
	instruction: string,
	prompt: string,
	sourceLang: string,
	targetLang: string,
	correct: string,
	acceptable?: string[],
	hint?: string
) => ({
	id,
	type: "translation" as const,
	instruction,
	prompt,
	sourceLanguage: sourceLang,
	targetLanguage: targetLang,
	correctAnswer: correct,
	acceptableAnswers: acceptable,
	hint,
})

const lis = (
	id: string,
	instruction: string,
	transcript: string,
	question: string,
	options: string[],
	correctIndex: number,
	hint?: string
) => ({
	id,
	type: "listening" as const,
	instruction,
	audioTranscript: transcript,
	question,
	options,
	correctOptionIndex: correctIndex,
	hint,
})

const spk = (
	id: string,
	instruction: string,
	prompt: string,
	targetPhrase: string,
	pronunciationHint?: string
) => ({
	id,
	type: "speaking" as const,
	instruction,
	prompt,
	targetPhrase,
	pronunciationHint,
})

const chat = (
	id: string,
	instruction: string,
	scenario: string,
	initialMessage: string,
	expectedResponses: string[]
) => ({
	id,
	type: "chat" as const,
	instruction,
	scenario,
	initialMessage,
	expectedResponses,
})

// ─── Lessons ─────────────────────────────────────────────────────────────────

export const lessons: LessonMap = {
	// ═════════════════════════════════════════════════════════════════════════════
	// SPANISH
	// ═════════════════════════════════════════════════════════════════════════════

	"es-greetings": {
		id: "es-greetings",
		unitId: "es-basics",
		title: "Greetings",
		description: "Learn the most common Spanish greetings and farewells.",
		order: 1,
		activities: [
			mc(
				"es-g-1",
				"Select the correct greeting for the morning",
				"You meet your neighbour at 8 AM. What do you say?",
				["Buenas noches", "Buenos días", "Hola", "Adiós"],
				1,
				"'Buenos días' means 'Good morning' and is used until noon.",
				"Think about the time of day"
			),
			mc(
				"es-g-2",
				"Choose the correct farewell",
				"You are leaving a party late at night. What do you say?",
				["Hola", "Buenos días", "Buenas noches", "Por favor"],
				2,
				"'Buenas noches' works both as a greeting and farewell at night."
			),
			tr(
				"es-g-3",
				"Translate to Spanish",
				"Thank you",
				"en",
				"es",
				"Gracias",
				["Muchas gracias"],
				"It is one of the first words every learner memorises."
			),
			tr(
				"es-g-4",
				"Translate to Spanish",
				"Please",
				"en",
				"es",
				"Por favor"
			),
			lis(
				"es-g-5",
				"Listen and select what you hear",
				"Hola, ¿cómo estás?",
				"What greeting did the speaker use?",
				["Adiós", "Hola, ¿cómo estás?", "Buenas noches", "Gracias"],
				1
			),
		],
		vocabulary: [
			{
				id: "es-v-hola",
				word: "Hola",
				translation: "Hello",
				pronunciation: "OH-lah",
				partOfSpeech: "phrase",
				exampleSentence: "Hola, ¿cómo estás?",
				exampleTranslation: "Hello, how are you?",
			},
			{
				id: "es-v-adios",
				word: "Adiós",
				translation: "Goodbye",
				pronunciation: "ah-DYOHSS",
				partOfSpeech: "phrase",
				exampleSentence: "Adiós, nos vemos mañana.",
				exampleTranslation: "Goodbye, see you tomorrow.",
			},
			{
				id: "es-v-gracias",
				word: "Gracias",
				translation: "Thank you",
				pronunciation: "GRAH-see-ahss",
				partOfSpeech: "phrase",
				exampleSentence: "Gracias por tu ayuda.",
				exampleTranslation: "Thank you for your help.",
			},
			{
				id: "es-v-porfavor",
				word: "Por favor",
				translation: "Please",
				pronunciation: "por fah-VOR",
				partOfSpeech: "phrase",
				exampleSentence: "Un café, por favor.",
				exampleTranslation: "A coffee, please.",
			},
			{
				id: "es-v-buenosdias",
				word: "Buenos días",
				translation: "Good morning",
				pronunciation: "BWEH-nohs DEE-ahss",
				partOfSpeech: "phrase",
				exampleSentence: "Buenos días, señor García.",
				exampleTranslation: "Good morning, Mr. García.",
			},
			{
				id: "es-v-buenasnoches",
				word: "Buenas noches",
				translation: "Good night",
				pronunciation: "BWEH-nahss NOH-chehss",
				partOfSpeech: "phrase",
				exampleSentence: "Buenas noches, que descanses.",
				exampleTranslation: "Good night, rest well.",
			},
		],
		phrases: [
			{
				id: "es-p-1",
				text: "Hola, ¿cómo estás?",
				translation: "Hello, how are you?",
				context: "Informal greeting to a friend",
				pronunciation: "OH-lah, KOH-moh eh-STAHSS",
			},
			{
				id: "es-p-2",
				text: "Muchas gracias",
				translation: "Thank you very much",
				context: "Expressing strong gratitude",
				pronunciation: "MOO-chahss GRAH-see-ahss",
			},
			{
				id: "es-p-3",
				text: "Hasta luego",
				translation: "See you later",
				context: "Casual farewell",
				pronunciation: "AHS-tah LWEH-goh",
			},
		],
		goals: [
			{
				id: "es-g-goal-1",
				description: "Greet someone at any time of day",
				icon: "🗣️",
				type: "speak",
			},
			{
				id: "es-g-goal-2",
				description: "Say thank you and please politely",
				icon: "🙏",
				type: "speak",
			},
			{
				id: "es-g-goal-3",
				description: "Recognise basic spoken greetings",
				icon: "👂",
				type: "listen",
			},
		],
		xpReward: 15,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Beginner Spanish Teacher",
			personality: "Warm, patient, and enthusiastic",
			instructions: [
				"Greet the student in Spanish and ask how they are.",
				"Introduce the four core greetings: hola, buenos días, buenas tardes, buenas noches.",
				"Explain when to use each greeting based on time of day.",
				"Practice a short back-and-forth dialogue.",
				"End with encouragement and a fun farewell.",
			],
			vocabularyFocus: ["hola", "adiós", "gracias", "por favor", "buenos días", "buenas noches"],
			grammarFocus: ["Time-of-day expressions"],
			scenario: "First day at a language exchange meetup",
			openingLine: "¡Hola! Soy tu profesora de español. ¿Cómo estás hoy?",
			closingLine: "¡Excelente trabajo! Nos vemos en la próxima lección. ¡Adiós!",
		},
	},

	"es-introduce-yourself": {
		id: "es-introduce-yourself",
		unitId: "es-basics",
		title: "Introduce Yourself",
		description: "Learn how to say your name, where you are from, and meet others.",
		order: 2,
		activities: [
			mc(
				"es-i-1",
				"Select the correct answer",
				"How do you say 'My name is Maria'?",
				[
					"Me llamo es Maria",
					"Me llamo Maria",
					"Yo nombre Maria",
					"Soy llamo Maria",
				],
				1,
				"'Me llamo' literally means 'I call myself' and is the natural way to introduce yourself."
			),
			tr(
				"es-i-2",
				"Translate to Spanish",
				"I am from the United States",
				"en",
				"es",
				"Soy de Estados Unidos",
				["Yo soy de Estados Unidos"]
			),
			mc(
				"es-i-3",
				"Choose the correct response",
				"Someone says 'Mucho gusto'. What do you reply?",
				["Gracias", "Igualmente", "Por favor", "Lo siento"],
				1,
				"'Igualmente' means 'likewise' and is the standard reply to 'Nice to meet you'."
			),
			spk(
				"es-i-4",
				"Say this out loud",
				"Introduce yourself: say 'My name is...' and 'I am from...' in Spanish",
				"Me llamo... Soy de...",
				"meh YAH-moh ... soy deh ..."
			),
		],
		vocabulary: [
			{
				id: "es-v-mellamo",
				word: "Me llamo",
				translation: "My name is",
				pronunciation: "meh YAH-moh",
				partOfSpeech: "phrase",
				exampleSentence: "Me llamo Carlos.",
				exampleTranslation: "My name is Carlos.",
			},
			{
				id: "es-v-soyde",
				word: "Soy de",
				translation: "I am from",
				pronunciation: "soy deh",
				partOfSpeech: "phrase",
				exampleSentence: "Soy de México.",
				exampleTranslation: "I am from Mexico.",
			},
			{
				id: "es-v-muchogusto",
				word: "Mucho gusto",
				translation: "Nice to meet you",
				pronunciation: "MOO-choh GOO-stoh",
				partOfSpeech: "phrase",
				exampleSentence: "Mucho gusto, encantado.",
				exampleTranslation: "Nice to meet you, delighted.",
			},
			{
				id: "es-v-igualmente",
				word: "Igualmente",
				translation: "Likewise",
				pronunciation: "ee-gwahl-MEN-teh",
				partOfSpeech: "adverb",
				exampleSentence: "Igualmente, un placer.",
				exampleTranslation: "Likewise, a pleasure.",
			},
		],
		phrases: [
			{
				id: "es-p-i-1",
				text: "¿Cómo te llamas?",
				translation: "What is your name?",
				context: "Informal conversation",
				pronunciation: "KOH-moh teh YAH-mahss",
			},
			{
				id: "es-p-i-2",
				text: "Encantado de conocerte",
				translation: "Pleased to meet you",
				context: "Said by a man; women say 'encantada'",
				pronunciation: "ehn-kahn-TAH-doh deh koh-noh-SEHR-teh",
			},
		],
		goals: [
			{
				id: "es-i-goal-1",
				description: "Introduce yourself by name and origin",
				icon: "🎤",
				type: "speak",
			},
			{
				id: "es-i-goal-2",
				description: "Ask someone their name",
				icon: "❓",
				type: "speak",
			},
		],
		xpReward: 20,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Beginner Spanish Teacher",
			personality: "Friendly and curious",
			instructions: [
				"Ask the student their name in Spanish.",
				"Model the response 'Me llamo...' and have the student repeat.",
				"Ask where they are from using '¿De dónde eres?'",
				"Model 'Soy de...' and practice together.",
				"Wrap up with a mock introduction dialogue.",
			],
			vocabularyFocus: ["me llamo", "soy de", "mucho gusto", "igualmente"],
			grammarFocus: ["Verb 'llamarse'", "Preposition 'de'"],
			scenario: "Meeting a new classmate on the first day of Spanish class",
			openingLine: "¡Hola! ¿Cómo te llamas?",
			closingLine: "¡Mucho gusto! Espero verte pronto en clase.",
		},
	},

	"es-common-phrases": {
		id: "es-common-phrases",
		unitId: "es-basics",
		title: "Common Phrases",
		description: "Master yes, no, sorry, and other daily essentials.",
		order: 3,
		activities: [
			mc(
				"es-cp-1",
				"Select the correct meaning",
				"What does 'No entiendo' mean?",
				["I don't know", "I don't understand", "No problem", "Excuse me"],
				1,
				"'Entender' means 'to understand', so 'No entiendo' is 'I don't understand'."
			),
			tr(
				"es-cp-2",
				"Translate to Spanish",
				"Excuse me / I'm sorry",
				"en",
				"es",
				"Lo siento",
				["Perdón", "Disculpe"]
			),
			mc(
				"es-cp-3",
				"Choose the best response",
				"You bump into someone on the street. What do you say?",
				["Gracias", "Lo siento", "Sí", "Adiós"],
				1,
				"'Lo siento' is used to apologise when you inconvenience someone."
			),
			chat(
				"es-cp-4",
				"Respond in the chat",
				"You are lost in Madrid and need help",
				"¡Hola! ¿Necesitas ayuda? ¿Dónde quieres ir?",
				["Perdón", "No entiendo", "¿Dónde está...?", "Gracias"]
			),
		],
		vocabulary: [
			{
				id: "es-v-si",
				word: "Sí",
				translation: "Yes",
				pronunciation: "see",
				partOfSpeech: "other",
				exampleSentence: "Sí, por favor.",
				exampleTranslation: "Yes, please.",
			},
			{
				id: "es-v-no",
				word: "No",
				translation: "No",
				pronunciation: "noh",
				partOfSpeech: "other",
				exampleSentence: "No, gracias.",
				exampleTranslation: "No, thank you.",
			},
			{
				id: "es-v-losiento",
				word: "Lo siento",
				translation: "I'm sorry",
				pronunciation: "loh see-EN-toh",
				partOfSpeech: "phrase",
				exampleSentence: "Lo siento, no entiendo.",
				exampleTranslation: "I'm sorry, I don't understand.",
			},
			{
				id: "es-v-noentiendo",
				word: "No entiendo",
				translation: "I don't understand",
				pronunciation: "noh en-tee-EN-doh",
				partOfSpeech: "phrase",
				exampleSentence: "No entiendo la pregunta.",
				exampleTranslation: "I don't understand the question.",
			},
		],
		phrases: [
			{
				id: "es-p-cp-1",
				text: "De nada",
				translation: "You're welcome",
				context: "Reply to 'gracias'",
				pronunciation: "deh NAH-dah",
			},
			{
				id: "es-p-cp-2",
				text: "No hay de qué",
				translation: "Don't mention it",
				context: "Polite reply to thanks",
				pronunciation: "noh eye deh KEH",
			},
		],
		goals: [
			{
				id: "es-cp-goal-1",
				description: "Say yes and no confidently",
				icon: "✅",
				type: "speak",
			},
			{
				id: "es-cp-goal-2",
				description: "Apologise and admit you don't understand",
				icon: "🙇",
				type: "speak",
			},
		],
		xpReward: 15,
		estimatedTimeMinutes: 4,
		aiTeacherPrompt: {
			role: "Beginner Spanish Teacher",
			personality: "Supportive and reassuring",
			instructions: [
				"Introduce sí, no, lo siento, and no entiendo.",
				"Explain the difference between 'lo siento' (apology) and 'perdón' (excuse me).",
				"Role-play a scenario where the student is confused.",
				"Encourage the student to say 'No entiendo' without shame.",
			],
			vocabularyFocus: ["sí", "no", "lo siento", "no entiendo", "de nada"],
			scenario: "Navigating a busy Spanish market",
			openingLine: "Vamos a practicar frases útiles para el día a día. ¿Estás listo?",
			closingLine: "Recuerda, está bien decir 'no entiendo'. ¡Sigue practicando!",
		},
	},

	"es-at-the-airport": {
		id: "es-at-the-airport",
		unitId: "es-travel",
		title: "At the Airport",
		description: "Navigate check-in, security, and boarding in Spanish.",
		order: 1,
		activities: [
			mc(
				"es-ap-1",
				"Select the correct word",
				"Where do you show your 'pasaporte'?",
				["At the restaurant", "At the hotel", "At the airport", "At the museum"],
				2,
				"'Pasaporte' means 'passport', which you need at the airport."
			),
			tr(
				"es-ap-2",
				"Translate to Spanish",
				"Where is the gate?",
				"en",
				"es",
				"¿Dónde está la puerta?",
				["¿Dónde está la puerta de embarque?"]
			),
			lis(
				"es-ap-3",
				"Listen and answer",
				"Su vuelo sale de la puerta cinco.",
				"What gate does the flight leave from?",
				["Puerta tres", "Puerta cinco", "Puerta diez", "Puerta uno"],
				1
			),
		],
		vocabulary: [
			{
				id: "es-v-pasaporte",
				word: "pasaporte",
				translation: "passport",
				pronunciation: "pah-sah-POR-teh",
				partOfSpeech: "noun",
				exampleSentence: "Necesito mi pasaporte.",
				exampleTranslation: "I need my passport.",
			},
			{
				id: "es-v-boleto",
				word: "boleto",
				translation: "ticket",
				pronunciation: "boh-LEH-toh",
				partOfSpeech: "noun",
				exampleSentence: "Mi boleto es de ida y vuelta.",
				exampleTranslation: "My ticket is round trip.",
			},
			{
				id: "es-v-puerta",
				word: "puerta",
				translation: "gate / door",
				pronunciation: "PWEHR-tah",
				partOfSpeech: "noun",
				exampleSentence: "La puerta de embarque es la doce.",
				exampleTranslation: "The boarding gate is twelve.",
			},
			{
				id: "es-v-vuelo",
				word: "vuelo",
				translation: "flight",
				pronunciation: "VWEH-loh",
				partOfSpeech: "noun",
				exampleSentence: "Mi vuelo está retrasado.",
				exampleTranslation: "My flight is delayed.",
			},
		],
		phrases: [
			{
				id: "es-p-ap-1",
				text: "¿Dónde está...?",
				translation: "Where is...?",
				context: "Asking for location",
				pronunciation: "DOHN-deh eh-STAH",
			},
			{
				id: "es-p-ap-2",
				text: "Necesito ayuda",
				translation: "I need help",
				context: "Getting assistance",
				pronunciation: "neh-theh-SEE-toh ah-YOO-dah",
			},
		],
		goals: [
			{
				id: "es-ap-goal-1",
				description: "Ask where something is at the airport",
				icon: "✈️",
				type: "speak",
			},
			{
				id: "es-ap-goal-2",
				description: "Understand basic airport announcements",
				icon: "📢",
				type: "listen",
			},
		],
		xpReward: 20,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Travel Spanish Teacher",
			personality: "Calm and practical",
			instructions: [
				"Set the scene: the student is at a Spanish airport.",
				"Practice asking for the gate, bathroom, and customs.",
				"Introduce key nouns: pasaporte, boleto, puerta, vuelo.",
				"Run a mock dialogue with an airport employee.",
			],
			vocabularyFocus: ["pasaporte", "boleto", "puerta", "vuelo", "ayuda"],
			scenario: "Checking in for a flight to Barcelona",
			openingLine: "Bienvenido al aeropuerto. ¿Necesitas ayuda para encontrar tu puerta?",
		},
	},

	"es-at-the-hotel": {
		id: "es-at-the-hotel",
		unitId: "es-travel",
		title: "At the Hotel",
		description: "Check in, ask for amenities, and handle room issues.",
		order: 2,
		activities: [
			mc(
				"es-ht-1",
				"Select the correct phrase",
				"You want to check in. What do you say?",
				[
					"Quiero una habitación",
					"Tengo una reserva",
					"La cuenta, por favor",
					"¿Dónde está el baño?",
				],
				1,
				"'Tengo una reserva' means 'I have a reservation', the standard check-in phrase."
			),
			tr(
				"es-ht-2",
				"Translate to Spanish",
				"The key, please",
				"en",
				"es",
				"La llave, por favor"
			),
			spk(
				"es-ht-3",
				"Say this out loud",
				"Ask for the Wi-Fi password",
				"¿Cuál es la contraseña del Wi-Fi?",
				"kwahl ehss lah kohn-trah-SEH-nah del wee-fee"
			),
		],
		vocabulary: [
			{
				id: "es-v-habitacion",
				word: "habitación",
				translation: "room",
				pronunciation: "ah-bee-tah-SYOHN",
				partOfSpeech: "noun",
				exampleSentence: "Necesito una habitación doble.",
				exampleTranslation: "I need a double room.",
			},
			{
				id: "es-v-reserva",
				word: "reserva",
				translation: "reservation",
				pronunciation: "reh-SEHR-vah",
				partOfSpeech: "noun",
				exampleSentence: "Tengo una reserva a nombre de López.",
				exampleTranslation: "I have a reservation under the name López.",
			},
			{
				id: "es-v-llave",
				word: "llave",
				translation: "key",
				pronunciation: "YAH-veh",
				partOfSpeech: "noun",
				exampleSentence: "¿Me da la llave, por favor?",
				exampleTranslation: "Can you give me the key, please?",
			},
		],
		phrases: [
			{
				id: "es-p-ht-1",
				text: "Tengo una reserva",
				translation: "I have a reservation",
				context: "Checking in at reception",
				pronunciation: "TEHN-goh OO-nah reh-SEHR-vah",
			},
		],
		goals: [
			{
				id: "es-ht-goal-1",
				description: "Check in at a hotel reception",
				icon: "🏨",
				type: "speak",
			},
			{
				id: "es-ht-goal-2",
				description: "Ask for room amenities",
				icon: "🔑",
				type: "speak",
			},
		],
		xpReward: 20,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Travel Spanish Teacher",
			personality: "Polite and service-oriented",
			instructions: [
				"Act as a hotel receptionist and greet the guest.",
				"Ask for their name and reservation details.",
				"Provide the room number and key.",
				"Offer information about breakfast times and Wi-Fi.",
			],
			vocabularyFocus: ["habitación", "reserva", "llave", "recepción"],
			scenario: "Checking into a small hotel in Seville",
			openingLine: "Buenas tardes, bienvenido a nuestro hotel. ¿Tiene una reserva?",
		},
	},

	// ═════════════════════════════════════════════════════════════════════════════
	// FRENCH
	// ═════════════════════════════════════════════════════════════════════════════

	"fr-greetings": {
		id: "fr-greetings",
		unitId: "fr-basics",
		title: "Greetings",
		description: "Learn essential French greetings and polite expressions.",
		order: 1,
		activities: [
			mc(
				"fr-g-1",
				"Select the correct greeting",
				"You enter a bakery at 9 AM. What do you say?",
				["Bonsoir", "Bonne nuit", "Bonjour", "Salut"],
				2,
				"'Bonjour' is the standard greeting for the daytime and in formal settings."
			),
			tr(
				"fr-g-2",
				"Translate to French",
				"Thank you very much",
				"en",
				"fr",
				"Merci beaucoup"
			),
			mc(
				"fr-g-3",
				"Choose the correct response",
				"Someone says 'Merci'. What do you reply?",
				["S'il vous plaît", "De rien", "Bonjour", "Excusez-moi"],
				1,
				"'De rien' literally means 'of nothing' and is the casual way to say 'you're welcome'."
			),
			lis(
				"fr-g-4",
				"Listen and identify",
				"Bonjour, comment allez-vous?",
				"What did the speaker ask?",
				["How old are you?", "How are you?", "What is your name?", "Where are you from?"],
				1
			),
		],
		vocabulary: [
			{
				id: "fr-v-bonjour",
				word: "Bonjour",
				translation: "Hello / Good morning",
				pronunciation: "bon-ZHOOR",
				partOfSpeech: "phrase",
				exampleSentence: "Bonjour, madame.",
				exampleTranslation: "Hello, madam.",
			},
			{
				id: "fr-v-au-revoir",
				word: "Au revoir",
				translation: "Goodbye",
				pronunciation: "oh ruh-VWAHR",
				partOfSpeech: "phrase",
				exampleSentence: "Au revoir et à bientôt.",
				exampleTranslation: "Goodbye and see you soon.",
			},
			{
				id: "fr-v-merci",
				word: "Merci",
				translation: "Thank you",
				pronunciation: "mehr-SEE",
				partOfSpeech: "phrase",
				exampleSentence: "Merci pour votre aide.",
				exampleTranslation: "Thank you for your help.",
			},
			{
				id: "fr-v-svp",
				word: "S'il vous plaît",
				translation: "Please",
				pronunciation: "seel voo PLEH",
				partOfSpeech: "phrase",
				exampleSentence: "Un café, s'il vous plaît.",
				exampleTranslation: "A coffee, please.",
			},
			{
				id: "fr-v-salut",
				word: "Salut",
				translation: "Hi / Bye (informal)",
				pronunciation: "sah-LYOO",
				partOfSpeech: "phrase",
				exampleSentence: "Salut, ça va?",
				exampleTranslation: "Hi, how are you?",
			},
			{
				id: "fr-v-derien",
				word: "De rien",
				translation: "You're welcome",
				pronunciation: "duh RYAN",
				partOfSpeech: "phrase",
				exampleSentence: "De rien, c'est un plaisir.",
				exampleTranslation: "You're welcome, it's a pleasure.",
			},
		],
		phrases: [
			{
				id: "fr-p-1",
				text: "Comment allez-vous?",
				translation: "How are you? (formal)",
				context: "Polite conversation",
				pronunciation: "koh-mahn tah-lay VOO",
			},
			{
				id: "fr-p-2",
				text: "Enchanté(e)",
				translation: "Nice to meet you",
				context: "After an introduction; add an 'e' if you are female",
				pronunciation: "ahn-shahn-TAY",
			},
		],
		goals: [
			{
				id: "fr-g-goal-1",
				description: "Greet someone formally and informally",
				icon: "🗣️",
				type: "speak",
			},
			{
				id: "fr-g-goal-2",
				description: "Say thank you and reply politely",
				icon: "🙏",
				type: "speak",
			},
		],
		xpReward: 15,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Beginner French Teacher",
			personality: "Elegant and encouraging",
			instructions: [
				"Greet the student with 'Bonjour' and explain formal vs informal usage.",
				"Teach bonjour, salut, au revoir, merci, and s'il vous plaît.",
				"Practice a short café ordering dialogue.",
				"Correct pronunciation gently with phonetic hints.",
			],
			vocabularyFocus: ["bonjour", "salut", "au revoir", "merci", "s'il vous plaît", "de rien"],
			grammarFocus: ["Formal vs informal 'you' (vous vs tu)"],
			scenario: "Meeting a French colleague for the first time",
			openingLine: "Bonjour! Je suis ravie de vous rencontrer. Comment allez-vous?",
			closingLine: "C'était un plaisir. Au revoir et à bientôt!",
		},
	},

	"fr-introduce-yourself": {
		id: "fr-introduce-yourself",
		unitId: "fr-basics",
		title: "Introduce Yourself",
		description: "Say your name, ask about others, and start a conversation.",
		order: 2,
		activities: [
			mc(
				"fr-i-1",
				"Select the correct phrase",
				"How do you formally ask someone's name?",
				[
					"Comment tu t'appelles?",
					"Quel est votre nom?",
					"Tu es qui?",
					"Comment ça va?",
				],
				1,
				"'Quel est votre nom?' is the formal way to ask someone's name."
			),
			tr(
				"fr-i-2",
				"Translate to French",
				"My name is Sophie",
				"en",
				"fr",
				"Je m'appelle Sophie"
			),
			spk(
				"fr-i-3",
				"Say this out loud",
				"Introduce yourself formally in French",
				"Je m'appelle... Je suis de... Enchanté(e).",
				"zhuh mah-PEHL ... zhuh swee duh ... ahn-shahn-TAY"
			),
			chat(
				"fr-i-4",
				"Reply in the chat",
				"You meet someone at a networking event",
				"Bonsoir! Je m'appelle Pierre. Et vous, comment vous appelez-vous?",
				["Je m'appelle", "Enchanté(e)", "Je suis de", "Et vous?"]
			),
		],
		vocabulary: [
			{
				id: "fr-v-jemappelle",
				word: "Je m'appelle",
				translation: "My name is",
				pronunciation: "zhuh mah-PEHL",
				partOfSpeech: "phrase",
				exampleSentence: "Je m'appelle Marie.",
				exampleTranslation: "My name is Marie.",
			},
			{
				id: "fr-v-jesuisde",
				word: "Je suis de",
				translation: "I am from",
				pronunciation: "zhuh swee duh",
				partOfSpeech: "phrase",
				exampleSentence: "Je suis de Paris.",
				exampleTranslation: "I am from Paris.",
			},
			{
				id: "fr-v-commenttutappelles",
				word: "Comment tu t'appelles?",
				translation: "What is your name? (informal)",
				pronunciation: "koh-MAHN too tah-PEHL",
				partOfSpeech: "phrase",
				exampleSentence: "Salut! Comment tu t'appelles?",
				exampleTranslation: "Hi! What is your name?",
			},
		],
		phrases: [
			{
				id: "fr-p-i-1",
				text: "Je suis ravie de vous rencontrer",
				translation: "I am delighted to meet you (female speaker)",
				context: "Formal introduction",
				pronunciation: "zhuh swee rah-VEE duh voo ruh-kohn-TRAY",
			},
		],
		goals: [
			{
				id: "fr-i-goal-1",
				description: "Introduce yourself by name",
				icon: "🎤",
				type: "speak",
			},
			{
				id: "fr-i-goal-2",
				description: "Ask someone their name formally",
				icon: "❓",
				type: "speak",
			},
		],
		xpReward: 20,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Beginner French Teacher",
			personality: "Charming and precise",
			instructions: [
				"Introduce 'Je m'appelle' and explain the reflexive verb 's'appeler'.",
				"Distinguish between formal 'vous' and informal 'tu'.",
				"Have the student introduce themselves and ask your name in return.",
				"Add a cultural note about cheek kisses (la bise) in France.",
			],
			vocabularyFocus: ["je m'appelle", "je suis de", "comment tu t'appelles", "enchanté(e)"],
			grammarFocus: ["Reflexive verbs", "Formal vs informal address"],
			scenario: "First conversation at a French language café",
			openingLine: "Bonjour! Comment vous appelez-vous? Moi, je m'appelle Amélie.",
			closingLine: "C'était charmant de faire votre connaissance. À très vite!",
		},
	},

	"fr-common-phrases": {
		id: "fr-common-phrases",
		unitId: "fr-basics",
		title: "Common Phrases",
		description: "Handle everyday situations with confidence in French.",
		order: 3,
		activities: [
			mc(
				"fr-cp-1",
				"Select the correct meaning",
				"What does 'Je ne comprends pas' mean?",
				["I don't know", "I don't understand", "I can't hear you", "I disagree"],
				1,
				"'Comprendre' means 'to understand', so this phrase means 'I don't understand'."
			),
			tr(
				"fr-cp-2",
				"Translate to French",
				"Excuse me",
				"en",
				"fr",
				"Excusez-moi",
				["Pardon"]
			),
			mc(
				"fr-cp-3",
				"Choose the best response",
				"You didn't hear what someone said. What do you say?",
				["Merci", "Pardon?", "De rien", "Bonjour"],
				1,
				"'Pardon?' with a rising intonation politely asks someone to repeat."
			),
		],
		vocabulary: [
			{
				id: "fr-v-oui",
				word: "Oui",
				translation: "Yes",
				pronunciation: "wee",
				partOfSpeech: "other",
				exampleSentence: "Oui, bien sûr.",
				exampleTranslation: "Yes, of course.",
			},
			{
				id: "fr-v-non",
				word: "Non",
				translation: "No",
				pronunciation: "nohn",
				partOfSpeech: "other",
				exampleSentence: "Non, merci.",
				exampleTranslation: "No, thank you.",
			},
			{
				id: "fr-v-excusezmoi",
				word: "Excusez-moi",
				translation: "Excuse me",
				pronunciation: "ehk-skew-zay MWAH",
				partOfSpeech: "phrase",
				exampleSentence: "Excusez-moi, où est la gare?",
				exampleTranslation: "Excuse me, where is the train station?",
			},
			{
				id: "fr-v-jenecomprendspas",
				word: "Je ne comprends pas",
				translation: "I don't understand",
				pronunciation: "zhuh nuh kohm-PRAHN pah",
				partOfSpeech: "phrase",
				exampleSentence: "Je ne comprends pas cette question.",
				exampleTranslation: "I don't understand this question.",
			},
		],
		phrases: [
			{
				id: "fr-p-cp-1",
				text: "Pardon",
				translation: "Sorry / Pardon",
				context: "Bumping into someone or asking for repetition",
				pronunciation: "pahr-DOHN",
			},
			{
				id: "fr-p-cp-2",
				text: "Je suis désolé(e)",
				translation: "I am sorry",
				context: "Apologising for a mistake",
				pronunciation: "zhuh swee day-zoh-LAY",
			},
		],
		goals: [
			{
				id: "fr-cp-goal-1",
				description: "Say yes and no in French",
				icon: "✅",
				type: "speak",
			},
			{
				id: "fr-cp-goal-2",
				description: "Apologise and ask for clarification",
				icon: "🙇",
				type: "speak",
			},
		],
		xpReward: 15,
		estimatedTimeMinutes: 4,
		aiTeacherPrompt: {
			role: "Beginner French Teacher",
			personality: "Gentle and supportive",
			instructions: [
				"Introduce oui, non, excusez-moi, and je ne comprends pas.",
				"Explain the difference between 'pardon' and 'excusez-moi'.",
				"Role-play a scenario where the student is overwhelmed by fast speech.",
				"Encourage the student to say 'je ne comprends pas' proudly.",
			],
			vocabularyFocus: ["oui", "non", "excusez-moi", "pardon", "je ne comprends pas"],
			scenario: "Getting directions from a fast-speaking Parisian",
			openingLine: "N'ayez pas peur de dire que vous ne comprenez pas. Commençons!",
			closingLine: "Bravo! Vous avez le droit de demander de l'aide. À la prochaine!",
		},
	},

	// ═════════════════════════════════════════════════════════════════════════════
	// JAPANESE
	// ═════════════════════════════════════════════════════════════════════════════

	"ja-greetings": {
		id: "ja-greetings",
		unitId: "ja-basics",
		title: "Greetings",
		description: "Learn essential Japanese greetings and set phrases.",
		order: 1,
		activities: [
			mc(
				"ja-g-1",
				"Select the correct greeting",
				"You meet your teacher at 2 PM. What do you say?",
				["おはようございます", "こんにちは", "こんばんは", "さようなら"],
				1,
				"'こんにちは' (konnichiwa) is used from late morning until evening."
			),
			tr(
				"ja-g-2",
				"Translate to Japanese",
				"Thank you",
				"en",
				"ja",
				"ありがとう",
				["ありがとうございます"]
			),
			mc(
				"ja-g-3",
				"Choose the correct phrase",
				"You are leaving the office at 6 PM. What do you say to colleagues?",
				["おはようございます", "こんにちは", "お疲れ様でした", "お願いします"],
				2,
				"'お疲れ様でした' (otsukaresama deshita) is the standard farewell after work."
			),
			lis(
				"ja-g-4",
				"Listen and identify",
				"すみません、お手洗いはどこですか。",
				"What is the speaker asking?",
				["Where is the train station?", "Where is the bathroom?", "What time is it?", "How much is this?"],
				1
			),
		],
		vocabulary: [
			{
				id: "ja-v-konnichiwa",
				word: "こんにちは",
				translation: "Hello / Good afternoon",
				pronunciation: "kohn-nee-chee-wah",
				partOfSpeech: "phrase",
				exampleSentence: "こんにちは、田中先生。",
				exampleTranslation: "Hello, Professor Tanaka.",
			},
			{
				id: "ja-v-sayonara",
				word: "さようなら",
				translation: "Goodbye",
				pronunciation: "sah-yoh-nah-rah",
				partOfSpeech: "phrase",
				exampleSentence: "さようなら、また明日。",
				exampleTranslation: "Goodbye, see you tomorrow.",
			},
			{
				id: "ja-v-arigatou",
				word: "ありがとう",
				translation: "Thank you",
				pronunciation: "ah-ree-gah-toh",
				partOfSpeech: "phrase",
				exampleSentence: "ありがとうございます。",
				exampleTranslation: "Thank you very much (polite).",
			},
			{
				id: "ja-v-onegaishimasu",
				word: "お願いします",
				translation: "Please",
				pronunciation: "oh-neh-gai-shee-mahs",
				partOfSpeech: "phrase",
				exampleSentence: "水をお願いします。",
				exampleTranslation: "Water, please.",
			},
			{
				id: "ja-v-ohayou",
				word: "おはようございます",
				translation: "Good morning (polite)",
				pronunciation: "oh-hah-yoh goh-zai-mahs",
				partOfSpeech: "phrase",
				exampleSentence: "おはようございます、お元気ですか。",
				exampleTranslation: "Good morning, how are you?",
			},
			{
				id: "ja-v-konbanwa",
				word: "こんばんは",
				translation: "Good evening",
				pronunciation: "kohn-bahn-wah",
				partOfSpeech: "phrase",
				exampleSentence: "こんばんは、いい天気ですね。",
				exampleTranslation: "Good evening, nice weather, isn't it?",
			},
		],
		phrases: [
			{
				id: "ja-p-1",
				text: "お疲れ様でした",
				translation: "Thank you for your hard work / Good work today",
				context: "Leaving work or finishing a shared task",
				pronunciation: "oh-tsoo-kah-reh-sah-mah deh-shee-tah",
			},
			{
				id: "ja-p-2",
				text: "お先に失礼します",
				translation: "Excuse me for leaving first",
				context: "Leaving before colleagues",
				pronunciation: "oh-sah-kee-nee shee-tsu-reh-shee-mahs",
			},
		],
		goals: [
			{
				id: "ja-g-goal-1",
				description: "Greet people at the right time of day",
				icon: "🗣️",
				type: "speak",
			},
			{
				id: "ja-g-goal-2",
				description: "Express thanks and make polite requests",
				icon: "🙏",
				type: "speak",
			},
		],
		xpReward: 15,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Beginner Japanese Teacher",
			personality: "Polite, warm, and culturally detailed",
			instructions: [
				"Explain the importance of bowing and politeness levels in Japanese.",
				"Teach おはよう, こんにちは, こんばんは, さようなら, ありがとう, and お願いします.",
				"Discuss when to use polite vs casual forms.",
				"Practice a morning greeting exchange.",
			],
			vocabularyFocus: ["こんにちは", "さようなら", "ありがとう", "お願いします", "おはようございます", "こんばんは"],
			grammarFocus: ["Politeness levels (keigo)"],
			scenario: "First day at a Japanese language school",
			openingLine: "こんにちは! 今日から一緒に日本語を勉強しましょう。",
			closingLine: "今日はここまでです。お疲れ様でした。さようなら!",
		},
	},

	"ja-introduce-yourself": {
		id: "ja-introduce-yourself",
		unitId: "ja-basics",
		title: "Introduce Yourself",
		description: "Learn how to say your name, origin, and occupation in Japanese.",
		order: 2,
		activities: [
			mc(
				"ja-i-1",
				"Select the correct meaning",
				"What does '〜です' mean at the end of a sentence?",
				["It makes the sentence a question", "It means 'is/am/are'", "It means 'please'", "It means 'thank you'"],
				1,
				"'です' (desu) is the polite copula, equivalent to 'is/am/are' in English."
			),
			tr(
				"ja-i-2",
				"Translate to Japanese",
				"I am Tanaka. Nice to meet you.",
				"en",
				"ja",
				"田中です。よろしくお願いします。",
				["私は田中です。よろしくお願いします。"]
			),
			spk(
				"ja-i-3",
				"Say this out loud",
				"Introduce yourself politely in Japanese",
				"〜です。よろしくお願いします。",
				"... deh-soo. yoh-roh-shoo-koo oh-neh-gai-shee-mahs."
			),
			mc(
				"ja-i-4",
				"Choose the best response",
				"Someone says 'はじめまして'. What do you reply?",
				["さようなら", "お疲れ様でした", "よろしくお願いします", "ありがとう"],
				2,
				"'はじめまして' means 'Nice to meet you', and the standard reply is 'よろしくお願いします'."
			),
		],
		vocabulary: [
			{
				id: "ja-v-desu",
				word: "です",
				translation: "is / am / are (polite)",
				pronunciation: "deh-soo",
				partOfSpeech: "other",
				exampleSentence: "私は学生です。",
				exampleTranslation: "I am a student.",
			},
			{
				id: "ja-v-watashi",
				word: "私",
				translation: "I / me",
				pronunciation: "wah-tah-shee",
				partOfSpeech: "noun",
				exampleSentence: "私はアメリカ人です。",
				exampleTranslation: "I am American.",
			},
			{
				id: "ja-v-hajimemashite",
				word: "はじめまして",
				translation: "Nice to meet you (first time)",
				pronunciation: "hah-jee-meh-mah-shee-teh",
				partOfSpeech: "phrase",
				exampleSentence: "はじめまして、山田です。",
				exampleTranslation: "Nice to meet you, I am Yamada.",
			},
			{
				id: "ja-v-yoroshiku",
				word: "よろしくお願いします",
				translation: "Please treat me well / Nice to meet you",
				pronunciation: "yoh-roh-shoo-koo oh-neh-gai-shee-mahs",
				partOfSpeech: "phrase",
				exampleSentence: "よろしくお願いします。",
				exampleTranslation: "Nice to meet you / Please be kind to me.",
			},
		],
		phrases: [
			{
				id: "ja-p-i-1",
				text: "〜から来ました",
				translation: "I came from... / I am from...",
				context: "Telling someone where you are from",
				pronunciation: "... kah-rah kee-mah-shee-tah",
			},
			{
				id: "ja-p-i-2",
				text: "どうぞよろしく",
				translation: "Nice to meet you (casual)",
				context: "Informal setting among peers",
				pronunciation: "doh-zoh yoh-roh-shoo-koo",
			},
		],
		goals: [
			{
				id: "ja-i-goal-1",
				description: "Introduce yourself with 〜です",
				icon: "🎤",
				type: "speak",
			},
			{
				id: "ja-i-goal-2",
				description: "Exchange はじめまして and よろしくお願いします",
				icon: "🤝",
				type: "speak",
			},
		],
		xpReward: 20,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Beginner Japanese Teacher",
			personality: "Patient and culturally immersive",
			instructions: [
				"Introduce はじめまして and よろしくお願いします as a set phrase.",
				"Explain that です makes sentences polite.",
				"Practice name + です pattern.",
				"Discuss the cultural weight of first impressions in Japan.",
			],
			vocabularyFocus: ["はじめまして", "よろしくお願いします", "です", "私"],
			grammarFocus: ["Copula です", "Topic particle は"],
			scenario: "First self-introduction at a Japanese company",
			openingLine: "はじめまして! 私は先生です。あなたの名前を教えてください。",
			closingLine: "素晴らしい自己紹介でした。よろしくお願いします!",
		},
	},

	"ja-common-phrases": {
		id: "ja-common-phrases",
		unitId: "ja-basics",
		title: "Common Phrases",
		description: "Handle everyday situations with set phrases in Japanese.",
		order: 3,
		activities: [
			mc(
				"ja-cp-1",
				"Select the correct phrase",
				"You want to apologise for being late. What do you say?",
				["おめでとうございます", "すみません、遅くなりました", "お疲れ様でした", "いただきます"],
				1,
				"'すみません、遅くなりました' means 'Sorry, I am late'."
			),
			tr(
				"ja-cp-2",
				"Translate to Japanese",
				"I don't understand",
				"en",
				"ja",
				"わかりません",
				["分かりません"]
			),
			mc(
				"ja-cp-3",
				"Choose the best phrase",
				"You are about to eat dinner at a friend's house. What do you say?",
				["さようなら", "いただきます", "お願いします", "すみません"],
				1,
				"'いただきます' is said before eating to express gratitude for the meal."
			),
			chat(
				"ja-cp-4",
				"Reply in the chat",
				"You are lost in Tokyo and need directions",
				"すみません、駅はどこですか。",
				["すみません", "わかりません", "どこですか", "ありがとうございます"]
			),
		],
		vocabulary: [
			{
				id: "ja-v-hai",
				word: "はい",
				translation: "Yes",
				pronunciation: "hah-ee",
				partOfSpeech: "other",
				exampleSentence: "はい、そうです。",
				exampleTranslation: "Yes, that's right.",
			},
			{
				id: "ja-v-iie",
				word: "いいえ",
				translation: "No",
				pronunciation: "ee-ee-eh",
				partOfSpeech: "other",
				exampleSentence: "いいえ、違います。",
				exampleTranslation: "No, that's different.",
			},
			{
				id: "ja-v-suminasen",
				word: "すみません",
				translation: "Excuse me / Sorry",
				pronunciation: "soo-mee-mah-sen",
				partOfSpeech: "phrase",
				exampleSentence: "すみません、水をください。",
				exampleTranslation: "Excuse me, water please.",
			},
			{
				id: "ja-v-wakarimasen",
				word: "わかりません",
				translation: "I don't understand",
				pronunciation: "wah-kah-ree-mah-sen",
				partOfSpeech: "phrase",
				exampleSentence: "すみません、わかりません。",
				exampleTranslation: "Sorry, I don't understand.",
			},
			{
				id: "ja-v-itadakimasu",
				word: "いただきます",
				translation: "I humbly receive (said before eating)",
				pronunciation: "ee-tah-dah-kee-mahs",
				partOfSpeech: "phrase",
				exampleSentence: "いただきます!",
				exampleTranslation: "Let's eat! / Thank you for the meal!",
			},
		],
		phrases: [
			{
				id: "ja-p-cp-1",
				text: "もう一度お願いします",
				translation: "Could you say that again, please?",
				context: "Asking for repetition",
				pronunciation: "moh-ee-chee-doh oh-neh-gai-shee-mahs",
			},
			{
				id: "ja-p-cp-2",
				text: "ごちそうさまでした",
				translation: "Thank you for the meal (after eating)",
				context: "Said after finishing a meal",
				pronunciation: "goh-chee-soh-sah-mah-deh-shee-tah",
			},
		],
		goals: [
			{
				id: "ja-cp-goal-1",
				description: "Say yes and no in Japanese",
				icon: "✅",
				type: "speak",
			},
			{
				id: "ja-cp-goal-2",
				description: "Apologise and ask for help politely",
				icon: "🙇",
				type: "speak",
			},
			{
				id: "ja-cp-goal-3",
				description: "Use mealtime set phrases",
				icon: "🍱",
				type: "culture",
			},
		],
		xpReward: 20,
		estimatedTimeMinutes: 5,
		aiTeacherPrompt: {
			role: "Beginner Japanese Teacher",
			personality: "Kind and etiquette-focused",
			instructions: [
				"Teach はい, いいえ, すみません, and わかりません.",
				"Explain the cultural significance of apologising often in Japan.",
				"Introduce meal phrases いただきます and ごちそうさまでした.",
				"Role-play asking for directions politely.",
			],
			vocabularyFocus: ["はい", "いいえ", "すみません", "わかりません", "いただきます", "ごちそうさまでした"],
			scenario: "Attending a Japanese homestay dinner",
			openingLine: "今日は日常のフレーズを練習しましょう。準備はいいですか?",
			closingLine: "とても上手でした。日本の文化を大切にしてくださいね。",
		},
	},
}

// ─── Lookup helpers ──────────────────────────────────────────────────────────

export const getLessonById = (id: string): Lesson | undefined => lessons[id]

export const getLessonsForUnit = (unitId: string): Lesson[] =>
	Object.values(lessons)
		.filter((l) => l.unitId === unitId)
		.sort((a, b) => a.order - b.order)

export const getLessonsForLanguage = (languageId: string): Lesson[] => {
	const unitIds = getUnitsForLanguage(languageId).map((u) => u.id)
	return Object.values(lessons)
		.filter((l) => unitIds.includes(l.unitId))
		.sort((a, b) => a.order - b.order)
}
