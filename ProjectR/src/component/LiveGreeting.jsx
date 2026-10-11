import {useState} from "react";

export default function LiveGreeting()
{
    const[name,setName]=useState("");
    return(
        <div>
            <label>Name: </label>
            <input
             value={name} 
             onChange={(e)=>setName(e.target.value)}
             />
             <h2>Hello {name} </h2>
        </div>
    );
}

