import React from 'react'
import img from '../../assets/portfolio/poert1.png/'
import img2 from '../../assets/portfolio/port2.png/'
import img3 from '../../assets/portfolio/port3.png/'
export default function Portfolio() {
  return <>
  
 <section className='bg-teal-500 pb-9'>
 <div className="header text-center font-bold pt-5">
 <h1 className='text-3xl'>PORTFOLIO COMPONENT</h1>
    <div className="head pt-3 flex justify-center items-center">
      <div className="line w-10 h-1 bg-white"></div>
      <i className="fa-solid fa-star"></i>
    <div className="line w-10 h-1 bg-white"></div>
    </div>
 </div>
 <div className='container flex justify-center items-center'>
    <div className="image  cursor-pointer flex gap-5 pb-5 pt-5 ">
      <img src={img} width={250} className='rounded-md' />
      <img src={img2} width={250} className='rounded-md' />
      <img src={img3} width={250} className='rounded-md' />
    </div>
  </div>
  
  <div className='container flex justify-center items-center'>
    <div className="image flex cursor-pointer gap-5 pb-5 rounded-md">
      <img src={img} width={250} className='rounded-md' />
      <img src={img2} width={250} className='rounded-md' />
      <img src={img3} width={250} className='rounded-md' />
    </div>
  </div>
 </section>
  </>
}
