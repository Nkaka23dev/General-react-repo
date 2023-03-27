import React, { useState } from 'react'

export default function Number({ number, className }: any) {
    const [input, setInput] = useState(0);
    const handNumber = (e: any) => {
        setInput(e.target.innerHTML)
        console.log(input)
    }

    return (
        <button onClick={handNumber} className={`border text-center py-8 ${className} 
            font-semibold cursor-pointer text-2xl border-gray-500`}>
            {number}
        </button>
    )
}
