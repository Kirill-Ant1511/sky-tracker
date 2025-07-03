import { Funnel } from 'lucide-react'
import { useState } from 'react'
import '../../styles/FlightFilter.scss'
import { FlightFilterModal } from '../modal/flight-filter/FlightFilterModal'

export interface Props {
	setFilter: (value: string) => void
}

export function FlightFilter({ setFilter }: Props) {
	const [isActiveModal, setIsActiveModal] = useState(true)
	return (
		<div className='filters'>
			{isActiveModal && <FlightFilterModal setFilter={setFilter} />}
			<button
				onClick={() => {
					setIsActiveModal(isActiveModal ? false : true)
				}}
			>
				<Funnel />
			</button>
		</div>
	)
}
