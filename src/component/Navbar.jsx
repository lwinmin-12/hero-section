import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlinePlus} from 'react-icons/ai'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className='flex justify-between mt-5 items-center font-medium  '>
      <img className='w-[7%] mx-5' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
      <div className=' w-[80%] hidden justify-around md:flex '>
      <ul className=' w-[80%] flex justify-around items-center text-gray-500'>
        <li className='hover:text-black cursor-pointer lg:text-[16px] md:text-[15px]'>Product</li>
        <li className='hover:text-black cursor-pointer lg:text-[16px] md:text-[15px]'>Features</li>
        <li className='hover:text-black cursor-pointer lg:text-[16px] md:text-[15px]'>Marketplace</li>
        <li className='hover:text-black cursor-pointer lg:text-[16px] md:text-[15px]'>Company</li>
      </ul>
      <button className='text-sky-600'>Login</button>
      </div>
      <div className='mx-5 md:hidden'>
        {
          open == false ?<AiOutlineMenu className='text-2xl hover:bg-gray-300 rounded active:ring-2 active:ring-purple-600' onClick={handleOpen} /> : <AiOutlinePlus className='text-2xl rotate-45 hover:bg-gray-300 rounded active:ring-2 active:ring-purple-600' onClick={handleOpen} />
        }
        
        <div className={open == true ? 'w-[40%] absolute right-0 duration-300': 'w-[40%] opacity-0 absolute duration-300 right-0'}>
        <div className={` text-center space-y-5 shadow-md bg-white rounded`}>
          <ul className='space-y-3 text-gray-500'>
            <li className='hover:text-black'>Product</li>
            <li className='hover:text-black'>Features</li>
            <li className='hover:text-black'>Market Place</li>
            <li className='hover:text-black'>Company</li>
          </ul>
           <button className='text-sky-600 w-[100%] py-2 bg-gray-100'>Login</button>

        </div>
       </div>
       
      </div>
      
    </div>

  )
}

export default Navbar