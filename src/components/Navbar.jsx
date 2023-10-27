import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div>
      <nav className="navbar bg-gray-100 h-[60px] flex pl-[20px] w-full">
        <Link to='/'><div className='self-center text-2xl font-bold cursor-pointer'><h1>ZOO<span className='text-red-600'>W</span></h1></div></Link>
        <ul className="flex justify-end gap-10 items-center w-full">
          <li className='font-bold'><Link to='/'>HOME</Link></li>
          <li className='font-bold'><Link to='/animals'>ANIMALS</Link></li>
          <li className='font-bold'><Link to='/contact'>CONTACT</Link></li>
          <li className='font-bold'><Link to='/about'>About Us</Link></li>
          <button className="bg-green-700 text-white font-bold mr-3 p-2 rounded-lg"><Link to='/admin'>Login</Link></button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
