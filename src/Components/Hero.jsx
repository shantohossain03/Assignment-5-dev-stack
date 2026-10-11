import React from 'react'
import HeroImage from "../assets/banner-stack.png"

export default function Hero() {
  return (
    <div className='container px-20 mx-auto mt-20 flex gap-2 justify-between items-center'>
        
        <div className='grid grid-cols-1 gap-5'>
            <div>
              <h1 className='font-bold text-6xl'>Build Your Ideal</h1>
              <h1 className='font-bold text-6xl bg-gradient-to-r from-orange-600 to-violet-600 bg-clip-text text-transparent'>Development Stack</h1>
              <p className='mt-10 text-xl'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
            </div>

            <div className='flex gap-2 mt-10'>
             <button className='btn w-50 h-12 bg-red-400 rounded-xl text-white bg-gradient-to-r from-orange-600 to-pink-600'>Explore Technologies</button>
             <button className='btn w-50 h-12 rounded-xl bg-gray-100'>Learn More</button>
            </div>
        </div>

        <div>
            <img src={HeroImage} alt="" />
        </div>
    </div>
  )
}
