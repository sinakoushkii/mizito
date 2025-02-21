import React from 'react'
import { colleagues } from '../data'
import { getNavbarBackground } from './Navbar'

const Colleagues = () => {
  return (
    <div className='w-full border border-x-0 border-b-0 py-2'>
        <p className={`w-full px-2 py-1 ${getNavbarBackground()} text-white text-[13px]`}>همکارانم</p>
        <div className='flex flex-col items-start mt-3 gap-2 mr-1'>
          {colleagues.map(colleague=>{
            return(
                <div key={colleague.id} className='flex items-center justify-start gap-2 cursor-pointer'>
                    <img className='rounded-full' width={30} height={30} src={colleague.profilePath}/>
                    <p className='text-[13px] text-gray-700'>{colleague.name}</p>
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default Colleagues