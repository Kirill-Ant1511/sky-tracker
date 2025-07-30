import type { FlightData } from '../../../types/IFlight'
export interface Props {
	flight: FlightData
}

export function MultiFlightInfo({ flight }: Props) {
	return (
		<div className='w-[95%] overflow-hidden rounded-2xl grid gap-1'>
			<p className='p-2 bg-background/50 text-foreground'>Flight information</p>
			<div className='grid grid-cols-2 gap-1'>
				<p className='flex gap-3 justify-between bg-background p-2.5'>
					{flight.aircraft ? flight.aircraft.iata : '1234'}
				</p>
				<p className='flex gap-3 justify-between bg-background p-2.5'>
					{flight.aircraft ? flight.aircraft.iata : '1234'}
				</p>
				<p className='flex gap-3 justify-between bg-background p-2.5'>
					<span className='text-foreground/50'>Speed</span>{' '}
					<span>{flight.live ? flight.live.speed_horizontal : 700}km/h</span>
				</p>
				<p className='flex gap-3 justify-between bg-background p-2.5 text-sm'>
					<span className='text-foreground/50'>Altitude</span>{' '}
					<span>{flight.live ? flight.live.altitude : 8800}m</span>
				</p>
			</div>
		</div>
	)
}
