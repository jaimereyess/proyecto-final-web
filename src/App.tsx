import { Link } from 'react-router-dom'
import { LuCalendarClock } from "react-icons/lu";

const App = () => {
  return (
    <main className='bg-neutral-100'>
      <div>
        <div className='sticky top-0 z-50'>
          <div>
            <div className='w-full bg-gradient-to-r from-yellow-300 from-10% via-orange-500 via-100% h-20 flex justify-between '>
              <div className='w-full lg:w-30/6 xl:w-full  h-full flex items-center px-4 '>
                <img
                  className='rounded-lg w-32'
                  src='/src/assets/logo.png'
                  alt='logo'
                />
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
          </div>
        </div>

        <aside className='relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16'>
          <div className='relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8'>
            <div className='max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto'>
              <h2 className='text-2xl font-bold md:text-5xl'>
                A dónde ir
                <span className='block text-2xl md:text-4xl'>Y qué hacer</span>
              </h2>

              <Link
                className='inline-flex text-white items-center px-6 py-3 font-medium bg-rose-500 rounded-lg hover:opacity-75'
                to='/hotels'
              >
                <LuCalendarClock />
                &nbsp; Reserva ahora
              </Link>
            </div>
          </div>

          <div className='absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full '>
            <img className='w-96' src='https://i.ibb.co/5BCcDYB/Remote2.png' />
          </div>
        </aside>

        <div className='grid  place-items-center sm:mt-20'>
          <img
            className='sm:w-96 w-48'
            src='https://i.ibb.co/2M7rtLk/Remote1.png'
          />
        </div>

        <h1 className='text-center text-2xl sm:text-5xl py-10 font-medium'>
          <span className='text-yellow-400 flex flex-col'>RESERVA</span>
          HOY MISMO
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10'>
          <div className='border-2 shadow-lg rounded-lg py-20 bg-cover text-white font-bold flex 
                          justify-start items-start'
              style={{backgroundImage: "url('/src/assets/hotel-cover.jpeg')", 
                      backgroundPosition: "center bottom"}}>
              Alojamiento
          </div>
          <div className='border-2 shadow-lg rounded-lg py-20 bg-cover text-white font-bold flex 
                          justify-start items-start'
              style={{backgroundImage: "url('https://media.istockphoto.com/id/155439315/es/foto/avi%C3%B3n-de-pasajeros-volando-sobre-nubes-durante-la-puesta-del-sol.jpg?s=612x612&w=0&k=20&c=E6zuCTGyaqlKa7_UDwg6vDVNFe5U53tUJZRhinQ02gg=')",
                      backgroundPosition: "left center"}}>
              Vuelos
          </div>
          
          <div className='border-2 shadow-lg rounded-lg py-20 bg-cover text-white font-bold flex 
                          justify-start items-start'
              style={{backgroundImage: "url('https://img.freepik.com/fotos-premium/autos-venta-o-alquiler-fabrica-concesionario-autos-stock-ai-generado_145713-14508.jpg')",
                      backgroundPosition: "left center"}}>
              Vehículos
          </div>
          
          <div className='border-2 shadow-lg rounded-lg py-20 bg-cover text-white font-bold flex 
                          justify-start items-start'
              style={{backgroundImage: "url('https://static8.depositphotos.com/1456518/938/i/450/depositphotos_9382865-stock-photo-two-skydivers-jumping-from-airplane.jpg')",
                      backgroundPosition: "left center"}}>
              Actividades
          </div>
        </div>

        <footer className='text-center'>
          <hr />
          <p>Jaime Reyes Rodríguez</p>
        </footer>
      </div>
    </main>
  )
}

export default App
