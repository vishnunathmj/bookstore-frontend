import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeContext } from '../contextAPI/RouteGaurd'

function Pnf() {

  const { role, setRole, authorisedUser, setAuthorisedUser } = useContext(routeContext)

  const navigate = useNavigate()

  const backToHome = ()=>{
    if(role=="user"){
      navigate('/')
    }else{
      navigate('/admin')
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img width={'100%'} src="https://images.squarespace-cdn.com/content/v1/5bcedfaa65a707df96be0be9/1590102804805-7TNK3DEEF48PFQZSEO84/INCON-ExpertArticle-44-KeyToCreativity-Icon-00.jpg" alt="Page not found" />
      <p>Oh No!!!</p>
      <h3 className="text-2xl font-medium">Look like you're Lost</h3>
      <p>The Page you are looking for is not available</p>
      {
        authorisedUser ?
        <button onClick={backToHome} className='bg-blue-600 rounded px-2 py-3'>Home</button>
        :
        <Link to={'/'}className='bg-blue-600 rounded px-2 py-3'>Back home</Link>
      }
    </div>
  )
}

export default Pnf
