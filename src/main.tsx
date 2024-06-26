import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import Home from './pages/home'
import AddHotelForm from './pages/create-hotel'
import EditHotel from './pages/hotels/[id]/edit-hotel'
import Hotels from './pages/hotels/hotels'
import HotelPage from './pages/hotels/[name]'
import Cars from './pages/cars/cars'
import CarsPage from './pages/cars/[id]'
import Flights from './pages/filights/flights'
import Layout from './layout'
import NotFound from './not-found'
import HotelList from './components/hotels/hotel-list'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  {
    path: '/hotels',
    element: (
      <Layout>
        <Hotels />
      </Layout>
    ),
  },
  {
    path: '/hotel/:name',
    element: (
      <Layout>
        <HotelPage />
      </Layout>
    ),
  },
  {
    path: '/create-hotel',
    element: (
      <Layout>
        <AddHotelForm />
      </Layout>
    ),
  },
  {
    path: '/cars',
    element: (
      <Layout>
        <Cars />
      </Layout>
    ),
  },
  {
    path: '/cars/:id',
    element: (
      <Layout>
        <CarsPage />
      </Layout>
    ),
  },
  {
    path: '/flights',
    element: (
      <Layout>
        <Flights />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  {
    path: '/hotels/list',
    element: (
      <Layout>
        <HotelList />
      </Layout>
    ),
  },
  {
    path: '/hotels/:id/edit',
    element: (
      <Layout>
        <EditHotel />
      </Layout>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
