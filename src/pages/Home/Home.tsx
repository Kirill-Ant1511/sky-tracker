import { useQuery } from '@tanstack/react-query'
import { RotateCcw } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { FlightList } from '../../components/flight-list/FlightList'
import { getFlight } from '../../utils/FlightRequests'
import { Map } from './Map/Map'

export function Home() {
	const lastUpdateDate = useRef<Date | null>(null)
	useEffect(() => {
		document.title = 'Sky Tracker'
	}, [])
	const {
		data: flights,
		isLoading,
		refetch,
		isRefetching
	} = useQuery({
		queryKey: ['flights'],
		queryFn: async () => {
			const result = await getFlight()
			lastUpdateDate.current = new Date()
			return result
		}
	})

	if (isLoading) {
		return <div className='text-foreground'>Loading...</div>
	}

	if (!flights) {
		return <div className='text-foreground'>Нет данных о рейсах</div>
	}

	return (
		<div className='min-h-screen overflow-hidden'>
			{/* Отображение времени последнего обновления */}

			<div className='flex text-foreground'>
				<FlightList flights={flights} />
				<div className='mt-5 z-10 h-20 group flex flex-col items-center'>
					<button
						onClick={() => refetch()}
						className='p-2 flex justify-center items-center bg-background rounded-lg '
					>
						{isRefetching ? <>Update...</> : <RotateCcw />}
					</button>
					<div className='opacity-0 group-hover:opacity-100 transition-all duration-200'>
						<span>Last update: </span>{' '}
						{lastUpdateDate.current
							? lastUpdateDate.current.getHours() +
							  ':' +
							  lastUpdateDate.current.getMinutes()
							: '...'}
					</div>
				</div>
			</div>
			<Map flights={flights} />
		</div>
	)
}
