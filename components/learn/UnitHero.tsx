import { Image, View } from "react-native"

interface UnitHeroProps {
	imageUrl: string
}

export default function UnitHero({ imageUrl }: UnitHeroProps) {
	return (
		<View className="px-5 mt-4">
			<View className="rounded-[20px] overflow-hidden bg-surface">
				<Image
					source={{ uri: imageUrl }}
					className="w-full h-[180px]"
					resizeMode="cover"
				/>
			</View>
		</View>
	)
}
