import { Text, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

export default function Index() {
	const router = useRouter()

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 items-center justify-center px-5">
				<TouchableOpacity
					className="bg-lingua-purple rounded-xl py-3 px-4"
					activeOpacity={0.9}
					onPress={() => router.push("/onboarding")}
				>
					<Text className="text-h4 text-white text-center">
						Open Onboarding Screen
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
