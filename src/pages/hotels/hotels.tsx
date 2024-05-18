import { useEffect, useState } from 'react'
import HotelHCard from '../../components/hotels/cards'
import { RoomTypes, HotelCardProps } from '../../types/types'
import { create } from 'zustand'
import LoaderDots from '../../components/loader'
import { Input } from '@nextui-org/react'

interface StoreState {
  mensaje: string
  inc: (mensaje: string) => void
}

export const useStore = create<StoreState>((set) => ({
  mensaje: '',
  inc: (mensaje: string) => set({ mensaje }),
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
    const res = await fetchData(
      `/api/hotel${searchTerm ? `/name/${searchTerm}` : ''}`,
    )
    let resLocation: HotelCardProps[] = []
    if (searchTerm) {
      resLocation = await fetchData(
        `/api/hotel/${searchTerm ? `location/${searchTerm}` : ''}`,
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
  }, [mensaje])

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
    const fetchRooms = async () => {
      const res = await fetch('api/rooms')
      const data = await res.json()
      setRooms(data)
    }

    fetchRooms()
  }, [])

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
  }, [rooms, datos])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <main className='p-10'>
        {datos ? (
          <div>
            <Input
              type='text'
              label='¿Adónde te gustaría ir?'
              className='w-1/2 rounded-xl text-xl flex justify-center mx-auto p-4'
              value={searchTerm}
              onChange={handleChange}
            ></Input>
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
