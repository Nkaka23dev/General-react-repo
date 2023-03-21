import { useState } from "react";

export const useToggle = (initial = false) => {
    const [show, setShow] = useState(initial);
    const toggle = () => {
        setShow(prev => !prev)
    }
    return [show, toggle]
}