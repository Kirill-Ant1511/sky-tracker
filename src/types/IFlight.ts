import type { LatLngExpression } from 'leaflet'

export interface IFlight {
	company: {
		logo: string
		name: string
	}
	plane: {
		planeType: string
		planePhoto: string
		planeNumber: string
	}

	flightInfo: {
		flightNumber: string
		from: {
			name: string
			code: string
			timestamp: string
			scheduled: Date
			coordinates: LatLngExpression
		}
		to: {
			name: string
			code: string
			timestamp: string
			scheduled: Date
			coordinates: LatLngExpression
		}
		totalDistance: number
	}

	currentLocation: LatLngExpression
	speed: number
	altitude: number
	createCountry: string
	status: number
}

export interface FlightData {
	flight_date: string
	flight_status: string
	departure: {
		airport: string
		timezone: string
		iata: string
		icao: string
		terminal: string
		gate: string
		delay: number
		scheduled: string
		estimated: string
		actual: string
		estimated_runway: string | null
		actual_runway: string | null
	}
	arrival: {
		airport: string
		timezone: string
		iata: string
		icao: string
		terminal: string
		gate: string
		baggage: string
		delay: number
		scheduled: string
		estimated: string
		actual: string | null
		estimated_runway: string | null
		actual_runway: string | null
	}
	airline: {
		name: string
		iata: string
		icao: string
	}
	flight: {
		number: string
		iata: string
		icao: string
		codeshared: string | null
	}
	aircraft: {
		registration: string
		iata: string
		icao: string
		icao24: string
	}
	live: {
		updated: string
		latitude: number
		longitude: number
		altitude: number
		direction: number
		speed_horizontal: number
		speed_vertical: number
		is_ground: boolean
	} | null
}
