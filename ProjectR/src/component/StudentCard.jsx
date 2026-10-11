export default function StudentCard(props){
    return (
        <div>

        <h2>Student Name:{props.name}</h2>
        <p> Age:{props.age}</p>
        <p>Course:{props.course}</p>
        
       </div>
        
    )
}