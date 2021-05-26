import React from 'react';
import {useHistory} from "react-router";
import './Menubar.css'
import { Link } from 'react-router-dom';


import img_work from '../../Icons/work.png';
import img_family from '../../Icons/family.png';
import img_private from '../../Icons/private.png';

function Menubar(props){

    console.log('------------Menubar-------------', props.mode)

    const history = useHistory();
    const click_category = (evt) => {
        console.log('menubar print location', window.location.href, window.location.href.split('/'))
        var location_tokens = window.location.href.split('/')
        var location = '/'
        for (let i = 3;i < location_tokens.length; i++) {
            location += location_tokens[i]
        }
        console.log('resulting location', location)
        var elem_id = evt.target.id.slice(9,)
        var new_mode = [...props.mode]
        console.log(elem_id, new_mode,location)
        
        if (elem_id.startsWith('all')) {
            
            history.push({
                pathname: location,
                props: {
                    mode: [true, false, false, false],
                    task3: props.task3
                }
            })

        } 
        
        new_mode[0] = false
        
        if (elem_id.startsWith('work')) {
            
            new_mode[1] = !new_mode[1]
            history.push({
                pathname: location,
                props: {
                    mode : new_mode,
                    task3 : props.task3
                }
            })

        } else if (elem_id.startsWith('family')) {
            
            new_mode[2] = !new_mode[2]
            history.push({
                pathname: location,
                props: {
                    mode: new_mode,
                    task3: props.task3
                }
            })

        } else if (elem_id.startsWith('private')) {
            
            new_mode[3] = !new_mode[3]
            history.push({
                pathname: location,
                props: {
                    mode: new_mode,
                    task3: props.task3
                }
            })

        }
    }

    console.log('menubar:', props.mode)

    return(
<<<<<<< HEAD
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
=======
        <div className = 'mainbox-sidemenu'>
            <p className = 'mainbox-sidemenu-left-text'>View by Category:</p>
            <div className = 'sidemenu-category' id = {'category-all-' + props.mode[0]} onClick = {evt => click_category(evt)}>View all  </div>
            <div className = 'sidemenu-category' id = {'category-work-' + props.mode[1]} onClick = {evt => click_category(evt)}>Work <img src={img_work} width = "30" /></div>
            <div className = 'sidemenu-category' id = {'category-family-' + props.mode[2]} onClick = {evt => click_category(evt)}>Family <img src={img_family} width = "35" /></div>
            <div className = 'sidemenu-category' id = {'category-private-' + props.mode[3]} onClick = {evt => click_category(evt)}>Private <img src={img_private} width = "28"/></div>
            <p className = 'sidemenu-left-border'></p>
            <p className = 'mainbox-sidemenu-left-text'>View as:</p>
            <div className = 'sidemenu-category' id = 'category-calendar'  onClick = {evt => history.push('/')}>Calendar</div>
            <div className = 'sidemenu-category' id = 'category-categorybox' onClick = {evt => history.push('./categorybox')} >Category Box</div>
            <p className = 'sidemenu-left-border'></p>
            <button id = 'category-project'>
                View Project Manager
            </button>
        </div>
>>>>>>> 2174701eec00143ca9653db979ca0ef6a783b3d7
    )
}
export default Menubar;