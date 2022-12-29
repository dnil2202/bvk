import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const ProductList = ({inputSearch,enter,reset}) => {

    const [dataCat , setDataCat] = useState([])
    const [detailCat,setDetailCat]=useState([])
    const [page, setPage]=useState(0)
    const [refImg,setRefImg]=useState('')

    useEffect(()=>{
        if(reset){
            setDataCat('')
            setPage(0)
        }
    },[reset])

    useEffect(()=>{
        axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=0`)
            .then((res)=>{
                if(res.data.length > 0){
                    setDataCat(res.data)
    
                }else{
                    setPage(0)
                }
            }).catch((err)=>{
                console.log(err)
            })
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`)
            .then((res)=>{
                if(res.data.length > 0){
                    const newData = res.data
                    setDataCat([...dataCat,...newData])
    
                }else{
                    setPage(0)
                }
            }).catch((err)=>{
                console.log(err)
            })
        },500)
    },[page,reset])
    // console.log(page)

    const getDataDetail = () => {
        axios.get(`https://api.thecatapi.com/v1/images/${refImg}`)
        .then((res)=>{
            setDetailCat(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const getDataSearch = () => {
            axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${inputSearch}`)
            .then((res)=>{
                setDataCat(res.data)
            }).catch((err)=>{
                console.log(err)
            })
    }

    useEffect(()=>{
        getDataDetail()
    },[refImg])

    useEffect(()=>{
        if(enter === true){
            getDataSearch()
        }
    },[enter])


    const getMoreData = () =>{
        setPage(prev => prev + 1)
    }

    const printData = () => {
        if(dataCat){
            return dataCat.map((v,i)=>{
                return (
                    <tr key={i}>
                        <td className='text-start'>{v.name}</td>
                        <td className='text-start pl-10'>{v.origin}</td>
                        <td><button className='border border-teal-300 px-2 rounded-lg ml-10 hover:bg-teal-600 hover:text-white'onClick={(e)=>setRefImg(e.target.value)} value={v.reference_image_id}>See Detail</button></td>
                    </tr>
                )
            })

        }
    }

    const printDetail = () =>{
        if(detailCat.breeds){
            return detailCat.breeds.map((v,i)=>{
                return (
                    <div key={i}>
                        <p className='font-bold'>{v.name}</p>
                        <p>Weight : {v.weight.metric}</p>
                        <p>temprament : {v.temperament}</p>
                        <p className='mt-3'>{v.description}</p>
                    </div>
                )
            })
            
        }
    }

return (
    <div className='grid grid-cols-2'>
        <div id='dataList' className='w-2/3 h-80 overflow-y-scroll '>
            <div className=''>
                <InfiniteScroll
                dataLength={dataCat.length}
                next={getMoreData}
                hasMore={true}
                loader={
                    <div className='animate-bounce flex justify-center mt-10'>
                        <p className='rounded-lg bg-teal-400 px-4 py-1'>Loading</p>
                    </div>
                }
                scrollableTarget='dataList'
                >
                <table className=''>
                    <thead>
                        <tr className=''>
                            <th className='text-start py-3'>Name</th>
                            <th className='text-start pl-10'>Country</th>
                            <th className='text-start pl-10'>Detail</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {printData()}
                    </tbody>
                </table>
                        </InfiniteScroll>
            </div>
        </div>
        <div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    detailCat.length === undefined &&
                    <img src={detailCat.url} className='w-full h-56 shadow-lg' />
                }
                {printDetail()}
            </div>
        </div>
    </div>
)
}

export default ProductList