import React, { useState } from 'react'
import { FaPen, FaPencilAlt } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {

  const [OffCanvas, setOffCanvas] = useState(false)

  return (
    <div>
      {/* button */}
      <button onClick={() => setOffCanvas(true)} className="bg-black text-white p-2 flex items-center rounded border hover:bg-white hover:text-black"><FaPencilAlt /> Edit</button>
      {/* Offcanvas */}
      {OffCanvas &&
        <div className="">
          <div className="fixed inset-0 bg-gray-400/75 w-full h-full"></div>
          <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
            {/* Header */}
            <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
              <h1>Update Profile</h1>
              <FaX onClick={() => setOffCanvas(false)} />
            </div>

            {/* body */}
            <div className="flex justify-center items-center flex-col my-5">
              <label htmlFor="userProfile">
                <input type="file" id='userProfile' hidden />
                <img className='w-50 h-50 rounded-full' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" alt="user" />
                <button className="bg-black text-white px-3 py-4 rounded z-10" style={{ marginLeft: '150px', marginTop: '-40px' }}><FaPen /></button>
              </label>
              {/* userName */}
              <div className="mt-10 mb-3 w-full px-5">
                <input type="text" placeholder='UserName' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* Newpassword */}
              <div className="mt-2 mb-3 w-full px-5">
                <input type="text" placeholder='New Password' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* Confirm password */}
              <div className="mt-2 mb-3 w-full px-5">
                <input type="text" placeholder='Confirm Password' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* bio */}
              <div className="mt-2 mb-3 w-full px-5">
                <input type="text" placeholder='Bio' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* reset & update button */}
              <div className="flex justify-end w-full px-5 mt-5">
                <button className="bg-yellow-500 text-white p-3 rounded me-2">Reset</button>
                <button className="bg-green-500 text-white p-3 rounded">Update</button>
              </div>
            </div>
          </div>

        </div>
      }
    </div>
  )
}

export default Edit
