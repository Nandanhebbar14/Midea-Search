import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removetoastify } from '../redux/features/collectionSlice'

const Collections = ({item}) => {
    const dispatch=useDispatch()

    const removeItem=(item)=>{
        dispatch(removeCollection(item))
        dispatch(removetoastify())
    }
  return (
     <div className=' w-[17vw] h-80 bg-white relative rounded-xl overflow-hidden'>
            <a href={item.url} className=' h-full '>
                {item.type === 'photo' ? <img src={item.src} alt="" className='w-full h-full object-cover object-center' /> : ''}
                {item.type === 'video' ? <video src={item.src} alt="" className='w-full h-full object-cover object-center' autoPlay loop muted /> : ''}
                {item.type === 'gif' ? <img src={item.src} alt="" className='w-full h-full object-cover object-center' /> : ''}
            </a>

            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 absolute bottom-0 text-white py-4'>
                <h6 className='text-center font-semibold capitalize '>{item.title}</h6>
                <button 
                onClick={()=>{
                 removeItem(item)
                }}
                className='bg-indigo-600 text-white rounded px-3 py-1 cursor-pointer font-medium active:scale-95'>Remove</button>
            </div>
        </div>
  )
}

export default Collections
