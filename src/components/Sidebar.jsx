import React from 'react'
import { Link } from 'react-router-dom'
import {BiSolidDashboard} from 'react-icons/bi'
import {GiElephant} from 'react-icons/gi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {IoTicketSharp} from'react-icons/io5'


function Sidebar() {
    return (
        <div>
            <div className="bg-gray-900 w-64 h-full">
                {/* Logo */}
                <div className="p-4 text-white text-2xl bg-gray-800 font-semibold"><Link to='/'>ZOO<span className='text-red-600'>W</span></Link></div>

                {/* Sidebar Items */}
                <div className="py-4">
                    <ul className="space-y-2">
                        <li>
                            <Link to='/admin' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><BiSolidDashboard className='mr-2'/>
                                Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/admin/animallist' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><GiElephant className='mr-2'/>
                                Animal List</Link>
                        </li>
                        <li>
                            <Link to='/admin/users' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><FiUsers className='mr-2'/>
                                Users</Link>
                        </li>
                        <li>
                            <Link to='/admin/inquires' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><AiOutlineQuestionCircle className='mr-2'/>

                                Inquires</Link>
                        </li>
                        <li>
                            <Link to='/admin/showticket' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><IoTicketSharp className='mr-2'/>

                                Inquires</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
