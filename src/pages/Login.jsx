import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")

    const handlesubmit = (e)=>{
        // const queryParams = `?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
        e.preventDefault();
        axios.post(`http://localhost:4000/login`,{
          username:username,
          password:password
        })
        .then((res)=>{
            // console.log(res);
            if(res.data!=='User not found')
            {
              Swal.fire(
                'Success',
                'Logged In Successfully!',
                'success'
              )
            }
            else
            {
              Swal.fire(
                'Error',
                'Wrong Credentials',
                'error'
              )
            }
        }).catch((error)=>{
            console.error(error)
        })
    }
  return (
    <div className='h-[70vh] pt-10'>
      <div className='m-10 shadow-black shadow-sm flex '>
        <form action="post" className='w-full'>
            <div className='m-3'>
                <h1 className='pl-2 font-bold text-xl'>Username :</h1>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                <h1 className='pl-2 font-bold text-xl'>Password :</h1>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                <br />
                <button type='submit' onClick={handlesubmit} className='p-5 bg-green-700 ml-2 rounded-lg text-white font-bold'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
