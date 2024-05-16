import { MutatingDots } from 'react-loader-spinner'

const LoaderDots = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <MutatingDots
        visible={true}
        height='100'
        width='100'
        color='orange'
        secondaryColor='yellow'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  )
}

export default LoaderDots
