import { useState } from "react";

export default function StudentList()
{
    const[students,setStudents]=useState(["Kamal","Nimal"]);
    const[newStudent,setNewStudent]=useState("");

    function addStudent()
    {
        if(newStudent.trim() === "" ) return;
        setStudents([...students,newStudent]);
        setNewStudent("");
    }

    function removeStudent(nameToRemove)
    {
        setStudents(students.filter((s)=> s!== nameToRemove));
    }

    return(
        <div>
            <h2>Student Management</h2>
            <input
            placeholder="Enter student name"
            value={newStudent}
            onChange={(e)=>setNewStudent(e.target.value)}
            />
            <button onClick={addStudent}>Add Student</button>
            <ul>
                {students.map((student)=>(
                    <li key={student}>
                        {student}
                        <button onClick={()=> removeStudent(student)}>Remove</button>
                    </li>
                 ))}

            </ul>
        </div>
    );
}