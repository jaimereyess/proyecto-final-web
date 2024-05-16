import { useEffect, useState } from 'react'
import { FlightTypes, AirportTypes } from '../../types/types'
import { I18nProvider } from '@react-aria/i18n'
import { DatePicker } from '@nextui-org/react'
import { today, getLocalTimeZone } from '@internationalized/date'
import LoaderDots from '../../components/loader'

const Flights = () => {
  const [flightsData, setFlightsData] = useState<FlightTypes[] | null>(null)
  const [airportInfo, setAirportInfo] = useState<{
    [key: string]: AirportTypes
  }>({})
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()))

  useEffect(() => {
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
      const airports = await fetchData('https://51.20.119.250/airports')
      const airportInfoMap: { [key: string]: AirportTypes } = {}
      airports.forEach((airport: AirportTypes) => {
        airportInfoMap[airport.airport_code] = airport
      })
      setAirportInfo(airportInfoMap)
    }

    const loadFlightsData = async () => {
      const flights = await fetchData('https://51.20.119.250/flights')
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

  const filteredFlights = searchTerm
    ? flightsData?.filter((flight) => {
        const departureCity =
          airportInfo[flight.departure_airport]?.city.toLowerCase() || ''
        const flightDate = new Date(flight.departure_date)
        const isSameDate = flightDate.toDateString() === selectedDate.toString()
        return departureCity.includes(searchTerm.toLowerCase()) && isSameDate
      })
    : []

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Flights</h1>
      <div className='flex mb-4 space-x-4'>
        <input
          type='text'
          className='w-full p-2 border border-gray-300 rounded'
          placeholder='Search by departure city'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <I18nProvider locale='en-GB'>
          <DatePicker
            label='Date and time'
            minValue={today(getLocalTimeZone())}
            defaultValue={today(getLocalTimeZone())}
            onChange={setSelectedDate}
          />
        </I18nProvider>
      </div>
      <div className='flex flex-wrap'>
        {searchTerm && filteredFlights && filteredFlights.length > 0
          ? filteredFlights.map((flight) => (
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
                </div>
              </div>
            ))
          : searchTerm && <p>No flights available.</p>}
      </div>
    </div>
  )
}

export default Flights
