import React, { useEffect, useState, useRef } from 'react'
import HotelHCard from '../../components/hotels/cards'
import { create } from 'zustand'
import LoaderDots from '../../components/loader'
import { Input } from '@nextui-org/react'
import useHotels from '../../lib/hooks/useHotels'

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
  const { hotels, rooms, loading, loadHotelData } = useHotels()
  const [searchTerm, setSearchTerm] = useState(mensaje)
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    const timer = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        loadHotelData(searchTerm)
      } else {
        loadHotelData()
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <main className='p-10'>
        {loading ? (
          <LoaderDots />
        ) : (
          <div>
            <Input
              type='text'
              label='¿Adónde te gustaría ir?'
              className='w-1/2 rounded-xl text-xl flex justify-center mx-auto p-4'
              value={searchTerm}
              onChange={handleChange}
            />
            <section className='flex w-full justify-center '>
              <ul className='flex justify-center flex-col gap-5 w-3/4'>
                {hotels && hotels.length > 0 ? (
                  hotels.map((hotel) => (
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
                      rooms={
                        rooms
                          ? rooms.filter(
                              (room) => room.hotel_id === hotel.hotel_id,
                            )
                          : []
                      }
                    />
                  ))
                ) : (
                  <div className='flex text-2xl text-gray-700 justify-center flex-col items-center'>
                    <img
                      src='/no-results.jpg'
                      alt='sin resultados'
                      className='w-96 aspect-auto'
                    />
                    <p>{`No se encontraron alojamientos :(`}</p>
                  </div>
                )}
              </ul>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

export default Hotels
