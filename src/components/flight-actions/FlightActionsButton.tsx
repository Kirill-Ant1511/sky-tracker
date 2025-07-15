import { Heart } from 'lucide-react'
import { useCallback } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispath'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
	addFavorite,
	removeFavorite
} from '../../store/favorite/favorite.slice'
import type { IFlight } from '../../types/IFlight'

interface Props {
	flight: IFlight
}

export function FlightActionsButton({ flight }: Props) {
	const dispatch = useAppDispatch()
	const favorites = useAppSelector(state => state.favorites)
	const isFavorite = favorites.includes(flight.flightInfo.flightNumber)

	const onHandleClick = useCallback(() => {
		if (!isFavorite) {
			dispatch(addFavorite(flight.flightInfo.flightNumber))
		} else {
			dispatch(removeFavorite(flight.flightInfo.flightNumber))
		}
	}, [dispatch, flight, isFavorite])
	return (
		<div
			className={
				'flex flex-co absolute opacity-0 gap-2 z-50 right-0 transition-all duration-300 top-0 group-hover:-right-15 group-hover:opacity-100 px-4 max-md:hidden'
			}
		>
			<button
				className='bg-background text-foreground p-2 rounded-xl'
				onClick={onHandleClick}
			>
				<Heart fill={isFavorite ? 'rgb(252, 164, 21)' : 'none'} />
			</button>
		</div>
	)
}
