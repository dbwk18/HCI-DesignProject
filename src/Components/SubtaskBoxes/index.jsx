import React from "react";

import SubtaskBox from "../Subtask/Subtask.js";
// import './index.css';

const SubtaskBoxes = (props) => {

    return(
        props.taskname.map((val, idx) => {
            return <SubtaskBox index={idx+1} 
            taskname={props.taskname[idx]} exp={props.exp[idx]} start={props.start[idx]} end={props.end[idx]} todo={props.todo[idx]} related={props.related[idx]}/>
            
        })
    )
}

export default SubtaskBoxes;