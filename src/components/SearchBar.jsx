import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch=useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        const trimmedText = text.trim()
        dispatch(setQuery(trimmedText))
    }
    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex Obg-gray-900 gap-5 py-10 px-7' >
                <input
                className='w-full bg-gray-700 text-white px-4 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Search...'
                />
                <button 
                className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transition-transform duration-200 '
                type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar