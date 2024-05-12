import { RoomTypes } from '../../types/types'

const RoomsCards = ({ room }: { room: RoomTypes }) => {
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      {' '}
      <div className='rounded-xl border p-5 shadow-md bg-white'>
        <div className='flex w-full items-center justify-between border-b pb-3'>
          <div className='flex items-center space-x-3'>
            <div className='text-lg font-bold text-slate-700'>
              {room.description}
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <button className='rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold'>
              {room.max_guests}
            </button>
          </div>
        </div>

        <div className='mt-4 mb-6 text-sm text-neutral-600'>
          {room.description}
        </div>

        <div>
          <div className='flex items-center justify-between text-slate-500'>
            <div className='flex space-x-4 md:space-x-8'>
              <div className='flex cursor-pointer items-center transition hover:text-slate-600'></div>
              <div className='flex cursor-pointer items-center transition hover:text-slate-600'>
                <span>{room.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomsCards
