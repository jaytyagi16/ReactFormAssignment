import React from 'react'
import Navbar from '../components/Navbar'

const Home: React.FC = () => {
  return (
    <div className='max-w-screen'>

      <div className='w-[90%] mx-auto mt-2'>
        <Navbar/>
      </div>

    </div>
  )
}

export default Home