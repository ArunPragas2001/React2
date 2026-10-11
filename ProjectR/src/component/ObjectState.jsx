import { useState } from "react";

export default function ObjectState(){
    const[student,setStudent]=useState(
        {
            name:"Kannan",
            course:"IT",
            age:22,
        });

    function increaseAge()
    {
        setStudent({ ...student, age:student.age + 1 });
    }
    return(
        <div>
            <h2>{student.name}</h2>
            <p>Course:{student.course}</p>
            <p>Age:{student.age}</p>
            <button onClick={increaseAge}>IncreaseAge</button>
        </div>
    );
}