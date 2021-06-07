import React, {useState, useEffect}  from 'react';

import {db, firebaseApp} from '../../firebase'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import cyan from '@material-ui/core/colors/cyan';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';


import {useHistory} from "react-router";
import './Menubar.css'
import { Link } from 'react-router-dom';


import Request from '../Request/Request'

import img_work from '../../Icons/work.png';
import img_family from '../../Icons/family.png';
import img_private from '../../Icons/private.png';


function Menubar(props){

    const color_all = teal[100];
    const color_work = amber[200];
    const color_priv = pink[100];
    const color_fam = cyan[100];    

    const AmberCheckbox = withStyles({
        root: {
          color: color_work,
          '&$checked': {
            color: amber[400],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

    const PinkCheckbox = withStyles({
    root: {
        color: color_priv,
        '&$checked': {
        color: pink[300],
        },
    },
    checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    const CyanCheckbox = withStyles({
        root: {
          color: color_fam,
          '&$checked': {
            color: cyan[300],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

      const TealCheckbox = withStyles({
        root: {
          color: color_all,
          '&$checked': {
            color: teal[200],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

    // props.mode : boolean으로 이루어진 길이 4짜리 리스트. all, work, family, private중 선택된 것을 보여줌
    // props.view_as : 0 또는 1, 0이면 기본형식인 캘린더로 보는 것이고, 1이면 카테고리박스로 보는 것.

    const [requests, setRequests] = useState([])
    const [send, setSend] = useState(true)

    useEffect(() => {
        
        const schedules_ref = db.collection('schedules');
        schedules_ref.onSnapshot((snapshot) =>{
            var filtered_data = snapshot.docs.filter(doc=> {
                return doc.data().category === 2
            })
            var mapped_data = filtered_data.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setRequests(mapped_data)
        })
    }, [])


    const history = useHistory();
    const category_hover_in = (evt) => {
        var elem_id = evt.target.id.slice(9)
        if (elem_id.startsWith('all')) {
            evt.target.style.boxShadow = '5px 5px 2px #C2EFC1'
        } else if (elem_id.startsWith('work')){
            evt.target.style.boxShadow = '5px 5px 2px #efedb6'
        } else if (elem_id.startsWith('family')) {
            evt.target.style.boxShadow = '5px 5px 2px #b8e7e4'
        } else if (elem_id.startsWith('private')) {
            evt.target.style.boxShadow = '5px 5px 2px #efcceb'
        }
    }

    const category_hover_out = (evt) => {
        // var elem_id = evt.target.id.slice(9)
        evt.target.style.boxShadow = 'none';
        // if (elem_id.startsWith('all') && !props.mode[0]) {
        //     evt.target.style.backgroundColor = 'transparent'
        // } else if (elem_id.startsWith('work') && !props.mode[1]){
        //     evt.target.style.backgroundColor = 'transparent'
        // } else if (elem_id.startsWith('family') && !props.mode[2]) {
        //     evt.target.style.backgroundColor = 'transparent'
        // } else if (elem_id.startsWith('private') && !props.mode[3]) {
        //     evt.target.style.backgroundColor = 'transparent'
        // }
    }

    const click_category = (evt) => {
        if (props.view_as === 1) {
            alert('You can choose category only in CALENDAR mode. Please select Calendar in VIEW-AS tab')
            return
        }
        var location_tokens = window.location.href.split('/')
        var location = ''
        for (let i = 3;i < location_tokens.length; i++) {
            location += '/' + location_tokens[i]
        }
        var elem_id = evt.target.id.slice(9,)
        var new_mode = [...props.mode]
        
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
    const change_send = () => {
        if (send === true){
            document.getElementById('send-wrap').style.display = 'flex'
        } else {
            document.getElementById("send-wrap").style.display = 'none'
        }
        setSend(send => !send)
    }

    const send_new_message = () => {
        var target_id = document.getElementById('send-selection-schedule').value
        var new_state = 0
        if (document.getElementById('send-selection-who').value === ''){
            new_state = 1
        } else {
            new_state = 1
        }
        var new_message = document.getElementById('sendContext').value
        db.collection('schedules').doc(target_id).update({
            status: new_state,
            message: new_message
        })
        document.getElementById('send-wrap').style.display = 'none'
        setSend(send => !send)
    }

    const enter_manager = () => {
        document.getElementById('category-priority').style.boxShadow = '5px 5px 2px #efefa0'
    }
    const leave_manager = () => {
        document.getElementById('category-priority').style.boxShadow = ''
    }
    const enter_send = () => {
        document.getElementById('category-send').style.boxShadow = '5px 5px 2px #b8e7e4'
    }
    const leave_send = () => {
        document.getElementById('category-send').style.boxShadow = ''
    }
    const enter_close = () => {
        document.getElementById('send-button-close').style.boxShadow = '5px 5px 2px gray'
    }
    const leave_close = () => {
        document.getElementById('send-button-close').style.boxShadow = ''
    }
    const enter_send_button = () => {
        document.getElementById('send-button-send').style.boxShadow = '5px 5px 2px gray'
    }
    const leave_send_button = () => {
        document.getElementById('send-button-send').style.boxShadow = ''
    }

    
    return(
        <div className = 'mainbox-sidemenu'>
            <p className = 'mainbox-sidemenu-left-text'>View Options:</p>

            <div
                className = 'sidemenu-category'
                style = {{backgroundColor: (props.mode[0] ? '#d2ffd1' : 'transparent')}}
                onMouseEnter = {evt => category_hover_in(evt)}
                onMouseLeave = {evt => category_hover_out(evt)}>
                <TealCheckbox
                id = {'category-all-' + props.mode[0]}
                checked = {props.mode[0]}
                onClick = {evt => click_category(evt)}/>  
                <div className = 'sidemenu-category-text'>All</div>
            </div>
            

            <div
                className = 'sidemenu-category'
                style = {{backgroundColor: (props.mode[1] ? '#fffdc6' : 'transparent')}}
                onMouseEnter = {evt => category_hover_in(evt)}
                onMouseLeave = {evt => category_hover_out(evt)}>
                <AmberCheckbox
                id = {'category-work-' + props.mode[1]}
                checked = {props.mode[1]}
                onClick = {evt => click_category(evt)}/>  
                <div className = 'sidemenu-category-text'>Work</div>
                <img className= 'sidemenu-category-img' src={img_work} width = "30" />
            </div>

            <div
                className = 'sidemenu-category'
                style = {{backgroundColor: (props.mode[2] ? '#c8f7f4' : 'transparent')}}
                onMouseEnter = {evt => category_hover_in(evt)}
                onMouseLeave = {evt => category_hover_out(evt)}>
                <CyanCheckbox
                id = {'category-family-' + props.mode[2]}
                checked = {props.mode[2]}
                onClick = {evt => click_category(evt)}/>  
                <div className = 'sidemenu-category-text'>Family</div>
                <img className= 'sidemenu-category-img' src={img_family} width = "35" />
            </div>

            <div
                className = 'sidemenu-category'
                style = {{backgroundColor: (props.mode[3] ? '#ffdcfb' : 'transparent')}}
                onMouseEnter = {evt => category_hover_in(evt)}
                onMouseLeave = {evt => category_hover_out(evt)}>
                <PinkCheckbox
                id = {'category-private-' + props.mode[3]}
                checked = {props.mode[3]}
                onClick = {evt => click_category(evt)}/>  
                <div className = 'sidemenu-category-text'>Private</div>
                <img className = 'sidemenu-category-img' src={img_private} width = "28"/>
            </div>

            <p className = 'sidemenu-left-border'></p>

            <div className = 'category-project' id = 'category-priority'>
                <Link to='/Projects' className = 'default-link'>
                    <Button class="btn btn-outline-warning" size = 'lg'>View Priority Manager</Button>
                </Link>
            </div>
            <p className = 'sidemenu-left-border'></p>
            <div className = 'category-project' id = 'category-send' onClick = {_ => change_send()}>
                <Button className="btn btn-primary" size = 'lg' >&nbsp;&nbsp;&nbsp;&nbsp;Send Message&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            </div>
            <div id = 'send-wrap' style = {{display: 'none'}}>
                <div className = 'send-body-header-wrap'>
                    <div className = 'send-header-text'>Send New message</div>
                    <button id = 'send-button-close' onClick = {_ => change_send()} onMouseEnter = {_ => enter_close()} onMouseLeave = {_ => leave_close()}>&times;</button>
                </div>
                <div className = 'send-body-schedule-wrap'>
                    <div className = 'send-body-subject'>Schedule : </div>
                    <select id = 'send-selection-schedule'>
                        {
                            requests.map(r => {
                                return <option value = {r.id}>{r.title}({r.start})</option>
                            })
                        }
                    </select>
                </div>
                <div className = 'send-body-wrap'>
                    <div className = 'send-body-pass-subject'>Pass to :</div>
                    <select id = 'send-selection-who'>
                        <option value = ''>No pass</option>
                        <option value = 'partner'>to partner</option>
                    </select>
                </div>
                <div className = 'send-body-message-wrap'>
                    <div className = 'send-body-message-text'>Message to send: </div>
                    <textarea
                        className = 'send-body-textarea'
                        type = 'text'
                        id = 'sendContext'
                        placeholder = 'Type here'></textarea>

                </div>
                <div className = 'send-body-button-wrap'>
                    <Button className="btn btn-primary" id = 'send-button-send' onClick = {_ => send_new_message()}>Submit</Button>
                    {/* <button id = 'send-button-send' onClick = {_ => send_new_message()} onMouseEnter = {_ => enter_send_button()} onMouseLeave = {_ => leave_send_button()}>Send</button> */}
                </div>
            </div>
            <p className = 'sidemenu-left-border'></p>
            <p className = 'mainbox-sidemenu-left-text'>Notifications:</p>
            <div id = 'notification-box'>
                {
                    requests.map(r => {
                        if (r.status !== 2 && r.status !== 3) {
                            return 
                        }
                        return (
                            <Request key = {r.id + '-request'} data = {r} id = {r.id}/>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Menubar;