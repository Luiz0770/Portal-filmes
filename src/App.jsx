import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className='min-h-screen'>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
