export interface HotelTypes {
  id: string
  name: string
  location: string
  description: string
  images: string[]
  stars: number
  breakfast_included: boolean
}

export interface CarTypes {
  car_id: string
  brand: string
  image: string[]
  has_gps: boolean
  has_automatic_transmission: boolean
  has_air_conditioning: boolean
}
