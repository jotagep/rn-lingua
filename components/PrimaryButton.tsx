import { ReactNode } from "react"
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native"

interface PrimaryButtonProps {
	title: string
	onPress: () => void
	icon?: ReactNode
	size?: "default" | "compact"
	variant?: "primary" | "ghost"
	style?: ViewStyle
	disabled?: boolean
}

export default function PrimaryButton({
	title,
	onPress,
	icon,
	size = "default",
	variant = "primary",
	style,
	disabled,
}: PrimaryButtonProps) {
	const isDefault = size === "default"
	const isGhost = variant === "ghost"

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.button,
				isDefault ? styles.defaultSize : styles.compactSize,
				isGhost ? styles.ghost : styles.primary,
				style,
			]}
		>
			<Text style={[styles.text, isGhost && styles.ghostText]}>{title}</Text>
			{icon}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	primary: {
		backgroundColor: "#6c4ef5",
	},
	ghost: {
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#e5e7eb",
	},
	defaultSize: {
		borderRadius: 16,
		height: 56,
	},
	compactSize: {
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	text: {
		fontSize: 16,
		lineHeight: 22,
		fontFamily: "Poppins-Medium",
		color: "#ffffff",
	},
	ghostText: {
		color: "#0d132b",
	},
})
