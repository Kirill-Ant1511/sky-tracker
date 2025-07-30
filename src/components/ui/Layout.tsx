import { Outlet } from 'react-router'
import Header from './Header'
export function Layout() {
	return (
		<div className='w-[100vw] bg-primary min-h-screen'>
			<div className='flex justify-center items-center z-10'>
				<Header />
			</div>

			<main>
				<Outlet />
			</main>
		</div>
	)
}
