import { useEffect, useState } from "react"


// <T> is generic type
// initialValue is either a T or a function that returns a type of T
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === "function") {
            return (initialValue as () => T) ()
        }
        else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])


    return [value, setValue] as [typeof value, typeof setValue]
}