import { Ionicons } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native"

interface NextUpCardProps {
	title: string
	subtitle: string
	teacherImageUrl: string
	onVideoPress: () => void
}

export default function NextUpCard({
	title,
	subtitle,
	teacherImageUrl,
	onVideoPress,
}: NextUpCardProps) {
	return (
		<View className="mx-5 mt-6 rounded-3xl overflow-hidden">
			<View
				className="p-5 flex-row items-center"
				style={{ backgroundColor: "#F0FDF4" }}
			>
				<View className="flex-1 gap-0.5">
					<Text className="text-body-medium text-text-secondary">Next up</Text>
					<Text className="text-h3 text-text-primary mt-0.5">{title}</Text>
					<Text className="text-body-medium text-text-secondary mt-0.5">
						{subtitle}
					</Text>
				</View>

				<View className="flex-row items-center gap-3">
					<View className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
						<Image
							source={{ uri: teacherImageUrl }}
							className="w-full h-full"
							resizeMode="cover"
						/>
					</View>
					<TouchableOpacity
						activeOpacity={0.9}
						className="w-12 h-12 rounded-full bg-lingua-green items-center justify-center"
						onPress={onVideoPress}
					>
						<Ionicons name="videocam" size={22} color="#ffffff" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
