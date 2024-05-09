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
}

function Hotels() {
  const [datos, setDatos] = useState<HotelProps[] | null>(null)

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
