import { useNavigate } from 'react-router'
import '../../../styles/PlaneInfo.scss'
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
		<div className='plane_info_block'>
			<div className='plane_info'>
				<div className='company_info'>
					<p className='text-xl text-amber-500'>{flight.plane.planeNumber}</p>
					<p className='text-sm text-black dark:text-white'>
						{flight.company.name}
					</p>
				</div>
				<button onClick={closeModal}>❌</button>
			</div>
			<img
				src={flight.plane.planePhoto}
				width={350}
			/>
		</div>
	)
}
