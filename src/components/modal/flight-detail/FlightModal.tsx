import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../hooks/useAppSelector'
import {
	addFavorite,
	removeFavorite
} from '../../../store/favorite/favorite.slice'
import type { FlightData } from '../../../types/IFlight'
import { getFlightToNumber } from '../../../utils/FlightRequests'
import { SkeletonDetailLoader } from '../../loader/skeleton/SkeletonDetailLoader'
import { FlightAction } from './FlightActions'
import { FlightInfo } from './FlightInfo'
import { MultiFlightInfo } from './MultiFlightInfo'
import { PlaneInfo } from './PlaneInfo'
interface Props {
	flightNumber: string
}

export function FlightModal({ flightNumber }: Props) {
	const dispatch = useDispatch()
	const favorites = useAppSelector(state => state.favorites)
	const [flight, setFlight] = useState<FlightData>()

	useEffect(() => {
		const getFlight = async () => {
			const flight = await getFlightToNumber(flightNumber)
			console.log(flight)
			setFlight(flight[1])
		}

		getFlight()
	}, [flightNumber])
	const isFavorite = flight
		? favorites.includes(flight.flight.number ? flight.flight.number : '0')
		: false

	const onFollow = useCallback(() => {
		if (flight && flight.flight) {
			if (!isFavorite) {
				dispatch(addFavorite(flight.flight.number))
			} else {
				dispatch(removeFavorite(flight.flight.number))
			}
		}
	}, [dispatch, flight, isFavorite])
	if (flight && flight.flight) {
		return createPortal(
			<div className='absolute right-10 top-25 bg-secondary md:overflow-y-auto rounded-2xl h-[82%] 2xl:h-[830px] max-xl:w-[45%] md:no-scrollbar text-foreground transition-all duration-300 pb-2 max-md:w-full max-md:top-[2%] max-md:right-0 max-md:h-[850px] max-lg:right-5 max-md:animation_down_up no-scrollbar animate-loading-bottom z-50'>
				{flight ? (
					<>
						<PlaneInfo flight={flight} />
						<div className='flex flex-col items-center gap-2 pt-5'>
							<FlightInfo flight={flight} />

							<MultiFlightInfo flight={flight} />

							<FlightAction
								onRoute={() => {}}
								onFollow={onFollow}
								onMore={() => {}}
								onShare={() => {}}
								isFollow={isFavorite}
							/>
						</div>
					</>
				) : (
					<SkeletonDetailLoader />
				)}
			</div>,
			document.body
		)
	}
}
