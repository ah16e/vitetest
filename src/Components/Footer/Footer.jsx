import React from 'react'

export default function Footer() {
  return <>
  
  <footer className='bg-gray-600'>
    <div className="container text-white flex-md-column-gap-2 flex-md-column-3 text-center p-10 flex justify-center items-center">
      <div className="group flex w-64">
        <div className="card">
          <div className="text">
            <h2 className='font-bold'>LOCATION</h2>
            <p className='pb-2'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
      </div>
      <div className="group justify-center items-center flex w-64">
        <div className="card">
          <div className="text">
            <h2>AROUND THE WEB</h2>
            <div className="icons gap-10">
              <i className='fa-brands fa-facebook border-solid border-2 border-white  rounded-full p-2'></i>
              <i className='fa-brands fa-twitter border-solid border-2 border-white   rounded-full p-2'></i>
              <i className='fa-brands fa-linkedin border-solid border-2 border-white   rounded-full p-2'></i>
              <i className='fa-solid fa-globe border-solid border-2 border-white   rounded-full p-2'></i>
            </div>
          </div>
        </div>
      </div>
      <div className="group flex w-80">
        <div className="card">
          <div className="text">
            <h2>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright bg-gray-800 p-5 text-white flex justify-center items-center">
      <span>Copyright © Your Website 2021</span>
    </div>
    </footer>
  
  </>
}
