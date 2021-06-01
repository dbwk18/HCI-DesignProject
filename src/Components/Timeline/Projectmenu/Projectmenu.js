import React, {useState, useEffect} from 'react';
import './Projectmenu.css';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
// import ProjectBox from './ProjectBox';
import Boxes from './Boxes';
import Timeline from '../Timeline'

function Projectmenu(props){

    // #######Modal창을 위한 함수들##########
    // const [modalOpen, setModalOpen] = useState(false);

    // const openModal = () => {
    //     setModalOpen(true);
    // }

    // const closeModal = () => {
    //     setModalOpen(false);
    // }

    const project = props.result;
    
    // const [pjname, setpjname] = useState([]);

    // const addProject = () => {
    //     setpjname(prev => [...prev, document.getElementById('Projectname').value])
    //     closeModal();
    // }

    // useEffect(() => {
    //     console.log(pjname)
    //   }, [pjname]);
    // ############################################


    return(
        <div className = 'projectMenu'>
            <div className = 'projectMenuHeader'>
                <p className = 'projectHeaderText'>This week's <b>Priorities</b> <button className = 'projectAddBtn'> + </button></p>
                {/* <p className = 'projectHeaderText'>This week's <b>Priorities</b> <button className = 'projectAddBtn' onClick={openModal}> + </button></p> */}
                {/* <Modal open={modalOpen} close={closeModal} create={addProject}></Modal> */}
            </div>

            <div className = 'projectmenu-category' id = 'project1'>Web K Design</div>
            <div className = 'projectmenu-category' id = 'project2'>Project A</div>
            <div className = 'projectmenu-category' id = 'project3'>Designing app B UI</div>
            <div className = 'projectmenu-category' id = 'project4'>Redesigning J</div>
            <Boxes project={project}></Boxes>
            <div className = 'projectmenu-category'>{project}</div>


        </div>
    )

}

export default Projectmenu;