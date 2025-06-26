import FlightCard  from "./FlightCard";
import { FLIGHTS } from "./flights.data";
import { FlightModal } from "../modal/FlightModal";
import { useParams } from "react-router";
import '../../styles/FLightList.scss'
export function FlightList() {
  const {flightNumber} = useParams();
  return <div >
    {
      flightNumber && <FlightModal flightNumber={flightNumber}/>
    }
    <div className="flight_list">
      {
        FLIGHTS.map((flight) => (
          <FlightCard
            key={flight.flightInfo.flightNumber}
            flight={flight}
          />
        ))
      }
    </div>
  </div>
}