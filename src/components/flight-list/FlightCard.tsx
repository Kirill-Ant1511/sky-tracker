import { memo } from 'react'
import { useNavigate } from 'react-router'
import '../../styles/FlightCard.scss'
import type { IFlight } from '../../types/IFlight'
import StatusBar from '../ui/StatusBar'

interface Props {
	flight: IFlight
}

function FlightCard({ flight }: Props) {
	const navigate = useNavigate()
	const setPathname = () => {
		navigate(`/${flight.flightInfo.flightNumber}`)
	}

	return (
		<button
			className='card'
			onClick={setPathname}
		>
			<div className='airplane_info'>
				<div className='airplane_company'>
					<img src={flight.company.logo} />
					<span>{flight.plane.planeNumber}</span>
				</div>
				<span className='flight_number'>{flight.flightInfo.flightNumber}</span>
			</div>

			<div className='airport_info'>
				<div className='from_info'>
					<span>{flight.flightInfo.from}</span>
					<h1>{flight.flightInfo.fromCode}</h1>
				</div>

				<StatusBar
					flight={flight}
					min={0}
					max={100}
					onChange={() => {}}
				/>
				<div className='to_info'>
					<span>{flight.flightInfo.to}</span>
					<h1>{flight.flightInfo.toCode}</h1>
				</div>
			</div>
		</button>
	)
}

export default memo(FlightCard)
