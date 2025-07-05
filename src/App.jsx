
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Ticket from './Pages/Ticket'
import Details from './Pages/Details'
import { ToastContainer } from 'react-toastify'
import CheckOut from './Pages/CheckOut'

function App()
{


  return (
    <>
      <Router>
        <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          {/* navbar */}
          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tickets' element={<Ticket />} />
            <Route path='/ticket-details/detail' element={<Details />} />
            <Route path='/tickets/checkout' element={<CheckOut />} />
          </Routes>
          <Footer />


        </main>
      </Router>

    </>
  )
}

export default App
