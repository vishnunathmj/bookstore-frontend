import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './user/pages/Home'
import Contact from './user/pages/Contact'
import Books from './user/pages/Books'
import Profile from './user/pages/Profile'
import View from './user/pages/View'

import AdminDashboard from './admin/pages/AdminDashboard'
import AdminResources from './admin/pages/AdminResources'
import AdminSettings from './admin/pages/AdminSettings'

import Auth from './pages/Auth'
import Pnf from './pages/Pnf'

import Preloader from './components/Preloader'
import Footer from './components/Footer'
import { useContext, useState } from 'react'
import PaymentFailed from './user/pages/PaymentFailed'
import PaymentSuccess from './user/pages/PaymentSuccess'
import { routeContext } from './contextAPI/RouteGaurd'



function App() {


  const { role, setRole, authorisedUser, setAuthorisedUser } = useContext(routeContext)
  const [isLoading, setIsLoading] = useState(true)


  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  return (
    <>
      <Routes>
        <Route path='/' element={isLoading ? <Preloader /> : <Home />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />

        {
          role == "user" &&
          <>
            <Route path='/books' element={<Books />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/book/:id' element={<View />} />
            <Route path='/failed' element={<PaymentFailed />} />
            <Route path='/success' element={<PaymentSuccess />} />
          </>
        }

        {
          role == "admin" &&
          <>
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/admin/resources' element={<AdminResources />} />
            <Route path='/admin/settings' element={<AdminSettings />} />
          </>

        }

        <Route path='/*' element={<Pnf />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
