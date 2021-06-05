import React from 'react';
import {useHistory} from "react-router";
import './Header.css';


function Header() {

    const history = useHistory();

    const move_to_homepage = () => {
        console.log('move_to_homepage')
        history.push({
          pathname: './mainpage3',
          props: {
            mode: [true, false, false, false],
            task3: true
          }
        })
    }

    return (
        <div className = 'header-box'>
            <h1 className = 'header-title'>
                <span id = 'header-title-colic' onClick = {evt => {move_to_homepage()}}>Colics</span> 
                <span id = 'header-title-span'>schedule manager for working moms and dads</span>
            </h1>
        </div>
      )
}

export default Header;