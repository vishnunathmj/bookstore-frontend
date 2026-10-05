import React, { useState } from 'react'
import Header from '../components/Header'
import { FaCheckCircle } from 'react-icons/fa'
import Edit from '../components/Edit'
import UploadBook from '../components/UploadBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'


function Profile() {

  const [currentTab,SetCurrentTab] = useState(1)

  return (
    <>
      <Header />
      <div style={{height:'200px'}} className="bg-black"></div>
      <div style={{width:'230px',height:'230px',borderRadius:'50%',marginTop:'-130px',marginLeft:'50px' }} className="bg-white">
        <img style={{width:'200px',height:'200px',borderRadius:'50%',marginLeft:'15px'}} src="https://cdn-icons-png.magnific.com/256/12483/12483554.png?semt=ais_white_label" alt="user" />
      </div>
      <div className="md:flex justify-between px-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-black md:text-3xl">UserName</h1>
          <FaCheckCircle className='text-blue-700 ms-3' />
        </div>
        <div className="">
          <Edit />
        </div>
      </div>
      <p className="text-xl font-bold px-20 mt-5">Bio</p>
      <p className="text-justify md:px-20 px-50 my-5">User profile Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum iste quo veritatis ipsa, ut repellat ullam expedita exercitationem quae rerum odio illum fuga commodi nostrum voluptas magni labore ex similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure, eveniet quibusdam possimus totam exercitationem minima, reprehenderit, sunt delectus quam repudiandae consequuntur sint voluptas asperiores mollitia veniam quas. Voluptatem, pariatur.
      Aperiam, architecto similique adipisci ut voluptatum non vero nostrum repellendus cupiditate quasi rerum, eveniet soluta, minus quaerat provident amet. Quas eum quos consectetur distinctio amet provident autem, a at est?
      Dolores excepturi rem alias explicabo recusandae. Deleniti magni perferendis sint voluptas suscipit iste, maxime exercitationem! Quidem perferendis vel vitae adipisci debitis tempore veritatis deserunt consequatur unde est! Quis, veritatis minima.
      Sint illo temporibus obcaecati autem quidem recusandae doloremque? Soluta, omnis. Ipsa necessitatibus nulla reiciendis nostrum neque dignissimos exercitationem voluptas, deserunt quia iste quisquam magni. Similique recusandae modi consequuntur facere soluta.
      </p>
      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>SetCurrentTab(1)} className={currentTab==1?"p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer":"p-4 border-gray-300 border-b rounded cursor-pointer"}>Upload Book</p>
          <p onClick={()=>SetCurrentTab(2)} className={currentTab==2?"p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer":"p-4 border-gray-300 border-b rounded cursor-pointer"}>Upload Book Status</p>
          <p onClick={()=>SetCurrentTab(3)} className={currentTab==3?"p-4 border-gray-300 border-l border-t border-r rounded cursor-pointer":"p-4 border-gray-300 border-b rounded cursor-pointer"}>Purchase History</p>
        </div>
        {/* tab content */}
        {
          currentTab == 1 &&
          <div><UploadBook/></div>
        }
        {
          currentTab == 2 &&
          <div><BookStatus /></div>
        }
        {
          currentTab == 3 &&
          <div><Purchase/></div>
        }
      </div>
    </>
  )
}

export default Profile
