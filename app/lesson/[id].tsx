import { Ionicons } from "@expo/vector-icons"
import { images } from "@/constants/images"
import { getLessonById } from "@/data/lessons"
import { getUnitById } from "@/data/units"
import { getLanguageById } from "@/data/languages"
import { useLocalSearchParams, useRouter } from "expo-router"
import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const COZY_ROOM_BG =
	"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop&q=80"

// ─── Sub-components ──────────────────────────────────────────────────────────

function Header({
	title,
	subtitle,
	onBack,
}: {
	title: string
	subtitle?: string
	onBack: () => void
}) {
	return (
		<View className="flex-row items-center px-5 pt-2 pb-4">
			<TouchableOpacity
				onPress={onBack}
				className="w-10 h-10 items-center justify-center -ml-2"
				activeOpacity={0.7}
			>
				<Ionicons name="chevron-back" size={28} color="#0d132b" />
			</TouchableOpacity>

			<View className="flex-1 ml-1">
				<Text
					className="text-h3 text-text-primary"
					style={{ fontFamily: "Poppins-SemiBold" }}
				>
					{title}
				</Text>
				{subtitle && (
					<View className="flex-row items-center mt-0.5">
						<View className="w-2 h-2 rounded-full bg-success mr-1.5" />
						<Text
							className="text-body-small text-success"
							style={{ fontFamily: "Poppins-Medium" }}
						>
							{subtitle}
						</Text>
					</View>
				)}
			</View>

			<View className="flex-row items-center gap-2">
				<TouchableOpacity
					className="w-9 h-9 rounded-full border border-border items-center justify-center"
					activeOpacity={0.7}
				>
					<Ionicons name="videocam-outline" size={18} color="#0d132b" />
				</TouchableOpacity>
				<TouchableOpacity
					className="w-9 h-9 rounded-full border border-border items-center justify-center"
					activeOpacity={0.7}
				>
					<Text
						className="text-caption text-text-primary"
						style={{ fontFamily: "Poppins-SemiBold" }}
					>
						12
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="w-9 h-9 rounded-full border border-border items-center justify-center"
					activeOpacity={0.7}
				>
					<Ionicons name="notifications-outline" size={18} color="#0d132b" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

function TeacherBubble({
	foreignText,
	translation,
}: {
	foreignText: string
	translation: string
}) {
	return (
		<View
			className="absolute bottom-4 left-4 right-4"
			style={styles.bubbleContainer}
		>
			<View className="bg-white rounded-2xl px-4 py-3 shadow-sm">
				<View className="flex-row items-start justify-between">
					<View className="flex-1 pr-2">
						<Text
							className="text-body-large text-text-primary mb-0.5"
							style={{ fontFamily: "Poppins-SemiBold" }}
						>
							{foreignText}
						</Text>
						<Text
							className="text-body-medium text-text-secondary"
							style={{ fontFamily: "Poppins-Regular" }}
						>
							{translation}
						</Text>
					</View>
					<TouchableOpacity className="mt-1">
						<Ionicons name="volume-high" size={22} color="#6C4EF5" />
					</TouchableOpacity>
				</View>
				{/* Bubble tail */}
				<View style={styles.bubbleTail} />
			</View>
		</View>
	)
}

function ControlButton({
	icon,
	label,
	variant = "default",
	onPress,
}: {
	icon: keyof typeof Ionicons.glyphMap
	label: string
	variant?: "default" | "danger"
	onPress?: () => void
}) {
	const bgColor =
		variant === "danger" ? "bg-error" : "bg-white border border-border"
	const iconColor = variant === "danger" ? "#ffffff" : "#0d132b"

	return (
		<View className="items-center">
			<TouchableOpacity
				onPress={onPress}
				activeOpacity={0.8}
				className={`w-[56px] h-[56px] rounded-full items-center justify-center ${bgColor}`}
				style={variant === "default" ? styles.controlShadow : undefined}
			>
				<Ionicons name={icon} size={24} color={iconColor} />
			</TouchableOpacity>
			<Text
				className="text-caption text-text-secondary mt-2"
				style={{ fontFamily: "Poppins-Regular" }}
			>
				{label}
			</Text>
		</View>
	)
}

function FeedbackCard({
	speaking,
	pronunciation,
	grammar,
}: {
	speaking: string
	pronunciation: string
	grammar: string
}) {
	return (
		<View
			className="mx-5 bg-white rounded-2xl px-4 py-5"
			style={styles.cardShadow}
		>
			<View className="flex-row">
				{/* Speaking */}
				<View className="flex-1 items-center">
					<Text
						className="text-body-medium text-text-primary mb-1"
						style={{ fontFamily: "Poppins-Medium" }}
					>
						Speaking
					</Text>
					<Text
						className="text-body-medium text-success"
						style={{ fontFamily: "Poppins-SemiBold" }}
					>
						{speaking}
					</Text>
				</View>

				{/* Divider */}
				<View className="w-px bg-border self-stretch mx-0" />

				{/* Pronunciation */}
				<View className="flex-1 items-center">
					<Text
						className="text-body-medium text-text-primary mb-1"
						style={{ fontFamily: "Poppins-Medium" }}
					>
						Pronunciation
					</Text>
					<Text
						className="text-body-medium text-lingua-blue"
						style={{ fontFamily: "Poppins-SemiBold" }}
					>
						{pronunciation}
					</Text>
				</View>

				{/* Divider */}
				<View className="w-px bg-border self-stretch mx-0" />

				{/* Grammar */}
				<View className="flex-1 items-center">
					<Text
						className="text-body-medium text-text-primary mb-1"
						style={{ fontFamily: "Poppins-Medium" }}
					>
						Grammar
					</Text>
					<Text
						className="text-body-medium text-lingua-blue"
						style={{ fontFamily: "Poppins-SemiBold" }}
					>
						{grammar}
					</Text>
				</View>
			</View>
		</View>
	)
}

// ─── Main Screen ─────────────────────────────────────────────────────────────

export default function AudioLessonScreen() {
	const router = useRouter()
	const { id } = useLocalSearchParams<{ id: string }>()

	const lesson = getLessonById(id)
	const unit = lesson ? getUnitById(lesson.unitId) : undefined
	const language = unit ? getLanguageById(unit.languageId) : undefined

	// Fallback if lesson not found
	if (!lesson) {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<View className="flex-1 items-center justify-center px-6">
					<Text
						className="text-h3 text-text-primary mb-2"
						style={{ fontFamily: "Poppins-SemiBold" }}
					>
						Lesson not found
					</Text>
					<TouchableOpacity
						onPress={() => router.back()}
						className="mt-4 bg-lingua-purple px-6 py-3 rounded-full"
					>
						<Text
							className="text-body-medium text-white"
							style={{ fontFamily: "Poppins-Medium" }}
						>
							Go back
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		)
	}

	const aiPrompt = lesson.aiTeacherPrompt
	const openingLine = aiPrompt?.openingLine ?? "¡Hola! Let's begin."
	const scenario = aiPrompt?.scenario ?? "Language practice session"

	// Build feedback labels from lesson goals
	const goalTypes = lesson.goals.map((g) => g.type)
	const hasSpeakingGoal = goalTypes.includes("speak")
	const hasListeningGoal = goalTypes.includes("listen")
	const hasGrammarGoal = goalTypes.includes("grammar")

	const speakingLabel = hasSpeakingGoal ? "Excellent" : "Great"
	const pronunciationLabel = hasListeningGoal ? "Great" : "Good"
	const grammarLabel = hasGrammarGoal ? "Good" : "Great"

	// Determine foreign text for bubble: use first phrase text if available,
	// otherwise use opening line truncated
	const foreignText =
		lesson.phrases[0]?.text ?? openingLine.split(" ").slice(0, 3).join(" ")
	const translationText =
		lesson.phrases[0]?.translation ?? "That was great! 👏"

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 24 }}
			>
				<Header
					title="AI Teacher"
					subtitle="Online"
					onBack={() => router.back()}
				/>

				{/* ── Lesson Context Header ── */}
				<View className="px-5 mb-3">
					<View className="flex-row items-center mb-1">
						{language && (
							<Image
								source={{ uri: language.flag }}
								className="w-5 h-5 rounded-full mr-2"
								resizeMode="cover"
							/>
						)}
						<Text
							className="text-body-small text-text-secondary"
							style={{ fontFamily: "Poppins-Medium" }}
						>
							{language?.name ?? "Language"} • {lesson.title}
						</Text>
					</View>
					<Text
						className="text-caption text-text-secondary"
						style={{ fontFamily: "Poppins-Regular" }}
					>
						{lesson.description}
					</Text>
				</View>

				{/* ── Teacher Preview Area ── */}
				<View className="mx-5 mb-4">
					<View
						className="rounded-3xl overflow-hidden"
						style={{ height: 380 }}
					>
						<ImageBackground
							source={{ uri: COZY_ROOM_BG }}
							className="flex-1"
							resizeMode="cover"
						>
							{/* Dark overlay for better contrast */}
							<View className="absolute inset-0 bg-black/10" />

							{/* User camera preview (top-right) */}
							<View className="absolute top-3 right-3">
								<View
									className="rounded-xl overflow-hidden border-2 border-white/80"
									style={styles.userPreview}
								>
									<Image
										source={images.mascotAuth}
										className="w-full h-full"
										resizeMode="cover"
									/>
								</View>
							</View>

							{/* AI Teacher character */}
							<View className="flex-1 items-center justify-center px-6 pt-8">
								<Image
									source={images.mascotWelcome}
									className="w-48 h-48"
									resizeMode="contain"
								/>
							</View>

							{/* Teacher speech bubble */}
							<TeacherBubble
								foreignText={foreignText}
								translation={translationText}
							/>
						</ImageBackground>
					</View>
				</View>

				{/* ── Call Controls ── */}
				<View className="flex-row justify-center items-center gap-5 mb-5 px-5">
					<ControlButton icon="videocam" label="Camera" />
					<ControlButton icon="mic" label="Mic" />
					<ControlButton icon="text" label="Subtitles" />
					<ControlButton
						icon="call"
						label="End Call"
						variant="danger"
						onPress={() => router.back()}
					/>
				</View>

				{/* ── Session Status ── */}
				<View className="items-center mb-5">
					<Text
						className="text-caption text-text-secondary"
						style={{ fontFamily: "Poppins-Regular" }}
					>
						{scenario}
					</Text>
				</View>

				{/* ── Feedback Card ── */}
				<FeedbackCard
					speaking={speakingLabel}
					pronunciation={pronunciationLabel}
					grammar={grammarLabel}
				/>

				{/* ── Lesson Goals ── */}
				<View className="mx-5 mt-5">
					<Text
						className="text-h4 text-text-primary mb-3"
						style={{ fontFamily: "Poppins-SemiBold" }}
					>
						Lesson Goals
					</Text>
					{lesson.goals.map((goal) => (
						<View
							key={goal.id}
							className="flex-row items-center bg-white rounded-xl px-4 py-3 mb-2"
							style={styles.goalShadow}
						>
							<Text className="text-xl mr-3">{goal.icon}</Text>
							<View className="flex-1">
								<Text
									className="text-body-medium text-text-primary"
									style={{ fontFamily: "Poppins-Medium" }}
								>
									{goal.description}
								</Text>
								<Text
									className="text-caption text-text-secondary capitalize"
									style={{ fontFamily: "Poppins-Regular" }}
								>
									{goal.type}
								</Text>
							</View>
							<Ionicons
								name="chevron-forward"
								size={18}
								color="#9CA3AF"
							/>
						</View>
					))}
				</View>

				{/* ── Phrases Preview ── */}
				{lesson.phrases.length > 0 && (
					<View className="mx-5 mt-5">
						<Text
							className="text-h4 text-text-primary mb-3"
							style={{ fontFamily: "Poppins-SemiBold" }}
						>
							Key Phrases
						</Text>
						{lesson.phrases.slice(0, 3).map((phrase) => (
							<View
								key={phrase.id}
								className="bg-white rounded-xl px-4 py-3 mb-2"
								style={styles.goalShadow}
							>
								<Text
									className="text-body-medium text-text-primary"
									style={{ fontFamily: "Poppins-SemiBold" }}
								>
									{phrase.text}
								</Text>
								<Text
									className="text-body-small text-text-secondary mt-0.5"
									style={{ fontFamily: "Poppins-Regular" }}
								>
									{phrase.translation}
								</Text>
								{phrase.context && (
									<Text
										className="text-caption text-text-secondary mt-1"
										style={{ fontFamily: "Poppins-Regular" }}
									>
										{phrase.context}
									</Text>
								)}
							</View>
						))}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
	bubbleContainer: {
		zIndex: 10,
	},
	bubbleTail: {
		position: "absolute",
		bottom: -8,
		left: "50%",
		marginLeft: -8,
		width: 0,
		height: 0,
		borderLeftWidth: 8,
		borderRightWidth: 8,
		borderTopWidth: 10,
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		borderTopColor: "#ffffff",
	},
	controlShadow: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.06,
		shadowRadius: 4,
		elevation: 3,
	},
	cardShadow: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.06,
		shadowRadius: 8,
		elevation: 3,
	},
	goalShadow: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.04,
		shadowRadius: 4,
		elevation: 2,
	},
	userPreview: {
		width: 64,
		height: 80,
	},
})
