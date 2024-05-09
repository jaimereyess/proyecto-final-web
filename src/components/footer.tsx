export const Footer = () => {
  return (
    <footer className='p-4 rounded-lg shadow md:px-6 md:py-8 bg-gradient-to-b from-yellow-300/20 from-10% via-orange-600/30 via-100%'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a href='#' target='_blank' className='flex items-center mb-4 sm:mb-0'>
          <img src='/logo.png' className='mr-4 h-20' alt='Flowbite Logo' />
          <span className='poetsen-one-regular self-center text-xl font-semibold whitespace-nowrap'>
            Tropical vacations
          </span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 sm:mb-0'>
          <li>
            <a
              href='#'
              className='mr-4 text-sm text-gray-500 hover:underline md:mr-6'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 '
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 '
            >
              Licensing
            </a>
          </li>
          <li>
            <a href='#' className='text-sm text-gray-500 hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center'>
        © 2024{' '}
        <a
          href='https://flowbite.com'
          target='_blank'
          className='hover:underline'
        >
          Jaime Reyes Rodríguez
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
