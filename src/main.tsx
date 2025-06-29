import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProfider } from './components/providers/theme/ThemeProvider.tsx'
import { Layout } from './components/ui/Layout.tsx'
import { Home } from './Home.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProfider>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route
							path='/'
							element={<Home />}
						/>

						<Route
							path='/:flightNumber'
							element={<Home />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProfider>
	</StrictMode>
)
