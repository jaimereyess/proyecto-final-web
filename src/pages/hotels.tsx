import { useEffect, useState } from 'react'
import HotelCard from '../components/card'

interface Hotel {
  hotel_id: string
  name: string
  location: string
  description: string
  images: string[]
}

function Hotels() {
  const [datos, setDatos] = useState<Hotel[] | null>(null)

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

    const loadData = async () => {
      const res = await fetchData('/api/hotel')
      setDatos(res)
    }

    loadData()

    return () => {
      // Cleanup function
    }
  }, [])

  return (
    <main className="p-10">
      {datos ? (
        <div>
          <ul className="flex justify-center flex-wrap gap-5">
            {datos.map((hotel) => (
              <HotelCard
                key={hotel.hotel_id}
                name={hotel.name}
                location={hotel.location}
                desc={hotel.description}
                img={hotel.images}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  )
}

export default Hotels
