import React, { useEffect } from 'react'
import { Footer, Sidebar } from '../components'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Admin() {
  const typ = useSelector((state)=>state.auth.type)
  const stat = useSelector((state)=>state.auth.isLoggedIn)
  const navigate = useNavigate()
  useEffect(() => {
    if (!(stat && typ=='admin')) navigate('/login')
  }, [stat,typ])
  return(
    <div className='flex min-h-screen'>

      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Admin
