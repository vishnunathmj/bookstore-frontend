
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify'
import { userupdateAPI } from '../../services/alllApi'

function AdminSettings() {

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    cPassword: '',
    bio: '',
    picture: '',
    role: '',
    id: ''
  })

  const [existingPicture, setExistingPicture] = useState('')
  const [preview, setPreview] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [imageFile, setImageFile] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user')

    if (storedUser) {
      const user = JSON.parse(storedUser)

      setUserDetails({
        username: user.username || '',
        password: '',
        cPassword: '',
        bio: user.bio || '',
        picture: '',
        role: user.role || '',
        id: user._id || ''
      })

      setExistingPicture(user.picture || '')
    }
  }, [])

  // Profile picture upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file')
      setImageFile(false)
      e.target.value = ''
      return
    }

    setUserDetails(prev => ({
      ...prev,
      picture: file
    }))

    setPreview(URL.createObjectURL(file))
    setImageFile(true)
  }

  // Confirm password validation
  const checkPassword = (value) => {
    setUserDetails(prev => ({
      ...prev,
      cPassword: value
    }))

    setPasswordMatch(userDetails.password === value)
  }

  // Reset profile details
  const resetProfile = () => {
    const storedUser = sessionStorage.getItem('user')

    if (!storedUser) return

    const user = JSON.parse(storedUser)

    setUserDetails({
      username: user.username || '',
      password: '',
      cPassword: '',
      bio: user.bio || '',
      picture: '',
      role: user.role || '',
      id: user._id || ''
    })

    setExistingPicture(user.picture || '')
    setPreview('')
    setImageFile(true)
    setPasswordMatch(true)
  }

  // Update admin profile
  const handleUpdateUser = async () => {
    const { username, password, cPassword, bio, picture, id } = userDetails

    if (!username.trim()) {
      toast.info('Please enter your username')
      return
    }

    if (!id) {
      toast.error('User ID not found. Please login again.')
      return
    }

    // Password is optional unless the user starts changing it
    if (password || cPassword) {
      if (!password || !cPassword) {
        toast.info('Please enter and confirm your new password')
        return
      }

      if (password !== cPassword) {
        setPasswordMatch(false)
        toast.error('Passwords do not match')
        return
      }
    }

    try {
      setLoading(true)

      const reqBody = new FormData()

      reqBody.append('username', username)
      reqBody.append('bio', bio)
      reqBody.append('role', userDetails.role)
      reqBody.append('id', id)

      if (password) {
        reqBody.append('password', password)
      }

      if (preview && picture) {
        reqBody.append('picture', picture)
      } else if (existingPicture) {
        reqBody.append('picture', existingPicture)
      }

      const result = await userupdateAPI(id, reqBody)

      if (result.status === 200) {
        toast.success('Profile updated successfully')

        // Keep session data in sync with updated profile
        const storedUser = JSON.parse(
          sessionStorage.getItem('user') || '{}'
        )

        const updatedUser = {
          ...storedUser,
          username,
          bio,
          picture: preview && picture
            ? result.data.picture || existingPicture
            : existingPicture
        }

        sessionStorage.setItem('user', JSON.stringify(updatedUser))

        setTimeout(() => {
          sessionStorage.clear()
          navigate('/login')
        }, 2000)
      }
    } catch (error) {
      console.error(error)
      toast.error(
        error.response?.data?.message ||
        'Failed to update profile. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AdminHeader />

      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        <div className="col-span-4 p-5 md:p-10">
          <h1 className="text-3xl font-bold text-center mb-10 mt-5">
            Settings
          </h1>

          <div className="md:grid grid-cols-2 items-center gap-6">

            {/* Information section */}
            <div>
              <h2 className="text-xl mb-5 font-bold">
                Welcome, Admin 👋
              </h2>

              <p className="text-justify">
                This is your personal administration space
                where you can manage your account details,
                system preferences, and platform roles with ease.
              </p>

              <p className="text-lg my-5">
                🔧 What You Can Manage in This Section:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Update personal details and profile picture</li>
                <li>Change your password securely</li>
                <li>Manage your account information</li>
                <li>Maintain your administrative profile</li>
              </ul>

              <p className="my-5 text-justify">
                Keep your profile updated to ensure your
                administrative tools work smoothly and securely.
              </p>
            </div>

            {/* Edit profile section */}
            <div className="flex justify-center items-center flex-col bg-blue-200 rounded-lg p-5 md:p-10">

              <label
                htmlFor="userProfile"
                className="cursor-pointer"
              >
                <input
                  onChange={handleFileUpload}
                  type="file"
                  id="userProfile"
                  accept="image/*"
                  hidden
                />

                <img
                  className="w-40 h-40 md:w-50 md:h-50 rounded-full object-cover"
                  src={
                    preview
                      ? preview
                      : !existingPicture
                        ? 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png'
                        : existingPicture.startsWith('https://lh3.googleusercontent.com/')
                          ? existingPicture
                          : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`
                  }
                  alt="Admin profile"
                />
              </label>

              {!imageFile && (
                <p className="mt-3 text-red-500 text-sm">
                  Please select an image file
                </p>
              )}

              <p className="mt-2 text-sm text-gray-700">
                Click the picture to change it
              </p>

              {/* Username */}
              <div className="mt-8 mb-3 w-full">
                <input
                  value={userDetails.username}
                  onChange={e =>
                    setUserDetails(prev => ({
                      ...prev,
                      username: e.target.value
                    }))
                  }
                  type="text"
                  placeholder="Username"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              {/* New password */}
              <div className="mt-2 mb-3 w-full">
                <input
                  value={userDetails.password}
                  onChange={e => {
                    const password = e.target.value

                    setUserDetails(prev => ({
                      ...prev,
                      password
                    }))

                    setPasswordMatch(
                      password === userDetails.cPassword
                    )
                  }}
                  type="password"
                  autoComplete="new-password"
                  placeholder="New Password (optional)"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              {/* Confirm password */}
              <div className="mt-2 mb-3 w-full">
                <input
                  value={userDetails.cPassword}
                  onChange={e => checkPassword(e.target.value)}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm New Password"
                  className="w-full border border-gray-300 rounded p-2"
                />

                {!passwordMatch && (
                  <p className="mt-2 text-red-500 text-sm">
                    Passwords do not match
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 w-full mt-5">
                <button
                  onClick={resetProfile}
                  disabled={loading}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded disabled:opacity-50"
                >
                  Reset
                </button>

                <button
                  onClick={handleUpdateUser}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={3000}
      />
    </div>
  )
}

export default AdminSettings
