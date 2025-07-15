import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import type { IFlight } from '../../types/IFlight'
import { FlightActionsButton } from '../flight-actions/FlightActionsButton'
import StatusBar from '../ui/StatusBar'

interface Props {
	flight: IFlight
	isList: boolean
}

function FlightCard({ flight, isList }: Props) {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const setPathname = () => {
		navigate(`/${flight.flightInfo.flightNumber}`)
	}

	return (
		<div className='relative group transition-all duration-300 max-md:w-[90%] w-[85%]'>
			<FlightActionsButton flight={flight} />
			<button
				className={`flex flex-col bg-background text-foreground p-5 rounded-2xl gap-7 hover:border-3 hover:border-amber-400 transition-color duration-150 w-[100%] ${
					pathname === '/' + flight.flightInfo.flightNumber
						? 'border-3 border-amber-400'
						: ''
				}`}
				onClick={isList ? setPathname : () => {}}
			>
				<div className='flex justify-between items-center h-full'>
					<div className='flex items-center gap-2'>
						<img
							src={flight.company.logo}
							width={45}
							className='rounded-full bg-cover bg-white object-cover'
						/>
						<span>{flight.plane.planeNumber}</span>
					</div>
					<div className='flex gap-2'>
						<span className='p-2 bg-secondary rounded-full'>
							{flight.flightInfo.flightNumber}
						</span>
					</div>
				</div>

				<div className='flex'>
					<div>
						<span className='text-xl'>{flight.flightInfo.from}</span>
						<h1 className='text-2xl'>{flight.flightInfo.fromCode}</h1>
					</div>

					<StatusBar
						status={flight.status}
						min={0}
						max={100}
						onChange={() => {}}
					/>
					<div>
						<span className='text-xl'>{flight.flightInfo.to}</span>
						<h1 className='text-2xl'>{flight.flightInfo.toCode}</h1>
					</div>
				</div>
			</button>
		</div>
	)
}

export default memo(FlightCard)
