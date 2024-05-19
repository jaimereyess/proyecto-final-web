import { InfiniteMovingCards } from '../ui/moving-cards'

const SliderDestinations = () => {
  return (
    <section className='pb-20'>
      <h3 className='text-center text-2xl sm:text-5xl py-10 font-medium poetsen-one-regular'>
        <span className='text-yellow-400 flex flex-col'>DESTINOS</span>
        PRINCIPALES
      </h3>
      <div className='rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={testimonials}
          direction='left'
          speed='slow'
        />
      </div>
    </section>
  )
}

const testimonials = [
  {
    arrival: 'Malé',
    title: 'Maldivas',
    image:
      'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_640.jpg',
  },
  {
    arrival: 'Victoria',
    title: 'Seychelles',
    image:
      'https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/seychelles-beaches/10-beau-vallon.jpg.image.1296.974.high.jpg',
  },
  {
    arrival: 'Bora Bora',
    title: 'Bora Bora',
    image: 'https://tahititourisme.es/wp-content/uploads/2017/07/BOR_100.jpg',
  },
  {
    arrival: 'Nadi',
    title: 'Fiji',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ff/19/dc/aerial-view.jpg?w=1200&h=-1&s=1',
  },
  {
    arrival: 'Athens',
    title: 'Grecia',
    image:
      'https://content.skyscnr.com/m/458b816026d42882/original/GettyImages-164015369.jpg?resize=1800px:1800px&quality=100',
  },
]

export default SliderDestinations
