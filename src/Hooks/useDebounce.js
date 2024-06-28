import { useEffect, useRef } from "react"



const useDebounce = (callBack, delay) => {

  const timeRef = useRef(null)

 useEffect(() => {
  return () => {
    if(timeRef.current)
      clearTimeout(timeRef.current)
  }
 }, [])
  



  const debounceCallback = (...arg) =>{
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }

    timeRef.current = setTimeout(() => {
      callBack(...arg)
    }, delay)

  }

  return debounceCallback
}

export default useDebounce