import React,{useEffect} from "react";
import './index.css';

const ProjectBox = (props) => {
    
    const {index, project} = props;

    useEffect(() => {
        var colors = ['#ff0000', '#00ff00', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('proj').style.backgroundColor = random_color;
      }, []);

    return(
        <div className = 'projectmenu-category' id = 'proj'>{project}</div>
    )
}

export default ProjectBox;