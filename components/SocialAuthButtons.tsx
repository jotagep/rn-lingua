import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const providers = [
	{ name: "Google", icon: "logo-google" as const, color: "#DB4437" },
	{ name: "Facebook", icon: "logo-facebook" as const, color: "#1877F2" },
	{ name: "Apple", icon: "logo-apple" as const, color: "#000000" },
]

export default function SocialAuthButtons() {
	return (
		<View style={styles.container}>
			{providers.map((provider) => (
				<TouchableOpacity
					key={provider.name}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Ionicons name={provider.icon} size={20} color={provider.color} />
					<Text style={styles.text}>Continue with {provider.name}</Text>
				</TouchableOpacity>
			))}
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
