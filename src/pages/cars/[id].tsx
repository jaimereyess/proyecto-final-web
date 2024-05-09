import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CarTypes } from '../../types/types'

const CarsPage = () => {
  const { id } = useParams()
  const [car, setCar] = useState<CarTypes>()

  useEffect(() => {
    fetch(`/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch((error) => console.error(error))
  }, [id])
  if (!car) {
    return <div>Cargando...</div>
  }

  console.log(car)

  return (
    <div>
      <h1>{car.brand}</h1>
    </div>
  )
}

export default CarsPage
