import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 mx-auto flex w-full items-center justify-between gap-6 bg-slate-900 px-10 py-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl'>
            <div className='flex flex-col'>
                <span className='text-lg font-semibold tracking-tight text-white'>MediaSearch</span>
                <span className='text-sm text-slate-400'>Search photos, videos & GIFs</span>
            </div>
            <div className='flex gap-4'>
                <Link className='rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:text-white active:scale-95' to='/'>Search</Link>
                <Link className='rounded-full border border-slate-700/80 bg-slate-900 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white active:scale-95' to='/collection'>Collections</Link>
            </div>
        </div>
    )
}
export default Navbar