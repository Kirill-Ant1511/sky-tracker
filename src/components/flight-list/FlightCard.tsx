import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import type { FlightData } from '../../types/IFlight'
import { FlightActionsButton } from '../flight-actions/FlightActionsButton'
import StatusBar from '../ui/StatusBar'

interface Props {
	flight: FlightData
	isList: boolean
}

function FlightCard({ flight, isList }: Props) {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const setPathname = () => {
		navigate(`/${flight.flight.iata}`)
	}

	return (
		<div className='relative group transition-all duration-300 max-md:w-[90%] w-[85%]'>
			<FlightActionsButton flight={flight} />
			<button
				className={`flex flex-col bg-background text-foreground p-5 rounded-2xl gap-7 hover:border-3 hover:border-amber-400 transition-color duration-150 w-[100%] ${
					pathname === '/' + flight.flight.iata
						? 'border-3 border-amber-400'
						: ''
				}`}
				onClick={isList ? setPathname : () => {}}
			>
				<div className='flex justify-between items-center h-full'>
					<div className='flex items-center gap-2'>
						<img
							src={`https://content.airhex.com/content/logos/airlines_${flight.airline.iata}_100_100_s.png`}
							width={45}
							className='rounded-full bg-cover bg-white object-cover'
						/>
						<span>{flight.flight.iata}</span>
					</div>
					<div className='flex gap-2'>
						<span className='p-2 bg-secondary rounded-full'>
							{flight.flight.number}
						</span>
					</div>
				</div>

				<div className='grid grid-cols-[1fr_2fr_1fr] items-center'>
					<div>
						<span className='text-xl'>{flight.departure.airport}</span>
						<h1 className='text-2xl'>{flight.departure.iata}</h1>
					</div>

					<StatusBar status={50} />
					<div>
						<span className='text-xl'>{flight.arrival.airport}</span>
						<h1 className='text-2xl'>{flight.arrival.iata}</h1>
					</div>
				</div>
			</button>
		</div>
	)
}

export default memo(FlightCard)
