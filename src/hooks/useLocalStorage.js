import { useState,useEffect } from "react"

export function useLocalStorage(initialState,key) {
    const [value,setValue] = useState(()=>{
        const storedTheme = localStorage.getItem(key) || null;
        return storedTheme ? JSON.parse(storedTheme) : initialState
    })
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
      }, [value,key]);

    return [value,setValue];
}