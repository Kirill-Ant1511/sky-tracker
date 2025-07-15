export function SkeletonDetailLoader() {
	return (
		<div className='w-[100%] h-full flex flex-col items-center justify-between space-y-2.5'>
			<div className='bg-neutral-200 dark:bg-neutral-600 w-full h-[50%] p-2 flex justify-center animate-pulse'>
				<div className='bg-neutral-300 dark:bg-neutral-700 w-60 h-15 rounded-2xl animate-pulse' />
			</div>

			<div className='flex flex-col items-center gap-2 w-full h-full'>
				<div className='w-[94%] h-[60%] flex flex-col items-center gap-2 rounded-2xl overflow-hidden'>
					<div className='w-[100%] h-[40%] flex justify-between gap-2 '>
						<div className='w-[100%] h-[100%] bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
						<div className='w-[100%] h-[100%] bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
					</div>
					<div className='w-[100%] h-[25%] bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
					<div className='w-[100%] h-[40%] grid grid-cols-2 justify-between gap-2 '>
						<div className='w-[100%] h-[100%] bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
						<div className='w-[100%] h-[100%] bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
						<div className='w-[100%] h-[100%] bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
						<div className='w-[100%] h-[100%] bg-neutral-200 dark:bg-neutral-600 animate-pulse' />
					</div>
				</div>
			</div>
		</div>
	)
}
