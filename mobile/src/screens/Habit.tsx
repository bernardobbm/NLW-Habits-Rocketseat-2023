import { ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';

import { BackButton } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import { Checkbox } from '../components/Checkbox';

interface Params {
	date: string;
}

export function Habit() {
	const route = useRoute();
	const { date } = route.params as Params;

	const parsedDate = dayjs(date);
	const dayOfWeek = parsedDate.format('dddd');
	const dayAndMounth = parsedDate.format('DD/MM');

	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 50 }}
			>
				<BackButton />

				<Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">{dayOfWeek}</Text>

				<Text className="text-white font-extrabold text-3xl">{dayAndMounth}</Text>

				<ProgressBar progress={30} />

				<View className="mt-6">
					<Checkbox
						title="Beber 2L de água"
						checked={false}
					/>

					<Checkbox
						title="Caminhar"
						checked={true}
					/>
				</View>
			</ScrollView>
		</View>
	);
}
