import React from 'react'

export default function Operators({ operator }: any) {
    return (
        <div className="border text-center py-8 
         font-semibold cursor-pointer text-2xl border-gray-500">
            {operator}
        </div>
    )
}
