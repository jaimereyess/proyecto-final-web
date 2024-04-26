import { Link } from 'react-router-dom'

interface pages {
  link: string
  name: string
}

const pages = [
  {
    link: '/',
    name: 'Inicio',
  },
  {
    link: '/hotels',
    name: 'Hoteles',
  },
]

const Navbar = () => {
  return (
    <nav className="flex bg-slate-900 p-4 justify-between text-white">
      <Link to="/">
        <h1>Proyecto</h1>
      </Link>

      <div className="flex gap-10 mr-10">
        {pages.map((route) => (
          <Link to={route.link} key={route.name}>
            <h3>{route.name}</h3>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
