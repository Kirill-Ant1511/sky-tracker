import { useTheme } from '../../providers/theme/useTheme'
export function ToggleButton() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div>
			<button
				onClick={() => {
					toggleTheme()
				}}
				className='flex gap-2'
			>
				<div
					className={`${
						theme === 'dark' ? 'bg-black ' : ''
					} flex items-center justify-center rounded-full p-2 w-7 h-7 transition-all duration-300`}
				>
					🌗
				</div>
				<div
					className={`${
						theme === 'light' ? 'bg-neutral-400' : ''
					} flex items-center justify-center rounded-full p-2 w-7 h-7 transition-all duration-300`}
				>
					☀️
				</div>
			</button>
		</div>
	)
}
