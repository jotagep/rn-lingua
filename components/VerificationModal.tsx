import { useRouter } from "expo-router"
import { useRef, useState } from "react"
import {
	KeyboardAvoidingView,
	Modal,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"

interface VerificationModalProps {
	visible: boolean
	onClose: () => void
}

export default function VerificationModal({
	visible,
	onClose,
}: VerificationModalProps) {
	const router = useRouter()
	const [code, setCode] = useState(["", "", "", "", "", ""])
	const inputRefs = useRef<(TextInput | null)[]>([])

	const handleChange = (text: string, index: number) => {
		if (text.length > 1) return

		const newCode = [...code]
		newCode[index] = text
		setCode(newCode)

		if (text && index < 5) {
			inputRefs.current[index + 1]?.focus()
		}

		const joined = newCode.join("")
		if (joined.length === 6) {
			onClose()
			router.replace("/")
		}
	}

	const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
		if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
	}

	return (
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			presentationStyle="overFullScreen"
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.keyboardView}
			>
				<View style={styles.container}>
					{/* Handle bar */}
					<View style={styles.handleContainer}>
						<View style={styles.handle} />
					</View>

					<Text style={styles.title}>Check your email</Text>
					<Text style={styles.subtitle}>
						We have sent a 6-digit verification code to your email
					</Text>

					{/* Code inputs */}
					<View style={styles.codeContainer}>
						{code.map((digit, index) => (
							<TextInput
								key={index}
								ref={(ref) => {
									inputRefs.current[index] = ref
								}}
								value={digit}
								onChangeText={(text) => handleChange(text, index)}
								onKeyPress={(e) => handleKeyPress(e, index)}
								keyboardType="number-pad"
								maxLength={1}
								style={styles.codeInput}
							/>
						))}
					</View>

					<TouchableOpacity
						style={styles.verifyButton}
						onPress={() => {
							onClose()
							router.replace("/")
						}}
					>
						<Text style={styles.verifyButtonText}>Verify</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	keyboardView: {
		flex: 1,
		justifyContent: "flex-end",
	},
	container: {
		backgroundColor: "#ffffff",
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 40,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: -4 },
		shadowOpacity: 0.1,
		shadowRadius: 12,
		elevation: 10,
	},
	handleContainer: {
		alignItems: "center",
		marginBottom: 24,
	},
	handle: {
		width: 40,
		height: 4,
		borderRadius: 2,
		backgroundColor: "#e5e7eb",
	},
	title: {
		fontSize: 24,
		lineHeight: 31,
		fontFamily: "Poppins-SemiBold",
		color: "#0d132b",
		textAlign: "center",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 22,
		fontFamily: "Poppins-Regular",
		color: "#6b7280",
		textAlign: "center",
		marginBottom: 32,
	},
	codeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 32,
	},
	codeInput: {
		width: 48,
		height: 56,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#e5e7eb",
		backgroundColor: "#f6f7fb",
		textAlign: "center",
		fontSize: 20,
		lineHeight: 26,
		fontFamily: "Poppins-SemiBold",
		color: "#0d132b",
	},
	verifyButton: {
		backgroundColor: "#6c4ef5",
		borderRadius: 16,
		height: 56,
		alignItems: "center",
		justifyContent: "center",
	},
	verifyButtonText: {
		fontSize: 16,
		lineHeight: 22,
		fontFamily: "Poppins-Medium",
		color: "#ffffff",
	},
})
