import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function layout({children}) {
  return (
    <div>
      <div className='fixed w-64 md:block'>
          <SideNav/>
      </div>
      <div className='md:ml-64'>
        <Header/>

      {children}
      </div>
      
    </div>
  )
}

export default layout;
