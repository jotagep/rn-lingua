import { images } from "@/constants/images"
import { Image, Text, View } from "react-native"

interface DailyGoalCardProps {
	currentXP: number
	dailyGoalXP: number
}

export default function DailyGoalCard({
	currentXP,
	dailyGoalXP,
}: DailyGoalCardProps) {
	const progressPercent = Math.min((currentXP / dailyGoalXP) * 100, 100)

	return (
		<View
			className="mx-5 rounded-3xl p-5 overflow-hidden"
			style={{ backgroundColor: "#FDF8F0" }}
		>
			<View className="flex-row items-center justify-between">
				<View className="flex-1 gap-1">
					<Text className="text-body-medium text-text-secondary">
						Daily goal
					</Text>
					<Text className="text-h2 text-text-primary">
						{currentXP}{" "}
						<Text className="text-body-large text-text-secondary font-poppins-regular">
							/ {dailyGoalXP} XP
						</Text>
					</Text>

					{/* Progress bar */}
					<View className="h-2.5 bg-white rounded-full mt-1 overflow-hidden">
						<View
							className="h-full rounded-full"
							style={{
								width: `${progressPercent}%`,
								backgroundColor: "#FF8A00",
							}}
						/>
					</View>
				</View>

				<Image
					source={images.treasure}
					className="w-20 h-20 ml-4"
					resizeMode="contain"
				/>
			</View>
		</View>
	)
}
