import type { IFlight } from '../../../types/IFlight'
export interface Props {
	flight: IFlight
}

export function MultiFlightInfo({ flight }: Props) {
	return (
		<div className='w-[95%] overflow-hidden rounded-2xl grid gap-1'>
			<p className='p-2 dark:bg-white/50 bg-black/50 text-white'>
				Flight information
			</p>
			<div className='grid grid-cols-2 gap-1'>
				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-2.5'>
					{flight.plane.planeType}
				</p>
				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-2.5'>
					{flight.createCountry}
				</p>
				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-2.5'>
					<span className='text-black/50 dark:text-white/50'>Speed</span>{' '}
					<span>{flight.speed}km/h</span>
				</p>
				<p className='flex gap-3 justify-between bg-neutral-300 dark:bg-neutral-800 p-2.5 text-sm'>
					<span className='text-black/50 dark:text-white/50'>Altitude</span>{' '}
					<span>{flight.altitude}m</span>
				</p>
			</div>
		</div>
	)
}
