import React, { useEffect, useState } from "react";
import Number from "./Number";
import Operators from "./Operators";

export default function Numbers({ handNumber, handleoperator }: any) {

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
                    <Number number={7} handNumber={handNumber} />
                    <Number number={4} handNumber={handNumber} />
                    <Number number={1} handNumber={handNumber} />
                </div>
                <div className="flex flex-col items-stretch">
                    <div
                        className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
                    >
                        +/-
                    </div>
                    <Number number={8} handNumber={handNumber} />
                    <Number number={5} handNumber={handNumber} />
                    <Number number={2} handNumber={handNumber} />
                </div>
                <div className="flex flex-col items-stretch">
                    <div
                        className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
                    >
                        %
                    </div>
                    <Number number={9} handNumber={handNumber} />
                    <Number number={6} handNumber={handNumber} />
                    <Number number={7} handNumber={handNumber} />
                </div>
                <div className="flex flex-col items-stretch text-white bg-orange-400">
                    <Operators operator="/" handleoperator={handleoperator} />
                    <Operators operator="X" handleoperator={handleoperator} />
                    <Operators operator="-" handleoperator={handleoperator} />
                    <Operators operator="+" handleoperator={handleoperator} />
                </div>
            </div>
            {/* Footer and the stuff will be here */}
            <div className="grid grid-cols-4">
                <Number number={0} handNumber={handNumber} className="col-span-2" />
                {/* <div className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
                    .
                </div> */}
                <Number number='.' handNumber={handNumber} />
                <Operators operator="=" handleoperator={handleoperator} />
            </div>
        </div>
    );
}
