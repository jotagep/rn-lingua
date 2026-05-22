import ContinueLearningCard from "@/components/home/ContinueLearningCard"
import DailyGoalCard from "@/components/home/DailyGoalCard"
import HomeHeader from "@/components/home/HomeHeader"
import TodaysPlan, { type PlanItem } from "@/components/home/TodaysPlan"
import { getLanguageById } from "@/data/languages"
import { getLessonsForLanguage } from "@/data/lessons"
import { getUnitsForLanguage } from "@/data/units"
import { useLanguageStore } from "@/store/languageStore"
import { useUser } from "@clerk/expo"
import { useRouter } from "expo-router"
import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getGreeting(languageId: string | null): string {
	switch (languageId) {
		case "es":
			return "Hola"
		case "fr":
			return "Bonjour"
		case "ja":
			return "こんにちは"
		case "de":
			return "Hallo"
		case "it":
			return "Ciao"
		case "ko":
			return "안녕하세요"
		case "zh":
			return "你好"
		case "pt":
			return "Olá"
		default:
			return "Hello"
	}
}

function getLevelLabel(unitOrder: number): string {
	const levels = ["A1", "A2", "B1", "B2", "C1", "C2"]
	return levels[unitOrder - 1] ?? "A1"
}

// ─── Home Screen ─────────────────────────────────────────────────────────────

export default function HomeScreen() {
	const router = useRouter()
	const { user } = useUser()
	const { selectedLanguageId } = useLanguageStore()

	const language = selectedLanguageId
		? getLanguageById(selectedLanguageId)
		: undefined
	const units = selectedLanguageId
		? getUnitsForLanguage(selectedLanguageId)
		: []
	const lessons = selectedLanguageId
		? getLessonsForLanguage(selectedLanguageId)
		: []

	const firstName = user?.firstName ?? "Learner"
	const greeting = getGreeting(selectedLanguageId)

	const currentUnit = units[0]
	const currentLesson = lessons[0]

	const planItems: PlanItem[] = [
		{
			id: "plan-1",
			type: "Lesson",
			title: currentLesson?.title ?? "Daily Lesson",
			subtitle: currentLesson?.description ?? "Complete your daily lesson",
			icon: "book-outline",
			iconBg: "#6C4EF5",
			completed: true,
		},
		{
			id: "plan-2",
			type: "AI Conversation",
			title: "Talk about your day",
			subtitle: "Practice speaking with AI",
			icon: "headset-outline",
			iconBg: "#6C4EF5",
			completed: false,
		},
		{
			id: "plan-3",
			type: "New words",
			title: `${currentLesson?.vocabulary?.length ?? 10} words`,
			subtitle: "Expand your vocabulary",
			icon: "chatbubble-ellipses-outline",
			iconBg: "#FF6B6B",
			completed: false,
		},
	]

	// Demo XP values (will come from a progress store in the future)
	const currentXP = 15
	const dailyGoalXP = 20
	const streakCount = 12

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollContent}
			>
				<HomeHeader
					greeting={greeting}
					userName={firstName}
					flagUrl={language?.flag}
					streakCount={streakCount}
				/>

				<DailyGoalCard currentXP={currentXP} dailyGoalXP={dailyGoalXP} />

				<ContinueLearningCard
					languageName={language?.name ?? "Spanish"}
					levelLabel={currentUnit ? getLevelLabel(currentUnit.order) : "A1"}
					unitTitle={currentUnit?.title ?? "Unit 1"}
					onContinuePress={() => router.push("/learn")}
				/>

				<TodaysPlan items={planItems} />

				{/* Bottom padding for scroll */}
				<View className="h-6" />
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	scrollContent: {
		paddingTop: 8,
		paddingBottom: 24,
	},
})
