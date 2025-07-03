import FlightCard from './components/flight-list/FlightCard'
import { FLIGHTS } from './components/flight-list/flights.data'
import { useAppSelector } from './hooks/useAppSelector'

export function Follow() {
	const favorites = useAppSelector(state => state.favorites)

	return (
		<div className='follow_list'>
			{favorites.map(favorite => (
				<FlightCard
					flight={
						FLIGHTS.find(flight => flight.flightInfo.flightNumber === favorite)!
					}
				/>
			))}
		</div>
	)
}
