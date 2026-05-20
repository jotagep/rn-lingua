import { Text, View, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<ScrollView className="flex-1 px-5 py-6">
				{/* Header */}
				<View className="mb-8">
					<Text className="text-h1 text-text-primary mb-2">Design System</Text>
					<Text className="text-body-medium text-text-secondary">
						Lingua App Typography & Colors
					</Text>
				</View>

				{/* Colors Section */}
				<Text className="text-h3 text-text-primary mb-4">Colors</Text>

				{/* Primary Colors */}
				<Text className="text-h4 text-text-primary mb-3">Primary</Text>
				<View className="flex-row flex-wrap gap-3 mb-6">
					<ColorBlock color="#6C4EF5" name="Purple" textColor="#ffffff" />
					<ColorBlock color="#5B3BF6" name="Deep Purple" textColor="#ffffff" />
					<ColorBlock color="#4D8BFF" name="Blue" textColor="#ffffff" />
					<ColorBlock color="#21C16B" name="Green" textColor="#ffffff" />
				</View>

				{/* Semantic Colors */}
				<Text className="text-h4 text-text-primary mb-3">Semantic</Text>
				<View className="flex-row flex-wrap gap-3 mb-6">
					<ColorBlock color="#21C16B" name="Success" textColor="#ffffff" />
					<ColorBlock color="#FFC800" name="Warning" textColor="#0D132B" />
					<ColorBlock color="#FF8A00" name="Streak" textColor="#ffffff" />
					<ColorBlock color="#FF4D4F" name="Error" textColor="#ffffff" />
					<ColorBlock color="#4D8BFF" name="Info" textColor="#ffffff" />
				</View>

				{/* Neutral Colors */}
				<Text className="text-h4 text-text-primary mb-3">Neutral</Text>
				<View className="flex-row flex-wrap gap-3 mb-8">
					<ColorBlock color="#0D132B" name="Text Primary" textColor="#ffffff" />
					<ColorBlock color="#6B7280" name="Text Secondary" textColor="#ffffff" />
					<ColorBlock color="#E5E7EB" name="Border" textColor="#0D132B" />
					<ColorBlock color="#F6F7FB" name="Surface" textColor="#0D132B" />
					<ColorBlock color="#FFFFFF" name="Background" textColor="#0D132B" />
				</View>

				{/* Typography Section */}
				<Text className="text-h3 text-text-primary mb-4">Typography</Text>

				<View className="bg-surface rounded-2xl p-5 gap-5">
					<TypographyRow
						label="H1"
						description="Page / Screen Title"
						specs="32px / Bold / 1.2"
						styleClass="text-h1"
					/>

					<View className="h-px bg-border" />

					<TypographyRow
						label="H2"
						description="Section Title"
						specs="24px / SemiBold / 1.3"
						styleClass="text-h2"
					/>

					<View className="h-px bg-border" />

					<TypographyRow
						label="H3"
						description="Card / Module Title"
						specs="20px / SemiBold / 1.3"
						styleClass="text-h3"
					/>

					<View className="h-px bg-border" />

					<TypographyRow
						label="H4"
						description="Subheading"
						specs="16px / Medium / 1.4"
						styleClass="text-h4"
					/>

					<View className="h-px bg-border" />

					<TypographyRow
						label="Body Large"
						description="Important content"
						specs="16px / Regular / 1.6"
						styleClass="text-body-large"
					/>

					<View className="h-px bg-border" />

					<TypographyRow
						label="Body Medium"
						description="Body text"
						specs="14px / Regular / 1.6"
						styleClass="text-body-medium"
					/>

					<View className="h-px bg-border" />

					<TypographyRow
						label="Body Small"
						description="Supporting text"
						specs="13px / Regular / 1.6"
						styleClass="text-body-small"
					/>

					<View className="h-px bg-border" />

					<TypographyRow
						label="Caption"
						description="Labels, meta text"
						specs="11px / Regular / 1.4"
						styleClass="text-caption"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

/* ============================================
   Helper Components
   ============================================ */

function ColorBlock({
	color,
	name,
	textColor,
}: {
	color: string
	name: string
	textColor: string
}) {
	return (
		<View className="items-center gap-2">
			<View
				className="w-16 h-16 rounded-xl border border-border items-center justify-center"
				style={{ backgroundColor: color }}
			>
				<Text
					className="text-caption"
					style={{ color: textColor }}
				>
					{name}
				</Text>
			</View>
			<Text className="text-caption text-text-secondary text-center">
				{name}
			</Text>
		</View>
	)
}

function TypographyRow({
	label,
	description,
	specs,
	styleClass,
}: {
	label: string
	description: string
	specs: string
	styleClass: string
}) {
	return (
		<View className="gap-1">
			<Text className={`${styleClass} text-text-primary`}>{label}</Text>
			<View className="flex-row justify-between items-center">
				<Text className="text-body-small text-text-secondary">
					{description}
				</Text>
				<Text className="text-caption text-text-secondary">{specs}</Text>
			</View>
		</View>
	)
}
