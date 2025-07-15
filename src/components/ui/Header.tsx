import { Heart, User } from 'lucide-react'
import { memo } from 'react'
import { Link, useLocation } from 'react-router'
import { Pages } from '../../configs/router.config'
import { useAppSelector } from '../../hooks/useAppSelector'
import { ToggleButton } from './ToggleBottom'

function Header() {
	const { pathname } = useLocation()
	const favoriteCount = useAppSelector(state => state.favorites).length
	return (
		<header className='w-[90%] flex justify-between items-center bg-background px-10 py-3 rounded-full text-foreground max-sm:px-3 max-sm:w-[99%] max-sm:text-sm animate-loading-top z-10 mt-2'>
			<Link
				to={Pages.BASE}
				className='flex text-amber-500 items-center'
			>
				Sky
				<img
					src='/logos.svg'
					alt='Logo'
					className='w-[30px] max-sm:w-[20px]'
				/>
				Tracker
			</Link>

			<div className='flex items-center gap-2 max-sm:gap-1'>
				<Link
					to={Pages.PROFILE}
					className={`${
						pathname === Pages.PROFILE ? 'text-amber-600' : ''
					} flex gap-1 items-center`}
				>
					<User />
				</Link>
				<Link
					to={Pages.FOLLOW}
					className={`${
						pathname === Pages.FOLLOW ? 'text-amber-600' : ''
					} flex gap-1 items-center relative w-7 h-7`}
				>
					<Heart />
					<p className='absolute bottom-0 right-0 w-4 h-4 flex justify-center items-center bg-neutral-400 rounded-2xl text-amber-800'>
						{favoriteCount}
					</p>
				</Link>
				<ToggleButton />
			</div>
		</header>
	)
}

export default memo(Header)
