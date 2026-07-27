import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mideaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    const dispatch=useDispatch()

    useEffect(() => {
        if (!query) return

        const getData = async () => {
           try {
            dispatch(setLoading())
             let data=[]
            if (activeTab == 'Photos') {
                const res = await fetchPhotos(query)
                 console.log(res.results)
                data = res.results.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src: item.urls.full,
                    url: item.links.html
                }))
            }
            if (activeTab === 'Videos') {
                const res = await fetchVideos(query)
               
                data = res.videos.map((item) => ({
                    id: item.id,
                    type: 'video',
                    title: item.user.name || 'Video',
                    thumbnail: item.image,
                    src: item.video_files[0].link,
                    url:item.url

                }))
            }
            if (activeTab === 'GIF') {
                const res = await fetchGIF(query)
                
                data = res.data.map((item) => ({
                    id: item.id,
                    type: 'gif',
                    title: item.title || 'GIF',
                    thumbnail: item.url,
                    src: item.images.downsized.url,
                    url:item.url


                }))
            }
            dispatch(setResults(data))
           } catch (err) {
            dispatch(setError(err.message))
           }
        }
        getData()
    }, [query, activeTab])
if(error) return <h1 className='h-96 w-full flex justify-center items-center'>Sorry, No {activeTab} on this search...</h1>
if(loading) return <h1 className='h-96 w-full flex justify-center items-center'>Please wait while Loading....</h1>
    return (
        <div className='mt-5 flex justify-between gap-4 w-full flex-wrap overflow-auto px-10'>
            {results.map((item,idx)=>{
                return (
                    <div key={idx} >
                        <ResultCard item={item}/>
                    </div>
                )
            })}

        </div>
    )
}

export default ResultGrid
