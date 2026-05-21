import BackButton from "@/components/BackButton"
import PrimaryButton from "@/components/PrimaryButton"
import SocialAuthButtons from "@/components/SocialAuthButtons"
import VerificationModal from "@/components/VerificationModal"
import { images } from "@/constants/images"
import { isClerkAPIResponseError, useClerk, useSignUp } from "@clerk/expo"
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

export default function SignUpScreen() {
	const router = useRouter()
	const { signUp, fetchStatus } = useSignUp()
	const clerk = useClerk()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [showVerification, setShowVerification] = useState(false)
	const [verificationError, setVerificationError] = useState("")
	const [isVerifying, setIsVerifying] = useState(false)

	const isSubmitting = fetchStatus === "fetching"

	const handleSignUp = async () => {
		if (!signUp) return
		setVerificationError("")

		try {
			const { error: passwordError } = await signUp.password({
				emailAddress: email,
				password,
			})

			if (passwordError) {
				setVerificationError(passwordError.message || "Something went wrong")
				return
			}

			const { error: sendError } = await signUp.verifications.sendEmailCode()

			if (sendError) {
				setVerificationError(sendError.message || "Failed to send code")
				return
			}

			setShowVerification(true)
		} catch (err) {
			if (isClerkAPIResponseError(err)) {
				setVerificationError(err.errors[0]?.message || "Something went wrong")
			} else {
				setVerificationError("Something went wrong. Please try again.")
			}
		}
	}

	const handleVerify = async (code: string) => {
		if (!signUp) return
		setIsVerifying(true)
		setVerificationError("")

		try {
			const { error: verifyError } = await signUp.verifications.verifyEmailCode({
				code,
			})

			if (verifyError) {
				setVerificationError(verifyError.message || "Invalid code. Please try again.")
				setIsVerifying(false)
				return
			}

			if (signUp.status === "complete" && signUp.createdSessionId) {
				await clerk.setActive({ session: signUp.createdSessionId })
				setShowVerification(false)
				router.replace("/")
			} else {
				setVerificationError("Verification failed. Please try again.")
				setIsVerifying(false)
			}
		} catch (err) {
			if (isClerkAPIResponseError(err)) {
				setVerificationError(err.errors[0]?.message || "Invalid code. Please try again.")
			} else {
				setVerificationError("Something went wrong. Please try again.")
			}
			setIsVerifying(false)
		}
	}

	const handleResend = async () => {
		if (!signUp) return
		try {
			const { error } = await signUp.verifications.sendEmailCode()
			if (error) {
				console.error("Resend error:", error.message)
			}
		} catch (err) {
			console.error("Resend error:", err)
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
					<View className="flex-1 px-6 pt-2 pb-12">
						<BackButton />

						{/* Title */}
						<Text className="text-h2 text-text-primary mt-4">
							Create your account
						</Text>
						<Text className="text-body-medium text-text-secondary mt-1">
							Start your language journey today ✨
						</Text>
						<View>
							{/* Mascot */}
							<View className="items-center justify-center -mb-18">
								<Image
									source={images.mascotAuth}
									className="w-48 h-48"
									resizeMode="contain"
								/>
							</View>
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
						</View>

						{verificationError && !showVerification ? (
							<Text className="text-error text-body-small mb-4 ml-1">
								{verificationError}
							</Text>
						) : null}

						{/* Sign Up button */}
						<PrimaryButton
							title="Sign Up"
							onPress={handleSignUp}
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
								Already have an account?{" "}
							</Text>
							<TouchableOpacity
								onPress={() => router.push("/(auth)/sign-in")}
								activeOpacity={0.7}
							>
								<Text className="text-body-medium text-lingua-purple">
									Log in
								</Text>
							</TouchableOpacity>
						</View>

						{/* Clerk captcha element for bot protection */}
						<View nativeID="clerk-captcha" />
					</View>
				</ScrollView>
			</KeyboardAvoidingView>

			<VerificationModal
				visible={showVerification}
				onClose={() => setShowVerification(false)}
				onVerify={handleVerify}
				onResend={handleResend}
				error={verificationError}
				isVerifying={isVerifying}
			/>
		</SafeAreaView>
	)
}
