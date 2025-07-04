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
		<div className='my-2 relative w-[500px] group'>
			<FlightActionsButton flight={flight} />
			<button
				className={`flex flex-col bg-white dark:bg-neutral-800 text-black dark:text-white p-5 w-[450px] rounded-2xl gap-7 hover:border-3 hover:border-amber-400 transition-all duration-50 ${
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
					<span className='p-2 bg-neutral-400 dark:bg-black rounded-full'>
						{flight.flightInfo.flightNumber}
					</span>
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
