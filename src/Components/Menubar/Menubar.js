import React from 'react';
import './Menubar.css'
import { Link } from 'react-router-dom';


function Menubar(){
    return(
      <div className = 'mainbox-sidemenu'>
        <p className = 'mainbox-sidemenu-left-text'>View by Category:</p>
        <div className = 'sidemenu-category' id = 'category-all'>View all</div>
        <div className = 'sidemenu-category' id = 'category-work'>Work</div>
        <div className = 'sidemenu-category' id = 'category-family'>Family</div>
        <div className = 'sidemenu-category' id = 'category-private'>Private</div>
        <p className = 'sidemenu-left-border'></p>
        <p className = 'mainbox-sidemenu-left-text'>View as:</p>
        <div className = 'sidemenu-category' id = 'category-calendar'>Calendar</div>
        <div className = 'sidemenu-category' id = 'category-categorybox'>Category Box</div>
        <p className = 'sidemenu-left-border'></p>
        <button className = 'sidemenu-category' id = 'category-project'>
            <Link to='/projects'>View Project Manager</Link>
            {/* 프로젝트 화면으로 넘어갑니다 */}
        </button>
    </div>
    )
}
export default Menubar;