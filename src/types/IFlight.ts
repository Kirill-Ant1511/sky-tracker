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
		fromSheduled: Date
		to: string
		toCode: string
		toTimestamp: string
		toSheduled: Date
		totalDistace: number
	}
	speed: number
	altitude: number
	createCountry: string
	status: number
}
