import { useSSO } from "@clerk/expo"
import { Ionicons } from "@expo/vector-icons"
import * as Linking from "expo-linking"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function SocialAuthButtons() {
	const { startSSOFlow } = useSSO()

	const handleGoogleSignIn = async () => {
		try {
			const { createdSessionId, setActive } = await startSSOFlow({
				strategy: "oauth_google",
				redirectUrl: Linking.createURL("/sso-callback", { scheme: "rnlingua" }),
			})

			if (createdSessionId && setActive) {
				await setActive({ session: createdSessionId })
			}
		} catch (err) {
			console.error("Google sign-in error:", err)
		}
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.8}
				onPress={handleGoogleSignIn}
			>
				<Ionicons name="logo-google" size={20} color="#DB4437" />
				<Text style={styles.text}>Continue with Google</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 12,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		height: 56,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#e5e7eb",
		backgroundColor: "#ffffff",
		paddingHorizontal: 16,
	},
	text: {
		flex: 1,
		textAlign: "center",
		fontSize: 14,
		lineHeight: 22,
		fontFamily: "Poppins-Regular",
		color: "#0d132b",
	},
})
