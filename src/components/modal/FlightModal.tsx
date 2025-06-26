import { createPortal } from "react-dom";
import '../../styles/FlightModal.scss'
import { FLIGHTS } from "../flight-list/flights.data";
import { useNavigate } from "react-router";
interface Props {
  flightNumber: string,
}


export function FlightModal({flightNumber}: Props) {
  const flight = FLIGHTS.find(flight => flight.flightInfo.flightNumber === flightNumber)!;
  const navigate = useNavigate();
  const closeModal = () => {
    navigate('/');
  }
  return createPortal(
    <div className={`modal_info ${flight && "active"} fixed right-10 top-5 rounded-2xl overflow-hidden w-[450px]`}>
      <div className="bg-blue-400 flex flex-col items-center p-4">
        <div className="plane_info">
          <div className="company_info">
            <p className="plane_number text-xl">{flight.plane.planeNumber}</p>
            <p className="text-sm">{flight.company.name}</p>
          </div>
          <button onClick={closeModal}>❌</button>
        </div>
        <img src={flight.plane.planePhoto} width={450}/>
      </div>

      <div className="flex flex-col items-center py-1">

        <div className="flex flex-col items-center m-2 rounded-4xl overflow-hidden w-[94%] space-y-1">
          <div className="flight_info">
            <div className="from">
              <span className="text-2xl">{flight.flightInfo.fromCode}</span>
              <span className="text-sm">{flight.flightInfo.from}</span>
              <span className="text-white/30 text-xs">{flight.flightInfo.fromTimestamp}</span>
            </div>

            <div className="centr_img">
              <img src="/logo.svg"/>
            </div>

            <div className="to">
              <span className="text-2xl">{flight.flightInfo.toCode}</span>
              <span className="text-sm">{flight.flightInfo.to}</span>
              <span className="text-white/30 text-xs">{flight.flightInfo.toTimestamp}</span>
            </div>
          </div>

          <div className="status_info">
            <input type="range"/>
            <div className="flex justify-between mt-1.5 text-white/30">
              <span>{flight.flightInfo.totalDistace} * 3h 1m</span>
              <span>882km * 59m</span>
            </div>
          </div>

          <div className="block_info">
            <p><span>Sheduled</span> <span>{flight.flightInfo.fromSheduled.getHours() + ":" + flight.flightInfo.fromSheduled.getMinutes()}</span></p>
            <p><span>Actual</span> <span>{flight.flightInfo.fromSheduled.getHours() + ":" + (flight.flightInfo.fromSheduled.getMinutes() + 5)}</span></p>

            <p><span>Sheduled</span> <span>{(flight.flightInfo.fromSheduled.getHours() + 3) + ":" + flight.flightInfo.fromSheduled.getMinutes()}</span></p>
            <p><span>Estiamted</span> <span>{(flight.flightInfo.fromSheduled.getHours() + 3) + ":" + (flight.flightInfo.fromSheduled.getMinutes() - 3)}</span></p>
          </div>
        </div>

        <div className="multi_info space-y-1">
          <p className="bg-white/15 w-[100%] p-2">Flight information</p>
          <div className="block_info">
            <p>{flight.plane.planeType}</p>
            <p>{flight.createCountry}</p>
            <p> <span>Speed</span> <span>{flight.speed} km/h</span></p>
            <p><span>Alltitude</span> <span>{flight.altitude} m</span></p>
          </div>
        </div>


        <div className="button_block">
          <button><img src="/Route.svg"/><span>Route</span></button>
          <button><img src="/Follow.svg"/><span>Follow</span></button>
          <button><img src="/Share.svg"/><span>Share</span></button>
          <button><img src="/More.svg"/><span>More</span></button>
        </div>

      </div>
    </div>,
    document.body
  )
}