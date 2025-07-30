import { useQuery } from '@tanstack/react-query'
import { getFlight } from './FlightRequests'

export const Cashing = () => {
	return useQuery({
		queryKey: ['flights'],
		queryFn: getFlight,
		gcTime: 999999
	})
}
