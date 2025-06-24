import { FlightCard } from "./FlightCard";
import { FLIGHTS } from "./flights.data";

export function FlightList() {
  return <div>
    <div>
      {
        FLIGHTS.map((flight) => (
          <FlightCard
            key={flight.flightNumber}
            flight={flight}
          />
        ))
      }
    </div>
  </div>
}