import { useState } from "react"

export default function UseStateAndObject() {
    const [names, setNames] = useState({ firstName: "", lastName: "" });
    return (
        <div className="grid max-w-xl mx-auto py-10 space-y-5 px-3">
            <form action="#" className="space-y-2">
                <input type="text" value={names.firstName} onChange={e => setNames({ ...names, firstName: e.target.value })} className="w-full py-2 px-5 border outline-none border-gray-500" placeholder="Enter first name..." />
                <input type="text" onChange={e => setNames({ ...names, lastName: e.target.value })} value={names.lastName} className="w-full py-2 px-5 border outline-none border-gray-500" placeholder="Enter first name..." />
            </form>
            <div>
                <h1 className="text-lg font-semibold">First Name: <span className="text-blue-500">{names.firstName}</span></h1>
                <h1 className="text-lg font-semibold">Last Name: <span className="text-blue-500">{names.lastName}</span></h1>
            </div>

        </div>
    )
}
