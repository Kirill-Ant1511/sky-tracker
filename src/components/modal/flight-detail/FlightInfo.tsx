import { Plane } from 'lucide-react'
import type { IFlight } from '../../../types/IFlight'
import StatusBar from '../../ui/StatusBar'
export interface Props {
	flight: IFlight
}

export function FlightInfo({ flight }: Props) {
	return (
		<div className='w-[95%] flex flex-col gap-1 rounded-2xl overflow-hidden'>
			<div className='flex justify-around items-center gap-1'>
				<div className='flex flex-col items-center bg-neutral-300 dark:bg-neutral-800 w-[100%] py-3'>
					<span className='text-3xl'>{flight.flightInfo.fromCode}</span>
					<span className='text-lg'>{flight.flightInfo.from}</span>
					<span className='text-sm dark:text-white/50 text-black/50'>
						{flight.flightInfo.fromTimestamp}
					</span>
				</div>

				<div className='absolute flex justify-center items-center text-amber-500 w-12 h-12 bg-black rounded-full'>
					<Plane
						width={28}
						height={28}
					/>
				</div>

				<div className='flex flex-col items-center bg-neutral-300 dark:bg-neutral-800 w-[100%] py-3'>
					<span className='text-3xl'>{flight.flightInfo.toCode}</span>
					<span className='text-lg'>{flight.flightInfo.to}</span>
					<span className='text-sm dark:text-white/50 text-black/50'>
						{flight.flightInfo.toTimestamp}
					</span>
				</div>
			</div>

			<div className='flex flex-col gap-2 items-center bg-neutral-300 dark:bg-neutral-800 px-5 py-2'>
				<StatusBar
					status={flight.status}
					min={0}
					max={100}
					onChange={() => {}}
				/>
				<div className='flex justify-between w-[100%] text-black/50 dark:text-white/50'>
					<span>{flight.flightInfo.totalDistance} * 3h 1m</span>
					<span>882km * 59m</span>
				</div>
			</div>

			<div className='grid grid-cols-2 justify-center gap-1'>
				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-3'>
					<span>Scheduled</span>{' '}
					<span>
						{flight.flightInfo.fromScheduled.getHours() +
							':' +
							flight.flightInfo.fromScheduled.getMinutes()}
					</span>
				</p>
				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-3'>
					<span>Actual</span>{' '}
					<span>
						{flight.flightInfo.fromScheduled.getHours() +
							':' +
							(flight.flightInfo.fromScheduled.getMinutes() + 5)}
					</span>
				</p>

				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-3'>
					<span>Scheduled</span>{' '}
					<span>
						{flight.flightInfo.fromScheduled.getHours() +
							3 +
							':' +
							flight.flightInfo.fromScheduled.getMinutes()}
					</span>
				</p>
				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-3'>
					<span>Estimated</span>{' '}
					<span>
						{flight.flightInfo.fromScheduled.getHours() +
							3 +
							':' +
							(flight.flightInfo.fromScheduled.getMinutes() - 3)}
					</span>
				</p>
			</div>
		</div>
	)
}
