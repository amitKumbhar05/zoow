import React from 'react'
import { Link } from 'react-router-dom'


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
                            <Link to='' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M5 12L19 12"></path>
                            </svg>
                                Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/admin/animallist' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12" y2="16"></line>
                            </svg>
                                Animal List</Link>
                        </li>
                        <li>
                            <Link to='/admin/users' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                <path d="M21 15a3 3 0 01-3 3h-4a4 4 0 01-8 0H3"></path>
                            </svg>
                                Users</Link>
                        </li>
                        <li>
                            <Link to='/admin/inquires' className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white"><svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="5" fill="none" />
                                <text className='text-white' x="50" y="50" textAnchor="middle" fontSize="40" dy=".3em">?</text>
                            </svg>

                                Inquires</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
