import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../pages/hotels/hotels'
import { useDestination } from '../pages/filights/flights'

const Navbar = () => {
  const { inc } = useStore()
  const { inc: incDestination } = useDestination()

  return (
    <nav className='poetsen-one-regular sticky top-0 z-50'>
      <div className='w-full bg-gradient-to-r from-yellow-300 from-10% via-orange-500 via-100% h-20 flex justify-between '>
        <div className='w-full lg:w-30/6 xl:w-full  h-full flex items-center px-4 '>
          <Link to={'/'}>
            <img className='rounded-lg w-32' src='/logo.png' alt='logo' />
          </Link>
        </div>

        <div className='w-full  h-full flex justify-end items-center gap-5 mr-5'>
          <NavLink
            onClick={() => inc('')}
            to='/hotels'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:underline'
            }
          >
            Alojamiento
          </NavLink>
          <NavLink
            onClick={() => incDestination('')}
            to='/flights'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:underline'
            }
          >
            Vuelos
          </NavLink>
          <NavLink
            to='/cars'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:underline'
            }
          >
            Vehículos
          </NavLink>
          <NavLink
            to='/activities'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:underline'
            }
          >
            Actividades
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
