import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import {useNavigate} from 'react-router-dom'

const Success = () => {

  const navigate = useNavigate()
  const seeOrder = ()=>
    {navigate('/order')
    }

  return (
    <div className='bg-white gap-10 p-10 w-full max-w-md mx-auto flex flex-col items-center rounded-3xl  ' >
      <img src={SUCCESSIMAGE} 
      width = {200}
      height = {200}
      
      alt="payment success" />
   <p className='text-green-700 font-semibold text-xl'> 
   Successfully Paid
   </p>
   <button  onClick= {seeOrder} className='bg-green-700 text-white hover:bg-opacity-85 px-20 border rounded-md p-2'>
    See Order
   </button>

    </div>
  )
}

export default Success