import React, { useState } from 'react'
import Header from '../components/Header'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {

  const [modal,SetModal] = useState(false)

  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-400">
          <div className="md:grid grid-cols-4 gap-x-10">
            {/* image */}
            <div className="col-span-1">
              <img className='w-full' src="https://www.picmaker.com/assets/images/bookcovermaker/template-4.png" alt="book" />
            </div>
            {/* book deatils */}
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h3 className='text-3xl font-bold'>Title</h3>
                <button onClick={()=>SetModal(true)} className='text-gray-500'><FaEye /></button>
              </div>
              <h2 className="text-blue-600 font-bold text-xl my-5">Author</h2>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold ">Publisher</p>
                <p className="font-bold ">Language</p>
                <p className="font-bold ">No. of pages</p>
                <p className="font-bold ">catagory</p>
                <p className="font-bold ">ISBN</p>
                <p className="font-bold ">Seller</p>
              </div>
              <div >
                <h4 className="font-bold text-lg">Abstract: </h4>
              </div>
              <div className="flex justify-end">
                <Link to={'/books'} className='bg-blue-900 text-white p-2 font-black flex justify-center items-center gap-2'><FaBackward/>Back</Link>
                <button className="bg-green-900 text-white font-black ms-5 p-2">Buy $99</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {
          modal && 
          <div className="relative z-10 overflow-y-auto" onClick={()=>SetModal(false)}>
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen">
              <div className="bg-white rounded-2xl md:w-250 w-100">
                {/* Modal title */}
                <div className="bg-black text-white p-3">
                  <h3>Book Image</h3>
                </div>
                {/* Modal Body */}
                <div className="relative p-5">
                  <p className="text-blue-600 flex items-center"><FaCamera className='me-2' /> Camera Clicks of the book</p>
                  <div className="mf:flex flex-wrap my-4">
                    {/* dupliacte image */}
                    <img src="https://www.picmaker.com/assets/images/bookcovermaker/template-4.png" alt="" className="md:w-75 w-25 md:me-2 md:mt-0 mb-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default View
