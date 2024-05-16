import Navbar from './components/navbar'
import Footer from './components/footer'
import ScrollToTop from './lib/scrollToTop'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <main>
    <Navbar />
    <ScrollToTop />
    <div className='min-h-screen'>{children}</div>
    <Footer />
  </main>
)

export default Layout
