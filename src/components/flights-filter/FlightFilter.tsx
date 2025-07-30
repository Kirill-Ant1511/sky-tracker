import { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import type { FlightData } from '../../types/IFlight'
import { FlightInput } from './FlightInput'

interface Props {
	flights: FlightData[]
	setFlights: (flights: FlightData[]) => void
}

export function FlightFilter({ flights, setFlights }: Props) {
	const [fromSearch, setFromSearch] = useState('')
	const [toSearch, setToSearch] = useState('')
	// const [companyFilter, setCompanyFilter] = useState('')
	const debouncedFromSearch = useDebounce(fromSearch, 300)
	const debouncedToSearch = useDebounce(toSearch, 300)
	useEffect(() => {
		let result = flights.filter(flight => {
			return flight.departure.airport
				.toLowerCase()
				.includes(debouncedFromSearch.toLowerCase())
		})
		if (debouncedToSearch) {
			result = result.filter(flight => {
				return flight.arrival.airport
					.toLowerCase()
					.includes(debouncedToSearch.toLowerCase())
			})
		}

		// if (companyFilter) {
		// 	result = result.filter(flight => {
		// 		return flight.company.name
		// 			.toLowerCase()
		// 			.includes(companyFilter.toLowerCase())
		// 	})
		// }

		setFlights(result)
	}, [debouncedFromSearch, debouncedToSearch, flights, setFlights])
	return (
		<div className='flex flex-row-reverse items-center gap-2 w-[100%] z-20 2xl:w-[80%] max-md:w-[60%]'>
			{/* <CompanyFilter
				filter={companyFilter}
				setFilter={setCompanyFilter}
			/> */}

			<div className='space-y-2'>
				<FlightInput
					value={fromSearch}
					onChange={setFromSearch}
					placeholder='From...'
				/>
				<FlightInput
					value={toSearch}
					onChange={setToSearch}
					placeholder='To...'
				/>
			</div>
		</div>
	)
}
