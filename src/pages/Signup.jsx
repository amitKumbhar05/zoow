import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Signup = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({
        username:'',
        password:'',
        first_name:'',
        last_name:'',
        email:''
    })
    
    const handlechange = (e)=>{
        const {name,value} = e.target
        setData(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/signup',data)
        .then((res)=>{
            Swal.fire(
                'Success',
                'Registered Successfully!',
                'success'
              )
            navigate('/login');
        })
        .catch((err)=>{
            console.error('fetch error',err);
            Swal.fire(
                'Error',
                'Something Went Wrong! ',
                'error'
              )
        })
    }

    return (
        <div className='min-h-[100vh] pt-10 mb-10'>

            <div className='m-10 shadow-black shadow-sm flex '>
                <form action="post" className='w-full'>
                    <div className='m-3'>
                        <h1 className='pl-2 font-bold text-xl'>First Name :</h1>
                        <input name='first_name' type="text" value={data.first_name} onChange={handlechange} placeholder='First Name' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <h1 className='pl-2 font-bold text-xl'>Last Name :</h1>
                        <input name='last_name' type="text" value={data.last_name} onChange={handlechange} placeholder='Last Name' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <h1 className='pl-2 font-bold text-xl'>Username :</h1>
                        <input name='username' type="text" value={data.username} onChange={handlechange} placeholder='Username' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <h1 className='pl-2 font-bold text-xl'>Email :</h1>
                        <input name='email' type="email" value={data.email} onChange={handlechange } placeholder='Email' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <h1 className='pl-2 font-bold text-xl'>Password :</h1>
                        <input name='password' type="password" value={data.password} onChange={handlechange } placeholder='Password' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <br />


                        <button type='submit' onClick={handlesubmit} className='p-5 bg-violet-700 ml-2 rounded-lg text-white font-bold'>Sign Up</button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup
