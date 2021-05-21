import './Subtaskpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Projectmenu from '../../Components/Projectmenu/Projectmenu'
import SubtaskBox from '../../Components/Subtask/Subtask'


function Subtaskpage() {
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
                <button id="closeBtn">Close</button>
            </div>
            <div className = 'mainContainer'>
                <div className='projectmenuContainer'>
                    <Projectmenu />
                </div>
                <div className='subtaskContainer'>
                    <p className='subtaskHeader'> Subtask  <button id="addBtn"> + </button> <button id="doneBtn"> Done Tasks </button> </p>
                    <SubtaskBox className="subtask" taskname="Research" exp="Doing research about user and concept" date="5/8~5/10" related="5/8 Meeting with other Designers" />
                    <SubtaskBox className="subtask" taskname="Prototyping" exp="Make low/high fidelity prototypes" date="5/10~5/12" />
                    <SubtaskBox className="subtask" taskname="User-Testing" exp="Test the prototype and Improve" date="5/12~5/21" todo="Recruit 50 Users" related="5/15 Meeting with Developer"/>
             {/* props 사용? 어떤거 적어줄지 */}
                </div>
            </div>

        </div>
    )
}

export default Subtaskpage;