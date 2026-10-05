import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className='text-3xl font-bold text-center mb-10 mt-5'>Settings</h1>
          <div className="md:grid grid-cols-2 items-center">
            {/* text part */}
            <div>
              <h2 className="text-xl mb-5 font-bold ">Welcome, Admin 👋</h2>
              <p className="text-justify">This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
              <p className="text-lg my-5">🔧 What You Can Manage in This Section:</p>
              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access leve</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className="my-5 text-justify">Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
            </div>
            {/* edit profile */}
            <div className="flex justify-center items-center flex-col bg-blue-200 ms-5 p-10">
              <label htmlFor="userProfile">
                <input type="file" id='userProfile' hidden />
                <img className='w-50 h-50 rounded-full' src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png" alt="user" />
                {/* <button className="bg-black text-white px-3 py-4 rounded z-10 " style={{ marginLeft: '150px', marginTop: '-40px' }}><FaPen /></button> */}
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
              {/* bio
              <div className="mt-2 mb-3 w-full px-5">
                <input type="text" placeholder='Bio' className='w-full border border-gray-200 rounded p-2' />
              </div> */}
              {/* reset & update button */}
              <div className="flex justify-end w-full px-5 mt-5">
                <button className="bg-yellow-500 text-white p-3 rounded me-2">Reset</button>
                <button className="bg-green-500 text-white p-3 rounded">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings
