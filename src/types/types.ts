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