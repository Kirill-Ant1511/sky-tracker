import { Crosshair, MoreHorizontal, Route, Share } from 'lucide-react'

interface Props {
	onRoute: () => void
	onFollow: () => void
	onShare: () => void
	onMore: () => void
}

export function FlightAction({ onRoute, onFollow, onShare, onMore }: Props) {
	return (
		<div className='w-[95%] grid grid-cols-4 justify-center overflow-hidden rounded-2xl gap-1'>
			<button
				className='p-2 bg-neutral-300 dark:bg-neutral-800 flex flex-col items-center cursor-pointer'
				onClick={onRoute}
			>
				<Route />
				<span>Route</span>
			</button>
			<button
				className='p-2 bg-neutral-300 dark:bg-neutral-800 flex flex-col items-center cursor-pointer'
				onClick={onFollow}
			>
				<Crosshair />
				<span>Follow</span>
			</button>
			<button
				className='p-2 bg-neutral-300 dark:bg-neutral-800 flex flex-col items-center cursor-pointer'
				onClick={onShare}
			>
				<Share />
				<span>Share</span>
			</button>
			<button
				className='p-2 bg-neutral-300 dark:bg-neutral-800 flex flex-col items-center cursor-pointer'
				onClick={onMore}
			>
				<MoreHorizontal />
				<span>More</span>
			</button>
		</div>
	)
}
