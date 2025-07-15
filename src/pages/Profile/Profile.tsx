export function Profile() {
	const profile = {
		profileImage: 'https://avatars.githubusercontent.com/u/40864184',
		name: 'Kirill',
		lastName: 'Antonenko',
		email: 'kirill@example.com',
		age: 30,
		location: 'Saint Petersburg'
	}
	return (
		<div className='text-foreground py-10 flex flex-col items-center gap-10'>
			<h1 className='text-amber-500 text-4xl'>PROFILE</h1>
			<div className='flex gap-2'>
				<div className='bg-background py-5 px-10 rounded-3xl flex flex-col gap-2'>
					<img
						src={profile.profileImage}
						alt={profile.name}
						className='rounded-full w-50 h-50'
					/>
					<div>
						<h2>
							{profile.name} {profile.lastName}
						</h2>
						<p className='text-sm text-foreground/50'>{profile.email}</p>
					</div>
					<p>{profile.age} years old</p>
					<p>
						<span className='text-foreground/50'>From</span> {profile.location}
					</p>
				</div>

				<div className='bg-background py-5 px-10 rounded-3xl flex flex-col gap-2'>
					<h2 className='text-amber-500 text-2xl'>FEATURES...</h2>
					<div className=''></div>
				</div>
			</div>
		</div>
	)
}
