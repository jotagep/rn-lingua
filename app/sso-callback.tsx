import { useAuth } from "@clerk/expo"
import { Redirect } from "expo-router"
import { ActivityIndicator, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SsoCallback() {
	const { isSignedIn, isLoaded } = useAuth()

	if (isLoaded && isSignedIn) {
		return <Redirect href="/" />
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
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
		</SafeAreaView>
	)
}
