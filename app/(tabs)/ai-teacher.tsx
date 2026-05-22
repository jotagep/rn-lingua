import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AiTeacherScreen() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 items-center justify-center px-6">
				<Text className="text-h2 text-text-primary">AI Teacher</Text>
			</View>
		</SafeAreaView>
	)
}
