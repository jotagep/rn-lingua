import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface UnitHeaderProps {
	title: string
	subtitle: string
	onBackPress?: () => void
	onBookmarkPress?: () => void
}

export default function UnitHeader({
	title,
	subtitle,
	onBackPress,
	onBookmarkPress,
}: UnitHeaderProps) {
	return (
		<View className="px-5 pt-2">
			<View className="flex-row items-center justify-between mb-2">
				<TouchableOpacity
					onPress={onBackPress}
					hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
				>
					<Ionicons name="chevron-back" size={28} color="#0D132B" />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onBookmarkPress}
					hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
				>
					<Ionicons name="bookmark-outline" size={24} color="#0D132B" />
				</TouchableOpacity>
			</View>

			<Text
				className="text-h2 text-text-primary"
				style={{ fontFamily: "Poppins-Bold" }}
			>
				{title}
			</Text>
			<Text
				className="text-body-medium mt-1 text-text-secondary"
				style={{ fontFamily: "Poppins-Regular" }}
			>
				{subtitle}
			</Text>
		</View>
	)
}
