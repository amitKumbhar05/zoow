import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/AuthSlice'
import axios from 'axios'



function Navbar() {
  const dispatch = useDispatch()
  const logouthandle = ()=>{
    axios.get('http://localhost:4000/logout')
    .then((res)=>{
      dispatch(logout())
    })
    .catch((err)=>{
      console.log('error:',err);
    })
  }

  const islog = useSelector(state=>state.auth.isLoggedIn)
  return (
    <div>
      <nav className="navbar bg-gray-100 h-[60px] flex pl-[20px] w-full">
        <Link to='/'><div className='self-center text-2xl font-bold cursor-pointer'><h1>ZOO<span className='text-red-600'>W</span></h1></div></Link>
        <ul className="flex justify-end gap-10 items-center w-full">
          <li className='font-bold'><Link to='/'>HOME</Link></li>
          <li className='font-bold'><Link to='/animals'>ANIMALS</Link></li>
          <li className='font-bold'><Link to='/contact'>CONTACT</Link></li>
          <li className='font-bold'><Link to='/about'>About Us</Link></li>
          <li className='font-bold bg-purple-500 text-gray-900 p-2 rounded-xl'><Link to='/buy'>Buy Tickets</Link></li>
          {islog? (
            <button onClick={logouthandle} className="bg-red-700 text-white font-bold mr-3 p-2 rounded-lg">Log Out</button>
          ):(
            <button className="bg-green-700 text-white font-bold mr-3 p-2 rounded-lg"><Link to='/login'>Login</Link></button>
          )}
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
