import React from 'react';
import './Header.css';

function Header(props) {
    // return (
    //     <div>
    //         <div className="header">
    //             <h1 className="header1">Colics</h1>
    //             <h3 className="header2">Schedule manager for working moms and dads</h3>
    //         </div>
    //         <hr className="border"/>
    //     </div>
    // )

    return (
        <div className = 'header-box'>
            <h1 className = 'header-title' id = {'title-' + props.mode}>Colics <span id = 'header-title-span'>Schedule manager for working moms and dads</span></h1>
        </div>
      )
}

export default Header;