import { Link } from 'react-router-dom'
import { LuCalendarClock } from 'react-icons/lu'
import Navbar from './components/navbar'
import { Footer } from './components/footer'
import PagesCards from './components/landing/pages-cards'
import { PlaceholdersInputs } from './components/landing/search-input'

const App = () => {
  return (
    <main className='bg-neutral-100'>
      <div>
        <Navbar />
        <aside className='relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 poetsen-one-regular'>
          <div className='relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8'>
            <div className='max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto'>
              <PlaceholdersInputs />

              <Link
                className='inline-flex text-white items-center px-6 py-3 font-medium bg-orange-500 rounded-lg hover:opacity-75'
                to='/hotels'
              >
                <LuCalendarClock />
                &nbsp; Reserva ahora
              </Link>
            </div>
          </div>

          <div className='absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full '>
            <img className='w-96' src='https://i.ibb.co/5BCcDYB/Remote2.png' />
          </div>
        </aside>

        <div className='grid  place-items-center sm:mt-20'>
          <img
            className='sm:w-96 w-48'
            src='https://i.ibb.co/2M7rtLk/Remote1.png'
          />
        </div>

        <PagesCards />
      </div>
      <Footer />
    </main>
  )
}

export default App
