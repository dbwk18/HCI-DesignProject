import React, {useState, useEffect}  from 'react';

import {useHistory} from "react-router";
import './Menubar.css'
import { Link } from 'react-router-dom';


import img_work from '../../Icons/work.png';
import img_family from '../../Icons/family.png';
import img_private from '../../Icons/private.png';

function Menubar(props){

    // props.mode : boolean으로 이루어진 길이 4짜리 리스트. all, work, family, private중 선택된 것을 보여줌
    // props.view_as : 0 또는 1, 0이면 기본형식인 캘린더로 보는 것이고, 1이면 카테고리박스로 보는 것.

    console.log('------------Menubar-------------', props.mode)

    const history = useHistory();
    const click_category = (evt) => {
        if (props.view_as === 1) {
            alert('You can choose category only in CALENDAR mode. Please select Calendar in VIEW-AS tab')
            return
        }
        console.log('menubar print location', window.location.href, window.location.href.split('/'))
        var location_tokens = window.location.href.split('/')
        var location = ''
        for (let i = 3;i < location_tokens.length; i++) {
            location += '/' + location_tokens[i]
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
                  view_as: props.view_as,
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
                    mode: new_mode,
                    view_as: props.view_as,
                    task3: props.task3
                }
            })

        } else if (elem_id.startsWith('family')) {
            
            new_mode[2] = !new_mode[2]
            history.push({
                pathname: location,
                props: {
                    mode: new_mode,
                    view_as: props.view_as,
                    task3: props.task3
                }
            })

        } else if (elem_id.startsWith('private')) {
            
            new_mode[3] = !new_mode[3]
            history.push({
                pathname: location,
                props: {
                    mode: new_mode,
                    view_as: props.view_as,
                    task3: props.task3
                }
            })

        }
    }


    console.log('menubar:', props.mode)

    return(
        <div className = 'mainbox-sidemenu'>
            <p className = 'mainbox-sidemenu-left-text'>View by Category:</p>
            <div className = 'sidemenu-category' id = {'category-all-' + props.mode[0]} onClick = {evt => click_category(evt)}>View all  </div>
            <div className = 'sidemenu-category' id = {'category-work-' + props.mode[1]} onClick = {evt => click_category(evt)}>Work <img src={img_work} width = "30" /></div>
            <div className = 'sidemenu-category' id = {'category-family-' + props.mode[2]} onClick = {evt => click_category(evt)}>Family <img src={img_family} width = "35" /></div>
            <div className = 'sidemenu-category' id = {'category-private-' + props.mode[3]} onClick = {evt => click_category(evt)}>Private <img src={img_private} width = "28"/></div>
            <p className = 'sidemenu-left-border'></p>
            <button id = 'category-project'>
                <Link to='/Projects'>View Project Manager</Link>
            </button>
        </div>
    )
}
export default Menubar;