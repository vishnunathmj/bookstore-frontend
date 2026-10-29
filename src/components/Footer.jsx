
import React from 'react'
import { FaArrowRight, FaCopyright, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10'>
        {/* About Us  */}
        <div>
          <h4 className='font-bold'>About Us</h4>
          <p className='text-justify mt-5'>We believe books are more than just pages - they are windows into new worlds,teachers of wisdom, and companions for life. Our journey began with a passion for storytelling and a mission to make reading accessible, enjoyable, and inspiring for everyone.</p>
        </div>

        {/* NewsLetter */}
        <div className='flex flex-col md:mt-0 mt-5'>
          <h4 className='font-bold'>News Letter</h4>
          <p className="my-5">Stay updated with our latest trends</p>
          <div className="flex">
            <input type="text" placeholder='Email' className='border p-2 bg-white text-black' />
            <button className='bg-yellow-500 p-2'><FaArrowRight /></button>
          </div>
        </div>

        {/* Follow Us */}
        <div className='flex flex-col md:mt-0 mt-5'>
          <h4 className="font-bold">FOLLOW US</h4>
          <p className="my-5">Let us be social</p>
          <div className='flex'>
            <FaFacebook />
            <FaInstagram className='mx-5'/>
            <FaLinkedin />
            <FaEnvelope className='mx-5' />
          </div>
        </div>
      </div>

      <div>
        <p className="bg-black p-2 text-white text-center flex justify-center items-center gap-1">
          <FaCopyright /> BookStore 2026 copy right reserved
        </p>
      </div>
    </>
  )
}

export default Footer
