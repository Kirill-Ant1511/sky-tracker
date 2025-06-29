import { useParams } from 'react-router'
import '../../styles/FLightList.scss'
import { FlightModal } from '../modal/flight-datail/FlightModal'
import FlightCard from './FlightCard'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const { flightNumber } = useParams()
	return (
		<div>
			{flightNumber && <FlightModal flightNumber={flightNumber} />}
			<div className='flight_list'>
				{FLIGHTS.map(flight => (
					<FlightCard
						key={flight.flightInfo.flightNumber}
						flight={flight}
					/>
				))}
			</div>
		</div>
	)
}
