import { useState } from "react"

function Timer(){
    const [count,setCount] = useState(0)
    setInterval(()=>{
        setCount(count+1)
    },2000)
    return(
        <>
        <h2>Timer</h2>
        <p>Count {count}</p>
        </>
    )   
}
export default Timer