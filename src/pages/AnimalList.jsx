import React from 'react'
import Animals from './Animals'
import {NavLink } from 'react-router-dom'
NavLink

function AnimalList() {
  return (
    <div className='min-h-full flex flex-col'>
        <div className='m-10'>
            <NavLink to='/admin/addanimal'>
                <div className='bg-blue-800 w-[17vw] text-center text-white font-bold text-xl rounded-xl p-3'>Add Animal</div>
            </NavLink>
            <Animals/>

        </div>
    </div>
  )
}

export default AnimalList
