import { useEffect, useState } from "react";
import Numbers from "./Numbers";

export default function Calculator() {

    const [input, setInput] = useState<string>('');
    const [prevInput, setprevInput] = useState<string>('');
    const [oper, setOper] = useState<string>();
    const [total, setTotal] = useState("");

    const handNumber = (number: string) => {
        const prev = input.toString();
        if (number === '.' && prev.includes('.') || prev.length >= 10) {
            return;
        }
        setInput(prev => prev + number)
    }
    const operator = (op: string) => {
        setOper(op);
        setprevInput(input);
        setInput("");
    }

    useEffect(() => {
        if (oper === '=') {
            if (!prevInput) {
                setTotal(input)
            }
            if(prevInput){
              
            }
        }
    }, [oper])
    return (
        <section className="px-4 mt-5">
            <div className="max-w-[26rem] mx-auto bg-neutral-300">
                {/* Place holder will be here */}
                <div className="grid h-20 bg-gray-500">
                    <p className="ml-auto my-auto px-4 text-4xl text-white">
                        {input || prevInput || total ? input || prevInput || total : '0'}
                    </p>
                </div>
                <Numbers
                    handNumber={handNumber}
                    handleoperator={operator}
                    input={input} />
            </div>
        </section>
    );
}
