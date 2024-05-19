import { Link } from 'react-router-dom'
import useHotels from '../../lib/hooks/useHotels'

const HotelList = () => {
  const { hotels, error } = useHotels()

  return (
    <div className='mt-10 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Lista de Hoteles
      </h2>
      {error && <div className='text-red-500 mb-4'>{error}</div>}
      <ul className='grid grid-cols-3 w-full'>
        {hotels &&
          hotels.map((hotel) => (
            <li key={hotel.hotel_id} className='my-4'>
              <h3 className='font-bold text-lg'>{hotel.name}</h3>
              <p>{hotel.location}</p>

              <Link
                to={`/hotels/${hotel.hotel_id}/edit`}
                className='text-blue-500'
              >
                Gestionar
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default HotelList
