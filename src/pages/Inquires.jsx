import axios from 'axios'
import React, { useEffect, useState } from 'react'



function Inquires() {

    const [data,setData] = useState([])

    const handleEmailClick = (emailAddress) => {
        const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
        window.open(emailLink, '_blank');
      };

    useEffect(()=>{
        axios.get('http://localhost:4000/inquires')
        .then((res)=>{
            setData(res.data)
        })
        .catch((error)=>{
            console.log("Error while inquires:",error);
        })
    },[])
    
    const date = new Date()
    return (
        <div className='bg-white flex flex-col m-10 w-full  h-screen'>
            <h1 className='font-bold text-xl text-gray-600'>List Of Inquires</h1>
            <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="w-full overflow-x-auto mt-10">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Message
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date Added
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row)=>(
                            <tr key={row.id}>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.fullname}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.message}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.date_only}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                                    {row.email}
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium border border-gray-300">
                                    <p onClick={()=>handleEmailClick(row.email)} className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                                        Reply</p>
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

export default Inquires
