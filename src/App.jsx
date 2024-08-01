import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Start from './Components/Start/Start'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  let routers = createBrowserRouter ([
      {path: '' , element: <Layout/> , children:[
      {index: true , element: <Start/>},
      {path: 'about' , element: <About/>},
      {path: 'portfolio' , element: <Portfolio/>},
      {path: 'contact' , element: <Contact/>},
      {path: 'footer' , element: <Footer/>},
      {path: 'navbar' , element: <Navbar/>},
    ]}
  ])
    
  
  return<>
   
    <RouterProvider router={routers}></RouterProvider>

    </>
  
}

export default App
