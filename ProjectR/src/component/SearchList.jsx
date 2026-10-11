import { useState } from "react";

const students=[
    {id:1, name:"Kannan", age:22},
    {id:2, name:"Arun", age:25},
    {id:3, name:"Madhav", age:26},
];

export default function SearchList()
{
    const[Search,setSearch]=useState("");
    const filtered=students.filter((s)=>
    s.name.toLowerCase().includes())



    return(
        <div>

        </div>

    );

}
