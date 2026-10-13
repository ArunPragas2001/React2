import { useState } from "react";
import StudentCard from "./StudentCard";

function Form() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [students, setStudents] = useState([]);

  function validateForm() {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Student name required";
    }

    if (regNo.trim() === "") {
      newErrors.regNo = "Student registration number required";
    }

    if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (age === "" || Number(age) < 18) {
      newErrors.age = "Age must be 18 or above";
    }

    if (course === "") {
      newErrors.course = "Please select a course";
    }

    if (image === "") {
      newErrors.image = "Please upload a profile image";
    }

    return newErrors;
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);
    setMessage("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const newStudent = {
      name,
      regNo,
      email,
      age,
      course,
      image,
    };

    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);

    setMessage("Registered successfully!");

    setName("");
    setRegNo("");
    setEmail("");
    setAge("");
    setCourse("");
    setImage("");
    setErrors({});

    e.target.reset();
  }

  function handleDelete(regNoToRemove) {
    setStudents((previousStudents) =>
      previousStudents.filter(
        (student) => student.regNo !== regNoToRemove
      )
    );
  }

  return (
    <div className="container">
      <h1>Student Registration System</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Student Name"
          />
          {errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>

        {/* Registration Number */}
        <div className="form-group">
          <label>Student Registration Number</label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Enter Registration Number"
          />
          {errors.regNo && (
            <p className="error">{errors.regNo}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          {errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
          />
          {errors.age && (
            <p className="error">{errors.age}</p>
          )}
        </div>

        {/* Course */}
        <div className="form-group">
          <label>Course</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            <option value="ComputerScience">
              Computer Science
            </option>
            <option value="IT">IT</option>
          </select>
          {errors.course && (
            <p className="error">{errors.course}</p>
          )}
        </div>

        {/* Profile Image */}
        <div className="form-group">
          <label>Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="preview"
            />
          )}

          {errors.image && (
            <p className="error">{errors.image}</p>
          )}
        </div>

        <button type="submit">Register Student</button>
      </form>

      {message && (
        <p className="success">{message}</p>
      )}

      <h2>Registered Students</h2>

      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.regNo}
            student={student}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Form;