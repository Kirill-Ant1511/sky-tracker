import { useMemo } from 'react'
import FlightCard from '../../components/flight-list/FlightCard'
import { FLIGHTS } from '../../components/flight-list/flights.data'
import { useAppSelector } from '../../hooks/useAppSelector'
export function Follow() {
	const favorites = useAppSelector(state => state.favorites)

	const flights = useMemo(() => {
		return FLIGHTS.filter(flight =>
			favorites.includes(flight.flightInfo.flightNumber)
		)
	}, [favorites])

	return (
		<div className='flex flex-col items-center gap-5 py-10 text-black dark:text-white'>
			<div className='w-[40%] text-center'>
				<h1 className='text-4xl text-amber-500'>FOLLOW</h1>
				<p>Here, you can see your follow flight</p>
			</div>
			<div className='grid grid-cols-2 gap-2'>
				{flights.map(flight => (
					<FlightCard
						flight={flight}
						isList={false}
					/>
				))}
			</div>
		</div>
	)
}
