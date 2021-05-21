import React from 'react';
import './Projectmenu.css';

function Projectmenu(){
    return(
        <div className = 'projectMenu'>
            <div className = 'projectMenuHeader'>
                <p className = 'projectHeaderText'>Projects <button className = 'projectAddBtn'> + </button></p>
                
            </div>

            <div className = 'projectmenu-category' id = 'project1'>Web K Design</div>
            <div className = 'projectmenu-category' id = 'project2'>Team Project A</div>
            <div className = 'projectmenu-category' id = 'project3'>Designing app B UI</div>
            <div className = 'projectmenu-category' id = 'project4'>Redesigning J</div>
            <div className = 'doneBtnWrapper'>
                <button className = 'doneprojectBtn'>Done Projects</button>
            </div>


        </div>
    )

}

export default Projectmenu;