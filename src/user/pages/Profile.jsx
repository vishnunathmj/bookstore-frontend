import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaCheckCircle } from 'react-icons/fa'
import Edit from '../components/Edit'
import UploadBook from '../components/UploadBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'
import axiosInstance from '../../api/axiosInstance'


function Profile() {

  const [currentTab, SetCurrentTab] = useState(1)
  const [username,setUsername] = useState("")
  const [dp, setDp] = useState("")
  const [bio,setBio] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user?.picture)
      setUsername(user?.username)
      setBio(user?.bio)
    }
  },[])

  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className="bg-black"></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginTop: '-130px', marginLeft: '50px' }} className="bg-white">
        {/* <img style={{ width: '200px', height: '200px', borderRadius: '50%', marginLeft: '15px' }} src={dp} alt="user" /> */}
       <img style={{ width: '200px', height: '200px', borderRadius: '50%', marginLeft: '15px', objectFit: 'cover' }} src={!dp ? "https://img.magnific.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80" : dp.startsWith("http") ? dp : `${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile" />
      </div>
      <div className="md:flex justify-between px-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-black md:text-3xl">{username}</h1>
          <FaCheckCircle className='text-blue-700 ms-3' />
        </div>
        <div className="">
          <Edit />
        </div>
      </div>
      <p className="text-xl font-bold px-20 mt-5">Bio</p>
        <p className="text-justify md:px-20 px-50 my-5">{bio}
      </p>
      
      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={() => SetCurrentTab(1)} className={currentTab == 1 ? "p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer" : "p-4 border-gray-300 border-b rounded cursor-pointer"}>Upload Book</p>
          <p onClick={() => SetCurrentTab(2)} className={currentTab == 2 ? "p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer" : "p-4 border-gray-300 border-b rounded cursor-pointer"}>Upload Book Status</p>
          <p onClick={() => SetCurrentTab(3)} className={currentTab == 3 ? "p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer" : "p-4 border-gray-300 border-b rounded cursor-pointer"}>Purchase History</p>
        </div>
        {/* tab content */}
        {
          currentTab == 1 &&
          <div><UploadBook /></div>

        }
        {
          currentTab == 2 &&
          <div><BookStatus /></div>
        }
        {
          currentTab == 3 &&
          <div><Purchase /></div>
        }
      </div>
    </>
  )
}

export default Profile
