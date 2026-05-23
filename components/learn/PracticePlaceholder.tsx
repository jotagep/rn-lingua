import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export default function PracticePlaceholder() {
	return (
		<View className="px-5 mt-8 items-center">
			<View className="items-center justify-center rounded-full mb-4 w-20 h-20 bg-surface">
				<Ionicons name="fitness-outline" size={36} color="#9CA3AF" />
			</View>
			<Text
				className="text-h3 text-center text-text-primary"
				style={{ fontFamily: "Poppins-SemiBold" }}
			>
				Practice Mode
			</Text>
			<Text
				className="text-body-medium text-center mt-2 px-8 text-text-secondary"
				style={{ fontFamily: "Poppins-Regular" }}
			>
				Review vocabulary and phrases from your completed lessons.
			</Text>
		</View>
	)
}
