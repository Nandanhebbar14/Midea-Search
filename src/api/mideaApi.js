import axios from 'axios'

const UNSPLASH_KEY= import.meta.env.VITE_UNSPLASH_KEY
const PAXELS_KEY= import.meta.env.VITE_PAXELS_KEY
const TENOR_KEY= import.meta.env.VITE_TENOR_KEY

export async function fetchPhotos(query,page=1,per_page=20) {
    const res=await axios.get('https://api.unsplash.com/search/photos',
       { params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}}
    )
    return res.data
}

export async function fetchVideos(query,page=1,per_page=20) {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page, per_page },
        headers: { Authorization: PAXELS_KEY }
    })
    return res.data
}
export async function fetchGIF(query,limit=20) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: { q: query, api_key: TENOR_KEY, limit }
    })
    return res.data
}