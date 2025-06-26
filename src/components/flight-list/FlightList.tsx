import { FlightCard } from "./FlightCard";
import { FLIGHTS } from "./flights.data";
import { FlightModal } from "../modal/FlightModal";
import { useParams } from "react-router";

export function FlightList() {
  const {flightNumber} = useParams();
  return <div className="overflow-y-auto relative">
    <div>
      {
        flightNumber && <FlightModal flightNumber={flightNumber}/>
      }
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