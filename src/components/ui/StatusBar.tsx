import type { IFlight } from "../../types/IFlight"
import '../../styles/StatusBar.scss'
export interface Props {
  flight: IFlight,
  min: number,
  max: number,
  onChange: () => void
}

export function StatusBar({flight, min, max, onChange} : Props) {
  
  return <input 
    type="range" 
    value={flight.status} 
    min={min} 
    max={max} 
    onChange={onChange}
  />
}