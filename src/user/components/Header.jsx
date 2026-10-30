
import React, { useContext, useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from "react-icons/fa";
import { FaGear } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance'
import { routeContext } from '../../contextAPI/RouteGaurd';

function Header() {

  const { role, setRole, authorisedUser, setAuthorisedUser } = useContext(routeContext)


  const [toggle, setToggle] = useState(false)
  const [token, setToken] = useState("")
  const [dp, setDp] = useState("")
  const [userId, setUserId] = useState("")
  const [dropDown, setDropDown] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token")
      const user = JSON.parse(sessionStorage.getItem("user"))
      setToken(userToken)
      setDp(user.picture)
      setUserId(user._id)
    }
  }, [token])

  const logOut = () => {
    sessionStorage.clear()
    setAuthorisedUser(false)
    setToggle(false)
    setToken("")
    setDp("")
    setUserId("")
    setDropDown(false)
    navigate('/')
  }

  return (
    <>
      {/* Header top */}
      <div className='grid grid-cols-3 p-3 items-end'>
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
        <div className="md:flex justify-end items-center gap-3 pe-5 hidden">
          <FaInstagram className="text-xl" />
          <FaTwitter className="text-xl" />
          <FaFacebook className="text-xl" />

          {/* login Link */}
          {
            !token ?
              <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center'><FaUser className='me-1' />Login</Link>
              :
              <div>
                <button onClick={() => setDropDown(!dropDown)} className="shadow-sm rounded p-1 hover:bg-gray-100">
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp == "" ? "https://img.magnific.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile" />
                </button>

                {/* dropDown menu */}
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow ring-1 ring-black/5 p-2 focus:outline-hidden">
                    <Link to={`/profile/${userId}`} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaGear className='me-1' />profile</Link>
                    <Link onClick={logOut} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' />LogOut</Link>
                  </div>
                }
              </div>
          }
        </div>
      </div>

      {/* Header Links */}
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center'>
        {/* Menu icon button */}
        <div className="flex justify-between items-center text-2xl py-3 md:hidden">
          <button onClick={() => setToggle(!toggle)}><IoMenu /></button>

          {!token ?
            <Link to={'/login'} className='border border-black rounded px-3 ms-3 flex items-center'><FaUser className='me-1' />Login</Link>
            :
            <div>
              <button onClick={() => setDropDown(!dropDown)} className="shadow-sm rounded p-1 hover:bg-gray-100">
                <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp == "" ? "https://img.magnific.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile" />
              </button>

              {/* dropDown menu */}
              {
                dropDown &&
                <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow ring-1 ring-black/5 p-2 focus:outline-hidden">
                  <Link to={`/profile/${userId}`} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaGear className='me-1' />profile</Link>
                  <Link onClick={logOut} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' />LogOut</Link>
                </div>
              }
            </div>
          }
        </div>

        <ul className={toggle ? 'flex flex-col' : 'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
