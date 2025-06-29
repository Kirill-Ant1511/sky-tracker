import '../../../styles/MultiFlightInfo.scss'
import type { IFlight } from '../../../types/IFlight'
export interface Props {
	flight: IFlight
}

export function MultiFlightInfo({ flight }: Props) {
	return (
		<div className='multi_info'>
			<p className='about_block'>Flight information</p>
			<div className='block_info'>
				<p>{flight.plane.planeType}</p>
				<p>{flight.createCountry}</p>
				<p>
					<span>Speed</span> <span>{flight.speed} km/h</span>
				</p>
				<p>
					<span>Alltitude</span> <span>{flight.altitude} m</span>
				</p>
			</div>
		</div>
	)
}
