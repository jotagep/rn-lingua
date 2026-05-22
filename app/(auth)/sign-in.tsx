import BackButton from "@/components/BackButton"
import PrimaryButton from "@/components/PrimaryButton"
import SocialAuthButtons from "@/components/SocialAuthButtons"
import { images } from "@/constants/images"
import { isClerkAPIResponseError, useClerk, useSignIn } from "@clerk/expo"
import { Ionicons } from "@expo/vector-icons"
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
	const { signIn, fetchStatus } = useSignIn()
	const clerk = useClerk()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [error, setError] = useState("")

	const isSubmitting = fetchStatus === "fetching"

	const handleSignIn = async () => {
		if (!signIn) return
		setError("")

		try {
			const { error: passwordError } = await signIn.password({
				emailAddress: email,
				password,
			})

			if (passwordError) {
				setError(passwordError.message || "Invalid email or password")
				return
			}

			if (signIn.status === "complete" && signIn.createdSessionId) {
				await clerk.setActive({ session: signIn.createdSessionId })
				router.replace("/")
			} else {
				setError("Sign in failed. Please try again.")
			}
		} catch (err) {
			if (isClerkAPIResponseError(err)) {
				setError(err.errors[0]?.message || "Invalid email or password")
			} else {
				setError("Something went wrong. Please try again.")
			}
		}
	}

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
							className="w-48 h-48 will-change-variable"
							resizeMode="contain"
						/>
						</View>

						{/* Email input */}
						<View className="mb-4">
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
								editable={!isSubmitting}
							/>
						</View>

						{/* Password input */}
						<View className="mb-6">
							<Text className="text-body-small text-text-secondary mb-1.5 ml-1">
								Password
							</Text>
							<View className="flex-row items-center h-14 rounded-xl border border-border bg-white px-4">
								<TextInput
									value={password}
									onChangeText={setPassword}
									placeholder="••••••••"
									placeholderTextColor="#9ca3af"
									secureTextEntry={!showPassword}
									style={{
										flex: 1,
										fontSize: 16,
										lineHeight: 26,
										fontFamily: "Poppins-Regular",
										color: "#0d132b",
									}}
									editable={!isSubmitting}
								/>
								<TouchableOpacity
									onPress={() => setShowPassword(!showPassword)}
									activeOpacity={0.7}
								>
									<Ionicons
										name={showPassword ? "eye-off-outline" : "eye-outline"}
										size={22}
										color="#6b7280"
									/>
								</TouchableOpacity>
							</View>
						</View>

						{error ? (
							<Text className="text-error text-body-small mb-4 ml-1">
								{error}
							</Text>
						) : null}

						{/* Sign In button */}
						<PrimaryButton
							title="Sign In"
							onPress={handleSignIn}
							disabled={!email || !password || isSubmitting}
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
		</SafeAreaView>
	)
}
