import { useEffect, useState } from 'react'
import HotelHCard from '../components/hotel-card'
import { TailSpin } from 'react-loader-spinner'

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
    <main className='p-10'>
      {datos ? (
        <div>
          <div className='rounded-lg p-5 bg-neutral-100 my-2 flex'>
            <article className='flex flex-col w-full'>
              <label>Busca un hotel</label>
              <input
                type='text'
                className='w-full py-2 bg-transparent border-neutral-300 border-2 rounded-xl px-2 text-xl'
                placeholder='Riu Palace Oasis'
              ></input>
            </article>
          </div>
          <section className='flex w-full'>
            <div className='w-1/4 hidden md:block '>Listado de filtros</div>

            <ul className='flex justify-center flex-wrap gap-5'>
              {datos.map((hotel) => (
                <HotelHCard
                  key={hotel.hotel_id}
                  name={hotel.name}
                  location={hotel.location}
                  desc={hotel.description}
                  img={hotel.images}
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
