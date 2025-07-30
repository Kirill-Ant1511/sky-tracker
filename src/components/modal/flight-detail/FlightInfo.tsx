import { Plane } from 'lucide-react'
import type { FlightData } from '../../../types/IFlight'
import StatusBar from '../../ui/StatusBar'
export interface Props {
	flight: FlightData
}

const checker = (value: number) => {
	if (value < 10) {
		return '0' + value
	} else {
		return value
	}
}

export function FlightInfo({ flight }: Props) {
	const depSchedule = new Date(flight.departure.scheduled)
	const depActual = new Date(flight.departure.actual)
	const arrSchedule = new Date(flight.arrival.scheduled)
	const arrEstimated = new Date(flight.arrival.estimated)
	return (
		<div className='w-[95%] flex flex-col gap-1 rounded-2xl overflow-hidden'>
			<div className='flex justify-around items-center gap-1'>
				<div className='flex flex-col items-center bg-background w-[100%] py-3 min-h-full text-center'>
					<span className='text-3xl'>{flight.departure.iata}</span>
					<span className='text-lg'>{flight.departure.airport}</span>
					<span className='text-sm dark:text-white/50 text-black/50'>
						{flight.departure.timezone}
					</span>
				</div>

				<div className='absolute flex justify-center items-center text-amber-500 w-12 h-12 bg-secondary rounded-full'>
					<Plane
						width={28}
						height={28}
					/>
				</div>

				<div className='flex flex-col items-center bg-background w-[100%] py-3 text-center'>
					<span className='text-3xl'>{flight.arrival.iata}</span>
					<span className='text-lg'>{flight.arrival.airport}</span>
					<span className='text-sm dark:text-white/50 text-black/50'>
						{flight.arrival.timezone}
					</span>
				</div>
			</div>

			<div className='flex flex-col gap-2 items-center bg-background px-5 py-2'>
				<StatusBar status={50} />
				<div className='flex justify-between w-[100%] text-foreground/50 dark:text-foreground/50'>
					<span>2715km * 3h 1m</span>
					<span>882km * 59m</span>
				</div>
			</div>

			<div className='grid grid-cols-2 justify-center gap-1'>
				<p className='flex gap-3 justify-between bg-background p-3 max-lg:text-sm'>
					<span>Scheduled</span>{' '}
					<span>
						{checker(depSchedule.getHours())}:
						{checker(depSchedule.getMinutes())}
					</span>
				</p>
				<p className='flex gap-3 justify-between bg-background p-3 max-lg:text-sm'>
					<span>Actual</span>{' '}
					<span>
						{checker(depActual.getHours())}:{checker(depActual.getMinutes())}
					</span>
				</p>

				<p className='flex gap-3 justify-between bg-background p-3 max-lg:text-sm'>
					<span>Scheduled</span>{' '}
					<span>
						{checker(arrSchedule.getHours())}:
						{checker(arrSchedule.getMinutes())}
					</span>
				</p>
				<p className='flex gap-3 justify-between bg-background p-3 max-lg:text-sm'>
					<span>Estimated</span>{' '}
					<span>
						{checker(arrEstimated.getHours())}:
						{checker(arrEstimated.getMinutes())}
					</span>
				</p>
			</div>
		</div>
	)
}
