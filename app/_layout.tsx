import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import { View, ActivityIndicator } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import "../global.css"

export default function RootLayout() {
	const [loaded] = useFonts({
		"Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
		"Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
	})

	if (!loaded) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#ffffff",
				}}
			>
				<ActivityIndicator color="#6C4EF5" />
			</View>
		)
	}

	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaProvider>
	)
}
