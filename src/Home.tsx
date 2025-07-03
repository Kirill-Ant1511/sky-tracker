import { FlightList } from './components/flight-list/FlightList'
import './Home.css'

export function Home() {
	return (
		<>
			<div className='home'>
				<FlightList />
			</div>
		</>
	)
}
