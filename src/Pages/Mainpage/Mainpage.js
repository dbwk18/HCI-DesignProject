import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Calendar from '../../Components/Calendar/Calendar'
import Menubar from '../../Components/Menubar/Menubar'

function Mainpage() {
    return(
        <div className='Container'>
            <Header />
            <div className='menubarContainer'>
                <Menubar />
            </div>
            <div className='calendarContainer'>
                <Calendar />
            </div>
          


        </div>
    )
}

export default Mainpage;