import { useLanguageStore } from "@/store/languageStore"
import { useAuth } from "@clerk/expo"
import { Redirect } from "expo-router"
import { ActivityIndicator, View } from "react-native"

export default function Index() {
	const { isSignedIn, isLoaded } = useAuth()
	const { selectedLanguageId, hasHydrated } = useLanguageStore()

	if (!isLoaded || !hasHydrated) {
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

	if (!isSignedIn) {
		return <Redirect href="/onboarding" />
	}

	if (!selectedLanguageId) {
		return <Redirect href="/language" />
	}

	// Redirect to tabs when authenticated and language is selected
	return <Redirect href="/(tabs)" />
}
