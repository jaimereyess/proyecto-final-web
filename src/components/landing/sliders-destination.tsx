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
    quote: '',
    name: 'Charles Dickens',
    title: 'Maldivas',
    image:
      'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_640.jpg',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Seychelles',
    image:
      'https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/seychelles-beaches/10-beau-vallon.jpg.image.1296.974.high.jpg',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Bora Bora',
    image: 'https://tahititourisme.es/wp-content/uploads/2017/07/BOR_100.jpg',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Fiji',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ff/19/dc/aerial-view.jpg?w=1200&h=-1&s=1',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'Grecia',
    image:
      'https://content.skyscnr.com/m/458b816026d42882/original/GettyImages-164015369.jpg?resize=1800px:1800px&quality=100',
  },
]

export default SliderDestinations
