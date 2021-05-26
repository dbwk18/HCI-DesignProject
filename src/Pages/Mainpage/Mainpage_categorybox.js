import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Categorybox from '../../Components/Categorybox/Categorybox'
import Menubar from '../../Components/Menubar/Menubar'

function Mainpage_categorybox(props) {

    var p = undefined

    console.log('Get props in Mainpage', props.location.props)
    if (props.location.props === undefined) {
        p = {mode: [true, false, false, false]}   
    }
    else {
        p = props.location.props
    }

    console.log('Mainpage', p)
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header mode = {p.mode}/>
            </div>
            <div className = 'mainContainer'>
                <div className='menubarContainer'>
                    <Menubar mode = {p.mode}/>
                </div>
                <div className='calendarContainer'>
                    <Categorybox/>
                </div>
            </div>

        </div>
    )

}

export default Mainpage_categorybox;