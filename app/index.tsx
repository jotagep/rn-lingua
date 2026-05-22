import PrimaryButton from "@/components/PrimaryButton"
import { getLanguageById } from "@/data/languages"
import { useLanguageStore } from "@/store/languageStore"
import { useAuth, useClerk } from "@clerk/expo"
import { Redirect, useRouter } from "expo-router"
import { ActivityIndicator, Image, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
	const router = useRouter()
	const { isSignedIn, isLoaded } = useAuth()
	const { signOut } = useClerk()
	const { selectedLanguageId, hasHydrated, clearLanguage } = useLanguageStore()

	const selectedLanguage = selectedLanguageId
		? getLanguageById(selectedLanguageId)
		: undefined

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

	const handleClearLanguage = () => {
		clearLanguage()
		router.replace("/language")
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 items-center justify-center px-6 gap-6">
				<Text className="text-h1 text-lingua-purple">Lingua</Text>

				{selectedLanguage && (
					<View className="items-center gap-2">
						{/* Flag */}
						<View className="border border-lingua-purple rounded-full overflow-hidden bg-surface">
							<Image
								source={{ uri: selectedLanguage.flag }}
								className="w-24 h-24"
							/>
						</View>
						{/* Language Info */}
						<View className="items-center gap-1">
							<Text className="text-h3 text-text-primary">
								{selectedLanguage.name}
							</Text>
							<Text className="text-body-large text-text-secondary">
								{selectedLanguage.nativeName}
							</Text>
						</View>
					</View>
				)}

				{/* Actions */}
				<View className="w-full items-center gap-4 mt-2">
					<PrimaryButton
						title="Choose a Language"
						onPress={() => router.push("/language")}
					/>

					<PrimaryButton
						title="Sign Out"
						onPress={() => signOut()}
						variant="ghost"
					/>

					<PrimaryButton
						title="Clear Language"
						onPress={handleClearLanguage}
						variant="ghost"
						textColor="error"
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}
