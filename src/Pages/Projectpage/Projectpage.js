import './Projectpage.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header'
// import Projectmenu from '../../Components/Projectmenu/Projectmenu'
import Timeline from '../../Components/Timeline/Timeline'

function Projectpage() {
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
                <button id="closeBtn"><Link to='/mainpage3'>Close</Link></button>
                {/* 메인 화면으로 돌아갈 수 있습니다 */}
            </div>
            <div className = 'mainContainer'>
                <Timeline />
            </div>

        </div>
    )
}

export default Projectpage;