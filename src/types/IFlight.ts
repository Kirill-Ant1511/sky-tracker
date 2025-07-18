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
