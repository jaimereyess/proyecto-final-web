import React, { useState } from 'react'

interface Hotel {
  name: string
  location: string
  description: string
  images: string[]
}

const AddHotelForm: React.FC = () => {
  const [hotelData, setHotelData] = useState<Hotel>({
    name: '',
    location: '',
    description: '',
    images: [],
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setHotelData({ ...hotelData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/hotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
      })

      if (!response.ok) {
        throw new Error(`Error al crear hotel: ${response.statusText}`)
      }

      const hotelCreated: Hotel = await response.json()
      console.log('Hotel creado:', hotelCreated)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={hotelData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Ubicación:
          <input
            type="text"
            name="location"
            value={hotelData.location}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Descripción:
          <textarea
            name="description"
            value={hotelData.description}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Imágenes (separadas por comas):
          <input
            type="text"
            name="images"
            value={hotelData.images.join(',')}
            onChange={(e) =>
              setHotelData({ ...hotelData, images: e.target.value.split(',') })
            }
          />
        </label>
      </div>
      <button type="submit">Crear Hotel</button>
    </form>
  )
}

export default AddHotelForm
