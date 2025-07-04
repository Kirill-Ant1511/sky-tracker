import { useMemo } from 'react'
import { createPortal } from 'react-dom'

import { FLIGHTS } from '../../flight-list/flights.data'
import { FlightAction } from './FlightActions'
import { FlightInfo } from './FlightInfo'
import { MultiFlightInfo } from './MultiFlightInfo'
import { PlaneInfo } from './PlaneInfo'
interface Props {
	flightNumber: string
}

export function FlightModal({ flightNumber }: Props) {
	const flight = useMemo(() => {
		return FLIGHTS.find(
			flight => flight.flightInfo.flightNumber === flightNumber
		)!
	}, [flightNumber])

	return createPortal(
		<div className='absolute right-10 top-25 bg-white dark:bg-black overflow-y-auto rounded-2xl h-[82%] w-[450px] no-scrollbar text-black dark:text-white transition-all duration-300'>
			<PlaneInfo flight={flight} />

			<div className='flex flex-col items-center gap-2 pt-5'>
				<FlightInfo flight={flight} />

				<MultiFlightInfo flight={flight} />

				<FlightAction
					onRoute={() => {}}
					onFollow={() => {}}
					onMore={() => {}}
					onShare={() => {}}
				/>
			</div>
		</div>,
		document.body
	)
}
