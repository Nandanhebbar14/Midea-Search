import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection,toastify } from '../redux/features/collectionSlice'


const ResultCard = ({ item }) => {
    const dispatch=useDispatch()
const addNewData=(item)=>{
    dispatch(addCollection(item))
    dispatch(toastify())
}
    return (
        <div className=' w-[15vw] h-80 bg-white relative rounded-xl overflow-hidden'>
            <a href={item.url} className=' h-full '>
                {item.type === 'photo' ? <img src={item.src} alt="" className='w-full h-full object-cover object-center' /> : ''}
                {item.type === 'video' ? <video src={item.src} alt="" className='w-full h-full object-cover object-center' autoPlay loop muted /> : ''}
                {item.type === 'gif' ? <img src={item.src} alt="" className='w-full h-full object-cover object-center' /> : ''}
            </a>

            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 absolute bottom-0 text-white py-4'>
                <h6 className='text-center font-semibold capitalize '>{item.title}</h6>
                <button 
                onClick={()=>{
                    addNewData(item)
                }}
                className='bg-indigo-600 text-white rounded px-3 py-1 cursor-pointer font-medium active:scale-95'>Save</button>
            </div>
        </div>
    )
}

export default ResultCard
