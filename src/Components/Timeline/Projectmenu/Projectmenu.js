import React, {useState, useEffect} from 'react';
import './Projectmenu.css';
import { Link } from 'react-router-dom';
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

    const getNum = (boardId) => {
        console.log(document.getElementById(boardId).textContent);
    }

    // getNum('1');
    let order = [];
    // const update() {
    //     for (let i=0;i<4;i++)
    // }

    // let card1 = 1;
    // let card2 = 2;
    // let card3 = 3;
    // let card4 = 4;
    // useEffect(() => {
    //     console.log(pjname)
    //   }, [pjname]);
    // ############################################


    return(
        <div className = 'projectMenu'>
            <div className = 'projectMenuHeader'>
                <p className = 'projectHeaderText'>This week's <b>Priorities</b> </p>
                {/* <button className = 'projectAddBtn' onClick={openModal}> + </button></p> */}
                {/* <Modal open={modalOpen} close={closeModal} create={addProject}></Modal> */}
            </div>
            <div className = 'flexbox'>
                <Board className = 'board' id = 'fakebox'>
                    <label>fake</label>
                    <p>making artificial margin</p>
                    <p>another</p>

                </Board>
                <Board className = 'board' id = '1'>
                    <label className = "label" style = {{alignSelf: 'center'}}>1.</label>
                    <Card id = 'card1' category = 'work' className = 'card-work' draggable = 'true' onDrag = 'update' >
                        <p>Meeting with client B </p>
                    </Card>
                    {/* <p></p>
                    <Card id = 'card11' category = 'work' className = 'card-work' draggable = 'true' onDrag = 'update'>
                        <p>Meeting with client BB </p>
                    </Card> */}
                </Board>

                <Board className = 'board' id = '2'>
                    <label className = "label" style = {{alignSelf: 'center'}}>2.</label>
                    <Card id = 'card2' category = 'family' className = 'card-family' draggable = 'true'>
                        <p>Pick up kid from academy</p>
                    </Card>
                </Board>

                <Board className = 'board' id = '3'>
                    <label className = "label" style = {{alignSelf: 'center'}}>3.</label>
                    <Card id = 'card3' category = 'work' className = 'card-work' draggable = 'true'>
                        <p>Re-designing a logo project due</p>
                    </Card>
                </Board>

                <Board className = 'board' id = '4'>
                    <label className = "label" style = {{alignSelf: 'center'}}>4.</label>
                    <Card id = 'card4' category = 'family' className = 'card-family' draggable = 'true'>
                        <p>Son's birthday party with school friends</p>
                    </Card>
                </Board>

                <Board className = 'board' id = '5'>
                    <label className = "label" style = {{alignSelf: 'center'}}>5.</label>
                    <Card id = 'card5' category = 'private' className = 'card-private' draggable = 'true'>
                        <p>Go to the opera</p>
                    </Card>
                </Board>

            </div>
            {/* <Card className = 'projectmenu-category' id = 'project1'>Web K Design</Card>
            <Card className = 'projectmenu-category' id = 'project2'>Project A</Card>
            <Card className = 'projectmenu-category' id = 'project3'>Designing app B UI</Card>
            <Card className = 'projectmenu-category' id = 'project4'>Redesigning J</Card> */}
            {/* <Boxes project={pjname}></Boxes> */}

        </div>
    )

}

export {Projectmenu, flexbox};


// import React, {useState, useEffect} from 'react';
// import './Projectmenu.css';
// import { Link } from 'react-router-dom';
// // import Modal from './Modal';
// // import ProjectBox from './ProjectBox';
// import Boxes from './Boxes';
// import Timeline from '../Timeline'
// import Card from './Card/Card';
// import Board from './Board/Board';

// function Projectmenu(props){

//     // #######Modal창을 위한 함수들##########
//     // const [modalOpen, setModalOpen] = useState(false);

//     // const openModal = () => {
//     //     setModalOpen(true);
//     // }

//     // const closeModal = () => {
//     //     setModalOpen(false);
//     // }

//     const project = props.result;
    
//     // const [pjname, setpjname] = useState([]);

//     // const addProject = () => {
//     //     setpjname(prev => [...prev, document.getElementById('Projectname').value])
//     //     closeModal();
//     // }

//     // useEffect(() => {
//     //     console.log(pjname)
//     //   }, [pjname]);
//     // ############################################


//     return(
//         <div className = 'projectMenu'>
//             <div className = 'projectMenuHeader'>
//                 <p className = 'projectHeaderText'>This week's <b>Priorities</b> <button className = 'projectAddBtn'> + </button></p>
//                 {/* <p className = 'projectHeaderText'>This week's <b>Priorities</b> <button className = 'projectAddBtn' onClick={openModal}> + </button></p> */}
//                 {/* <Modal open={modalOpen} close={closeModal} create={addProject}></Modal> */}
//             </div>

//             <div className = 'projectmenu-category' id = 'project1'>Web K Design</div>
//             <div className = 'projectmenu-category' id = 'project2'>Project A</div>
//             <div className = 'projectmenu-category' id = 'project3'>Designing app B UI</div>
//             <div className = 'projectmenu-category' id = 'project4'>Redesigning J</div>
//             <Boxes project={project}></Boxes>
//             <div className = 'projectmenu-category'>{project}</div>


//         </div>
//     )

// }

// export default Projectmenu;