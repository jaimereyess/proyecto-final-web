import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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

const AddHotelForm: React.FC = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setHotelData({ ...hotelData, [name]: value })
  }

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newImages = [...hotelData.images]
    newImages[index] = e.target.value
    setHotelData({ ...hotelData, images: newImages })
  }

  const handleAddImage = () => {
    setHotelData({ ...hotelData, images: [...hotelData.images, ''] })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const response = await fetch('/api/hotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          `Error al crear hotel: ${errorData.message || response.statusText}`,
        )
      }

      const hotelCreated: Hotel = await response.json()
      console.log('Hotel creado:', hotelCreated)
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
    <div className='mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Añade tu alojamiento
      </h2>
      <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Rellena el siguiente formulario para añadir tu alojamiento a nuestra
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
                name={`imagen${index + 1}`}
                value={image}
                onChange={(e) => handleImageChange(index, e)}
              />
              {index === hotelData.images.length - 1 && (
                <button
                  type='button'
                  onClick={handleAddImage}
                  className='bg-orange-500 text-white  rounded'
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
            setHotelData({ ...hotelData, breakfast_included: isSelected })
          }
        >
          Desayuno incluido
        </Checkbox>

        <button
          className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
        >
          Crear Alojamiento &rarr;
          <BottomGradient />
        </button>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full' />

        <span>¿Ya tienes tu alojamiento registrado?</span>
        <Link
          to='/hotels/list'
          className='text-center flex flex-col justify-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
        >
          Editar Alojamiento &rarr;
        </Link>
      </form>
    </div>
  )
}

export default AddHotelForm
