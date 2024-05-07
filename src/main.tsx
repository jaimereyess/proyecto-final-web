import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import AddHotelForm from './pages/create-hotel.tsx'
import Hotels from './pages/hotels/hotels.tsx'
import HotelPage from './pages/hotels/[id].tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/hotels',
    element: <Hotels />,
  },
  {
    path: '/hotel/:id',
    element: <HotelPage />,
  },
  {
    path: '/create-hotel',
    element: <AddHotelForm />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
