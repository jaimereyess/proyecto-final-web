import { useEffect, useState } from 'react'
import HotelHCard from '../../components/hotels/cards'
import { TailSpin } from 'react-loader-spinner'

interface HotelProps {
  hotel_id: string
  name: string
  location: string
  description: string
  images: string[]
  breakfast_included: boolean
  stars: number
  rating: number
}

function Hotels() {
  const [datos, setDatos] = useState<HotelProps[] | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

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

  const loadData = async (searchTerm?: string) => {
    // search by name
    const res = await fetchData(
      `/api/hotel${searchTerm ? `/name/${searchTerm}` : ''}`,
    )
    // search by location
    let resLocation: HotelProps[] = []
    if (searchTerm) {
      resLocation = await fetchData(
        `/api/hotel/${searchTerm ? `location/${searchTerm}` : ''}`,
      )
    }

    const uniqueHotels = [...res, ...resLocation].reduce((acc, hotel) => {
      const existingHotel = acc.find(
        (h: HotelProps) => h.hotel_id === hotel.hotel_id,
      )
      if (!existingHotel) {
        acc.push(hotel)
      }
      return acc
    }, [])

    setDatos(uniqueHotels)
  }

  useEffect(() => {
    loadData()
  }, [])

  // search by name
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        loadData(searchTerm)
      } else {
        loadData()
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  return (
    <main className='p-10'>
      {datos ? (
        <div>
          <div className='rounded-lg p-5 bg-neutral-100 my-2 flex'>
            <article className='flex flex-col w-full'>
              <label>Busca tu alojamiento perfecto</label>
              <input
                type='text'
                className='w-full py-2 bg-transparent border-neutral-300 border-2 rounded-xl px-2 text-xl'
                placeholder='Riu Palace Oasis'
                value={searchTerm}
                onChange={handleChange}
              ></input>
            </article>
          </div>
          <section className='flex w-full'>
            <ul className='flex justify-center flex-col gap-5'>
              {datos.map((hotel) => (
                <HotelHCard
                  key={hotel.hotel_id}
                  id={hotel.hotel_id}
                  name={hotel.name}
                  location={hotel.location}
                  description={hotel.description}
                  images={hotel.images}
                  stars={hotel.stars}
                  breakfast_included={hotel.breakfast_included}
                  rating={hotel.rating}
                />
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <span className='flex justify-center'>
          <TailSpin
            visible={true}
            height='80'
            width='80'
            color='blue'
            ariaLabel='tail-spin-loading'
            radius='1'
          />
        </span>
      )}
    </main>
  )
}

export default Hotels
