import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';


function Animalinfo() {
    const {id} = useParams();
    const wrong = () =>{
        Swal.fire(
            'Error',
            'Something Went Wrong!',
            'error'
        )
    }
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:4000/aninfo?id=${id}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log('err:',err)
        })
    },[id])
    // return (
    //     <div>
    //         {wrong()}
    //     </div>
    // )

  return (
    <div className='min-h-[100vh] flex flex-col items-center m-5 shadow-md shadow-black mx-36'>
      <div className=''>
        <img src={`/${data[0]?.image_path}`} alt="Image" className='w-[560px] border-2 mt-4 border-black h-[320px]' />
      </div>
      <div className='mt-10 self-start w-full mb-2'>
        <h1 className='ml-24 font-semibold text-xl text-gray-700'>Cage No.</h1>
        <p className='ml-28 text-lg font-medium p-2'>{data[0]?.cage_no}</p><hr />
        <h1 className='ml-24 font-semibold text-xl text-gray-700'>Name</h1>
        <p className='ml-28 text-lg font-medium p-2'>{data[0]?.name}</p><hr />
        <h1 className='ml-24 font-semibold text-xl text-gray-700'>Status</h1>
        <div className='ml-28 text-lg font-medium p-2'>{(data[0]?.status)?(<div className='bg-green-600 w-16 rounded-md text-white text-center'>Active</div>):(<div className='bg-red-600 w-16 rounded-md text-white text-center'>Not active</div>)}</div><hr />

        <h1 className='ml-24 font-semibold text-xl text-gray-700'>Description</h1>
        <p className='ml-28 text-lg font-medium p-2'>{data[0]?.description}</p>

      </div>

    </div>
  )
}

export default Animalinfo
