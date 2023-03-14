import React from 'react'
import { useSelector } from 'react-redux'

export default function Contact() {
  const username = useSelector((state) => state.user.value.username)
  return (
    <div className='text-4xl text-center text-white bg-red-800'>This is the Contact {username}</div>
  )
}
