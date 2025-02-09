import PropTypes from 'prop-types'

function Student(props)
{
    return(
        <div className = "student" >
            <link href="https://fonts.googleapis.com/css2?family=Danfo&family=Press+Start+2P&display=swap" rel="stylesheet"></link>
            <p> Name: {props.name} </p>   
            <p> Age: {props.age}</p>
            <p> Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student;