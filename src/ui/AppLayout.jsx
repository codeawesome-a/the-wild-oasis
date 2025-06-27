import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function AppLayout() {
  return (
  
  <div className='grid [grid-template-columns:26rem_1fr]  [grid-template-rows:auto_1fr] h-screen '>


    <Header/>
    <Sidebar/>
    <main className='bg-green-900 min-h-screen pt-[4rem] pl-[4.8rem] pr-[4.8rem] pb-[6.4rem] border-1 border-green-200' >
      <div className='max-w-[120rem] m-0 m-auto gap-[3.2rem]'>
        <Outlet/>
      </div>
        
    </main>
    </div>
  )
}

export default AppLayout