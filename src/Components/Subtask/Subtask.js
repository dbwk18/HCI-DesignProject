import React from 'react';
import './Subtask.css'


function SubtaskBox(props){
    return(
        <div>
            <div className="subtaskBox">
                <div><input type="checkbox" class="enable-stage" /></div>
                <h2 className="text" id="taskname">{props.taskname}</h2>
                <div className="text" id="explanation">{props.exp}</div>
                <br></br>
                <div className="text" id="date"><b>Duration:</b> {props.start} ~ {props.end}</div>
                <div className="text" id="todo"><b>ToDo:</b> {props.todo}</div>
                <div className="text" id="related"><b>Related Schedule:</b> {props.related}</div>
            </div>
        </div>
    )
}

function Subtask(){
    return(
        <div className="subtask" id="subtask_1">
                {SubtaskBox("Research", "Doing research about user and concept", "5/8~5/10", "", "5/8 Meeting with other Designers")}
        </div>
        // <div className="subtaskContainer">
        //     <div className="subtask" id="subtask_1">
        //         {SubtaskBox("Research", "Doing research about user and concept", "5/8~5/10", "", "5/8 Meeting with other Designers")}
        //     </div>
        //     <div className="subtask" id="subtask_2">
        //         {SubtaskBox("Prototyping", "Make low/high fidelity prototypes", "5/10~5/12")}
        //     </div>
        //     <div className="subtask" id="subtask_3">
        //         {SubtaskBox("User-Testing", "Test the prototype and Improve", "5/12~5/21", "Recruit 50 Users", "5/15 Meeting with Developer")}
        //     </div>
        // </div>
    )
}

export default SubtaskBox;