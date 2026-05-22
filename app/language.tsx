import BackButton from "@/components/BackButton"
import PrimaryButton from "@/components/PrimaryButton"
import { images } from "@/constants/images"
import { availableLanguages } from "@/data/languages"
import { useLanguageStore } from "@/store/languageStore"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useMemo, useState } from "react"
import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function LanguageScreen() {
	const router = useRouter()
	const { selectedLanguageId, setSelectedLanguageId } = useLanguageStore()
	const [searchQuery, setSearchQuery] = useState("")

	const filteredLanguages = useMemo(() => {
		const query = searchQuery.toLowerCase().trim()
		if (!query) return availableLanguages
		return availableLanguages.filter(
			(l) =>
				l.name.toLowerCase().includes(query) ||
				l.nativeName.toLowerCase().includes(query),
		)
	}, [searchQuery])

	const handleConfirm = () => {
		if (selectedLanguageId) {
			router.replace("/")
		}
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View className="flex-1 px-6">
				{/* Header */}
				<View className="flex-row items-center justify-center relative h-12">
					<View className="absolute left-0">
						<BackButton />
					</View>
					<Text className="text-h3 text-text-primary">Choose a language</Text>
				</View>

				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 24 }}
				>
					{/* Search Bar */}
					<View className="flex-row items-center h-12 rounded-2xl bg-surface px-4 mt-4">
						<Ionicons name="search-outline" size={20} color="#9ca3af" />
						<TextInput
							value={searchQuery}
							onChangeText={setSearchQuery}
							placeholder="Search languages"
							placeholderTextColor="#9ca3af"
							className="flex-1 ml-3 text-body-medium text-text-primary"
							style={{
								fontFamily: "Poppins-Regular",
								paddingVertical: 0,
							}}
						/>
					</View>

					{/* Popular Section */}
					<Text className="text-h4 text-text-primary mt-6 mb-3">Popular</Text>

					{/* Language List */}
					<View className="gap-2.5">
						{filteredLanguages.map((language) => {
							const isSelected = selectedLanguageId === language.id

							return (
								<TouchableOpacity
									key={language.id}
									onPress={() => setSelectedLanguageId(language.id)}
									activeOpacity={0.8}
									className={`flex-row items-center rounded-2xl border px-4 py-3.5 ${
										isSelected
											? "border-lingua-purple bg-white"
											: "border-transparent bg-white"
									}`}
									style={
										!isSelected
											? {
													borderColor: "#e5e7eb",
													borderWidth: 1,
												}
											: undefined
									}
								>
									{/* Flag */}
									<View className="w-10 h-10 rounded-full overflow-hidden bg-surface">
											<Image
												source={{ uri: language.flag }}
												className="w-full h-full will-change-variable"
												resizeMode="cover"
											/>
									</View>

									{/* Language Info */}
									<View className="flex-1 ml-3.5">
										<Text className="text-body-medium text-text-primary">
											{language.name}
										</Text>
										<Text className="text-body-small text-text-secondary mt-0.5">
											{language.learnerCount}
										</Text>
									</View>

									{/* Selection Indicator */}
									{isSelected ? (
										<View className="w-7 h-7 rounded-full bg-lingua-purple items-center justify-center">
											<Ionicons name="checkmark" size={18} color="#ffffff" />
										</View>
									) : (
										<Ionicons
											name="chevron-forward"
											size={20}
											color="#9ca3af"
										/>
									)}
								</TouchableOpacity>
							)
						})}
					</View>

					{/* Empty State */}
					{filteredLanguages.length === 0 && (
						<View className="items-center justify-center py-12">
							<Ionicons name="globe-outline" size={48} color="#d1d5db" />
							<Text className="text-body-medium text-text-secondary mt-4">
								No languages found
							</Text>
						</View>
					)}

					{/* Confirmation Button */}
					<View className="mt-6">
						<PrimaryButton
							title="Confirm"
							onPress={handleConfirm}
							disabled={!selectedLanguageId}
						/>
					</View>

					{/* Earth Illustration */}
					<View className="items-center justify-center mt-4 -mb-8 p-4">
						<Image
							source={images.earth}
							className="w-full h-48 will-change-variable"
							resizeMode="cover"
						/>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}
