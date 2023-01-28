import { useEffect, useState } from "react";

export function useScrollY() {
    const [scrollY,setScrollY] = useState(0);

    const handdleScrolly = () =>{
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY)
    }
    useEffect(() => {
        handdleScrolly();
        window.addEventListener('scroll', handdleScrolly);
        return ()=>{
            window.removeEventListener('scroll', handdleScrolly);
        }
    },[]);
    return ([scrollY]);
}