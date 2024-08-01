import React from 'react'

export default function Contact() {
  return <>
  
    <section>
    <div className="container text-center">
      <div className="star pt-3 relative pb-6">
        <h1 className='font-bold text-3xl'>CONATCT SECTION</h1>
        <div className="head flex justify-center items-center">
          <div className="line w-10 h-1 bg-gray-600"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line w-10 h-1 bg-gray-600"></div>
        </div>
      </div>
        <div className="input pb-3">
          <input className='w-96  border-b border-1 focus:outline-none p-2 rounded-md' type="text" placeholder='userName' />
        </div>
        <div className="input pb-3">
          <input className='w-96  border-b border-1 focus:outline-none p-2 rounded-md' type="text" placeholder='userAge' />
        </div>
        <div className="input pb-3">
          <input className='w-96  border-b border-1 focus:outline-none p-2 rounded-md' type="text" placeholder='userEmail' />
        </div>
        <div className="input pb-3">
          <input className='w-96  border-b border-1 focus:outline-none p-2 rounded-md' type="text" placeholder='userPassword' />
        </div>
        <div className="buttom pb-5">
        <button className='p-2 text-white rounded-md bg-teal-700'>send Message</button>
        </div>
    </div>
  </section>
  
  </>
  
}
