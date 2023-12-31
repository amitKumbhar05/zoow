import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


function Users() {

    const [data, setData] = useState([])

    const handleEmailClick = (id)=>{
        axios.post('http://localhost:4000/delete',{id})
        .then((res)=>{
            if(res.data=='deleted')
            {
                Swal.fire(
                    'Success',
                    'User Deleted Successfully!',
                    'success'
                )
            }
            else
            {
                Swal.fire(
                    'Error',
                    'User Not Deleted!',
                    'error'
                )
            }
        })
        .catch((err)=>{
            console.error('fetch error',err);
            Swal.fire(
                'Error',
                'User Not Deleted!',
                'error'
            )
        })
    }

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log("Error while inquires:", error);
            })
    }, [])

    const date = new Date()
    return (
        <div className='bg-white flex flex-col m-10 w-full  h-screen'>
            <h1 className='font-bold text-xl text-gray-600'>List Of Users</h1>
            <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="w-full overflow-x-auto mt-10">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date Added
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.first_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.last_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.username}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.date_only}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-center text-sm font-medium border border-gray-300">
                                    <p onClick={()=>handleEmailClick(row.id)} className="text-red-600 hover:text-indigo-900 cursor-pointer">
                                        Delete</p>
                                </td>
                            </tr>

                        ))}
                        {/* {console.log(data)} */}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users
