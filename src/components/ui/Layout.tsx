import { Outlet } from 'react-router'
import { ToggleButton } from './ToggleBottom'

export function Layout() {
	return (
		<div className='bg-neutral-800 dark:bg-neutral-100'>
			<ToggleButton />
			<Outlet />
		</div>
	)
}
