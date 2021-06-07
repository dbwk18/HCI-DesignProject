import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Categorybox from '../../Components/Categorybox/Categorybox'
import Menubar from '../../Components/Menubar/Menubar'

function Mainpage_categorybox() {

    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header/>
            </div>
            <div className = 'mainContainer'>
                <div className='menubarContainer'>
                    <Menubar mode = {[false, false, false, false]} view_as = {1}/>
                </div>
                <div className='calendarContainer'>
                    <Categorybox/>
                </div>
            </div>
        </div>
    )

}

export default Mainpage_categorybox;