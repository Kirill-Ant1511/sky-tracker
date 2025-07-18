import { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import type { IFlight } from '../../types/IFlight'
import { FLIGHTS } from '../flight-list/flights.data'
import { CompanyFilter } from './CompanyFilter'
import { FlightInput } from './FlightInput'

interface Props {
	setFlights: (flights: IFlight[]) => void
}

export function FlightFilter({ setFlights }: Props) {
	const [fromSearch, setFromSearch] = useState('')
	const [toSearch, setToSearch] = useState('')
	const [companyFilter, setCompanyFilter] = useState('')
	const debouncedFromSearch = useDebounce(fromSearch, 300)
	const debouncedToSearch = useDebounce(toSearch, 300)
	useEffect(() => {
		let result = FLIGHTS.filter(flight => {
			return flight.flightInfo.from.name
				.toLowerCase()
				.includes(debouncedFromSearch.toLowerCase())
		})
		if (debouncedToSearch) {
			result = result.filter(flight => {
				return flight.flightInfo.to.name
					.toLowerCase()
					.includes(debouncedToSearch.toLowerCase())
			})
		}

		if (companyFilter) {
			result = result.filter(flight => {
				return flight.company.name
					.toLowerCase()
					.includes(companyFilter.toLowerCase())
			})
		}

		setFlights(result)
	}, [debouncedFromSearch, debouncedToSearch, setFlights, companyFilter])
	return (
		<div className='flex flex-row-reverse items-center gap-2 w-[100%] z-20 2xl:w-[80%] max-md:w-[60%]'>
			<CompanyFilter
				filter={companyFilter}
				setFilter={setCompanyFilter}
			/>

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
