import React, { useEffect, useState } from 'react'
import ProductList from '../component/ProductList'

const ListPages = () => {
    const [input,setInput] = useState('')
    const [enter, setEnter] = useState(false)
    const [reset, setReset]=useState(false)

    const goSearch = () => {
        setEnter(true)
    }

    useEffect(()=>{
        if(enter === true){
            setEnter(false)
        }
        if(reset === true){
            setReset(false)
        }
    },[enter,reset])

    const onReset = () =>{
        setReset(true)
        setInput('')
    }


  return (
    <div className='pt-24 container mx-auto px-10'>
        <div className=''>
            <div>
                <div className=''>
                    <label className=''>Search</label>
                    <input className='border border-blue-700 ml-2'placeholder='search something' value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <button className='bg-teal-200 ml-2 px-2 rounded-md'onClick={goSearch}>go</button>
                    <button className='bg-red-500 ml-2 px-2 rounded-md text-white'onClick={onReset}>reset</button>
                </div>
                <div className='pt-12'>
                    <ProductList 
                    inputSearch={input}
                    enter={enter}
                    reset={reset}
                    
                    />
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default ListPages