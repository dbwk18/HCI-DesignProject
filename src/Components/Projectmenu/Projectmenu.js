import React, {useState, useEffect} from 'react';
import './Projectmenu.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ProjectBox from './ProjectBox';
import Boxes from './Boxes';
import Card from './Card/Card';
import Board from './Board/Board';
function Projectmenu(){

    // #######Modal창을 위한 함수들##########
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const [pjname, setpjname] = useState([]);

    const addProject = () => {
        setpjname(prev => [...prev, document.getElementById('Projectname').value])
        closeModal();
    }

    // useEffect(() => {
    //     console.log(pjname)
    //   }, [pjname]);
    // ############################################


    return(
        <div className = 'projectMenu'>
            <div className = 'projectMenuHeader'>
                <p className = 'projectHeaderText'>Priorities</p> 
                {/* <button className = 'projectAddBtn' onClick={openModal}> + </button></p> */}
                {/* <Modal open={modalOpen} close={closeModal} create={addProject}></Modal> */}
            </div>
            <div className = 'flexbox'>
                <Board className = 'board'>
                    <Card id = 'card-4' category = 'work' className = 'card-work' draggable = 'true'>
                        <p>Meeting with client B</p>
                    </Card>
                    <Card id = 'card-2' category = 'family' className = 'card-family' draggable = 'true'>
                        <p>Pick up kid from academy</p>
                    </Card>
                    <Card id = 'card-6' category = 'work' className = 'card-work' draggable = 'true'>
                        <p>Re-designing a logo project due</p>
                    </Card>
                    <Card id = 'card-5' category = 'family' className = 'card-family' draggable = 'true'>
                        <p>Son's birthday party with school friends</p>
                    </Card>
                </Board>
            </div>
            {/* <Card className = 'projectmenu-category' id = 'project1'>Web K Design</Card>
            <Card className = 'projectmenu-category' id = 'project2'>Project A</Card>
            <Card className = 'projectmenu-category' id = 'project3'>Designing app B UI</Card>
            <Card className = 'projectmenu-category' id = 'project4'>Redesigning J</Card> */}
            <Boxes project={pjname}></Boxes>


        </div>
    )

}

export default Projectmenu;