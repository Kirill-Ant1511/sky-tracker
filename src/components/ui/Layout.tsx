import { Outlet } from 'react-router'
import '../../styles/Layout.scss'
import Header from './Header'
export function Layout() {
	return (
		<div className='layout'>
			<Header />
			<Outlet />
		</div>
	)
}
