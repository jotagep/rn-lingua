import PrimaryButton from "@/components/PrimaryButton"
import { useRouter } from "expo-router"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
	const router = useRouter()

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 items-center justify-center px-5">
				<PrimaryButton
					title="Open Onboarding Screen"
					size="compact"
					onPress={() => router.push("/onboarding")}
				/>
			</View>
		</SafeAreaView>
	)
}
