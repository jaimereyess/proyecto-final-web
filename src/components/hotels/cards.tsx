import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { HotelTypes } from '../../types/types'

const HotelCard = ({ name, description, location, images, id }: HotelTypes) => {
  return (
    <Link to={`/hotel/${id}`}>
      <div className='max-w-full bg-white rounded-xl overflow-hidden shadow-md relative'>
        <div className='lg:flex'>
          <div className='w-full lg:w-1/5'>
            <img
              src={images[0]}
              alt={name}
              className='object-cover w-full h-full'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='flex flex-col justify-between p-4 lg:w-3/4'>
            <div>
              <h4 className='text-2xl font-semibold leading-tight text-blue-gray-900 antialiased flex'>
                {name}
                <span className='ml-4 flex'>
                  <IoMdStar fill='#fcad03' />
                  <IoMdStar fill='#fcad03' />
                  <IoMdStar fill='#fcad03' />
                  <IoMdStar fill='#fcad03' />
                  <IoMdStar fill='#fcad03' />
                </span>
              </h4>
              <p className='mt-1 font-normal leading-relaxed text-gray-700 antialiased pb-2'>
                {description}
              </p>
            </div>
            <span className='flex flex-col md:flex-row gap-5'>
              {location}
              <span className='block bg-blue-200 w-fit px-1 rounded-lg'>
                Desayuno Incluido
              </span>
            </span>

            <span className='absolute bottom-1 right-2 text-sm'>
              desde <span className='text-2xl font-bold'>200€</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
