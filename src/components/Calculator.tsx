import { useEffect, useState } from "react";
import Numbers from "./Numbers";

export default function Calculator() {
    return (
        <section className="px-4 mt-5">
            <div className="max-w-[26rem] mx-auto bg-neutral-300">
                {/* Place holder will be here */}
                <div className="grid h-20 bg-gray-500">
                    <p className="ml-auto my-auto px-4 text-4xl text-white">
                        0
                    </p>
                </div>
                <Numbers />
            </div>

        </section>
    );
}
