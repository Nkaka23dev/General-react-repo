import React from 'react'

export default function SiderBar() {
    return (
        <div className='border-r-2 border-gray-300  h-screen'>
            <div className='flex justify-between my-5 items-baseline '>
                <div>
                    <h1 className='text-3xl font-bold text-gray-800'>Notes</h1>
                </div>

                <div className='pr-3'>
                    <button className='text-sky-500 font-bold text-md hover:underline'>Add</button>
                </div>
            </div>
            {/* content  */}
            <div className='flex justify-between my-5 items-baseline hover:shadow-lg py-3 '>
                <div className=''>
                    <h1 className='text-lg font-bold text-gray-800'>Title</h1>
                    <h1 className='text-md font-bold text-gray-600'>Untitled note</h1>
                    <p className='text-sm text-gray-500'>Last Modified [data]</p>
                </div>

                <div className='pr-3'>
                    <button className='text-red-500 font-bold text-md hover:underline'>Delete</button>
                </div>
            </div>
        </div>
    )
}
