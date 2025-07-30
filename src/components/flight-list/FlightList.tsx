import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import type { FlightData } from '../../types/IFlight'
import { FlightModal } from '../modal/flight-detail/FlightModal'
import FlightCard from './FlightCard'

interface Props {
	flights: FlightData[]
}

export function FlightList({ flights }: Props) {
	const { flightNumber } = useParams()
	const [isOpenList, setIsOpenList] = useState(true)

	useEffect(() => {
		document.title = `Sky Tracker | ${flightNumber}`
	})

	return (
		<div className='w-[30%] max-lg:w-[40%] flex justify-start max-md:w-full max-md:justify-center animate-loading-left h-[90vh] md:ml-3 relative z-10'>
			{flightNumber && <FlightModal flightNumber={flightNumber} />}
			<button
				onClick={() => setIsOpenList(!isOpenList)}
				className='md:hidden p-2 bg-background text-foreground z-30 w-10 h-10 rounded-full flex items-center justify-center shrink-0 absolute left-3 top-5'
			>
				<ChevronDown
					className={cn(
						isOpenList ? 'rotate-0' : '-rotate-90',
						'transition-all duration-100'
					)}
				/>
			</button>
			{isOpenList && (
				<div className='flex flex-col gap-2 max-xl:gap-4 items-start my-5 max-md:items-center animation-out-in'>
					{/* {
						<div className='flex gap-2 w-[80%] max-sm:w-[100%] xl:justify-start justify-center max-xl:justify-start max-lg:justify-center ml-5 self-start'>
							<FlightFilter
								flights={flight}
								setFlights={setFlight}
							/>
						</div>
					} */}

					<div className='flex flex-col gap-4 items-start m_overflow-y-scroll m_overflow-x-visible no-scrollbar h-[100%]  max-md:items-center'>
						{flights.map(flight => (
							<FlightCard
								key={flight.flight.icao}
								flight={flight}
								isList={true}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
