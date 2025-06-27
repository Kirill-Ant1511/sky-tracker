import { createPortal } from "react-dom";
import '../../../styles/FlightModal.scss'
import { FLIGHTS } from "../../flight-list/flights.data";
import { useMemo } from "react";
import { FlightAction } from "./FlightActions";
import { PlaneInfo } from "./PlaneInfo";
import { FlightInfo } from "./FlightInfo";
import { MultiFlightInfo } from "./MultiFlightInfo";
interface Props {
  flightNumber: string,
}


export function FlightModal({flightNumber}: Props) {
  const flight = useMemo(() => 
    {
      return FLIGHTS.find(flight => flight.flightInfo.flightNumber === flightNumber)!
    }, [flightNumber]);
  
  return createPortal(
    <div className={`modal_info ${flight && "active"}`}>

      <PlaneInfo flight={flight}/>

      <div className="general_info">

        <FlightInfo flight={flight}/>

        <MultiFlightInfo flight={flight} />
        


        <FlightAction 
          onRoute={() => {}}
          onFollow={() => {}}
          onMore={() => {}}
          onShare={() => {}}
        />

      </div>
    </div>,
    document.body
  )
}