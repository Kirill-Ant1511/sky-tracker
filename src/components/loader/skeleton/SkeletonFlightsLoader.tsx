import { SkeletonFlightCard } from './SkeletonFlightCard'

export function SkeletonFlightsLoader() {
	return (
		<div className='text-black dark:text-white space-y-3 overflow-hidden h-[74vh]'>
			<SkeletonFlightCard />
			<SkeletonFlightCard />
			<SkeletonFlightCard />
			<SkeletonFlightCard />
			<SkeletonFlightCard />
		</div>
	)
}
