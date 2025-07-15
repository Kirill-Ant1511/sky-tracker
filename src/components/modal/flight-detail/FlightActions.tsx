import { Crosshair, MoreHorizontal, Route, Share } from 'lucide-react'

interface Props {
	onRoute: () => void
	onFollow: () => void
	onShare: () => void
	onMore: () => void
	isFollow: boolean
}

export function FlightAction({
	onRoute,
	onFollow,
	onShare,
	onMore,
	isFollow
}: Props) {
	return (
		<div className='w-[95%] grid grid-cols-4 justify-center overflow-hidden rounded-2xl gap-1'>
			<button
				className='p-2 bg-background text-foreground flex flex-col items-center cursor-pointer hover:text-black/50 dark:hover:text-white/50 transition-all duration-200'
				onClick={onRoute}
			>
				<Route />
				<span>Route</span>
			</button>
			<button
				className={`p-2 bg-background text-foreground flex flex-col items-center cursor-pointer ${
					isFollow ? 'text-amber-400' : ''
				} hover:text-black/50 dark:hover:text-white/50 transition-all duration-200`}
				onClick={onFollow}
			>
				<Crosshair />
				<span>Follow</span>
			</button>
			<button
				className='p-2  bg-background text-foreground flex flex-col items-center cursor-pointer hover:text-black/50 dark:hover:text-white/50 transition-all duration-200'
				onClick={onShare}
			>
				<Share />
				<span>Share</span>
			</button>
			<button
				className='p-2 bg-background text-foreground flex flex-col items-center cursor-pointer hover:text-black/50 dark:hover:text-white/50 transition-all duration-200'
				onClick={onMore}
			>
				<MoreHorizontal />
				<span>More</span>
			</button>
		</div>
	)
}
