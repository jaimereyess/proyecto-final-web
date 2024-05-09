import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { HotelTypes } from '../../types/types'

const HotelCard = ({
  name,
  description,
  location,
  images,
  stars,
  breakfast_included,
  rating,
}: HotelTypes) => {
  const renderStars = () => {
    const starIcons = []
    for (let i = 0; i < stars; i++) {
      starIcons.push(<IoMdStar key={i} fill='#fcad03' />)
    }
    return starIcons
  }

  return (
    <Link to={`/hotel/${name.replace(/ /g, '-')}`}>
      <div className='bg-white rounded-xl overflow-hidden shadow-md relative'>
        <div className='lg:flex'>
          <div className='w-full lg:w-1/3 h-40'>
            <img
              src={images[0]}
              alt={name}
              className='object-cover w-full h-32 lg:h-full'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='flex flex-col justify-between p-4 lg:w-2/3'>
            <div>
              <h4 className='text-xl lg:text-2xl font-semibold leading-tight text-blue-gray-900 antialiased flex'>
                {name} - {rating}
                <span className='ml-4 flex'>{renderStars()}</span>
              </h4>
              <p className='mt-1 font-normal leading-relaxed text-gray-700 antialiased pb-2'>
                {description}
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-5'>
                {location}
                {breakfast_included && (
                  <span className='block bg-blue-200 w-fit px-1 rounded-lg'>
                    Desayuno Incluido
                  </span>
                )}
              </div>
              <span className='text-sm'>
                desde <span className='text-lg font-bold'>200€</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
