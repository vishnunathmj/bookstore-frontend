import { useEffect, useState } from "react"
// const {useState, useEffect} = require("react")

const useDebounce = (value,deley)=>{
    const [debounceValue,setDebounceValue] = useState(value)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value)
        },deley)

        return ()=>clearTimeout(timer)
    },[value,deley])

    return debounceValue
}

export default useDebounce