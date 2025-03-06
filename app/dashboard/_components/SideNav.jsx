
import { Triangle,Plus,SquareMousePointer ,LayoutIcon, Settings} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




function SideNav() {

   

    const menuList=[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutIcon,
            path:'/dashboard'
        },
        {

            id:2,
            name:'Interview',
            icon:SquareMousePointer,
            path:'/dashboard/interviews'
        },
        {
            id:3,
            name:'Candidates',
            icon:Plus,
            path:'/dashboard/candidates'
        },
        {
            id:4,
            name:'Employees',
            icon:Triangle,
            path:'/dashboard/employees'
        },
        {
            id:5,
            name:'Settings',
            icon:Settings,
            path:'/dashboard/settings'
        }

    ]
  return (
    <div className='h-screen p-5 border shadow-md '>
        <Image src={'/logo.svg'}
        width={180}
        height={50}
        alt='logo' />

    <hr className='my-5'></hr>

    {menuList.map((menu) => (
       
       <Link key={menu.id} href={menu.path}>  
    <h2  className='flex items-center gap-3 p-4 my-2 rounded-lg cursor-pointer text-md text-slate-500 hover:bg-primary hover:text-white '>
        
        <menu.icon />
        {menu.name}
    </h2>
    </Link>
))}

      
    </div>
  


  )
}
export default SideNav;




