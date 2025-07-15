import type { IFlight } from '../../../types/IFlight'
export interface Props {
	flight: IFlight
}

export function MultiFlightInfo({ flight }: Props) {
	return (
		<div className='w-[95%] overflow-hidden rounded-2xl grid gap-1'>
			<p className='p-2 bg-background/50 text-foreground'>Flight information</p>
			<div className='grid grid-cols-2 gap-1'>
				<p className='flex gap-3 justify-between bg-background p-2.5'>
					{flight.plane.planeType}
				</p>
				<p className='flex gap-3 justify-between bg-background p-2.5'>
					{flight.createCountry}
				</p>
				<p className='flex gap-3 justify-between bg-background p-2.5'>
					<span className='text-foreground/50'>Speed</span>{' '}
					<span>{flight.speed}km/h</span>
				</p>
				<p className='flex gap-3 justify-between bg-background p-2.5 text-sm'>
					<span className='text-foreground/50'>Altitude</span>{' '}
					<span>{flight.altitude}m</span>
				</p>
			</div>
		</div>
	)
}
