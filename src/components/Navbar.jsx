import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-evenly'>
     {["home", "contact", "menu"].map((value, idx) => {
        return (
            <Link to={`${idx === 0? "/": `${value}`}`} className='text-3xl capitalize hover:underline cursor-pointer' key={idx}>{value}</Link>
        )
     })}
    </div>
  )
}
