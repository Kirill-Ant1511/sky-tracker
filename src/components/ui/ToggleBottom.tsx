import { useTheme } from '../providers/theme/useTheme'

export function ToggleButton() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className='fixed top-5 left-1/2'>
			<button
				onClick={() => {
					toggleTheme()
				}}
				className='dark:bg-neutral-950 bg-neutral-200 rounded-full w-[50px] h-[50px]'
			>
				{theme === 'dark' ? '🌗' : '☀️'}
			</button>
		</div>
	)
}
