import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
const tabs=['Photos','Videos','GIF']
const dispatch=useDispatch()
const activetab=useSelector((state)=>state.search.activeTab)

  return (
    <div className=' flex items-center gap-5 px-10'>
      {tabs.map((elem,idx)=>{
        return (<button 
        key={idx}
        onClick={()=>{
            dispatch(setActiveTab(elem))
        }}
        className={`transition cursor-pointer active:scale-95 px-5 py-3 rounded ${activetab === elem ? 'bg-blue-700 text-white' : 'bg-gray-700 text-blue-400'}`}
        >
            {elem}
        </button>)

      })}
    </div>
  )
}

export default Tabs
