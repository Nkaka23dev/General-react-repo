import { useState } from "react"

interface Props {
    name: string,
    email: string,
    isMarried: boolean,
    friends: string[],
    country:COUNTRY
}

export enum COUNTRY {
    BRAZIR =  "BRAZIR",
    RWANDA = "RWANDA",
    UGANDA = "UGANDA"
}
export default function Person({ name, email, isMarried, friends,country}: Props) {
    const [surnName, setSurname] = useState<string>("")

    const addTwoNumbers = (x: number, y: number): number => {
        return x + y
    }
    return (
        <section className="">
            <div className="max-w-4xl mx-auto space-y-3 text-4xl py-10">
                <h1>Name: {name}</h1>
                <h1>Email: {email}</h1>
                <h1>{`This person ${isMarried ? 'is' : 'is not'} MARRIED!`}</h1>
                <div className="text-3xl mt-3">
                    {friends.map((friend, idx) => {
                        return (
                            <h1 key={idx}>{friend}</h1>
                        )
                    })}
                </div>
                <h1>{country}</h1>
            </div>
        </section>
    )
}
