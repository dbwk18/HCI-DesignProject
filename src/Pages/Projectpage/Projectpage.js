import './Projectpage.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header'
// import Projectmenu from '../../Components/Projectmenu/Projectmenu'
import Timeline from '../../Components/Timeline/Timeline'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router";

function Projectpage() {


    const history = useHistory();
    const goto_main = () => {
      history.push('/HCI-DesignProject')
    }
    const show_help = () => {
        console.log('hi')
        document.getElementById('help-timeline-message').style.display = 'block'
    }
    const hide_help = () => {
        console.log('hello')
        document.getElementById('help-timeline-message').style.display = 'none'
    }
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
                {/* <div id="banner"><i><b>Double-click</b> schedule to add in 'Priorities'</i></div> */}
                <Button className = "btn" id = 'closeBtn' onClick = {_ => goto_main()}>Close</Button>
                {/* 메인 화면으로 돌아갈 수 있습니다 */}
            </div>
            <div className = 'mainContainer'>
                <Timeline />
            </div>
            <div id = 'help-timeline' className = 'timeline-help' onMouseEnter = {_ => show_help()} onMouseLeave = {_ => hide_help()}>
                Help
            </div>
            <div id = 'help-timeline-message' className = 'timeline-help-message' style = {{display: 'none'}}>
                <b>Double-click</b> schedule to add in 'Priorities'
            </div>

        </div>
    )
}

export default Projectpage;