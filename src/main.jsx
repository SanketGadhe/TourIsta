import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Guide from './Components/Guide.jsx'
import Admin from './Components/Admin.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './Components/Home.jsx'
import TourMap from './Components/TourMap.jsx'
import About from './Components/About.jsx'

const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path='Home' element={<Home/>}/>
      <Route path='Guide' element={<Guide/>}/>
      <Route path='Map' element={<TourMap/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Admin' element={<Admin/>}/>
    </Route>,
  ])
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>

</RouterProvider>
)
