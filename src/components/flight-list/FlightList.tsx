import { useState } from 'react'
import { useParams } from 'react-router'
import '../../styles/FLightList.scss'
import { FlightModal } from '../modal/flight-datail/FlightModal'
import FlightCard from './FlightCard'
import { FLIGHTS } from './flights.data'
import { OpenListButton } from './OpenListButton'

export function FlightList() {
	const [isActiveList, toggleIsActiveList] = useState(false)
	const { flightNumber } = useParams()

	const openList = () => {
		toggleIsActiveList(isActiveList ? false : true)
	}
	return (
		<div>
			<OpenListButton
				onClick={openList}
				isActive={isActiveList}
			/>
			{flightNumber && <FlightModal flightNumber={flightNumber} />}
			<div className={`flight_list ${isActiveList ? 'active' : ''}`}>
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
