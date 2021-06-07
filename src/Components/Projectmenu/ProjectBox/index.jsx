import React,{useEffect} from "react";
import './index.css';

const ProjectBox = (props) => {
    
    const {index, project} = props;

    return(
        <div className = 'projectmenu-category' id = 'proj'>{project}</div>
    )
}

export default ProjectBox;