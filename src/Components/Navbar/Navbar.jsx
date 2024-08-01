import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/home/download.png'

export default function Navbar() {
  return <>

<section className=' text-white max-w-md p-5 font-bold'>
        <div className="container bg-gray-600 left-0 right-0 w-full p-3 fixed top-0">
            <div className="contant flex justify-around">
                <div className="logo">
                    <ul>
                        <li><Link to="">START FRAMEWORK</Link></li>
                    </ul>
                </div>
                <div className="nav flex-md-column items-start justify-between  flex">
                    <nav>
                        <ul className='flex flex-none flex-md-column gap-3 flex-wrap'>
                            <li><NavLink to={'about'}>About</NavLink></li>
                            <li><NavLink to={'portfolio'}>Portfolio</NavLink></li>
                            <li><NavLink to={'contact'}>Contact</NavLink></li>
                        </ul>
                    </nav>
                    <img className='ml-4 max-md:flex hidden' src={logo} width={30} alt="" />
                </div>
            </div>
        </div>
    </section>
  </>
}
