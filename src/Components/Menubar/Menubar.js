import React from 'react';
import {useHistory} from "react-router";
import './Menubar.css'

function Menubar(props){

    console.log('Menubar', props.mode)

    const history = useHistory();
    const click_category = (evt) => {
        var elem_id = evt.target.id.slice(9,)
        console.log(elem_id)
        if (elem_id.startsWith('all')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'all'
                }
            })
        } else if (elem_id.startsWith('work')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'work'
                }
            })
        } else if (elem_id.startsWith('family')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'family'
                }
            })
        } else if (elem_id.startsWith('private')) {
            history.push({
                pathname: '/',
                props: {
                    mode: 'private'
                }
            })
        }
    }

    return(
        <div className = 'mainbox-sidemenu'>
            <p className = 'mainbox-sidemenu-left-text'>View by Category:</p>
            <div className = 'sidemenu-category' id = {'category-all-' + props.mode} onClick = {evt => click_category(evt)}>View all</div>
            <div className = 'sidemenu-category' id = {'category-work-' + props.mode} onClick = {evt => click_category(evt)}>Work</div>
            <div className = 'sidemenu-category' id = {'category-family-' + props.mode} onClick = {evt => click_category(evt)}>Family</div>
            <div className = 'sidemenu-category' id = {'category-private-' + props.mode} onClick = {evt => click_category(evt)}>Private</div>
            <p className = 'sidemenu-left-border'></p>
            <p className = 'mainbox-sidemenu-left-text'>View as:</p>
            <div className = 'sidemenu-category' id = 'category-calendar'>Calendar</div>
            <div className = 'sidemenu-category' id = 'category-categorybox'>Category Box</div>
            <p className = 'sidemenu-left-border'></p>
            <button className = 'sidemenu-category' id = 'category-project'>
                View Project Manager
            </button>
        </div>
    )
}
export default Menubar;