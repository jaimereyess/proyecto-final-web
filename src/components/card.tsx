interface HotelCardProps {
  name: string
  desc: string
  location: string
  img: string[]
}

const HotelCard = ({ name, desc, location, img }: HotelCardProps) => {
  return (
    <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img src={img[0]} alt={name} />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h4>
        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
          {desc}
        </p>
        <span>{location}</span>
      </div>
    </div>
  )
}

export default HotelCard
