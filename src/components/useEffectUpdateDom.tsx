import { useEffect, useState } from "react"

export default function UseEffectUpdateDom() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log("User Effect is running now....")
        document.title = `${count} times clicked`
    }, [count]);
    
    const handleClick = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} className="w-full py-2 px-5 border outline-none border-gray-500" placeholder="Enter first name..." />
            <button onClick={handleClick} className="w-full py-4 text-white bg-blue-300 hover:bg-blue-400">
                You clicked me {count} times
            </button>
        </div>
    )
}
