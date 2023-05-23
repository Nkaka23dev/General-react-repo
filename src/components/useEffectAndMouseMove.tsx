import { useEffect, useState } from 'react'

export default function UseEffectAndMouseMove() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (e: any) => {
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("Use Effect!!")
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            console.log("Component is now unmounting!!")
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div>
            <h1 className='text-2xl font-semibold'>Client X :
                <span className='text-3xl text-red-500'> {x}</span></h1>
            <h1 className='text-2xl font-semibold'>Client Y :
                <span className='text-3xl text-red-500'> {y}</span></h1>
        </div>
    )
}
