import { useCallback,useState } from "react";
import Button from "./Button";

function UseCallbackComponent()
{
    const[count,setCount]=useState(0);

    const handleClick=useCallback(()=>{
        console.log("clicked");
    },[]);

    return(
        <div>
            <h1>UseCallBack Example</h1>
            <h2>Count: {count}</h2>
            <button onclick={()=>setCount(count + 1)}>
                Increase Count
            </button>

            <Button handleClick={handleClick}/>
        
        </div>
    )
}

export default UseCallbackComponent;