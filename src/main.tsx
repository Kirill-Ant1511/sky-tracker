import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from './components/providers/theme/ThemeProvider.tsx'
import { Layout } from './components/ui/Layout.tsx'
import { Pages } from './configs/router.config.ts'
import { Home } from './Home.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route
							path={Pages.BASE}
							element={<Home />}
						/>
						<Route
							path={Pages.FLIGHT_INFO}
							element={<Home />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
)
