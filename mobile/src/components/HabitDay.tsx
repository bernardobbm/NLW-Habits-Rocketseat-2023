import { TouchableOpacity, TouchableOpacityProps, Dimensions } from 'react-native';
import { generateProgressPercentage } from '../utils/generate-progress-percentage';
import clsx from 'clsx';
import dayjs from 'dayjs';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 0;
export const DAY_SIZE =
	Dimensions.get('screen').width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {
	amountOfHabits?: number;
	amountCompleted?: number;
	date: Date;
}

export function HabitDay({
	amountOfHabits = 0,
	amountCompleted = 0,
	date,
	...rest
}: HabitDayProps) {
	const amountAccomplishedPercenntage =
		amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0;

	const today = dayjs().startOf('day').toDate();
	const isCurrentDay = dayjs(date).isSame(today);

	return (
		<TouchableOpacity
			className={clsx('w-10 h-10 border-2 m-1 rounded-lg', {
				'bg-zinc-900 border-zinc-800': amountAccomplishedPercenntage === 0,
				'bg-violet-900 border-violet-700':
					amountAccomplishedPercenntage > 0 && amountAccomplishedPercenntage < 20,
				'bg-violet-800 border-violet-600':
					amountAccomplishedPercenntage >= 20 && amountAccomplishedPercenntage < 40,
				'bg-violet-700 border-violet-500':
					amountAccomplishedPercenntage >= 40 && amountAccomplishedPercenntage < 60,
				'bg-violet-600 border-violet-500':
					amountAccomplishedPercenntage >= 60 && amountAccomplishedPercenntage < 80,
				'bg-violet-500 border-violet-400': amountAccomplishedPercenntage >= 80,
				'border-white': isCurrentDay,
			})}
			style={{ width: DAY_SIZE, height: DAY_SIZE }}
			activeOpacity={0.7}
			{...rest}
		/>
	);
}
