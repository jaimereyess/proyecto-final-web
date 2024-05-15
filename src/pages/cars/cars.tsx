import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import CarsCard from '../../components/cars/cars-card'
import { CarTypes } from '../../types/types'

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
        console.log(data)
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
        <span className='flex justify-center h-screen items-center'>
          <MutatingDots
            visible={true}
            height='100'
            width='100'
            color='orange'
            secondaryColor='yellow'
            radius='12.5'
            ariaLabel='mutating-dots-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </span>
      )}
    </main>
  )
}

export default Cars
