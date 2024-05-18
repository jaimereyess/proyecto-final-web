import { useEffect, useState } from 'react'
import CarsCard from '../../components/cars/cars-card'
import { CarTypes } from '../../types/types'
import LoaderDots from '../../components/loader'

function Cars() {
  const [datos, setDatos] = useState<CarTypes[] | null>(null)

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
      const res = await fetchData('/api/cars')
      setDatos(res)
    }

    loadData()

    return () => {
      // Cleanup function
    }
  }, [])

  return (
    <main className='p-10'>
      {datos ? (
        <section className='flex w-full '>
          <ul className='flex justify-center flex-wrap  gap-5'>
            {datos.map((car) => (
              <CarsCard key={car.car_id} car={car} />
            ))}
          </ul>
        </section>
      ) : (
        <LoaderDots />
      )}
    </main>
  )
}

export default Cars
