import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../pages/hotels/hotels'

export function PlaceholdersInputs() {
  const { inc } = useStore()

  const placeholders = [
    'Islas Canarias',
    'Maldivas',
    'Australia',
    'Caribe',
    'Nueva Zelanda',
    'Islas Griegas',
    'Tailandia',
    'Islas Fiyi',
  ]

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputElement = e.currentTarget.elements[0] as HTMLInputElement
    const inputValue = inputElement.value
    inc(inputValue)
    navigate('/hotels')
  }

  return (
    <div className='flex flex-col justify-center  items-center px-4'>
      <h2 className='mb-10 sm:mb-20 text-center text-3xl md:text-5xl dark:text-white text-black'>
        Busca tu destino soñado
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}
