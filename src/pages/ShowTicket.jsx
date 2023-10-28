import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiRupee } from 'react-icons/bi'
import Swal from 'sweetalert2'



const ShowTicket = () => {
    const [data, setData] = useState([])
    let tl = 0;

    const fn = ()=>{
        data.map((row)=>(tl+=row.total))

    }
    

    useEffect(() => {
        axios.get('http://localhost:4000/buy')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.error('fetch error', err);
            })
    }, [])

    return (
        <div className='bg-white flex flex-col m-10 w-full  h-screen'>
            <h1 className='font-bold text-xl text-gray-600'>List Of Users</h1>
            <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="w-full overflow-x-auto mt-10">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date Added
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Adult
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Child
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.date_only}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.username}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.adult}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.child}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-center text-sm font-medium border border-gray-300">
                                    {`₹ ${row.total}`}
                                </td>
                            </tr>
                        ))}
                        <tr>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    Total
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-center text-sm font-medium border border-gray-300">
                                    {fn()}
                                    {`₹ ${tl}`}
                                </td>
                            </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ShowTicket
