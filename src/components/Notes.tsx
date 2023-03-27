import React from 'react'
import SiderBar from './SiderBar'

export default function Notes() {
    return (
        <section>
            <div className='max-w-[95rem] mx-auto px-3 grid grid-cols-3'>
                {/* first div */}
                <SiderBar />
                {/* seconfd div */}
                <div className='col-span-2'>
                    <form className='m-10'>
                        <input type="text" className='w-full py-3 px-6 focus:outline-none border border-gray-400' />
                        <textarea placeholder='Enter your text here..'  className='w-full py-3 px-3 focus:outline-none border border-gray-400 h-64 mt-6'>
                        </textarea>
                    </form>
                    <div className='border-t-2 border-gray-300 px-8'>
                        <div className=''>
                            <h1 className='text-lg font-bold text-gray-800 uppercase pt-2 mt-4'>Title</h1>
                            <h1 className='text-md font-semibold text-gray-600'>Note preview</h1></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
