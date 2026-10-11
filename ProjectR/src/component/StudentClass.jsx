import React from 'react'

class StudentClass extends React.Component{
    render()
    {
        return(
            <div>
                <p>Student Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        );
    }
}

export default StudentClass;