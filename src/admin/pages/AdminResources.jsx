import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { bookListAPI, editBookStatusAPI, userListAPI } from '../../services/alllApi'
import axiosInstance from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';

function AdminResources() {

  const [currentTab, SetCurrentTab] = useState(1)
  const [allusers, setAllUsers] = useState([])
  const [allBooks, setAllBooks] = useState([])

  console.log(allBooks);

  useEffect(() => {
    if (currentTab == 2) {
      getAllUsers()
    }else{
      getAllBooks()
    }
  }, [currentTab])

  const getAllUsers = async () => {
    const result = await userListAPI()
    if (result.status == 200) {
      setAllUsers(result.data)
    }
  }

  const getAllBooks = async () => {
    const result = await bookListAPI()
    if (result.status == 200) {
      setAllBooks(result.data)
    }
  }

  const updateBookStatus = async(id) =>{
    const result = await editBookStatusAPI(id)
    if(result.status==200){
      toast.success("Book Approved Successfully")
      getAllBooks()
    }
  }

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
              {
                allBooks.length>0 ?
                allBooks?.map(book=>(
                  <div key={book?._id} className="shadow rounded p-3 m-4 md:my-3">
                <img width={'100%'} height={'300px'} src={book?.imageURL} alt="Book cover image" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h1 className="text-blue-600 font-bold text-xl">{book?.author}</h1>
                  <h1 className="text-lg">{book?.title}</h1>
                  <h1 className='font-bold text-red-600'>{book?.discountPrice}</h1>
                  {/* Approve buuton */}
                  {
                    book?.status =="pending" ?
                    <button onClick={()=>updateBookStatus(book?._id)} className="bg-green-700 text-white p-2 mt-2 w-full">APPROVE</button>
                    :
                    <img width={'50%'} className='mt-2' src="https://png.pngtree.com/png-clipart/20250415/original/pngtree-green-check-mark-icon-png-image_20723207.png" alt="Approved" />
                  }
                </div>
              </div>
                ))
                :
                <div >No Books Added Yet</div>
              }
            </div>
          }
          {
            currentTab == 2 &&
            <div className="md:grid grid-cols-3 my-5 w-full">
              {/* Duplicating Card  */}
              {
                allusers.length > 0 ?
                  allusers?.map(user => (
                    <div key={user._id} className="shadow rounded p-2 m-2 bg-blue-100 md:my-0">
                      <p className="text-red-500 font-bold text-md">ID:{user?._id}</p>
                      <div className='flex mt-3 items-center'>
                        <img style={{ width: '80px', height: '80px', borderRadius: '50%', marginLeft: '15px', objectFit: 'cover' }} src={!user.picture ? "https://img.magnific.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80" : user.picture.startsWith("http") ? user.picture : `${axiosInstance.defaults.baseURL}/uploads/${user.picture}`} alt="profile" />
                        <div className='flex flex-col ml-3 w-full'>
                          <h1 className="text-blue-600 font-bold text-xl">{user?.username}</h1>
                          <p className="text-x">{user?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <div className="">No users</div>
              }
            </div>
          }

        </div>
      </div>
      {/* toastify container */}
      <ToastContainer position='top-center' theme='colored' autoClose='3000' />
    </div>
  )
}

export default AdminResources
