import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function ContactUs() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    contact: 0,
    message: 'message'
  })
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/contact', data)
      .then((res) => {
        Swal.fire(
          'Success',
          'Inquiry Sent Successfully!',
          'success'
        )
        setData({
          fullname: "",
          email: "",
          contact: 0,
          message: 'message'
        })
      }).catch((error) => {
        Swal.fire(
          'ERROR!',
          'Something went wrong?',
          'error'
        )
      })

  }
  return (
    <div className='flex w-full '>
      <div className='w-full m-4 shadow-black shadow-sm'>
        <h1 className='font-semibold text-lg pl-2'>Email :</h1>
        <p className='pl-5 text-gray-900'>amit@one.com</p>
        <h1 className='font-semibold text-lg pl-2'>Telephone :</h1>
        <p className='pl-5 text-gray-900'>456-987-1231</p>
        <h1 className='font-semibold text-lg pl-2'>Mobile NO. :</h1>
        <p className='pl-5 text-gray-900'>09123456987 / 094563212222</p>
        <h1 className='font-semibold text-lg pl-2'>Address :</h1>
        <p className='pl-5 text-gray-900'>7087 Henry St. Clifton Park, NY 12065 - updated</p>

      </div>

      <div className='w-full m-4 shadow-black shadow-sm flex'>
        <form action="post" className='w-full'>
          <div className='m-3'>
            <h1 className='pl-2 font-bold text-xl'>Fullname :</h1>
            <input type="text" value={data.fullname} onChange={(e) => setData(prev => ({ ...prev, fullname: e.target.value }))} placeholder='Fullname' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
            <h1 className='pl-2 font-bold text-xl'>Email :</h1>
            <input type="email" value={data.email} onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))} placeholder='Email' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
            <h1 className='pl-2 font-bold text-xl'>Contact :</h1>
            <input type="number" value={data.contact} onChange={(e) => setData(prev => ({ ...prev, contact: e.target.value }))} placeholder='Contact' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
            <h1 className='pl-2 font-bold text-xl'>Message :</h1>
            <textarea value={data.message} onChange={(e) => setData(prev => ({ ...prev, message: e.target.value }))} className='p-2 w-[60%] shadow-sm shadow-black m-2' placeholder='Message'></textarea>
            <br />
            <button type='submit' onClick={handlesubmit} className='p-5 bg-green-700 ml-2 rounded-lg text-white font-bold'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
