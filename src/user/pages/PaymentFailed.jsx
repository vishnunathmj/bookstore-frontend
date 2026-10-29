import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function PaymentFailed() {
  return (
    <>
      <Header />
            <div className="container min-h-screen flex justify-center items-center">
                <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
                    <div>
                        <h1 className='text-red-500 md:text-4xl font-bold '>Sorry... Payment declined...</h1>
                        <p className='text-2xl my-10'>We apologize for the inconvience...</p>
                        <Link to={'/books'} className='flex items-center bg-blue-500 w-60 p-2 text-white font-bold ' >Explore more Books...</Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src="https://assets-v2.lottiefiles.com/a/6a1f0bce-1178-11ee-a807-ebab7337127e/5rsPIZBogk.gif" alt="success" />
                    </div>
                </div>
            </div>
    </>
  )
}

export default PaymentFailed
