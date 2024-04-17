import Link from 'next/link'
import { pages } from '../routes'

const Navbar = () => {
  return (
    <nav className='flex bg-slate-900 p-4 justify-between'>
      <Link href='/'>
        <h1>Proyecto</h1>
      </Link>

      <div className='flex gap-10 mr-10'>
        {pages.map((route) => (
          <Link href={route.link}>
            <h3>{route.name}</h3>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
