import { Link } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <h1>Página de Inicio</h1>
      <Link to={'/hotels'}>Hoteles</Link>
    </main>
  )
}

export default App
