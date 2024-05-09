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
import { Link } from 'react-router-dom'

interface CarsProps {
  car: {
    car_id: string
    brand: string
    image: string[]
    has_gps: boolean
    has_automatic_transmission: boolean
    has_air_conditioning: boolean
  }
}

const CarsCard: React.FC<CarsProps> = ({ car }) => {
  return (
    <Link to={`/cars/${car.car_id}`}>
      <CCard style={{ width: '18rem' }}>
        <CCardImage
          orientation='top'
          src='https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/02/Toyota-Corolla-2019_frontal.jpg?tf=3840x'
        />
        <CCardBody>
          <CCardTitle>{car.brand}</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CCardText>
        </CCardBody>
        <CListGroup flush>
          <CListGroupItem>{`ID: ${car.car_id}`}</CListGroupItem>
          <CListGroupItem>{`GPS: ${
            car.has_gps ? 'Yes' : 'No'
          }`}</CListGroupItem>
          <CListGroupItem>{`Automatic Transmission: ${
            car.has_automatic_transmission ? 'Yes' : 'No'
          }`}</CListGroupItem>
          <CListGroupItem>{`Air Conditioning: ${
            car.has_air_conditioning ? 'Yes' : 'No'
          }`}</CListGroupItem>
        </CListGroup>
        <CCardBody>
          <CCardLink href='#'>Card link</CCardLink>
          <CCardLink href='#'>Another link</CCardLink>
        </CCardBody>
      </CCard>
    </Link>
  )
}

export default CarsCard
