import React from 'react'
import Button from '../UiComponent/Button'
const TextGroup = () => {
  return (
      <div className=' h-[90%] flex justify-center items-center my-10'>
          <div className='w-[75%] space-y-10 text-center lg:text-left'>
              <div>
                <h1 className='md:text-6xl text-4xl font-extrabold'>Data to enrich your</h1>
                <h1 className='md:text-6xl text-4xl font-extrabold text-violet-700'>online business</h1>
              </div>
              <p className='md:text-xl  text-gray-500'>
                 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className='space-x-10'>
              <Button className='bg-violet-700 text-white mt-2'>
                Get Started
            </Button>
            <Button className='bg-gray-300 text-sky-600 mt-2'>
                Live Demo
            </Button>
              </div>
           
          </div>
          
    </div>
  )
}

export default TextGroup