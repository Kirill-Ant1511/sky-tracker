import type { IFlight } from '../../types/IFlight'

export function getCurrentLocation(
	from: [number, number],
	to: [number, number],
	progress: number
): [number, number] {
	const clamp = (val: number, min: number, max: number) =>
		Math.max(min, Math.min(max, val))
	const p = clamp(progress, 0, 100) / 100
	const lat = from[0] + (to[0] - from[0]) * p
	const lng = from[1] + (to[1] - from[1]) * p
	return [lat, lng]
}
// export const COUNTRIES: CountryPosition[] = [
// 	{
// 		name: 'Sofia',
// 		position: [42.6977, 23.3219]
// 	},
// 	{
// 		name: 'Beijing',
// 		position: [39.9042, 116.4074]
// 	},
// 	{
// 		name: 'Dublin',
// 		position: [53.3498, -6.2603]
// 	},
// 	{
// 		name: 'Larnaca',
// 		position: [34.9167, 33.6233]
// 	},
// 	{
// 		name: 'Nice',
// 		position: [43.7102, 7.262]
// 	},
// 	{
// 		name: 'Porto',
// 		position: [41.1579, -8.6291]
// 	},
// 	{
// 		name: 'Baku',
// 		position: [40.4093, 49.8671]
// 	},
// 	{
// 		name: 'Burgas',
// 		position: [42.5048, 27.4716]
// 	},
// 	{
// 		name: 'Muscat',
// 		position: [23.588, 58.3829]
// 	},
// 	{
// 		name: 'Tbilisi',
// 		position: [41.7151, 44.8271]
// 	}
// ]

export const FLIGHTS: IFlight[] = [
	{
		company: {
			logo: '/aircompany/turkish.svg',
			name: 'Turkish Airlines'
		},

		plane: {
			planeType: 'Airbus-A330',
			planePhoto: '/airplane/turkish_airbus-A330.png',
			planeNumber: 'TK143'
		},

		flightInfo: {
			flightNumber: 'TC-JFP',
			from: {
				name: 'Sofia',
				code: 'SOF',
				timestamp: 'UTC+2',
				scheduled: new Date(),
				coordinates: [42.6977, 23.3219]
			},
			to: {
				name: 'Beijing',
				code: 'PEK',
				timestamp: 'UTC+4',
				scheduled: new Date(),
				coordinates: [39.9042, 116.4074]
			},

			totalDistance: 3756
		},
		currentLocation: getCurrentLocation(
			[42.6977, 23.3219],
			[39.9042, 116.4074],
			85
		),
		speed: 800,
		altitude: 10200,
		createCountry: '🇹🇷 Turkish',

		status: 85
	},

	{
		company: {
			logo: '/aircompany/ryanair.svg',
			name: 'Ryanair'
		},
		plane: {
			planeType: 'Boeing-737',
			planePhoto: '/airplane/Ryanair_Boeing-737-800.png',
			planeNumber: 'RN1782'
		},

		flightInfo: {
			flightNumber: 'D-AISP',
			from: {
				name: 'Dublin',
				code: 'DUB',
				timestamp: 'UTC+2',
				scheduled: new Date(),
				coordinates: [53.3498, -6.2603]
			},
			to: {
				name: 'Larnaca',
				code: 'LCA',
				timestamp: 'UTC+4',
				scheduled: new Date(),
				coordinates: [34.9167, 33.6233]
			},
			totalDistance: 3756
		},
		currentLocation: getCurrentLocation(
			[53.3498, -6.2603],
			[34.9167, 33.6233],
			95
		),
		speed: 780,
		altitude: 11220,
		createCountry: '🇮🇪 Ireland',

		status: 95
	},

	{
		company: {
			logo: '/aircompany/s7.svg',
			name: 'S7'
		},
		plane: {
			planeType: 'Airbus-A320',
			planePhoto: '/airplane/s7_Airbus-A320.png',
			planeNumber: 'S7124'
		},
		flightInfo: {
			flightNumber: 'RA-74415',
			totalDistance: 3756,

			from: {
				name: 'Nice',
				code: 'NCE',
				timestamp: 'UTC+2',
				scheduled: new Date(),
				coordinates: [43.7102, 7.262]
			},
			to: {
				name: 'Tbilisi',
				code: 'TBS',
				timestamp: 'UTC+4',
				scheduled: new Date(),
				coordinates: [41.7151, 44.8271]
			}
		},
		currentLocation: getCurrentLocation(
			[43.7102, 7.262],
			[41.7151, 44.8271],
			40
		),
		speed: 780,
		altitude: 11220,
		createCountry: '🇮🇪 Ireland',

		status: 40
	},

	{
		company: {
			logo: '/aircompany/swiss.svg',
			name: 'Swiss'
		},
		plane: {
			planeType: 'Airbus-A321',
			planePhoto: '/airplane/SWISS_Airbus-A321.png',
			planeNumber: 'LX318'
		},
		flightInfo: {
			flightNumber: 'HB-JHK',
			from: {
				name: 'Porto',
				code: 'OPO',
				timestamp: 'UTC+2',
				scheduled: new Date(),
				coordinates: [41.1579, -8.6291]
			},
			to: {
				name: 'Baku',
				code: 'GYD',
				timestamp: 'UTC+4',
				scheduled: new Date(),
				coordinates: [40.4093, 49.8671]
			},
			totalDistance: 3756
		},
		currentLocation: getCurrentLocation(
			[41.1579, -8.6291],
			[40.4093, 49.8671],
			60
		),
		speed: 780,
		altitude: 11220,
		createCountry: '🇮🇪 Ireland',

		status: 60
	},

	{
		company: {
			logo: '/aircompany/lufthansa.svg',
			name: 'Lufthansa'
		},
		plane: {
			planeType: 'Airbus-A321',
			planePhoto: '/airplane/Lufthansa_Airbus-A350-900.png',
			planeNumber: 'LH401'
		},
		flightInfo: {
			flightNumber: 'D-AIXD',
			from: {
				name: 'Burgas',
				code: 'BOJ',
				timestamp: 'UTC+2',
				scheduled: new Date(),
				coordinates: [42.5048, 27.4716]
			},
			to: {
				name: 'Muscat',
				code: 'MCT',
				timestamp: 'UTC+4',
				scheduled: new Date(),
				coordinates: [23.588, 58.3829]
			},
			totalDistance: 3756
		},
		currentLocation: getCurrentLocation(
			[42.5048, 27.4716],
			[23.588, 58.3829],
			20
		),
		speed: 780,
		altitude: 11220,
		createCountry: '🇮🇪 Ireland',
		status: 20
	}
]
