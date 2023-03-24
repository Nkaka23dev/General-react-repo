import React from 'react'

export default function Button({ setNumber, number }: any) {
    return (
        <button
            onClick={setNumber}
            className="border text-center
             py-8  font-semibold cursor-pointer
             text-2xl border-gray-500">
            {number}
        </button>
    )
}
