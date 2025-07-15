import { useNavigate } from 'react-router'
import type { IFlight } from '../../../types/IFlight'
export interface Props {
	flight: IFlight
}

export function PlaneInfo({ flight }: Props) {
	const navigate = useNavigate()
	const closeModal = () => {
		navigate('/')
	}
	return (
		<div className='bg-linear-to-tl from-sky-400 to-blue-600 flex flex-col items-center p-2'>
			<div className='flex w-[80%] bg-background justify-between items-center py-2 px-5 d rounded-2xl'>
				<div>
					<p className='text-xl text-amber-500'>{flight.plane.planeNumber}</p>
					<p className='text-sm text-foreground/70'>{flight.company.name}</p>
				</div>
				<button
					className='flex justify-center items-center w-8 h-8 p-2 bg-secondary rounded-full'
					onClick={closeModal}
				>
					❌
				</button>
			</div>
			<img
				src={flight.plane.planePhoto}
				width={350}
			/>
		</div>
	)
}
