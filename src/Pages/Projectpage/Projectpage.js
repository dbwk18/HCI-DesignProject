import './Projectpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Projectmenu from '../../Components/Projectmenu/Projectmenu'
import Timeline from '../../Components/Timeline/Timeline'

function Projectpage() {
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
                <div className='timelineContainer'>
                    <Timeline />
                </div>
            </div>

        </div>
    )
}

export default Projectpage;