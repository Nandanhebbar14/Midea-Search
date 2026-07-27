import React from 'react'
import { useSelector } from 'react-redux'
import Collections from '../components/Collections'

const CollectionPage = () => {
  const collections = useSelector((state) => state.collections.items)
  return (
    <div className='mt-5 flex flex-wrap justify-between gap-4 w-full overflow-auto px-5'>
      {collections.map((item, idx) => (
        <Collections key={idx} item={item} />
      ))}
    </div>
  )
}

export default CollectionPage
