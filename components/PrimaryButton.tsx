import { cn } from "@/lib/cn"
import { ReactNode } from "react"
import { Text, TouchableOpacity, ViewStyle } from "react-native"

export type ThemeTextColor =
	| "error"
	| "success"
	| "warning"
	| "info"
	| "text-primary"
	| "text-secondary"
	| "lingua-purple"
	| "white"

const textColorMap: Record<ThemeTextColor, string> = {
	error: "text-error",
	success: "text-success",
	warning: "text-warning",
	info: "text-info",
	"text-primary": "text-text-primary",
	"text-secondary": "text-text-secondary",
	"lingua-purple": "text-lingua-purple",
	white: "text-white",
}

interface PrimaryButtonProps {
	title: string
	onPress: () => void
	icon?: ReactNode
	size?: "default" | "compact"
	variant?: "primary" | "ghost"
	style?: ViewStyle
	disabled?: boolean
	textColor?: ThemeTextColor
}

export default function PrimaryButton({
	title,
	onPress,
	icon,
	size = "default",
	variant = "primary",
	style,
	disabled,
	textColor,
}: PrimaryButtonProps) {
	const isGhost = variant === "ghost"

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={onPress}
			disabled={disabled}
			className={cn(
				"flex-row items-center justify-center px-4",
				size === "default"
					? "w-full h-14 rounded-2xl"
					: "self-start rounded-xl py-3",
				isGhost ? "bg-background border border-border" : "bg-lingua-purple",
			)}
			style={style}
		>
			<Text
				className={cn(
					"text-lg leading-5",
					isGhost ? "text-text-primary" : "text-white",
					textColor && textColorMap[textColor],
				)}
			>
				{title}
			</Text>
			{icon}
		</TouchableOpacity>
	)
}
