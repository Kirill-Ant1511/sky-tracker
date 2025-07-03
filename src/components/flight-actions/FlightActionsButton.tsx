import { Heart } from 'lucide-react'
import { useCallback } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispath'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
	addFavorite,
	removeFavorite
} from '../../store/favorite/favorite.slice'
import '../../styles/FlightActionsButton.scss'

interface Props {
	flightNumber: string
}

export function FlightActionsButton({ flightNumber }: Props) {
	const dispatch = useAppDispatch()
	const favorites = useAppSelector(state => state.favorites)
	const isFavorite = favorites.includes(flightNumber)

	const onHandleClick = useCallback(() => {
		if (isFavorite) {
			dispatch(removeFavorite(flightNumber))
		} else {
			dispatch(addFavorite(flightNumber))
		}
	}, [dispatch, flightNumber, isFavorite])

	return (
		<div className='bg-follow'>
			<button
				className='follow'
				onClick={onHandleClick}
			>
				<Heart fill={isFavorite ? 'rgb(252, 164, 21)' : 'none'} />
			</button>
		</div>
	)
}
