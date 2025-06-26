import React from 'react'
import Logo from './Logo'
import MainNav from './MainNav'
function Sidebar() {
  return (
    <aside className='pt-[3.2rem] pl-[2.4rem]  pr-[2.4rem] border-1  row-span-full '>
        <Logo/>
        <MainNav/>
    </aside>
  )
}

export default Sidebar