import { useEffect, useState } from 'react'
import FlightCard from '../../components/flight-list/FlightCard'
import { useAppSelector } from '../../hooks/useAppSelector'
import type { FlightData } from '../../types/IFlight'
import { getFlight } from '../../utils/FlightRequests'
export function Follow() {
	const favorites = useAppSelector(state => state.favorites)
	const [flights, setFlights] = useState<FlightData[]>()

	useEffect(() => {
		document.title = 'Sky Tracker | Favorite'
		const getData = async () => {
			const flights = (await getFlight()) as FlightData[]

			if (flights) {
				setFlights(
					flights.filter(flight => favorites.includes(flight.flight.number))
				)
			}
		}
		getData()
	}, [favorites])

	if (flights) {
		return (
			<div className='flex flex-col items-center gap-5 py-10 text-foreground'>
				<div className='w-[40%] text-center max-md:w-[80%]'>
					<h1 className='text-4xl text-amber-500'>FOLLOW</h1>
					<p>Here, you can see your follow flight</p>
				</div>
				<div className='grid grid-cols-2 gap-2 transition-all duration-300 max-md:grid-cols-1 w-[90%] justify-center items-center'>
					{flights.map(flight => (
						<FlightCard
							key={flight.flight.iata}
							flight={flight}
							isList={false}
						/>
					))}
				</div>
			</div>
		)
	}
}
