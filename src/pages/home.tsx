import PagesCards from '../components/landing/pages-cards'
import { PlaceholdersInputs } from '../components/landing/search-input'
import { BackgroundBeams } from '../components/ui/background-beams'
import SliderDestinations from '../components/landing/sliders-destination'

const Home = () => {
  return (
    <section className='poetsen-one-regular'>
      <BackgroundBeams />
      <div className='relative z-10  px-4 pb-20 pt-16 md:pt-5  sm:px-6 lg:px-8 text-center'>
        <PlaceholdersInputs />
      </div>

      <div className='flex flex-wrap justify-around'>
        <img
          className='sm:w-96 w-48'
          src='https://i.ibb.co/2M7rtLk/Remote1.png'
        />
        <img
          className='w-96 hidden md:block'
          src='https://i.ibb.co/5BCcDYB/Remote2.png'
        />
      </div>

      <PagesCards />
      <SliderDestinations />
    </section>
  )
}

export default Home
