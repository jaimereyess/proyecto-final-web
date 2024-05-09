import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50'>
      <div className='w-full bg-gradient-to-r from-yellow-300 from-10% via-orange-500 via-100% h-20 flex justify-between '>
        <div className='w-full lg:w-30/6 xl:w-full  h-full flex items-center px-4 '>
          <img className='rounded-lg w-32' src='/logo.png' alt='logo' />
        </div>

        <div className='w-full  h-full flex justify-end items-center gap-5 mr-2'>
          <Link
            to='/create-hotel'
            className='px-4 py-2 bg-neutral-400 bg-opacity-20 hover:bg-opacity-40 rounded-lg'
          >
            Registra tu alojamiento
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
