export function SkeletonFlightCard() {
	return (
		<div className='w-[450px]  bg-neutral-50 dark:bg-neutral-700 rounded-2xl p-4 space-y-5 '>
			<div className='flex justify-between items-center'>
				<div className='flex gap-2 items-center'>
					<div className='w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
					<div className='w-23 h-9 bg-neutral-200 dark:bg-neutral-600 rounded-2xl animate-pulse' />
				</div>

				<div className='w-23 h-10 bg-neutral-200 dark:bg-neutral-600 rounded-2xl animate-pulse' />
			</div>

			<div className='flex justify-between items-center'>
				<div className='flex flex-col  items-center gap-2'>
					<div className='w-20 h-9 bg-neutral-200 dark:bg-neutral-600 rounded-2xl animate-pulse' />
					<div className='w-15 h-9 bg-neutral-200 dark:bg-neutral-600 rounded-2xl animate-pulse' />
				</div>

				<div className='w-[100%] h-2 bg-neutral-200 dark:bg-neutral-600 rounded-full animate-pulse' />

				<div className='flex flex-col  items-center gap-2'>
					<div className='w-20 h-9 bg-neutral-200 dark:bg-neutral-600 rounded-2xl animate-pulse' />
					<div className='w-15 h-9 bg-neutral-200 dark:bg-neutral-600 rounded-2xl animate-pulse' />
				</div>
			</div>
		</div>
	)
}
