import React from "react";
import { Link } from 'react-router-dom';
import SubtaskBox from "../../../Subtask/Subtask";
import ProjectBox from "../ProjectBox";
// import './index.css';


const Boxes = (props) => {
    
    const {project} = props;

    return(
        project.map((val, idx) => {
            return <Link to = '/Subtasks'><ProjectBox index={idx+1} project={project[idx]}/></Link>
        })
    )
}

export default Boxes;