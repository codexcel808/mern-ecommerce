import React from 'react'
import CANCEL from '../assest/cancel.gif'


const Cancel = () => {
  return (
    <div className='bg-white flex flex-col mt-10 justify-center mx-auto border rounded-3xl items-center p-4 w-full max-w-xl gap-8 '>
      <img src={CANCEL} 
      width = {200}
      height = {200}
      alt="cancel" 
      />

      <p className='text-red-700 font-semibold'>
        Payment Cancelled
      </p>
      <button className='bg-white px-20 p-2 mb-6 font-semibold transition-shadow  border rounded-md hover:bg-opacity-90 hover:text-white hover:bg-red-700'>
        Go to Cart
      </button>
      </div>
  )
}

export default Cancel