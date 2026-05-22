import { images } from "@/constants/images"
import { Image, Text, TouchableOpacity, View } from "react-native"

interface ContinueLearningCardProps {
	languageName: string
	levelLabel: string
	unitTitle: string
	onContinuePress: () => void
}

export default function ContinueLearningCard({
	languageName,
	levelLabel,
	unitTitle,
	onContinuePress,
}: ContinueLearningCardProps) {
	return (
		<View className="mx-5 mt-4 rounded-3xl overflow-hidden">
			<View className="relative" style={{ backgroundColor: "#6C4EF5" }}>
				{/* Text content with right padding so it doesn't overlap the image */}
				<View className="p-5 pr-36">
					<Text className="text-body-medium text-white/80">
						Continue learning
					</Text>
					<Text className="text-h2 text-white">{languageName}</Text>
					<Text className="text-body-medium text-white/80">
						{levelLabel} • {unitTitle}
					</Text>

					<TouchableOpacity
						activeOpacity={0.9}
						className="mt-3 bg-white rounded-2xl px-6 py-2.5 self-start"
						onPress={onContinuePress}
					>
						<Text
							className="text-body-large font-poppins-semibold"
							style={{ color: "#6C4EF5" }}
						>
							Continue
						</Text>
					</TouchableOpacity>
				</View>

				{/* Palace illustration positioned at bottom-right */}
				<Image
					source={images.palace}
					className="absolute -right-4 -bottom-2 w-52 h-52"
					resizeMode="contain"
				/>
			</View>
		</View>
	)
}
