import '../../styles/ToggleButton.scss'
import { useTheme } from '../providers/theme/useTheme'
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
