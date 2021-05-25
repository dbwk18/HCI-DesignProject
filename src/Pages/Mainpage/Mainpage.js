import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Calendar from '../../Components/Calendar/Calendar'
import Menubar from '../../Components/Menubar/Menubar'
import PopupBox from '../../Components/PopupBox/PopupBox'

function Mainpage() {
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
            <div>
                <PopupBox />
            </div>
            </div>
            <div className = 'mainContainer'>
                <div className='menubarContainer'>
                    <Menubar />
                </div>
                <div className='calendarContainer'>
                    <Calendar/>
                </div>
            </div>
            
        </div>
    )
}

export default Mainpage;