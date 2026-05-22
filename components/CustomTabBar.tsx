import { MaterialCommunityIcons } from "@expo/vector-icons"
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import React, { useEffect } from "react"
import { Pressable, Text, useWindowDimensions, View } from "react-native"
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const TAB_CONFIG: Record<
	string,
	{ label: string; icon: keyof typeof MaterialCommunityIcons.glyphMap }
> = {
	index: { label: "Home", icon: "home" },
	learn: { label: "Learn", icon: "book-open-variant" },
	"ai-teacher": { label: "AI Teacher", icon: "robot" },
	chat: { label: "Chat", icon: "chat-processing" },
	profile: { label: "Profile", icon: "account" },
}

const CIRCLE_SIZE = 48
const TAB_BAR_HEIGHT = 72

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
	const { width } = useWindowDimensions()
	const insets = useSafeAreaInsets()
	const tabWidth = width / state.routes.length

	const activeIndex = useSharedValue(state.index)

	useEffect(() => {
		activeIndex.value = withTiming(state.index, {
			duration: 250,
			easing: Easing.out(Easing.cubic),
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.index])

	const indicatorStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX:
					activeIndex.value * tabWidth + tabWidth / 2 - CIRCLE_SIZE / 2,
			},
		],
	}))

	const totalHeight = TAB_BAR_HEIGHT + insets.bottom
	const activeIcon = TAB_CONFIG[state.routes[state.index]?.name]?.icon ?? "home"

	return (
		<View
			className="flex-row bg-white border-t border-border relative"
			style={{ height: totalHeight }}
		>
			<Animated.View
				className="absolute top-3 w-12 h-12 rounded-full bg-lingua-purple items-center justify-center"
				style={indicatorStyle}
			>
				<MaterialCommunityIcons
					name={activeIcon}
					size={24}
					color="#ffffff"
					className="text-center leading-6"
				/>
			</Animated.View>

			{state.routes.map((route, index) => {
				const isFocused = state.index === index
				const config = TAB_CONFIG[route.name]

				if (!config) return null

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				return (
					<Pressable
						key={route.key}
						onPress={onPress}
						className="flex-1 items-center justify-center h-18"
					>
						{isFocused ? (
							<View className="w-12 h-12" />
						) : (
							<View className="items-center gap-0.5">
								<MaterialCommunityIcons
									name={config.icon}
									size={22}
									color="#6b7280"
									className="text-center leading-5.5"
								/>
								<Text className="text-[10px] leading-[12px] font-poppins-regular text-text-secondary">
									{config.label}
								</Text>
							</View>
						)}
					</Pressable>
				)
			})}
		</View>
	)
}
