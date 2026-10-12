import {useState, useEffect} from react;


export default function Timer(){
    
    const[count,setCount]=useState(0);

    useEffect(()=>{
    const interval = 
    setInterval(()=>{setCount((prev)=>prev + 1); } , 1000);

    return()=>{clearInterval(interval)}; }, []);

     return <h1>Count:{count}</h1>;


    }