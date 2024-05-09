import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HotelTypes } from '../../types/types'

const HotelPage = () => {
  const { name } = useParams()
  const [hotel, setHotel] = useState<HotelTypes>()

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

  return (
    <div>
      <h1>{hotel.name}</h1>
    </div>
  )
}

export default HotelPage
