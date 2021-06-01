import React from "react";
import { Link } from 'react-router-dom';
import SubtaskBox from "../../../Subtask/Subtask";
import ProjectBox from "../ProjectBox";
import './index.css';


// const Boxes = (props) => {
    
//     const {project} = props;

//     // return(
//     //     project.map((val, idx) => {
//     //         return <ProjectBox index={idx+1} project={project[idx]}/>
//     //     })

//     return (
//         <ProjectBox project={project} />
//     )
// }

// export default Boxes;

function Boxes(props){
    const {project} = props;
    return(
        <div className="priorityElement" id="project">{project}</div>
    )
}

export default Boxes;