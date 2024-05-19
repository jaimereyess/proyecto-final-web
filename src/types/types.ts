export interface HotelTypes {
  id: string
  name: string
  location: string
  description: string
  images: string[]
  stars: number
  breakfast_included: boolean
  rating: number
  hotel_id?: string
}

export interface CarTypes {
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

export interface RoomTypes {
  room_id: string
  hotel_id: string
  quantity: number
  free_quantity: number
  max_guests: number
  price: string
  description: string
  has_air_conditioning: boolean
  has_terrace: boolean
  has_tv: boolean
  has_wifi: boolean
}

export interface HotelCardProps {
  hotel_id?: string
  id?: string
  name: string
  location: string
  description: string
  images: string[]
  breakfast_included: boolean
  stars: number
  rating: number
  rooms: RoomTypes[] | null
}

export interface FlightTypes {
  flight_id: string
  airline: string
  departure_airport: string
  arrival_airport: string
  departure_date: string
  arrival_date: string
  price: number
}

export interface AirportTypes {
  airports_id: string
  airport_code: string
  city: string
  country: string
}
