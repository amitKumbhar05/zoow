import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const BuyTicket = () => {
    const navigate = useNavigate()
    const ad = localStorage.getItem('adult')
    const ch = localStorage.getItem('child')
    const username = useSelector(state=>state.auth.Data?.username)
    const email = useSelector(state=>state.auth.Data?.email)
    
    const status = useSelector((state) => state.auth.isLoggedIn)
    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    
    

    

    const handlesubmit = (e) => {
        e.preventDefault();
        const total = (ad * adult) + (ch * child)
        axios.post('http://localhost:4000/buy',{
            username,adult,child,total,email
        })
        .then((res)=>{
            Swal.fire(
                'Success',
                'Check Your Email',
                'success'
            )
            
        })
        .catch((err)=>{
            console.error('fetch error:',err);
        })
    }

    useEffect(() => {
        if (!status) {
            navigate('/login')
        }
      }, [status])

    return (
        <div className='h-[70vh] pt-10 w-full'>

            <div className='m-10 shadow-black shadow-sm flex '>
                <form action="post" className='w-full'>
                    <div className='m-3'>
                        <h1 className='pl-2 font-bold text-xl'>Number Of Adults :</h1>
                        <input type="number" value={adult} onChange={(e) => setAdult(e.target.value)} placeholder='Number Of Adults' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <h1 className='pl-2 font-bold text-xl'>Number Of Childrens :</h1>
                        <input type="number" value={child} onChange={(e) => setChild(e.target.value)} placeholder='Number Of Childrens' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <br />
                        <button type='submit' onClick={handlesubmit} className='p-5 bg-green-700 ml-2 rounded-lg text-white font-bold'>Submit</button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default BuyTicket
