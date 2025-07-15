import { useEffect, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useTheme } from '../../../providers/theme/useTheme'

// https://api.maptiler.com/maps/basic-v2-dark/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil - black
// https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil - white
// https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=MLTJjysWgncf12KujBil - satellite
export function Map() {
	const { theme } = useTheme()
	const [mapTheme, setMapTheme] = useState('')
	useEffect(() => {
		if (theme === 'dark') {
			setMapTheme(
				'https://api.maptiler.com/maps/basic-v2-dark/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil'
			)
		}
		setMapTheme(
			'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil'
		)
	}, [theme])

	return (
		<MapContainer
			center={[60.001, 30.3084]}
			zoom={15}
			scrollWheelZoom={true}
			className='fixed min-w-screen min-h-screen'
		>
			<TileLayer url={mapTheme} />
		</MapContainer>
	)
}
