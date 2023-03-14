import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const username = useSelector((state) => state.user.value.username)
  return (
    <div className='text-4xl text-center text-white bg-gray-800'>This is the home Page <br></br>
    {username}
    </div>
  )
}
