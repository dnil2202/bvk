import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate()
return (
    <div className='bg-transparent shadow-lg w-full fixed'>
        <div className='py-5 mx-10'>
            <div className='flex justify-between'>
                <p className='text-xl font-semibold cursor-pointer hover:text-teal-600 ' onClick={()=>navigate('/')}>Finding Cat</p>
                <div className='flex gap-5'>
                    <a className='cursor-pointer text-xl hover:text-teal-600'onClick={()=>navigate('/list')}>Catalog</a>
                </div>
                </div>
        </div>
    </div>
)
}

export default Navbar