import { useState } from "react"
import UseEffectAndMouseMove from "./useEffectAndMouseMove";

export default function ButTonAndCleanUp() {
    const [show, setShow] = useState(true);
    
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div>
            <button onClick={handleClick} className="w-full py-4 text-white bg-blue-300 hover:bg-blue-400">Click to  hide</button>
            {show && <UseEffectAndMouseMove />}
        </div>
    )
}
