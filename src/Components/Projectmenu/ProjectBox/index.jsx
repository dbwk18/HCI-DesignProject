import React from "react";
import './index.css';

const ProjectBox = (props) => {
    
    const {index, project} = props;

    return(
        <div className = 'projectmenu-category' id = 'project'>{project}</div>
    )
}

export default ProjectBox;