import { PlaneLanding } from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router'
import { Pages } from '../../configs/router.config'
import '../../styles/Header.scss'
import { ToggleButton } from './ToggleBottom'

function Header() {
	return (
		<header className='header'>
			<Link
				to={Pages.BASE}
				className='logo'
			>
				Sky
				<PlaneLanding />
				Tracker
			</Link>
			<div className='route'>
				<Link to={Pages.BASE}>Home</Link>
				<Link to={Pages.FOLLOW}>Follow</Link>
			</div>
			<ToggleButton />
		</header>
	)
}

export default memo(Header)
