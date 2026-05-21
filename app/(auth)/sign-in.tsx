import BackButton from "@/components/BackButton"
import PrimaryButton from "@/components/PrimaryButton"
import SocialAuthButtons from "@/components/SocialAuthButtons"
import VerificationModal from "@/components/VerificationModal"
import { images } from "@/constants/images"
import { useRouter } from "expo-router"
import { useState } from "react"
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SignInScreen() {
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [showVerification, setShowVerification] = useState(false)

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1 }}
					keyboardShouldPersistTaps="handled"
				>
					<View className="flex-1 px-6 pt-2 pb-8">
						<BackButton />

						{/* Title */}
						<Text className="text-h1 text-text-primary mt-4">
							Sign in to your account
						</Text>
						<Text className="text-body-large text-text-secondary mt-1">
							Welcome back! Continue your language journey.
						</Text>

						{/* Mascot */}
						<View className="items-center justify-center -mb-18">
							<Image
								source={images.mascotAuth}
								className="w-48 h-48"
								resizeMode="contain"
							/>
						</View>

						{/* Email input */}
						<View className="mb-6">
							<Text className="text-body-small text-text-secondary mb-1.5 ml-1">
								Email
							</Text>
							<TextInput
								value={email}
								onChangeText={setEmail}
								placeholder="alex@gmail.com"
								placeholderTextColor="#9ca3af"
								autoCapitalize="none"
								keyboardType="email-address"
								style={{
									height: 56,
									borderRadius: 12,
									borderWidth: 1,
									borderColor: "#e5e7eb",
									backgroundColor: "#ffffff",
									paddingHorizontal: 16,
									fontSize: 16,
									lineHeight: 26,
									fontFamily: "Poppins-Regular",
									color: "#0d132b",
								}}
							/>
						</View>

						{/* Sign In button */}
						<PrimaryButton
							title="Sign In"
							onPress={() => setShowVerification(true)}
						/>

						{/* Divider */}
						<View className="flex-row items-center my-6">
							<View className="flex-1 h-px bg-border" />
							<Text className="text-body-small text-text-secondary mx-4">
								or continue with
							</Text>
							<View className="flex-1 h-px bg-border" />
						</View>

						{/* Social auth */}
						<SocialAuthButtons />

						{/* Footer */}
						<View className="flex-row items-center justify-center mt-auto pt-6">
							<Text className="text-body-medium text-text-secondary">
								Don&apos;t have an account?{" "}
							</Text>
							<TouchableOpacity
								onPress={() => router.push("/(auth)/sign-up")}
								activeOpacity={0.7}
							>
								<Text className="text-body-medium text-lingua-purple">
									Sign up
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>

			<VerificationModal
				visible={showVerification}
				onClose={() => setShowVerification(false)}
			/>
		</SafeAreaView>
	)
}
