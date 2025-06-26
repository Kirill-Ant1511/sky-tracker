import type { IFlight } from "../../types/IFlight"
import '../../styles/FlightCard.scss'
import { useNavigate } from "react-router"
interface Props {
  flight: IFlight,
}

export function FlightCard({flight}: Props) {

  const navigate = useNavigate();

  const setPathname = () => {
    navigate(`/${flight.flightInfo.flightNumber}`)
  }

  return <button className="card" onClick={setPathname}>
    <div className="airplane_info">
      <div className="airplane_company">
        <img src={flight.company.logo} />
        <span>{flight.plane.planeNumber}</span>
      </div>
      <span className="flight_number">{flight.flightInfo.flightNumber}</span>
    </div>
    
    <div className="airport_info">
      <div className="from_info">
        <span>{flight.flightInfo.from}</span>
        <h1>{flight.flightInfo.fromCode}</h1>
      </div>

      <input type="range" min={0} max={100} value={flight.status}/>
      <div className="to_info">
        <span>{flight.flightInfo.to}</span>
        <h1>{flight.flightInfo.toCode}</h1>
      </div>
    </div>
  </button>
}