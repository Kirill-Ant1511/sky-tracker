import { icon, type LatLngExpression } from 'leaflet'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Marker, Polyline } from 'react-leaflet'
import { MapContainer, type MapRef } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useNavigate, useParams } from 'react-router'
import {
	completeWayOptions,
	remainingWeyOptions
} from '../../../configs/polylines.config'
import { useTheme } from '../../../providers/theme/useTheme'
import type { FlightData } from '../../../types/IFlight'
import { getAirportForIata } from '../../../utils/FlightRequests'

interface Props {
	flights: FlightData[]
}

export function Map({ flights }: Props) {
	const { theme } = useTheme()
	const [mapTheme, setMapTheme] = useState('')
	const { flightNumber } = useParams()
	const [mapError, setMapError] = useState(false)
	const [depCoordinate, setDepCoordinate] = useState<LatLngExpression>()
	const [arrCoordinate, setArrCoordinate] = useState<LatLngExpression>()
	const ref = useRef<MapRef>(null)

	const flight = useMemo(() => {
		const flight = flights.find(flight => flight.flight.iata === flightNumber)
		return flight
	}, [flights, flightNumber])

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
		if (flight) {
			const getDepArrCoordinate = async () => {
				const departureData = await getAirportForIata(flight.departure.iata)
				const arrivalData = await getAirportForIata(flight.arrival.iata)
				setDepCoordinate([
					departureData[0].latitude,
					departureData[0].longitude
				])
				setArrCoordinate([arrivalData[0].latitude, arrivalData[0].longitude])
			}
			getDepArrCoordinate()
		}

		if (ref.current && flight && depCoordinate) {
			const [lat, lng] = depCoordinate as [number, number]
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
	const setPathname = (flight: FlightData) => {
		navigate(`/${flight.flight.iata}`)
	}

	if (mapError) {
		return (
			<div className='fixed top-0 min-w-screen min-h-screen flex justify-center items-center bg-white/40 text-foreground'>
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
			className='absolute min-w-screen min-h-screen top-0 z-0'
		>
			<TileLayer
				url={mapTheme}
				className='w-full h-full'
			/>

			{flightNumber && flight && depCoordinate && arrCoordinate && (
				<div>
					<Polyline
						pathOptions={completeWayOptions}
						positions={[depCoordinate, arrCoordinate]}
					/>

					<Polyline
						positions={[
							flight.live
								? [flight.live.latitude, flight.live.longitude]
								: depCoordinate,
							arrCoordinate
						]}
						pathOptions={remainingWeyOptions}
					/>
					<Marker
						position={depCoordinate}
						icon={icon({
							iconUrl: '/start.svg',
							crossOrigin: true,
							iconSize: [25, 25]
						})}
					/>

					<Marker
						position={
							flight.live
								? [flight.live.latitude, flight.live.longitude]
								: depCoordinate
						}
						icon={icon({
							iconUrl: '/active-plane.svg',
							crossOrigin: true,
							iconSize: [20, 20]
						})}
						opacity={1}
					/>
					<Marker
						position={arrCoordinate}
						icon={icon({
							iconUrl: '/finish.svg',
							crossOrigin: true,
							iconSize: [30, 30]
						})}
					/>
				</div>
			)}

			{flights.map(flight => {
				if (flight.flight.iata === flightNumber) {
					return null
				}
				if (depCoordinate) {
					return (
						<Marker
							eventHandlers={{
								click: () => {
									setPathname(flight)
								}
							}}
							position={
								flight.live
									? [flight.live.latitude, flight.live.longitude]
									: depCoordinate
							}
							key={flight.flight.number}
							icon={icon({
								iconUrl: theme === 'dark' ? '/plane.svg' : '/plane-dark.svg',
								crossOrigin: true,
								iconSize: [20, 20]
							})}
							opacity={0.5}
						/>
					)
				} else {
					return null
				}
			})}
		</MapContainer>
	)
}
