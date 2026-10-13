function StudentCard({ student, onDelete }) {
  return (
    <div className="student-Card">
      <img
        src={student.image}
        alt={student.name}
        className="studentImage"
      />

      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
      <p>Reg No: {student.regNo}</p>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>

      <button
        type="button"
        className="remove"
        onClick={() => onDelete(student.regNo)}
      >
        Remove
      </button>
    </div>
  );
}

export default StudentCard;