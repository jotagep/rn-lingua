import { images } from "@/constants/images"
import { Ionicons } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native"

interface HomeHeaderProps {
	greeting: string
	userName: string
	flagUrl?: string
	streakCount: number
	onNotificationPress?: () => void
}

export default function HomeHeader({
	greeting,
	userName,
	flagUrl,
	streakCount,
	onNotificationPress,
}: HomeHeaderProps) {
	return (
		<View className="flex-row items-center justify-between px-5 pt-2 pb-4">
			<View className="flex-row items-center gap-3">
				{flagUrl ? (
					<View className="w-10 h-10 rounded-full overflow-hidden border border-border">
						<Image
							source={{ uri: flagUrl }}
							className="w-full h-full"
							resizeMode="cover"
						/>
					</View>
				) : (
					<View className="w-10 h-10 rounded-full bg-surface items-center justify-center">
						<Ionicons name="globe-outline" size={20} color="#6b7280" />
					</View>
				)}
				<Text className="text-h3 text-text-primary">
					{greeting}, {userName}! 👋
				</Text>
			</View>

			<View className="flex-row items-center gap-4">
				<View className="flex-row items-center justify-center gap-1">
					<Image
						source={images.streakFire}
						className="w-6 h-6"
						resizeMode="contain"
					/>
					<Text
						className="text-body-large text-text-primary font-poppins-semibold"
						style={{ lineHeight: 20 }}
					>
						{streakCount}
					</Text>
				</View>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={onNotificationPress}
					className="items-center justify-center"
				>
					<Ionicons name="notifications-outline" size={24} color="#0d132b" />
				</TouchableOpacity>
			</View>
		</View>
	)
}
