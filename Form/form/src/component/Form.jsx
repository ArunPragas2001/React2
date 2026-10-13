import {useState} from "react";
import StudentCard from "./StudentCard";


function Form()
{
        const[name,setName]=useState("");
        const[regNo,setRegNo]=useState("");
        const[email,setEmail]=useState("");
        const[age,setAge]=useState("");
        const[course,setCourse]=useState("");
        const[image,setImage]=useState("");


        const[errors,setErrors]=useState("");
        const[message,setMessage]=useState("");
        const[students,setStudents]=useState("");

        
    
    function validateForm()
    {
        const newErrors={};

        if(name.trim()==="")
        {
            newErrors.name="student name required"
        }

        if(regNo.trim()==="")
        {
            newErrors.regNo="student reg no required"
        }

        if(!email.includes("@"))
        {
            newErrors.email="enter a valid mail"
        }

        if(age==="" || Number(age)<18)
        {
            newErrors.age="Age must be 18 or above"
        }

        if(course ==="")
        {
            newErrors.course="pls select a course"
        }

        if(image.trim()==="")
        {
            newErrors.image="pls upload a profile image"
        }

        return newErrors;

    }


    function handleImageChange(e)
    {
        const file=e.targets.files[0];
        if(file)
        {
            setImage(URL.createObjectURL(file))
        }
        

    }
    function handleSubmit(e)
    {
        e.preventDefault();
        const newErrors=validateForm();
        setErrors(newErrors);
        setMessage("");

        if ( Object.keys(newErrors).length > 0 ){
            return;
        }

        const newStudent ={name,regNo,email,age,course,image};

        setStudents([...students,newStudent]);

        setMessage("Registered successfully");

        e.target.reset();

        setName("");
        setRegNo("");
        setEmail();
        setAge();
        setCourse();
        setImage();
        
    }
    function handleDelete(regNoToRemove)
    {
        setStudents(students.filter((s)=>s.regNo !== regNoToRemove ));
    }
    return (

        <div className="container">
        <h1>Student Registration System</h1>

        <form onSubmit={handleSubmit}>

            //Name
            <div className="form-group"></div>
            <label>Student Name</label>
            <input type ="text" value={name } onChange={(e)=>setName(e.target.value)} placeholder="Enter Student Name "></input>
            {errors.name && (<p className="error">{errors.name}</p>)}

            //regNo
            <div className="form-group"></div>
            <label>Student Registration Number</label>
            <input type ="text" value={regNo} onChange={(e)=>setRegNo(e.target.value)} placeholder="Enter Student Registration Number "></input>
            {errors.regNo && (<p classregNo="error">{errors.regNo}</p>)}


            //email
            <div className="form-group"></div>
            <label>Email</label>
            <input type ="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
            {errors.email && (<p className="error">{errors.email}</p>)}



            //age 
            <div className="form-group"></div>
            <label>Age</label>
            <input type ="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter age"></input>
            {errors.age && (<p className="error">{errors.age}</p>)}



            //course
            <div className="form-group"></div>
            <label>Course</label>
            <select>
                <option value=""></option>
                <option value="ComputerScience">ComputerScience</option>
                <option value="IT">IT</option>

            </select>
            {errors.name && (<p className="error">{errors.name}</p>)}



            //image
            <div className="form-group"></div>
            <label></label>
            <input type ="" accept="image/*" onChange={handleImageChange}></input>
            {image && ( <img src={image} alt="Preview" className="preview"></img>)}
            {errors.image && (<p className="error">{errors.image}</p>)}


            <button type="submit">Register Student</button>

        </form>
        {message && <p className="success">{message}</p>}

        <h2>Registered Student</h2>
        
        

        </div>
    );
    //SUCCESS


}