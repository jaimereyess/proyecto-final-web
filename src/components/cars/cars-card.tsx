import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardLink,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

interface CarsProps {
  car: {
    car_id: string
    brand: string
    model: string
    year: number
    price: number
    description: string
    images: string[]
    has_air_conditioning: boolean
    has_gps: boolean
    has_automatic_transmission: boolean
  }
}

const CarsCard: React.FC<CarsProps> = ({ car }) => {
  return (
    <CCard
      style={{ width: '18rem' }}
      className='bg-yellow-100/30 p-2 rounded-xl overflow-hidden'
    >
      <div style={{ height: '200px' }}>
        <CCardImage
          orientation='top'
          src={car.images[0]}
          className='w-full h-full object-cover rounded-xl'
          alt={`Image of ${car.brand} - ${car.model}`}
        />
      </div>
      <CCardBody>
        <CCardTitle className='mt-2 text-center'>{`${car.brand} - ${car.model}`}</CCardTitle>
        <CCardText>{`${car.description}`}</CCardText>
      </CCardBody>
      <CListGroup flush>
        <CListGroupItem>{`Year: ${car.year}`}</CListGroupItem>
        <CListGroupItem>{`GPS: ${car.has_gps ? 'Yes' : 'No'}`}</CListGroupItem>
        <CListGroupItem>{`Automatic Transmission: ${
          car.has_automatic_transmission ? 'Yes' : 'No'
        }`}</CListGroupItem>
        <CListGroupItem>{`Air Conditioning: ${
          car.has_air_conditioning ? 'Yes' : 'No'
        }`}</CListGroupItem>
      </CListGroup>
      <CCardBody className='mt-5'>
        <CCardLink
          className='w-full bg-orange-300 py-2 px-3 rounded-lg float-right text-center'
          href={`/cars/${car.car_id}`}
        >
          Alquilar - {car.price} €/día
        </CCardLink>
      </CCardBody>
    </CCard>
  )
}

export default CarsCard
