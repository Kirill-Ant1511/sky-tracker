import { createPortal } from 'react-dom'
import '../../../styles/FlightFilterModal.scss'

export interface Props {
	setFilter: (value: string) => void
}

export function FlightFilterModal({ setFilter }: Props) {
	return createPortal(
		<div className='filter_modal'>
			<button
				onClick={() => {
					setFilter('up')
				}}
			>
				Up Status Flight
			</button>
			<button
				onClick={() => {
					setFilter('down')
				}}
			>
				Down Status Flight
			</button>
		</div>,
		document.body
	)
}
