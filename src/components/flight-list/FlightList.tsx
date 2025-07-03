import { useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { useDebounce } from '../../hooks/useDebounce'
import '../../styles/FLightList.scss'
import { FlightModal } from '../modal/flight-datail/FlightModal'
import FlightCard from './FlightCard'
import { OpenListButton } from './OpenListButton'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const [isActiveList, toggleIsActiveList] = useState(false)
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
	const openList = () => {
		toggleIsActiveList(isActiveList ? false : true)
	}
	return (
		<div className='main_info'>
			<OpenListButton
				onClick={openList}
				isActive={isActiveList}
			/>

			{flightNumber && <FlightModal flightNumber={flightNumber} />}
			<div className='flights_content'>
				<div className='filter_block'>
					<input
						type='search'
						placeholder='Enter town...'
						value={searchFromValue}
						onChange={e => {
							setFromSearch(e.target.value)
						}}
					/>
				</div>

				<div className={`flight_list ${isActiveList ? 'active' : ''}`}>
					{flights ? (
						flights.map(flight => (
							<FlightCard
								key={flight.flightInfo.flightNumber}
								flight={flight}
							/>
						))
					) : (
						<p>Flight Not Found</p>
					)}
				</div>
			</div>
		</div>
	)
}
