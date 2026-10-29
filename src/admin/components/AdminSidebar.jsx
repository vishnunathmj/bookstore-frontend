import React, { useEffect, useState } from 'react'
import { FaChartBar, FaDatabase } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'


function AdminSidebar() {

    const [username, setUsername] = useState("")
    const [dp, setDp] = useState("")

    useEffect(() => {
        if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
          const user = JSON.parse(sessionStorage.getItem("user"))
          setDp(user?.picture)
          setUsername(user?.username)
        }
      },[])

    return (
        <div className='bg-blue-200 md:min-h-screen h-fit py-10'>
            {/* image */}
            <div className="flex justify-center">
                <img style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '15px', objectFit: 'cover' }} src={!dp ? "https://img.magnific.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80" : dp.startsWith("http") ? dp : `${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile" />
            </div>
            {/* name */}
            <h1 className="text-xl font-bold my-5 text-center ">{username}</h1>
            {/* links */}

            <div className=" px-20">
                <div className='my-3'>
                    <Link to={'/admin'} className='flex items-center gap-3'><FaChartBar className='' /> DashBoard</Link>
                </div>
                <div className='my-3'>
                    <Link to={'/admin/resources'} className='flex items-center gap-3'><FaDatabase className='' /> Resourses</Link>
                </div>
                <div className='my-3'>
                    <Link to={'/admin/settings'} className='flex items-center gap-3'><FaGear className='' /> Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
