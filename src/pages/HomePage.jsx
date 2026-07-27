import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {
     const query = useSelector((store) => store.search?.query ?? '')
     const hasValidQuery = typeof query === 'string' && query.trim().length > 0

  return (
    <div className='min-h-[calc(100vh-96px)] bg-slate-950 text-white'>
      <SearchBar />
      {!hasValidQuery ? (
        <section className='mx-auto flex min-h-[60vh] w-full flex-col justify-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 px-10 py-14 shadow-2xl shadow-cyan-500/10'>
          <div className='max-w-3xl space-y-6'>
            <p className='inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300'>Discover media instantly</p>
            <h1 className='text-5xl font-semibold tracking-tight text-white sm:text-6xl'>Search Photos, Videos & GIFs in one place</h1>
            <p className='text-lg leading-8 text-slate-300'>Type any keyword and explore high-quality media from multiple sources. Save your favorites to collections and keep them ready for later.</p>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur-lg'>
              <h2 className='mb-3 text-xl font-semibold text-white'>Fast search</h2>
              <p className='text-sm text-slate-300'>Find images, videos, and GIFs quickly with one search.</p>
            </div>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur-lg'>
              <h2 className='mb-3 text-xl font-semibold text-white'>Save favorites</h2>
              <p className='text-sm text-slate-300'>Save media items to your collections for easy access later.</p>
            </div>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur-lg'>
              <h2 className='mb-3 text-xl font-semibold text-white'>One dashboard</h2>
              <p className='text-sm text-slate-300'>Browse results and manage collections without leaving the app.</p>
            </div>
          </div>

          <div className='flex flex-col gap-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 text-slate-300 sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-sm'>Start by entering a search term above, then choose Photos, Videos, or GIFs.</p>
            <span className='inline-flex rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950'>Try “nature” or “city life”</span>
          </div>
        </section>
      ) : (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      )}
    </div>
  )
}

export default HomePage
