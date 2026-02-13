import { useEffect, useState } from "react"

function Timer(){
    const [count,setCount] = useState(0)
    // setInterval(()=>{
    //     setCount(count+1)
    // },2000)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])
    
    return(
        <>
        <h2>Timer</h2>
        <p>Count {count}</p>
        </>
    )   
}
export default Timer