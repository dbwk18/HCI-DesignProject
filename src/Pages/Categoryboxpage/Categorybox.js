import './Categorybox.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Menubar from '../../Components/Menubar/Menubar'
import Categorybox from '../../Components/Categorybox/Categorybox'

function Categoryboxpage() {
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
            </div>
            <div className = 'mainContainer'>
                <div className='menubarContainer'>
                    <Menubar />
                </div>
                <div className='CategoryboxContainer'>
                    <Categorybox />
                </div>
            </div>

        </div>
    )
}

export default Categoryboxpage;