import { useState, useEffect } from 'react'
import { HotelCardProps, RoomTypes } from '../../types/types'

const useHotels = () => {
  const [hotels, setHotels] = useState<HotelCardProps[] | null>(null)
  const [hotel, setHotel] = useState<HotelCardProps | null>(null)
  const [rooms, setRooms] = useState<RoomTypes[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  const loadHotelData = async (searchTerm?: string) => {
    try {
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

      setHotels(uniqueHotels)
    } catch (error: any) {
      console.error(error)
      setError(error.message || 'Error desconocido')
    }
  }

  const fetchHotel = async (id: string) => {
    try {
      const response = await fetch(`/api/hotel/${id}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Hotel no encontrado')
        } else {
          throw new Error('Error al obtener el hotel')
        }
      }
      const data: HotelCardProps = await response.json()
      setHotel(data)
    } catch (error: any) {
      console.error(error)
      setError(error.message || 'Error desconocido')
    }
  }

  const loadRoomData = async () => {
    try {
      const res = await fetchData('/api/rooms')
      setRooms(res)
    } catch (error: any) {
      console.error(error)
      setError(error.message || 'Error desconocido')
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      await loadHotelData()
      await loadRoomData()
      setLoading(false)
    }
    loadData()
  }, [])

  return {
    hotels,
    hotel,
    rooms,
    loading,
    error,
    loadHotelData,
    fetchHotel,
    setHotel,
  }
}

export default useHotels
