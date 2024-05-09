import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import AddHotelForm from './pages/create-hotel.tsx'
import Hotels from './pages/hotels/hotels.tsx'
import HotelPage from './pages/hotels/[name].tsx'
import Cars from './pages/cars/cars.tsx'
import CarsPage from './pages/cars/[id].tsx'

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
    path: '/hotel/:name',
    element: <HotelPage />,
  },
  {
    path: '/create-hotel',
    element: <AddHotelForm />,
  },
  {
    path: '/cars',
    element: <Cars />,
  },
  {
    path: '/cars/:id',
    element: <CarsPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
