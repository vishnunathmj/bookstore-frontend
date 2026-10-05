import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminDashboard() {
  return (
    <div>
      <AdminHeader/>
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar/>
        </div>
        <div className="col-span-4">
          Admin DashBoard
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
