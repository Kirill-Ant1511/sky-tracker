import { icon } from 'leaflet'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Marker, Polyline } from 'react-leaflet'
import { MapContainer, type MapRef } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useNavigate, useParams } from 'react-router'
import { FLIGHTS } from '../../../components/flight-list/flights.data'
import {
	completeWayOptions,
	remainingWeyOptions
} from '../../../configs/polylines.config'
import { useTheme } from '../../../providers/theme/useTheme'
import type { IFlight } from '../../../types/IFlight'

// https://api.maptiler.com/maps/basic-v2-dark/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil - black
// https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil - white
// https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=MLTJjysWgncf12KujBil - satellite
export function Map() {
	const { theme } = useTheme()
	const [mapTheme, setMapTheme] = useState('')
	const { flightNumber } = useParams()
	const [mapError, setMapError] = useState(false)
	const ref = useRef<MapRef>(null)

	const flight = useMemo(
		() =>
			FLIGHTS.find(flight => flight.flightInfo.flightNumber === flightNumber),
		[flightNumber]
	)

	useEffect(() => {
		if (theme === 'dark') {
			setMapTheme(
				'https://api.maptiler.com/maps/basic-v2-dark/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil'
			)
		} else {
			setMapTheme(
				'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=MLTJjysWgncf12KujBil'
			)
		}

		if (ref.current && flight) {
			const [lat, lng] = flight.currentLocation as [number, number]
			ref.current.setView([lat, lng])
		}
		ref.current?.addEventListener('load', () => {
			console.log('Map is loaded')
		})

		ref.current?.addEventListener('error', error => {
			setMapError(true)
			console.log(error)
		})
	}, [theme, flight])

	const navigate = useNavigate()
	const setPathname = (flight: IFlight) => {
		navigate(`/${flight.flightInfo.flightNumber}`)
	}

	if (mapError) {
		return (
			<div className='fixed w-screen h-screen flex justify-center items-center bg-white/40 text-foreground'>
				<div className='flex gap-2 flex-col items-center w-64 bg-background py-3 px-4 rounded-lg'>
					<h1 className='text-2xl text-amber-500'>ERROR</h1>
					<div className='flex flex-col items-center gap-3'>
						<div className='p-2 bg-primary rounded-2xl'>
							<span className='text-amber-600'>Message:</span> Bad internet
							connection
						</div>
						<div className='p-2 bg-primary rounded-2xl'>
							<span className='text-amber-600'>Advice: </span> you can check
							your internet connection and try reloading the page.
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<MapContainer
			center={[30, 60]}
			ref={ref}
			zoom={6}
			scrollWheelZoom={true}
			zoomControl={false}
			className='fixed min-w-screen min-h-screen'
		>
			<TileLayer url={mapTheme} />

			{flightNumber && (
				<div>
					<Polyline
						pathOptions={completeWayOptions}
						positions={[
							flight!.flightInfo.from.coordinates,
							flight!.currentLocation
						]}
					/>
					<Polyline
						positions={[
							flight!.currentLocation,
							flight!.flightInfo.to.coordinates
						]}
						pathOptions={remainingWeyOptions}
					/>
					<Marker
						position={flight!.flightInfo.from.coordinates}
						icon={icon({
							iconUrl: '/start.svg',
							crossOrigin: true,
							iconSize: [25, 25]
						})}
					/>

					<Marker
						position={flight!.currentLocation}
						icon={icon({
							iconUrl: '/active-plane.svg',
							crossOrigin: true,
							iconSize: [20, 20]
						})}
						opacity={1}
					/>
					<Marker
						position={flight!.flightInfo.to.coordinates}
						icon={icon({
							iconUrl: '/finish.svg',
							crossOrigin: true,
							iconSize: [30, 30]
						})}
					/>
				</div>
			)}

			{FLIGHTS.map(flight => {
				if (flight.flightInfo.flightNumber === flightNumber) {
					return null
				}
				return (
					<Marker
						eventHandlers={{
							click: () => {
								setPathname(flight)
							}
						}}
						position={flight.currentLocation}
						key={flight.flightInfo.flightNumber}
						icon={icon({
							iconUrl: theme === 'dark' ? '/plane.svg' : '/plane-dark.svg',
							crossOrigin: true,
							iconSize: [20, 20]
						})}
						opacity={0.5}
					/>
				)
			})}
		</MapContainer>
	)
}
