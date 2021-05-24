import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Calendar from '../../Components/Calendar/Calendar'
import Menubar from '../../Components/Menubar/Menubar'

function Mainpage(props) {

    var p = undefined

    console.log('Get props in Mainpage', props.location.props)
    if (props.location.props === undefined) {
        p = {mode: 'all'}   
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
                    <Calendar mode = {p.mode}/>
                </div>
            </div>

        </div>
    )

}

export default Mainpage;