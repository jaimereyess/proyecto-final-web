const PagesCards = () => {
  return (
    <section>
      <h1 className='text-center text-2xl sm:text-5xl py-10 font-medium poetsen-one-regular'>
        <span className='text-yellow-400 flex flex-col'>RESERVA</span>
        HOY MISMO
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10'>
        <div
          className='group border-2 shadow-lg rounded-lg py-20 bg-cover flex 
                    justify-center items-center hover:opacity-50'
          style={{
            backgroundImage: "url('/src/assets/hotel-cover.jpeg')",
            backgroundPosition: 'left bottom',
          }}
        >
          <span className='hidden absolute group-hover:flex text-4xl font-bold'>
            Alojamientos
          </span>
        </div>

        <div
          className='group border-2 shadow-lg rounded-lg py-20 bg-cover flex 
                    justify-center items-center hover:opacity-50 transition-all ease-in-out duration-300 '
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/155439315/es/foto/avi%C3%B3n-de-pasajeros-volando-sobre-nubes-durante-la-puesta-del-sol.jpg?s=612x612&w=0&k=20&c=E6zuCTGyaqlKa7_UDwg6vDVNFe5U53tUJZRhinQ02gg=')",
            backgroundPosition: 'left center',
          }}
        >
          <span className='hidden absolute group-hover:flex text-4xl font-bold group-hover:'>
            Vuelos
          </span>
        </div>

        <div
          className='group border-2 shadow-lg rounded-lg py-20 bg-cover flex 
                    justify-center items-center hover:opacity-50'
          style={{
            backgroundImage:
              "url('https://img.freepik.com/fotos-premium/autos-venta-o-alquiler-fabrica-concesionario-autos-stock-ai-generado_145713-14508.jpg')",
            backgroundPosition: 'left center',
          }}
        >
          <span className='hidden absolute group-hover:flex text-4xl font-bold group-hover:'>
            Vehículos
          </span>
        </div>

        <div
          className='group border-2 shadow-lg rounded-lg py-20 bg-cover flex 
                    justify-center items-center hover:opacity-50'
          style={{
            backgroundImage:
              "url('https://static8.depositphotos.com/1456518/938/i/450/depositphotos_9382865-stock-photo-two-skydivers-jumping-from-airplane.jpg')",
            backgroundPosition: 'left center',
          }}
        >
          <span className='hidden absolute group-hover:flex text-4xl font-bold group-hover:'>
            Actividades
          </span>
        </div>
      </div>
    </section>
  )
}

export default PagesCards
