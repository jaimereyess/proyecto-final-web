import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HotelTypes } from '../../types/types'
import { Image } from '@nextui-org/react'

const mapsApi = import.meta.env.VITE_MAPS_API

const HotelPage = () => {
  const { name } = useParams()
  const [hotel, setHotel] = useState<HotelTypes>()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  useEffect(() => {
    const formattedName = name!.replace(/-/g, ' ')

    fetch(`/api/hotel/name/${formattedName}`)
      .then((response) => response.json())
      .then((data) => setHotel(data[0]))
      .catch((error) => console.error(error))
  }, [name])
  if (!hotel) {
    return <div>Cargando...</div>
  }

  console.log(hotel)

  const renderImages = () => {
    return hotel.images.map((image, index) => (
      <Image
        key={index}
        isBlurred
        width={200}
        src={image}
        alt={hotel.name}
        onClick={() => setSelectedImageIndex(index)}
        className='rounded-md m-5 hover:cursor-pointer'
        style={{
          border: index === selectedImageIndex ? '2px solid #fff' : 'none',
          opacity: index === selectedImageIndex ? 1 : 0.5,
        }}
      />
    ))
  }

  return (
    <main className='p-14'>
      <div className='grid grid-cols md:grid-cols-2 '>
        <article>
          <Image
            isBlurred
            width={600}
            src={hotel.images[selectedImageIndex]}
            alt={hotel.name}
            className='rounded-md m-5'
          />
          <div className='flex flex-wrap gap-1'>{renderImages()}</div>
        </article>

        <section>
          <h1 className='ml-10 text-2xl font-semibold'>{hotel.name}</h1>
          <p className='ml-10 text-lg'>{hotel.description}</p>
        </section>
      </div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2'>
        <section className='flex'></section>
        <iframe
          className='rounded-md'
          width='400'
          height='300'
          loading='lazy'
          src={`https://www.google.com/maps/embed/v1/place?key=${mapsApi}
              &q=${hotel.name.replace(/ /g, '+').replace(/&/g, '%26')}, ${
            hotel.location
          }`}
        ></iframe>
      </div>
    </main>
  )
}

export default HotelPage
