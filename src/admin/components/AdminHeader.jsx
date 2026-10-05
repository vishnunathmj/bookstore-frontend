import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      {/*header Top  */}
      <div className="flex justify-between items-center p-3 md:mx-20">
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="https://pngimg.com/uploads/book/book_PNG51090.png" alt="Books" />
          <h1 className="text-2xl ">BOOKSTORE</h1>
        </div>
        <button className="flex items-center px-2 py-1 bg-black text-white border-black hover:bg-white hover:text-black">Logout<FaPowerOff className='ms-2'/></button>
      </div>
      {/* header marquee */}
      <div className="w-full p-3 bg-black text-white">
        <marquee>Welcome Admin, You are all set to manage and monitor the System. Let's get into work!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
