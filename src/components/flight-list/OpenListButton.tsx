import { ChevronDown } from 'lucide-react'
import '../../styles/OpenListButton.scss'

export interface Props {
	onClick: () => void
	isActive: boolean
}

export function OpenListButton({ onClick, isActive }: Props) {
	return (
		<button
			onClick={onClick}
			className={`button ${isActive ? 'active' : ''}`}
		>
			<ChevronDown />
		</button>
	)
}
