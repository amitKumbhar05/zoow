import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ChangePrice = () => {
    const [adult,setAdult] = useState('')
    const [child,setChild] = useState('')

    const handlesubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem('adult',adult)
        localStorage.setItem('child',child)
        Swal.fire(
            'Success',
            'Values Changed Successfully!',
            'success'
        )
    }

    return (
        <div className='h-[70vh] pt-10 w-full'>

            <div className='m-10 shadow-black shadow-sm flex '>
                <form action="post" className='w-full'>
                    <div className='m-3'>
                        <h1 className='pl-2 font-bold text-xl'>Adult's Price :</h1>
                        <input type="number" value={adult} onChange={(e) => setAdult(e.target.value)} placeholder="Adult's Price" className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <h1 className='pl-2 font-bold text-xl'>Children's Price :</h1>
                        <input type="number" value={child} onChange={(e) => setChild(e.target.value)} placeholder="Children's Price" className='p-2 shadow-sm w-[60%] shadow-black m-2' />
                        <br />
                        <button type='submit' onClick={handlesubmit} className='p-5 bg-green-700 ml-2 rounded-lg text-white font-bold'>Submit</button>
                        
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ChangePrice
