import LessonCard from "@/components/learn/LessonCard"
import LessonTabSwitcher from "@/components/learn/LessonTabSwitcher"
import PracticePlaceholder from "@/components/learn/PracticePlaceholder"
import UnitHeader from "@/components/learn/UnitHeader"
import UnitHero from "@/components/learn/UnitHero"
import { getLessonsForUnit } from "@/data/lessons"
import { getUnitsForLanguage } from "@/data/units"
import { useLanguageStore } from "@/store/languageStore"
import { useProgressStore } from "@/store/progressStore"
import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import type { Lesson } from "@/types/learning"

// ─── Demo seed helper ────────────────────────────────────────────────────────

function useSeedMockProgress(unitLessons: Lesson[]) {
	const { lessonProgress, setLessonStatus, setLessonInProgress, hasHydrated } =
		useProgressStore()

	useEffect(() => {
		if (!hasHydrated || unitLessons.length === 0) return

		// Only seed if store is empty
		const hasAnyProgress = Object.keys(lessonProgress).length > 0
		if (hasAnyProgress) return

		// Seed: first 2 completed, 3rd in progress, rest not started
		unitLessons.forEach((lesson, index) => {
			if (index === 0 || index === 1) {
				setLessonStatus(lesson.id, "completed", lesson.activities.length)
			} else if (index === 2) {
				setLessonInProgress(
					lesson.id,
					1,
					lesson.activities.length,
				)
			} else {
				setLessonStatus(lesson.id, "unlocked", lesson.activities.length)
			}
		})
	}, [hasHydrated, unitLessons, lessonProgress, setLessonStatus, setLessonInProgress])
}

// ─── Learn Screen ────────────────────────────────────────────────────────────

export default function LearnScreen() {
	const router = useRouter()
	const { selectedLanguageId } = useLanguageStore()
	const { getLessonStatus, getLessonProgress, setLessonStatus } = useProgressStore()

	const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons")

	const units = selectedLanguageId
		? getUnitsForLanguage(selectedLanguageId)
		: []

	const currentUnit = units[0]
	const unitLessons = currentUnit ? getLessonsForUnit(currentUnit.id) : []

	// Seed demo progress on first load
	useSeedMockProgress(unitLessons)

	// Compute stats
	const completedCount = unitLessons.filter(
		(l) => getLessonStatus(l.id) === "completed",
	).length

	const handleLessonPress = (lesson: Lesson) => {
		if (getLessonStatus(lesson.id) === "locked") {
			setLessonStatus(lesson.id, "unlocked", lesson.activities.length)
		}
		router.push(`/lesson/${lesson.id}`)
	}

	const heroImage =
		unitLessons[2]?.image ??
		"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop"

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingTop: 8, paddingBottom: 24 }}
			>
				<UnitHeader
					title={currentUnit?.title ?? "Learn"}
					subtitle={`Unit ${currentUnit?.order ?? 1} • ${completedCount} / ${unitLessons.length} lessons`}
					onBackPress={() => router.push("/")}
				/>

				<UnitHero imageUrl={heroImage} />

				<LessonTabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

				{activeTab === "lessons" ? (
					<View className="px-5 mt-2">
						{unitLessons.map((lesson, index) => {
							const status = getLessonStatus(lesson.id)
							const progress = getLessonProgress(lesson.id)
							return (
								<LessonCard
									key={lesson.id}
									lesson={lesson}
									index={index}
									status={status}
									completedActivities={
										progress?.completedActivities ?? 0
									}
									totalActivities={
										progress?.totalActivities ??
										lesson.activities.length
									}
									onPress={() => handleLessonPress(lesson)}
								/>
							)
						})}
					</View>
				) : (
					<PracticePlaceholder />
				)}

				{/* Bottom padding for scroll */}
				<View className="h-6" />
			</ScrollView>
		</SafeAreaView>
	)
}
