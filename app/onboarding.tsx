import { images } from "@/constants/images"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function OnboardingScreen() {
	const router = useRouter()

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 px-6 pt-8 pb-8">
				{/* Logo Header */}
				<View className="flex-row items-center justify-center gap-2">
					<Image
						source={images.mascotLogo}
						className="w-12 h-12"
						resizeMode="contain"
					/>
					<Text className="text-h2 text-text-primary">Lingua</Text>
				</View>

				{/* Headline */}
				<View className="mt-6">
					<Text className="text-h1 text-text-primary">
						Your AI language {"\n"}
						<Text className=" text-lingua-purple">teacher.</Text>
					</Text>
					<Text className="text-body-large text-text-secondary mt-1">
						Real conversations, personalized lessons, anytime, anywhere.
					</Text>
				</View>

				{/* Illustration with speech bubbles */}
				<View className="flex-1 justify-center items-center mt-2">
					<View className="w-full h-full items-center justify-center">
						{/* Hello bubble */}
						<View className="absolute top-[15%] left-[5%] -rotate-12 rounded-2xl px-4 py-2.5 bg-bubble-hello">
							<Text className="text-body-medium text-text-primary">Hello!</Text>
						</View>

						{/* Hola bubble */}
						<View className="absolute top-[10%] right-[10%] rotate-6 rounded-2xl px-4 py-2.5 bg-bubble-hola">
							<Text className="text-body-medium text-lingua-blue">¡Hola!</Text>
						</View>

						{/* Ni hao bubble */}
						<View className="absolute top-[35%] right-[0%] rotate-12 rounded-2xl px-4 py-2.5 bg-bubble-nihao">
							<Text className="text-body-medium text-error">你好!</Text>
						</View>

						<Image
							source={images.mascotWelcome}
							className="w-80 h-80"
							resizeMode="contain"
						/>
					</View>
				</View>

				{/* Get Started Button */}
				<TouchableOpacity
					className="bg-lingua-purple rounded-2xl h-14 flex-row items-center justify-center"
					activeOpacity={0.9}
					onPress={() => router.replace("/")}
				>
					<Text className="text-h4 text-white">Get Started</Text>
					<Ionicons
						name="chevron-forward"
						size={20}
						color="white"
						className="ml-1 -mt-0.5"
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
