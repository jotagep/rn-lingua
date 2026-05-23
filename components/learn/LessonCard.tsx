import { Ionicons } from "@expo/vector-icons"
import { cn } from "@/lib/cn"
import { Text, TouchableOpacity, View } from "react-native"
import type { Lesson } from "@/types/learning"

export interface LessonCardProps {
	lesson: Lesson
	index: number
	status: "locked" | "unlocked" | "in_progress" | "completed"
	completedActivities: number
	totalActivities: number
	onPress: () => void
}

export default function LessonCard({
	lesson,
	index,
	status,
	completedActivities,
	totalActivities,
	onPress,
}: LessonCardProps) {
	const isCompleted = status === "completed"
	const isInProgress = status === "in_progress"
	const isLocked = status === "locked"

	const lessonNumber = index + 1
	const progressText = `${completedActivities} / ${totalActivities} lessons`

	return (
		<TouchableOpacity
			activeOpacity={0.85}
			onPress={onPress}
			className={cn(
				"flex-row items-center px-5 py-4 rounded-2xl mb-3",
				isInProgress
					? "border-[1.5px] border-lingua-purple bg-[#FAF9FF]"
					: "border border-border bg-white",
			)}
		>
			<View className="flex-1">
				<Text
					className={cn(
						"text-body-small mb-1",
						isInProgress ? "text-lingua-purple" : "text-gray-400",
					)}
					style={{ fontFamily: "Poppins-Medium" }}
				>
					Lesson {lessonNumber}
				</Text>
				<Text
					className={cn(
						"text-h4",
						isLocked ? "text-gray-400" : "text-text-primary",
					)}
					style={{ fontFamily: "Poppins-SemiBold" }}
				>
					{lesson.title}
				</Text>

				{isInProgress && (
					<Text
						className="text-body-small mt-1 text-lingua-purple"
						style={{ fontFamily: "Poppins-Medium" }}
					>
						In progress
					</Text>
				)}

				{!isCompleted && !isInProgress && (
					<Text
						className="text-body-small mt-1 text-gray-400"
						style={{ fontFamily: "Poppins-Regular" }}
					>
						{progressText}
					</Text>
				)}
			</View>

			{isCompleted && (
				<View className="items-center justify-center w-7 h-7 rounded-full bg-success">
					<Ionicons name="checkmark" size={18} color="#ffffff" />
				</View>
			)}

			{isInProgress && (
				<View className="items-center justify-center">
					<Ionicons name="flag" size={28} color="#6C4EF5" />
				</View>
			)}

			{isLocked && (
				<View className="items-center justify-center">
					<Ionicons name="lock-closed" size={24} color="#9CA3AF" />
				</View>
			)}
		</TouchableOpacity>
	)
}
