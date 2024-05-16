import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRScanner from './Components/QRScanner'
import Admin from './Components/Admin'
import Guide from './Components/Guide'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const [placesData, setplacesData] = useState({});
  return (
    <>
  <div className="bg-[#20022d] text-white">
    <Navbar placesData={placesData} setplacesData={setplacesData}/>
    <Outlet placesData={placesData} setplacesData={setplacesData}/>
    </div>  </>
    
  )
}

export default App
