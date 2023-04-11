
export default function Number({ number, className, handNumber }: any) {
    return (
        <button onClick={() => handNumber(number)} className={`border text-center py-8 ${className} 
            font-semibold cursor-pointer text-2xl border-gray-500`}>
            {number}
        </button>
    )
}
