import { memo, type ChangeEvent } from 'react'
import '../../styles/StatusBar.scss'
export interface Props {
	status: number
	min: number
	max: number
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function StatusBar({ status, min, max, onChange }: Props) {
	return (
		<input
			type='range'
			value={status}
			min={min}
			max={max}
			onChange={onChange}
		/>
	)
}

export default memo(StatusBar)
