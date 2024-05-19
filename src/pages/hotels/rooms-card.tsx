import CardIcons from '../../components/hotels/card-icons'
import { RoomTypes } from '../../types/types'

const RoomsCards = ({ room }: { room: RoomTypes }) => {
  console.log(room)

  return (
    <div className='relative flex items-center justify-center w-full'>
      <div className='rounded-xl border p-5 shadow-md bg-white h-60 w-60'>
        <div className='flex w-full items-center justify-between border-b pb-3'>
          <div className='flex items-center space-x-3'>
            <div className='text-lg font-bold text-slate-700'>
              {room.description}
            </div>
          </div>
        </div>

        <div className='mt-4 mb-6 text-sm text-neutral-600'>
          Disponible para
          <span className='mx-1'>{room.max_guests}</span>
          {room.max_guests > 1 ? 'personas' : 'persona'}
        </div>

        <CardIcons room={room} />

        <div className='absolute bottom-4 left-4'>
          Disponibles: <span>{room.free_quantity}</span>
        </div>

        <div className='absolute bottom-4 right-4'>
          <span>{room.price} €</span>
        </div>
      </div>
    </div>
  )
}

export default RoomsCards
