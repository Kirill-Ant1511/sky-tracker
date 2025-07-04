import { PlaneLanding } from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router'
import { Pages } from '../../configs/router.config'
import { ToggleButton } from './ToggleBottom'

function Header() {
	return (
		<header className='w-[90%] flex justify-between items-center bg-white px-10 py-3 rounded-full dark:bg-neutral-700 text-black dark:text-neutral-200'>
			<Link
				to={Pages.BASE}
				className='flex text-amber-500 gap-1'
			>
				Sky
				<PlaneLanding />
				Tracker
			</Link>
			<div className='flex gap-5'>
				<Link to={Pages.BASE}>Home</Link>
				<Link to={Pages.FOLLOW}>Follow</Link>
			</div>
			<ToggleButton />
		</header>
	)
}

export default memo(Header)
