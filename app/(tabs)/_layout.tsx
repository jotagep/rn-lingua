import CustomTabBar from "@/components/CustomTabBar"
import { useLanguageStore } from "@/store/languageStore"
import { Redirect, Tabs } from "expo-router"
import { ActivityIndicator, View } from "react-native"

export default function TabLayout() {
	const { selectedLanguageId, hasHydrated } = useLanguageStore()

	if (!hasHydrated) {
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

	if (!selectedLanguageId) {
		return <Redirect href="/language" />
	}

	return (
		<Tabs
			tabBar={(props) => <CustomTabBar {...props} />}
			screenOptions={{ headerShown: false }}
		>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="learn" options={{ title: "Learn" }} />
			<Tabs.Screen name="ai-teacher" options={{ title: "AI Teacher" }} />
			<Tabs.Screen name="chat" options={{ title: "Chat" }} />
			<Tabs.Screen name="profile" options={{ title: "Profile" }} />
		</Tabs>
	)
}
