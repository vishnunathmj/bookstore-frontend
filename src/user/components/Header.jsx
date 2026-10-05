import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      {/* Header top */}
      <div className='grid grid-cols-3 p-3'>
        {/* Logo */}
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="https://pngimg.com/uploads/book/book_PNG51090.png" alt="Books" />
          <h1 className="text-2xl ">BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        {/* login */}
        <div className="md:flex justify-center items-center hidden">
          <FaInstagram />
          <FaTwitter className='mx-2' />
          <FaFacebook />
          {/* login Link */}
          <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center'><FaUser className='me-1' />Login</Link>
        </div>
      </div>
      {/* Header Links */}
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center'>
        {/* Menu icon ligon button */}
        <div className="flex justify-between items-center text-2xl py-3 md:hidden">
          <button onClick={() => setToggle(!toggle)}><IoMenu /></button>
          <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center'><FaUser className='me-1' />Login</Link>
          
        </div>
        <ul className={toggle?'flex flex-col':'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
