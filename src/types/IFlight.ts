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
		from: string
		fromCode: string
		fromTimestamp: string
		fromScheduled: Date
		to: string
		toCode: string
		toTimestamp: string
		toScheduled: Date
		totalDistance: number
	}
	speed: number
	altitude: number
	createCountry: string
	status: number
}
