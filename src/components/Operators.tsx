import React from 'react'

export default function Operators({ operator, handleoperator }: any) {
    return (
        <div onClick={() => handleoperator(operator)} className="border text-center py-8 
         font-semibold cursor-pointer text-2xl border-gray-500">
            {operator}
        </div>
    )
}
