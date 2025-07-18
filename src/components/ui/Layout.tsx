import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Pages } from '../../configs/router.config'
import { Map } from '../../pages/Home/Map/Map'
import Header from './Header'
export function Layout() {
	const { pathname } = useLocation()

	const isMap = useMemo(() => {
		if (pathname === Pages.PROFILE || pathname === Pages.FOLLOW) return false

		return true
	}, [pathname])

	return (
		<div className='w-[100vw] bg-primary min-h-screen'>
			{isMap && <Map />}
			<div className='flex justify-center items-center'>
				<Header />
			</div>

			<main>
				<Outlet />
			</main>
		</div>
	)
}
