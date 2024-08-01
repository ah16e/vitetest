import React from 'react'
import img from '../../assets/home/avataaars.png'
export default function Start() {
  return (<>
  
   <section className='bg-teal-500 pt-5 pb-4'>
   <div className="container  justify-center  items-center">
            <div className="item flex justify-center items-center">
                <img src={img} width={250} alt="" />
            </div>
            <div className="test pt-3 font-bold text-white text-center">
            <h1>START FRAMEWORK</h1>
            <div className="head flex justify-center items-center">
          <div className="line w-10 h-1 bg-white"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line w-10 h-1 bg-white"></div>
          </div>
            <p className='pt-2'>Graphic - Web Designer - Illustrator</p>
            </div>
        </div>
   </section>
  
  </>
    
  )
}
