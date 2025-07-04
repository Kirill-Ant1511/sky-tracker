import { Outlet } from 'react-router'

import Header from './Header'
export function Layout() {
	return (
		<div className='w-[100vw] dark:bg-white/5 bg-white/80 min-h-screen p-3'>
			<div className='flex justify-center items-center'>
				<Header />
			</div>

			<main>
				<Outlet />
			</main>
		</div>
	)
}
