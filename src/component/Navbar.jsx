import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate()
return (
    <div className='bg-transparent shadow-lg w-full'>
        <div className='py-5 mx-10'>
            <div className='flex justify-between'>
                <p className='text-xl font-semibold'>Finding Cat</p>
                <div className='flex gap-5'>
                    <a className='cursor-pointer text-xl' onClick={()=>navigate('/')}>Home</a>
                    <a className='cursor-pointer text-xl'onClick={()=>navigate('/list')}>List</a>
                </div>
                <div className='flex gap-5'>
                    <button className='bg-teal-300 rounded-lg text-white px-4 py-2 border border-teal-300 hover:bg-white hover:text-teal-300'>Sign in</button>
                    <button className='bg-white rounded-lg text-teal-300 px-4 py-2 border border-teal-300 hover:bg-teal-300 hover:text-white'>Sign out</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Navbar