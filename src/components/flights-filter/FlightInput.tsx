interface Props {
	value: string
	onChange: (value: string) => void
	placeholder: string
}

export function FlightInput({ value, onChange, placeholder }: Props) {
	return (
		<input
			type='search'
			value={value}
			onChange={e => {
				onChange(e.target.value)
			}}
			placeholder={placeholder}
			className='bg-background text-foreground p-2 focus:outline-none rounded-lg w-full'
		/>
	)
}
