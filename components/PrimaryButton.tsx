import { ReactNode } from "react"
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native"

interface PrimaryButtonProps {
	title: string
	onPress: () => void
	icon?: ReactNode
	size?: "default" | "compact"
	style?: ViewStyle
	disabled?: boolean
}

export default function PrimaryButton({
	title,
	onPress,
	icon,
	size = "default",
	style,
	disabled,
}: PrimaryButtonProps) {
	const isDefault = size === "default"

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={onPress}
			disabled={disabled}
			style={[
				styles.button,
				isDefault ? styles.defaultSize : styles.compactSize,
				style,
			]}
		>
			<Text style={styles.text}>{title}</Text>
			{icon}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#6c4ef5",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
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
})
