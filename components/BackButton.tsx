import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { TouchableOpacity } from "react-native"

export default function BackButton() {
	const router = useRouter()

	return (
		<TouchableOpacity
			className="w-10 h-10 items-start justify-center -ml-1"
			onPress={() => router.back()}
			activeOpacity={0.7}
		>
			<Ionicons name="chevron-back" size={28} color="#0d132b" />
		</TouchableOpacity>
	)
}
