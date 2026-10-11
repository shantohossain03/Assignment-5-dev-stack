import React from 'react'

export default function SelectedCard({ selected, removeTech, removeAll }) {
  return (
    //Main div
    <div className='rounded-xl w-full border border-slate-300 bg-white p-3.5 shadow-sm transition'>
      <div className='grid grid-cols-1 gap 4'>
        <h1 className='font-bold '>Your Stack</h1>
        <p className='text-gray-500 mt-3'>{selected.length} Technology Selected</p>
      </div>
      
      <div className='mt-5'>
        {
        selected.length === 0 ? (
          <div className='text-gray-400 border border-dashed rounded-lg p-3'>Your stack is empty</div>
        ) : (
          <div className=' grid grid-cols-1 gap-1 '>
            {
              selected.map((tech) => (
                <div key={tech.id} className='px-2 flex justify-between items-center gap-1 border border-slate-600  rounded-lg'>

                  
                  
                  <div className='flex gap-2 p-2'>
                    <img src={tech.icon} alt="" className='w-6 h-auto' />
                    <span className='grid grid-cols-1'>
                     <h2 className='font-bold'>{tech.name}</h2>
                     <p className='text-sm text-gray-500'>{tech.category}</p>
                    </span>
                  </div>

                  <button onClick={() => removeTech(tech.id)} className='font-bold text-gray-400'>✕</button>
                </div>
              ))
            }
           <button
            onClick={removeAll}
            className='btn font-bold text-red-500 border-red-400 mt-15'>Remove All</button>
          </div>
        )
      }
      </div>
    </div>
  )
}
