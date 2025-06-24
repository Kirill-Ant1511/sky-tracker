import type { IFlight } from "../../types/IFlight"
import '../../styles/FlightCard.scss'
interface Props {
  flight: IFlight
}

export function FlightCard({flight}: Props) {
  return <div className="card">
    <div className="airplane_info">
      <div className="airplane_company">
        <img src={flight.logo} alt="" />
        <span>{flight.planeNumber}</span>
      </div>
      <span className="flight_number">{flight.flightNumber}</span>
    </div>
    
    <div className="airport_info">
      <div className="from_info">
        <span>{flight.from}</span>
        <h1>{flight.fromCode}</h1>
      </div>

      <input type="range" min={0} max={100} value={flight.status}/>
      <div className="to_info">
        <span>{flight.to}</span>
        <h1>{flight.toCode}</h1>
      </div>
    </div>
  </div>
}