import { useEffect, useState } from 'react'
import HotelHCard from '../../components/hotels/cards'
import { RoomTypes, HotelCardProps } from '../../types/types'
import { create } from 'zustand'
import LoaderDots from '../../components/loader'

interface StoreState {
  mensaje: string
  inc: (mensaje: string) => void
}

export const useStore = create<StoreState>((set) => ({
  mensaje: '',
  inc: (mensaje: string) => set({ mensaje }), // Actualiza el mensaje con el valor proporcionado
}))

function Hotels() {
  const { mensaje } = useStore()
  const [datos, setDatos] = useState<HotelCardProps[] | null>(null)
  const [searchTerm, setSearchTerm] = useState(mensaje)
  const [rooms, setRooms] = useState<RoomTypes[] | null>(null)

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
      `https://51.20.119.250/hotel${searchTerm ? `/name/${searchTerm}` : ''}`,
    )
    // search by location
    let resLocation: HotelCardProps[] = []
    if (searchTerm) {
      resLocation = await fetchData(
        `https://51.20.119.250/hotel/${
          searchTerm ? `location/${searchTerm}` : ''
        }`,
      )
    }

    const uniqueHotels = [...res, ...resLocation].reduce((acc, hotel) => {
      const existingHotel = acc.find(
        (h: HotelCardProps) => h.hotel_id === hotel.hotel_id,
      )
      if (!existingHotel) {
        acc.push(hotel)
      }
      return acc
    }, [])

    setDatos(uniqueHotels)
  }

  useEffect(() => {
    loadData(mensaje)
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

  useEffect(() => {
    const fetchData = async () => {
      //load rooms data
      const res = await fetch('https://51.20.119.250/rooms')
      const data = await res.json()
      setRooms(data)
    }

    fetchData()
  }, [datos])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  //añadir el array de rooms a cada hotel
  useEffect(() => {
    if (datos && rooms) {
      const hotelsWithRooms = datos.map((hotel) => {
        const hotelRooms = rooms.filter(
          (room) => room.hotel_id === hotel.hotel_id,
        )
        return { ...hotel, rooms: hotelRooms }
      })
      setDatos(hotelsWithRooms)
    }
  }, [rooms])

  return (
    <div>
      <main className='p-10'>
        {datos ? (
          <div>
            <div className='rounded-lg p-5 bg-neutral-100 my-2 flex'>
              <article className='flex flex-col w-full'>
                <label>Busca tu alojamiento perfecto</label>
                <input
                  type='text'
                  className='w-full py-2 bg-transparent border-neutral-300 border-2 rounded-xl px-2 text-xl'
                  placeholder={'¿Adónde te gustaría ir?'}
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
                    rooms={hotel.rooms}
                  />
                ))}
              </ul>
            </section>
          </div>
        ) : (
          <LoaderDots />
        )}
      </main>
    </div>
  )
}

export default Hotels
