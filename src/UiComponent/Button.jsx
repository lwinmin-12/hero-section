// import React, { Children } from 'react'

const Button = ({children,className}) => {
  return (
      <button className={`md:text-lg text-sm ${className} md:px-6 md:py-4 px-4 py-2 rounded `}  >{ children }</button>
  )
}

export default Button