import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'



import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Addanimal() {

  const navigate = useNavigate()

  const [data, setData] = useState({
    cageno: 1,
    animalName: '',
    description: '',
    file:null,
    status: 0
  })

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setData(prev => ({
      ...prev,
      [name]: newValue
    }))
  }
  const handlesubmit = (e) => {
    console.log(data.file);
    const formdata = new FormData()
    formdata.append('image',data.file)
    formdata.append('cageno',data.cageno)
    formdata.append('animalName',data.animalName)
    formdata.append('description',data.description)
    formdata.append('status',data.status)

    e.preventDefault()
    axios.post('http://localhost:4000/addani', formdata)
      .then((res) => {
        console.log(res);
        Swal.fire(
          'Success',
          'Animal Added Successfully!',
          'success'
        )
        navigate('/admin/animallist')
      })
      .catch((err) => {
        Swal.fire(
          'Error',
          'Something Went Wrong!',
          'error'
        )
      })
  }

  return (
    <div className='w-full'>
      <div className='h-[70vh] '>
        <div className='m-10 shadow-black shadow-sm flex '>
          <form action="post" className='w-full'>
            <div className='m-3'>
              <h1 className='pl-2 font-bold text-xl'>Cage No :</h1>
              <input type="number" name='cageno' value={data.cageno} onChange={handleChange} placeholder='Cage No' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
              <h1 className='pl-2 font-bold text-xl'>Animal Name :</h1>
              <input type="text" name='animalName' value={data.animalName} onChange={handleChange} placeholder='Animal Name' className='p-2 shadow-sm w-[60%] shadow-black m-2' />
              <h1 className='pl-2 font-bold text-xl'>Description :</h1>
              <textarea name='description' value={data.description} onChange={handleChange} className='p-2 w-[60%] shadow-sm shadow-black m-2' placeholder='Description'></textarea>
              <h1 className='pl-2 font-bold text-xl'>Status :</h1>
              <select name="status" className='p-3 border-2 border-gray-600 rounded-xl m-3' value={data.status} onChange={handleChange}>
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
              <h1 className='pl-2 font-bold text-xl'>Select Image :</h1>
              <input type="file" name='file' onChange={handleChange} className='p-3 border-2 border-gray-600 rounded-xl m-3' />
              <br />
              <button type='submit' onClick={handlesubmit} className='p-5 bg-green-700 ml-2 rounded-lg text-white font-bold'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addanimal
