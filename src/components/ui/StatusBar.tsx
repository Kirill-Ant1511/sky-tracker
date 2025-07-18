import { memo } from 'react'
import { useTheme } from '../../providers/theme/useTheme'
export interface Props {
	status: number
}

function StatusBar({ status }: Props) {
	const { theme } = useTheme()
	return (
		<div className='w-full bg-primary h-1 flex items-center rounded-full m-1'>
			<div
				className='bg-amber-500 h-1 flex items-center justify-end rounded-full'
				style={{
					width: `${status}%`
				}}
			>
				<img
					src={theme === 'dark' ? '/plane.svg' : '/plane-dark.svg'}
					alt='plane'
					width={20}
					height={20}
				/>
			</div>
		</div>
	)
}

export default memo(StatusBar)
