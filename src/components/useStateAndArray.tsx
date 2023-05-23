import { useState } from "react"

export default function UseStateAndArray() {
    const [items, setItems] = useState<any>([]);

    const handleClick = () => {
        console.log("Clicked")
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={handleClick} className="w-full py-4 text-white bg-blue-300 hover:bg-blue-400">Add item</button>
            <div className="">
                {items.map((item: any) => {
                    return (<div className="text-xl flex gap-2" key={item.id}>
                        <h1>{item.id}.</h1>
                        <h1>{item.value}</h1>
                    </div>)
                })}
            </div>
        </div>
    )
}
