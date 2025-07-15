// TODO: Сделать фильтр по авиакомпаниям с подсказкой ввода авиакомпаний

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { FLIGHTS } from '../flight-list/flights.data'

interface Props {
	filter: string
	setFilter: (filters: string) => void
}

export function CompanyFilter({ filter, setFilter }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const company = FLIGHTS.find(
		flight => flight.company.name === filter
	)?.company

	return (
		<div className='bg-background text-foreground relative w-10 h-10 rounded-full p-2 shrink-0 z-10'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='w-full h-full flex items-center justify-center rounded-full'
			>
				{filter !== '' ? (
					<img
						src={company?.logo}
						alt={company?.name}
					/>
				) : (
					<ChevronDown />
				)}
			</button>

			{isOpen && (
				<div className='absolute z-50 dark:bg-black/40 bg-neutral-50/40 text-white space-y-2 w-56 h-50 overflow-y-scroll p-2 rounded-lg top-12 max-md:right-0 no-scrollbar animate-loading-top transition-colors duration-150'>
					<button
						onClick={() => {
							setFilter('')
							setIsOpen(false)
						}}
						className='flex items-center gap-2 py-1.5 px-2 text-sm bg-neutral-400 dark:bg-neutral-800 rounded-full w-full transition-colors duration-150'
					>
						None
					</button>
					{FLIGHTS.map(flight => (
						<button
							onClick={() => {
								setFilter(flight.company.name)
								setIsOpen(false)
							}}
							className='flex items-center gap-2 py-1.5 px-2 text-sm bg-neutral-400 dark:bg-neutral-800 rounded-full w-full transition-colors duration-150'
						>
							<img
								src={flight.company.logo}
								alt={flight.company.name}
								className='w-6 h-6 rounded-full'
							/>
							<span>{flight.company.name}</span>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
