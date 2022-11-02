import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Machinelearning() {
  return (
    <>
      <Navbar></Navbar>
      <div className='mt-10 w-full flex justify-center items-center'>
        <h1 className="text-3xl font-bold underline">ML Analysis Page!</h1> 
      </div>
      <Footer/>
    </>
  )
}
