import { useEffect, useState } from 'react'
import { FlightTypes, AirportTypes } from '../../types/types'
import LoaderDots from '../../components/loader'
import { GlobeDemo } from '../../components/using-globe'
import { Input } from '@nextui-org/react'
import Logo from '../../components/flights/logo'

const Flights = () => {
  const [flightsData, setFlightsData] = useState<FlightTypes[] | null>(null)
  const [airportInfo, setAirportInfo] = useState<{
    [key: string]: AirportTypes
  }>({})
  const [loading, setLoading] = useState(true)
  const [departureSearchTerm, setDepartureSearchTerm] = useState('')
  const [destinationSearchTerm, setDestinationSearchTerm] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        return data
      } catch (error) {
        throw new Error(
          error instanceof Response ? await error.text() : 'Unknown error',
        )
      }
    }

    const loadAirportsData = async () => {
      const airports = await fetchData('/api/airports')
      const airportInfoMap: { [key: string]: AirportTypes } = {}
      airports.forEach((airport: AirportTypes) => {
        airportInfoMap[airport.airport_code] = airport
      })
      setAirportInfo(airportInfoMap)
    }

    const loadFlightsData = async () => {
      const flights = await fetchData('/api/flights')
      setFlightsData(flights)
      setLoading(false)
    }

    const loadData = async () => {
      await loadAirportsData()
      await loadFlightsData()
    }

    loadData()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString('en-GB') // dd/mm/yyyy
    const formattedTime = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    }) // hh:mm
    return `${formattedDate} - ${formattedTime}`
  }

  if (loading) {
    return <LoaderDots />
  }

  const filteredFlights = flightsData?.filter((flight) => {
    const departureCity =
      airportInfo[flight.departure_airport]?.city.toLowerCase() || ''
    const destinationCity =
      airportInfo[flight.arrival_airport]?.city.toLowerCase() || ''
    return (
      departureCity.includes(departureSearchTerm.toLowerCase()) &&
      destinationCity.includes(destinationSearchTerm.toLowerCase())
    )
  })

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Vuelos</h1>
      <div className='flex mb-4 space-x-4'>
        <Input
          type='text'
          className='w-full rounded-xl'
          label='Origen'
          value={departureSearchTerm}
          onChange={(e) => setDepartureSearchTerm(e.target.value)}
        />
        <Input
          type='text'
          className='w-full rounded-xl'
          label='Destino'
          value={destinationSearchTerm}
          onChange={(e) => setDestinationSearchTerm(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap'>
        {departureSearchTerm || destinationSearchTerm ? (
          filteredFlights && filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <div className='w-full mb-4' key={flight.flight_id}>
                <div className='flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden'>
                  <div className='flex-grow p-4'>
                    <h2 className='text-2xl'>
                      {airportInfo[flight.departure_airport]
                        ? `${airportInfo[flight.departure_airport].city} (${
                            flight.departure_airport
                          })`
                        : flight.departure_airport}{' '}
                      -{' '}
                      {airportInfo[flight.arrival_airport]
                        ? `${airportInfo[flight.arrival_airport].city} (${
                            flight.arrival_airport
                          })`
                        : flight.arrival_airport}
                    </h2>
                    <h6 className='text-gray-600 font-bold'>
                      {flight.airline}
                    </h6>
                    <p className='text-gray-600'>
                      {formatDate(flight.departure_date)} -{' '}
                      {formatDate(flight.arrival_date)}
                    </p>
                    <p className='text-gray-800 font-bold'>
                      Price: {flight.price}
                    </p>
                  </div>
                  <div className='flex items-center justify-center p-4 w-40 h-40'>
                    <Logo airline={flight.airline} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No flights available.</p>
          )
        ) : (
          <GlobeDemo />
        )}
      </div>
    </div>
  )
}

export default Flights
