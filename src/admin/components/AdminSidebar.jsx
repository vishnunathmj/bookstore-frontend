import React from 'react'
import { FaChartBar, FaDatabase } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AdminSidebar() {
    return (
        <div className='bg-blue-200 md:min-h-screen h-fit py-10'>
            {/* image */}
            <div className="flex justify-center">
                <img width={'200px'} height={'200px'} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png" alt="Admin" />
            </div>
            {/* name */}
            <h1 className="text-xl font-bold my-5 text-center ">Admin</h1>
            {/* links */}

            <div className=" px-20">
                <div className='my-3'>
                    <Link to={'/admin'} className='flex items-center gap-3'><FaChartBar className=''/> DashBoard</Link>
                </div>
                <div className='my-3'>
                    <Link to={'/admin/resources'} className='flex items-center gap-3'><FaDatabase className=''/> Resourses</Link>
                </div>
                <div className='my-3'>
                    <Link to={'/admin/settings'} className='flex items-center gap-3'><FaGear className=''/> Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
