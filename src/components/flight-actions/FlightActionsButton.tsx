import { Heart } from 'lucide-react'
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
	const onHandleClick = () => {
		if (!isFavorite) {
			dispatch(addFavorite(flight.flightInfo.flightNumber))
		} else {
			dispatch(removeFavorite(flight.flightInfo.flightNumber))
		}
		console.log('Click')
	}
	return (
		<div
			className={
				'flex flex-col gap-2 absolute z-50 opacity-0 right-11 transition-all duration-300 top-0 group-hover:-right-4 group-hover:opacity-100 px-4'
			}
		>
			<button
				className='dark:bg-neutral-700 dark:text-white p-2 rounded-xl bg-white'
				onClick={onHandleClick}
			>
				<Heart fill={isFavorite ? 'rgb(252, 164, 21)' : 'none'} />
			</button>
		</div>
	)
}
