import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelperLayout() {
  return (
    <div className='max-w-7xl mx-auto space-y-4 mt-24'>
        <h1 className='text-4xl'>Helper Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consectetur saepe consequatur hic, ad necessitatibus eius, laudantium dolor culpa illo quibusdam perferendis quia tenetur. Libero, laudantium est itaque natus doloribus fugiat aspernatur maxime molestiae a consequuntur perspiciatis veritatis error dolorem!</p>
        <div className='flex gap-10 text-xl'>
          <NavLink to="faq">View the FAQ</NavLink>
          <NavLink to="contact" >Contact Us</NavLink>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
