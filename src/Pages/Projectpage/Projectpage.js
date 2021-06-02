import './Projectpage.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header'
// import Projectmenu from '../../Components/Timeline/Projectmenu/Projectmenu'
import Timeline from '../../Components/Timeline/Timeline'

function Projectpage() {
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
                <div id="banner"><i>Double-click schedule to add in 'Priorities'</i></div>
                <button id="closeBtn"><Link to='/mainpage3'>Close</Link></button>
                {/* 메인 화면으로 돌아갈 수 있습니다 */}
            </div>
            <div className = 'mainContainer'>
                <Timeline />
                {/* <div className='projectmenuContainer'>
                    <Projectmenu />
                    <button className = 'doneprojectBtn'><Link to='/Subtasks'>Detail View</Link></button>
                    
                </div> */}
                {/* <div className='timelineContainer'>
                    <Timeline />
                </div> */}
            </div>

        </div>
    )
}

export default Projectpage;