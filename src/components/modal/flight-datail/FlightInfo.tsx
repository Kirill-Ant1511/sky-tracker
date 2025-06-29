import '../../../styles/FlyghtInfo.scss'
import type { IFlight } from '../../../types/IFlight'
import { StatusBar } from '../../ui/StatusBar'
export interface Props {
	flight: IFlight
}

export function FlightInfo({ flight }: Props) {
	return (
		<div className='flight_info_block'>
			<div className='flight_info'>
				<div className='from '>
					<span className='code'>{flight.flightInfo.fromCode}</span>
					<span className='town'>{flight.flightInfo.from}</span>
					<span className='flight_timestamp'>
						{flight.flightInfo.fromTimestamp}
					</span>
				</div>

				<div className='centr_img'>
					<img src='/logo.svg' />
				</div>

				<div className='to'>
					<span className='code'>{flight.flightInfo.toCode}</span>
					<span className='town'>{flight.flightInfo.to}</span>
					<span className='flight_timestamp'>
						{flight.flightInfo.toTimestamp}
					</span>
				</div>
			</div>

			<div className='status_info'>
				<StatusBar
					flight={flight}
					min={0}
					max={100}
					onChange={() => {}}
				/>
				<div className='distance_info'>
					<span>{flight.flightInfo.totalDistace} * 3h 1m</span>
					<span>882km * 59m</span>
				</div>
			</div>

			<div className='block_info'>
				<p>
					<span>Sheduled</span>{' '}
					<span>
						{flight.flightInfo.fromSheduled.getHours() +
							':' +
							flight.flightInfo.fromSheduled.getMinutes()}
					</span>
				</p>
				<p>
					<span>Actual</span>{' '}
					<span>
						{flight.flightInfo.fromSheduled.getHours() +
							':' +
							(flight.flightInfo.fromSheduled.getMinutes() + 5)}
					</span>
				</p>

				<p>
					<span>Sheduled</span>{' '}
					<span>
						{flight.flightInfo.fromSheduled.getHours() +
							3 +
							':' +
							flight.flightInfo.fromSheduled.getMinutes()}
					</span>
				</p>
				<p>
					<span>Estiamted</span>{' '}
					<span>
						{flight.flightInfo.fromSheduled.getHours() +
							3 +
							':' +
							(flight.flightInfo.fromSheduled.getMinutes() - 3)}
					</span>
				</p>
			</div>
		</div>
	)
}
