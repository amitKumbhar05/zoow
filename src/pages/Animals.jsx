import React, { useEffect, useState } from 'react'
import carousel from '../images/carousel-2.jpg'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Animals() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/addani')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <div className='min-h-[70vh]'>
            <h1 className='font-bold text-xl text-gray-600'>List Of Animals</h1>
            <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className='flex flex-wrap justify-around gap-[2vw]'>

                {data.map((anm) => (
                    <div className="w-80 h-36 flex gap-3 bg-white rounded-lg shadow-md shadow-green-300 p-4" key={anm.id}>
                        <div className="w-2/5">
                            <img src={`/${anm.image_path}`} alt="Card Image" className="w-full rounded-lg" />
                        </div>

                        <div className="w-3/5 pr-4">
                            <h2 className="text-xl font-semibold">{anm.name}</h2>
                            <p className="text-gray-600">Cage No: {anm.cage_no}</p>
                            <div className="mt-4">
                                <NavLink to={`/animalinfo/${anm.id}`} className="text-blue-500">View More</NavLink>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default Animals
