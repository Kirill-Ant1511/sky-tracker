import { useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { useDebounce } from '../../hooks/useDebounce'
import { FlightModal } from '../modal/flight-detail/FlightModal'
import FlightCard from './FlightCard'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const { flightNumber } = useParams()
	const [searchFromValue, setFromSearch] = useState('')
	const debounceFromSearchValue = useDebounce(searchFromValue, 300)
	const flights = useMemo(() => {
		let result = FLIGHTS.filter(flight =>
			flight.flightInfo.from
				.toLowerCase()
				.includes(debounceFromSearchValue.toLowerCase())
		)

		if (result.length === 0) {
			result = FLIGHTS.filter(flight =>
				flight.flightInfo.to
					.toLowerCase()
					.includes(debounceFromSearchValue.toLowerCase())
			)
		}

		return result
	}, [debounceFromSearchValue])
	return (
		<div className='w-[500px]'>
			{flightNumber && <FlightModal flightNumber={flightNumber} />}
			<div className='flex flex-col items-center gap-5 my-5'>
				<div className=''>
					<input
						type='search'
						placeholder='Enter town...'
						value={searchFromValue}
						onChange={e => {
							setFromSearch(e.target.value)
						}}
						className='dark:bg-neutral-800 dark:text-white p-3 rounded-full bg-white text-black'
					/>
				</div>

				<div className='flex flex-col gap-2 items-center m_overflow-y-scroll m_overflow-x-visible no-scrollbar h-[76vh]'>
					{flights.length !== 0 ? (
						flights.map(flight => (
							<FlightCard
								key={flight.flightInfo.flightNumber}
								flight={flight}
								isList={true}
							/>
						))
					) : (
						<p className='text-white'>Flight Not Found</p>
					)}
				</div>
			</div>
		</div>
	)
}
