import React, { useEffect } from 'react'
import { Footer, Sidebar } from '../components'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Admin() {
  useEffect(() => {
    if (!auth) navigate('/login')
  }, [])
  const navigate = useNavigate()
  let auth = true
  return !auth ? (<div>Login First</div>) : (
    <div className='flex min-h-screen'>

      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Admin
