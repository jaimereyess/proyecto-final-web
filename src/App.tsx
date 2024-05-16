import { Outlet } from 'react-router-dom'
import ScrollToTop from './lib/scrollToTop'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => (
  <main className='bg-neutral-100'>
    <Navbar />
    <ScrollToTop />
    <div className='min-h-screen'>
      <Outlet />
    </div>
    <Footer />
  </main>
)

export default App
