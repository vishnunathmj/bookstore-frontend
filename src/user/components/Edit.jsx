import React, { useEffect, useState } from 'react'
import { FaPen, FaPencilAlt } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import axiosInstance from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';
import { userupdateAPI } from '../../services/alllApi';
import { useNavigate } from 'react-router-dom';


function Edit() {
  const navigate = useNavigate()
  const [OffCanvas, setOffCanvas] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "", password: "",cPassword:"", bio: "", picture: "", role: "", id: ""
  })
  const [existingPicture, setExistngPicture] = useState("")
  const [preview, setPreview] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [imageFile, setImageFile] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ ...userDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
      setExistngPicture(user.picture)
    }
  }, [])

  console.log(userDetails);
  // console.log(existingPicture)

  const handleFileUpload = (e) => {
    // console.log(e.target.files[0]);
    const imageFile = e.target.files[0]
    if (imageFile.type.startsWith("image/")) {
      setUserDetails({ ...userDetails, picture: e.target.files[0] })
      const url = URL.createObjectURL(e.target.files[0])
      // console.log(url);
      setPreview(url)
      setImageFile(true)
    } else {
      setImageFile(false)
    }
  }

  const checkPassword = (data) => {
    setUserDetails({ ...userDetails, cPassword: data })
    // data === userDetails.password ? setPasswordMatch(true) : setPasswordMatch(false)
    userDetails?.password==data ? setPasswordMatch(true): setPasswordMatch(false)
  }

  const resetProfile = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({ ...userDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
    setExistngPicture(user.picture)
    setPreview("")
    setImageFile(false)
    setExistngPicture("")
  }

  const handleUpdateUser = async ()=>{
    const {username, password,cPassword, bio, picture, id} = userDetails
    if(!username || !password || !cPassword || !bio){
      toast.info("please fill ")
    }else if(passwordMatch){
      const reqBody = new FormData()
      for(let key in userDetails){
        if(key != "picture"){
          reqBody.append(key,userDetails[key])
        }else{
          preview ? reqBody.append("picture",picture) : reqBody.append("picture",existingPicture)
        }
      }
      // api call
      const result = await userupdateAPI(id,reqBody)
      console.log(result);
      if(result.status==200){
        toast.success("User profile updated, Please login again")
        setTimeout(() => {
          sessionStorage.clear()
          navigate('/login')
        }, 2500);
      }
    }
  }

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
                <input onChange={handleFileUpload} type="file" id='userProfile' hidden />
                {
                  existingPicture == "" ?
                    <img className='w-50 h-50 rounded-full' src={preview ? preview : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"} alt="user" />
                    :
                    existingPicture.startsWith("https://lh3.googleusercontent.com/") ?
                      <img className='w-50 h-50 rounded-full' src={preview ? preview : existingPicture} alt="user" />
                      :
                      <img className='w-50 h-50 rounded-full' src={preview ? preview : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt="no image" />
                }
                {/* <button className="bg-black text-white px-3 py-4 rounded z-10" style={{ marginLeft: '150px', marginTop: '-40px' }}><FaPen /></button> */}
              </label>
              {!imageFile && <div className='mt-5 text-red-500 text-sm'>*Only a image files will be accepted</div>}
              {/* userName */}
              <div className="mt-10 mb-3 w-full px-5">
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='UserName' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* Newpassword */}
              <div className="mt-2 mb-3 w-full px-5">
                <input value={userDetails.password} onChange={e => setUserDetails({...userDetails,password: e.target.value})} type="text" placeholder='New Password' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* Confirm password */}
              <div className="mt-2 mb-3 w-full px-5">
                <input value={userDetails.cPassword} onChange={e => checkPassword(e.target.value)} type="password" placeholder='Confirm Password' className='w-full border border-gray-200 rounded p-2' />
                {!passwordMatch && <div className='mt-5 text-red-500 text-sm'>*Password doesn't match</div>}
              </div>
              {/* bio */}
              <div className="mt-2 mb-3 w-full px-5">
                <input value={userDetails.bio} onChange={e => setUserDetails({ ...userDetails, bio: e.target.value })} type="text" placeholder='Bio' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* reset & update button */}
              <div className="flex justify-end w-full px-5 mt-5">
                <button onClick={resetProfile} className="bg-yellow-500 text-white p-3 rounded me-2">Reset</button>
                <button onClick={handleUpdateUser} className="bg-green-500 text-white p-3 rounded">Update</button>
              </div>
            </div>
          </div>

        </div>
      }
      {/* toastify container */}
      <ToastContainer position='top-center' theme='colored' autoClose='3000' />
    </div>
  )
}

export default Edit
