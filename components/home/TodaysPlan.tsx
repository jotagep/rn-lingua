import { cn } from "@/lib/cn"
import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

export interface PlanItem {
	id: string
	type: string
	title: string
	subtitle: string
	icon: keyof typeof Ionicons.glyphMap
	iconBg: string
	completed: boolean
}

interface TodaysPlanProps {
	items: PlanItem[]
	onViewAllPress?: () => void
}

export default function TodaysPlan({ items, onViewAllPress }: TodaysPlanProps) {
	return (
		<View className="px-5 mt-6">
			<View className="flex-row items-center justify-between mb-4">
				<Text className="text-h3 text-text-primary">Today&apos;s plan</Text>
				<TouchableOpacity activeOpacity={0.7} onPress={onViewAllPress}>
					<Text
						className="text-body-medium font-poppins-semibold"
						style={{ color: "#6C4EF5" }}
					>
						View all
					</Text>
				</TouchableOpacity>
			</View>

			<View className="gap-3">
				{items.map((item) => (
					<View
						key={item.id}
						className="flex-row items-center gap-4"
					>
						<View
							className="w-12 h-12 rounded-2xl items-center justify-center"
							style={{ backgroundColor: item.iconBg }}
						>
							<Ionicons
								name={item.icon}
								size={22}
								color="#ffffff"
							/>
						</View>

						<View className="flex-1">
							<Text className="text-body-large text-text-primary font-poppins-medium">
								{item.type}
							</Text>
							<Text className="text-body-medium text-text-secondary">
								{item.title}
							</Text>
						</View>

						<View
							className={cn(
								"w-6 h-6 rounded-full items-center justify-center",
								item.completed
									? "bg-lingua-purple"
									: "border-2 border-gray-300 bg-transparent",
							)}
						>
							{item.completed && (
								<Ionicons
									name="checkmark"
									size={16}
									color="#ffffff"
								/>
							)}
						</View>
					</View>
				))}
			</View>
		</View>
	)
}
