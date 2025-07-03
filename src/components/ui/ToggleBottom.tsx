import { useTheme } from '../../providers/theme/useTheme'
import '../../styles/ToggleButton.scss'
export function ToggleButton() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div>
			<button
				onClick={() => {
					toggleTheme()
				}}
				className='toggle_button'
			>
				<div className={`${theme === 'dark' ? 'active' : ''} toggle`}>🌗</div>
				<div className={`${theme === 'dark' ? '' : 'active'} toggle`}>☀️</div>
			</button>
		</div>
	)
}
