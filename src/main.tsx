import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/ui/Layout.tsx'
import { Pages } from './configs/router.config.ts'
import { Follow } from './Follow.tsx'
import { Home } from './Home.tsx'
import './index.css'
import { ThemeProvider } from './providers/theme/ThemeProvider.tsx'
import { store } from './store/index.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
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
							<Route
								path={Pages.FOLLOW}
								element={<Follow />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	</StrictMode>
)
