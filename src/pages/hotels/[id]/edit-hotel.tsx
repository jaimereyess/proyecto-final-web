import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '@nextui-org/react'
import { Checkbox } from '@nextui-org/checkbox'

interface Hotel {
  name: string
  location: string
  description: string
  images: string[]
  breakfast_included: boolean
  stars: string
}

const EditHotel = () => {
  const { id } = useParams<{ id: string }>()
  const [hotelData, setHotelData] = useState<Hotel>({
    name: '',
    location: '',
    description: '',
    images: [''],
    breakfast_included: false,
    stars: '',
  })
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`/api/hotel/${id}`)
        if (!response.ok) {
          if (response.status === 404) {
            navigate('/not-found')
          } else {
            navigate('/not-found')
            throw new Error('Error al obtener el hotel')
          }
        } else {
          const data: Hotel = await response.json()
          setHotelData(data)
        }
      } catch (error: any) {
        console.error(error)
        setError(error.message || 'Error desconocido')
      }
    }

    fetchHotel()
  }, [id, navigate])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setHotelData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newImages = [...hotelData.images]
    newImages[index] = e.target.value
    setHotelData((prevData) => ({ ...prevData, images: newImages }))
  }

  const handleAddImage = () => {
    setHotelData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ''],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const response = await fetch(`/api/hotel/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          `Error al actualizar hotel: ${
            errorData.message || response.statusText
          }`,
        )
      }

      const hotelUpdated: Hotel = await response.json()
      console.log('Hotel actualizado:', hotelUpdated)
      navigate('/hotels')
    } catch (error: any) {
      console.error(error)
      setError(error.message || 'Error desconocido')
    }
  }

  const BottomGradient = () => (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  )

  return (
    <div className='mt-20 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Edita tu alojamiento
      </h2>
      <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Rellena el siguiente formulario para editar tu alojamiento en nuestra
        plataforma.
      </p>

      {error && <div className='text-red-500 mb-4'>{error}</div>}

      <form className='my-8 flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row md:space-x-2'>
          <Input
            type='text'
            name='name'
            label='Nombre del alojamiento'
            value={hotelData.name}
            onChange={handleChange}
          />

          <Input
            type='text'
            name='location'
            label='Ubicación'
            value={hotelData.location}
            onChange={handleChange}
          />
        </div>
        <Input
          name='description'
          label='Descripción'
          value={hotelData.description}
          onChange={handleChange}
        />

        <div className='flex flex-col space-y-4'>
          {hotelData.images.map((image, index) => (
            <div key={index} className='flex items-center space-x-2'>
              <Input
                type='text'
                label={`Imagen ${index + 1}`}
                value={image}
                onChange={(e) => handleImageChange(index, e)}
              />
              {index === hotelData.images.length - 1 && (
                <button
                  type='button'
                  onClick={handleAddImage}
                  className='bg-blue-500 text-white px-4 py-2 rounded'
                >
                  Agregar Imagen
                </button>
              )}
            </div>
          ))}
        </div>

        <Input
          name='stars'
          value={hotelData.stars}
          label='Estrellas'
          onChange={handleChange}
        />

        <Checkbox
          isSelected={hotelData.breakfast_included}
          onValueChange={(isSelected) =>
            setHotelData((prevData) => ({
              ...prevData,
              breakfast_included: isSelected,
            }))
          }
        >
          Desayuno incluido
        </Checkbox>

        <button
          className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
        >
          Actualizar Alojamiento &rarr;
          <BottomGradient />
        </button>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
      </form>
    </div>
  )
}

export default EditHotel
