import axios from 'axios'

const key = 'e4746add94b8a7b90b7d147c82a6de8f'

const url = `https://api.aviationstack.com/v1/flights?access_key=${key}`
const airport_url = `https://api.aviationstack.com/v1/airports?access_key=${key}`

export const getFlight = async () => {
	try {
		const response = await axios.request({
			method: 'GET',
			url: url,
			params: {
				flight_status: 'active'
			}
		})
		return response.data.data
	} catch (error) {
		console.log(error)
		return null
	}
}

export const getFlightToNumber = async (flightNumber: string) => {
	try {
		const response = await axios.request({
			method: 'GET',
			url: url,
			params: {
				flight_iata: flightNumber
			}
		})

		return response.data.data
	} catch (error) {
		return error
	}
}

export const getAirportForIata = async (iata: string) => {
	try {
		const response = await axios.request({
			method: 'GET',
			url: airport_url,
			params: {
				iata_code: iata
			}
		})

		return response.data.data
	} catch (error) {
		console.log(error)
		return error
	}
}
