import './Subtaskpage.css';

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Projectmenu from '../../Components/Timeline/Projectmenu/Projectmenu'
import SubtaskBox from '../../Components/Subtask/Subtask'
import SubModal from '../../Components/Subtask/SubModal';
import SubtaskBoxes from '../../Components/SubtaskBoxes';
import Boxes from '../../Components/Timeline/Projectmenu/Boxes/index';


function Subtaskpage() {
    
    // #######SubModal창을 위한 함수들##########
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const [taskname, settaskname] = useState([]);
    const [exp, setexp] = useState([]);
    const [start, setstart] = useState([]);
    const [end, setend] = useState([]);
    const [todo, settodo] = useState([]);
    const [related, setrelated] = useState([]);


    const addTask = () => {
 
        settaskname(prev => [...prev, document.getElementById('taskname').value])
        setexp(prev => [...prev, document.getElementById('exp').value])
        setstart(prev => [...prev, document.getElementById('startdate').value])
        setend(prev => [...prev, document.getElementById('enddate').value])
        settodo(prev => [...prev, document.getElementById('todo').value])
        setrelated(prev => [...prev, document.getElementById('related').value])
        closeModal();
    }

    // ############################################
    function isChecked(){
        // alert('hi')
        document.getElementById("subtask1").display = 'none';
    }
    

    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
                <button id="closeBtn"><Link to='/mainpage3'>Close</Link></button>
            </div>
            <div className = 'mainContainer'>
                <div className='projectmenuContainer'>
                    <Projectmenu />
                    <div className = 'projectmenu-category' id = 'project5'>Project B</div>
                    <button className = 'doneprojectBtn'>Done Projects</button>
                </div>
                <div className='subtaskContainer'>
                    <p className='subtaskHeader'> Subtask  <button id="addBtn" onClick={openModal}> + </button> <SubModal open={modalOpen} close={closeModal} create={addTask}></SubModal>
                    <button id="doneBtn"> <Link to='/Donetasks'> Done Tasks </Link> </button> </p>
                    {/* <input id="checkdone" type="checkbox" className="enable-stage" onClick={isChecked} /> */}
                    <SubtaskBox id="subtask1" className="subtask" taskname="Research" exp="Doing research about user and concept" start="5/8" end="5/10" todo="Interview possible target users"related="5/8 Meeting with other Designers" />
                    {/* <input id="checkdone" type="checkbox" className="enable-stage" onClick={isChecked} /> */}
                    <SubtaskBox id="subtask2" className="subtask" taskname="Prototyping" exp="Make low/high fidelity prototypes" start="5/10" end="5/12" todo="Revise the menubar icon, color"/>
                    {/* <input id="checkdone" type="checkbox" className="enable-stage" onClick={isChecked} /> */}
                    <SubtaskBox id="subtask3" className="subtask" taskname="User-Testing" exp="Test the prototype and Improve" start="5/12" end="5/21" todo="Recruit 50 Users" related="5/15 Meeting with Developer"/>
                    {/* <input id="checkdone" type="checkbox" className="enable-stage" onClick={isChecked} /> */}
                    <SubtaskBoxes id="subtask4" className="subtask" taskname={taskname} exp={exp} start={start} end={end} todo={todo} related={related}/>
             {/* props 사용? 어떤거 적어줄지 */}
                </div>
            </div>

        </div>
    )
}

export default Subtaskpage;