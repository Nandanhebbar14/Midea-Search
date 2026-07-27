import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto w-full  px-4 pb-16 sm:px-6 lg:px-10">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage />} />
        </Routes>
      </main>

      <ToastContainer />
    </div>
  )
}
export default App