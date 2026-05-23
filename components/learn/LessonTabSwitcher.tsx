import { cn } from "@/lib/cn"
import { Pressable, Text, View } from "react-native"

interface LessonTabSwitcherProps {
	activeTab: "lessons" | "practice"
	onTabChange: (tab: "lessons" | "practice") => void
}

export default function LessonTabSwitcher({
	activeTab,
	onTabChange,
}: LessonTabSwitcherProps) {
	return (
		<View className="px-5 mt-5 mb-2">
			<View className="flex-row rounded-2xl p-1 bg-surface">
				<Pressable
					onPress={() => onTabChange("lessons")}
					className={cn(
						"flex-1 items-center justify-center rounded-xl py-2.5",
						activeTab === "lessons" && "bg-white",
					)}
					style={
						activeTab === "lessons"
							? {
									shadowColor: "#000000",
									shadowOffset: { width: 0, height: 1 },
									shadowOpacity: 0.05,
									shadowRadius: 2,
									elevation: 2,
								}
							: undefined
					}
				>
					<Text
						className={cn(
							"text-body-medium",
							activeTab === "lessons" ? "text-lingua-purple" : "text-gray-400",
						)}
						style={{
							fontFamily:
								activeTab === "lessons" ? "Poppins-SemiBold" : "Poppins-Medium",
						}}
					>
						Lessons
					</Text>
				</Pressable>

				<Pressable
					onPress={() => onTabChange("practice")}
					className={cn(
						"flex-1 items-center justify-center rounded-xl py-2.5",
						activeTab === "practice" && "bg-white",
					)}
					style={
						activeTab === "practice"
							? {
									shadowColor: "#000000",
									shadowOffset: { width: 0, height: 1 },
									shadowOpacity: 0.05,
									shadowRadius: 2,
									elevation: 2,
								}
							: undefined
					}
				>
					<Text
						className={cn(
							"text-body-medium",
							activeTab === "practice" ? "text-lingua-purple" : "text-gray-400",
						)}
						style={{
							fontFamily:
								activeTab === "practice"
									? "Poppins-SemiBold"
									: "Poppins-Medium",
						}}
					>
						Practice
					</Text>
				</Pressable>
			</View>
		</View>
	)
}
