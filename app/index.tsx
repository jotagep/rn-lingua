import PrimaryButton from "@/components/PrimaryButton"
import { useAuth, useClerk } from "@clerk/expo"
import { Redirect, useRouter } from "expo-router"
import { ActivityIndicator, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
	const router = useRouter()
	const { isSignedIn, isLoaded } = useAuth()
	const { signOut } = useClerk()

	if (!isLoaded) {
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

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 items-center justify-center px-5 gap-6">
				<Text className="text-h1 text-text-primary">Home</Text>

				<PrimaryButton
					title="Choose a language"
					onPress={() => router.push("/language")}
					size="compact"
				/>

				<PrimaryButton
					title="Sign Out"
					onPress={() => signOut()}
					size="compact"
					variant="ghost"
				/>
			</View>
		</SafeAreaView>
	)
}
