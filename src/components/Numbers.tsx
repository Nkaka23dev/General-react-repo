import React, { useState } from "react";
import Number from "./Number";
import Operators from "./Operators";

export default function Numbers() {
    
    return (
        <div>
            {/* numbers will be here */}
            <div className="grid grid-cols-4">
                <div className="flex flex-col items-stretch">
                    <div

                        className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
                    >
                        AC
                    </div>
                    <Number number={7}/>
                    <Number number={4} />
                    <Number number={1} />
                </div>
                <div className="flex flex-col items-stretch">
                    <div
                        className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
                    >
                        +/-
                    </div>
                    <Number number={8} />
                    <Number number={5} />
                    <Number number={2} />
                </div>
                <div className="flex flex-col items-stretch">
                    <div
                        className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
                    >
                        %
                    </div>
                    <Number number={9} />
                    <Number number={6} />
                    <Number number={7} />
                </div>
                <div className="flex flex-col items-stretch text-white bg-orange-400">
                    <Operators operator="/" />
                    <Operators operator="X" />
                    <Operators operator="-" />
                    <Operators operator="+" />
                </div>
            </div>
            {/* Footer and the stuff will be here */}
            <div className="grid grid-cols-4">
                <Number number={0} className="col-span-2" />
                <div className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
                    .
                </div>
                <Operators operator="=" />
            </div>
        </div>
    );
}
