import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'

function AdminResources() {

  const [currentTab, SetCurrentTab] = useState(1)

  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className='text-center text-3xl font-bold mb-10'>All Resources</h1>
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={() => SetCurrentTab(1)} className={currentTab == 1 ? "p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer" : "p-4 border-gray-300 border-b rounded cursor-pointer"}>Books</p>
            <p onClick={() => SetCurrentTab(2)} className={currentTab == 2 ? "p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer" : "p-4 border-gray-300 border-b rounded cursor-pointer"}>Users</p>

          </div>
          {/* tab content */}
          {
            currentTab == 1 &&
            <div className="md:grid grid-cols-4 md:my-0">
              {/* Duplicating Card  */}
              <div className="shadow rounded p-3 m-4 md:my-0">
                <img width={'100%'} height={'300px'} src="https://www.picmaker.com/assets/images/bookcovermaker/template-4.png" alt="Book cover image" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h1 className="text-blue-600 font-bold text-xl">Author</h1>
                  <h1 className="text-lg">Title</h1>
                  <h1 className='font-bold text-red-600'>Price</h1>
                  {/* Approve buuton */}
                  <button className="bg-green-700 text-white p-2 mt-2 w-full">APPROVE</button>
                </div>
              </div>
            </div>
          }
          {
            currentTab == 2 &&
            <div className="md:grid grid-cols-3 my-5 w-full">
              {/* Duplicating Card  */}
              <div className="shadow rounded p-2 m-2 bg-blue-100 md:my-0">
                <p className="text-red-500 font-bold text-md">ID:</p>
                <div className='flex mt-3 items-center'>
                  <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png" alt="Book cover image" />
                  <div className='flex flex-col ml-3 w-full'>
                    <h1 className="text-blue-600 font-bold text-xl">Username</h1>
                    <p className="text-x">Mail</p>
                   
                  </div>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default AdminResources
