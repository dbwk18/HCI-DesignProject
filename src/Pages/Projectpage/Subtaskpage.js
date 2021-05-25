import './Subtaskpage.css';

import React, {useState} from 'react';
import Header from '../../Components/Header/Header'
import Projectmenu from '../../Components/Projectmenu/Projectmenu'
import SubtaskBox from '../../Components/Subtask/Subtask'
import SubModal from '../../Components/Subtask/SubModal';


function Subtaskpage() {

    // #######SubModal창을 위한 함수들##########
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const [taskname, settaskname] = useState("");
    const [exp, setexp] = useState("");
    const [start, setstart] = useState("");
    const [end, setend] = useState("");
    const [todo, settodo] = useState("");
    const [related, setrelated] = useState("");


    const addTask = () => {
        settaskname(document.getElementById('taskname').value)
        setexp(document.getElementById('exp').value)
        setstart(document.getElementById('startdate').value)
        setend(document.getElementById('enddate').value)
        settodo(document.getElementById('todo').value)
        setrelated(document.getElementById('related').value)
        closeModal();
    }
    // ############################################

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
                    <p className='subtaskHeader'> Subtask  <button id="addBtn" onClick={openModal}> + </button> <SubModal open={modalOpen} close={closeModal} create={addTask}></SubModal>
                     <button id="doneBtn"> Done Tasks </button> </p>
                    {/* <SubtaskBox className="subtask" taskname="Research" exp="Doing research about user and concept" date="5/8~5/10" related="5/8 Meeting with other Designers" />
                    <SubtaskBox className="subtask" taskname="Prototyping" exp="Make low/high fidelity prototypes" date="5/10~5/12" />
                    <SubtaskBox className="subtask" taskname="User-Testing" exp="Test the prototype and Improve" date="5/12~5/21" todo="Recruit 50 Users" related="5/15 Meeting with Developer"/> */}
                    <SubtaskBox className="subtask" taskname={taskname} exp={exp} start={start} end={end} todo={todo} related={related}/>
             {/* props 사용? 어떤거 적어줄지 */}
                </div>
            </div>

        </div>
    )
}

export default Subtaskpage;