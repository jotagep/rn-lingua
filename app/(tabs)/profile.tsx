import { useLanguageStore } from "@/store/languageStore"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ProfileScreen() {
	const { clearLanguage } = useLanguageStore()

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 items-center justify-center px-6">
				<Text className="text-h2 text-text-primary">Profile</Text>

				{/* Temporary dev button to reset language selection */}
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={clearLanguage}
					className="mt-8 px-6 py-3 rounded-2xl"
					style={{ backgroundColor: "#FF4D4F" }}
				>
					<Text
						className="text-body-medium text-white"
						style={{ fontFamily: "Poppins-SemiBold" }}
					>
						Clear Language Selection
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
