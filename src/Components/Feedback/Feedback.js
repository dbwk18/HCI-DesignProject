import React, {useState, useEffect} from 'react';
import './Feedback.css'
import img_good from '../../Icons/smile.png';
import img_hmm from '../../Icons/hmm.png';
import img_bad from '../../Icons/bad.png';
import img_feedback from '../../Icons/feedback.png';

function Feedback (props) {
    // 0 : None, 1 : good, 2 : hmm, 3 : bad
    // console.log(props)
    const [icon, setIcon] = useState(0);
    const [memo, setMemo] = useState('');


    const select_icon = (evt) => {
        var target = evt.target
        // console.log('in select_icon', target.id)
        document.getElementById(props.id + '-feedback-icon-wrap-good').style.border = 'none'
        document.getElementById(props.id + '-feedback-icon-wrap-hmm').style.border = 'none'
        document.getElementById(props.id + '-feedback-icon-wrap-bad').style.border = 'none'

        if (target.id.endsWith('good')) {
            document.getElementById(props.id + '-feedback-icon-wrap-good').style.border = '1px solid black'
        } else if (target.id.endsWith('hmm')) {
            document.getElementById(props.id + '-feedback-icon-wrap-hmm').style.border = '1px solid black'
        } else if (target.id.endsWith('bad')) {
            document.getElementById(props.id + '-feedback-icon-wrap-bad').style.border = '1px solid black'
        }

        if (target.id.endsWith('good')) {
            setIcon(1)
        } else if (target.id.endsWith('hmm')) {
            setIcon(2)
        } else if (target.id.endsWith('bad')) {
            setIcon(3)
        }
    }

    const submit_memo = (evt) => {

        var previous_icon = document.getElementById(props.id + 'feedback-memo')
        if (previous_icon) {
            previous_icon.remove()
        }

        var new_memo = document.getElementById(props.id + '-feedback-memo').value
        setMemo(new_memo)
        // console.log('submit with [icon, memo] : ', icon, memo)

        var new_icon = document.createElement('img')
        new_icon.setAttribute('id', props.id + '-icon-oncalendar')
        new_icon.setAttribute('class', 'icon-oncalendar icon-row' + props.row + ' icon-col' + props.col)
        if (icon === 1) {
            new_icon.src = 'https://user-images.githubusercontent.com/74011145/119400291-f0178180-bd14-11eb-9007-b69533624992.png'
        } else if (icon === 2) {
            new_icon.src = 'https://user-images.githubusercontent.com/74011145/119401544-944df800-bd16-11eb-96d4-806f447c95af.png'
        } else if (icon === 3) {
            new_icon.src = 'https://user-images.githubusercontent.com/74011145/119401630-adef3f80-bd16-11eb-8917-121462d9e020.png'
        }
        
        new_icon.setAttribute('title', document.getElementById(props.id + '-feedback-memo').value)
        document.getElementById(props.id + '-feedback-memo').value = ''


        document.getElementById('feedback-wrap').appendChild(new_icon)
            

        document.getElementById(props.id + '-feedback').setAttribute('style', 'display: none')
    }
    // console.log('changed')
    // console.log('(Feedback) Current active element: ', document.activeElement.id)
    return (
        <div className = {'feedback feedback-row' + props.row + ' feedback-col' + props.col} id = {props.id + '-feedback'}>
            <div className = 'feedback-header-wrap'>
                <img className = 'feedback-icon icon-feedback' src = {img_feedback} width = '16' height = '16' alt = 'feedback'/>
                <p className = 'feedback-text'>How did it go?</p>
            </div>
            <div className = 'feedback-icons'>
                <div className = 'feedback-icon-wrap' id = {props.id + '-feedback-icon-wrap-good'}>
                    <img
                    className = 'feedback-icon'
                    src={ img_good }
                    width='16'
                    height='16'
                    alt='good'
                    id = {props.id + 'feedback-icon-good'}
                    onClick = {evt => select_icon(evt)}/>
                    <span
                    className = 'feedback-icon-text'
                    id = {props.id + '-feedback-text-good'}
                    onClick = {evt => select_icon(evt)}>Great!</span>
                </div>
                <div className = 'feedback-icon-wrap' id = {props.id + '-feedback-icon-wrap-hmm'}>
                    <img
                    className = 'feedback-icon'
                    src={ img_hmm }
                    width='16'
                    height='16'
                    alt='good'
                    id = {props.id + 'feedback-icon-hmm'}
                    onClick = {evt => select_icon(evt)}/>
                    <span
                    className = 'feedback-icon-text'
                    id = {props.id + '-feedback-text-hmm'}
                    onClick = {evt => select_icon(evt)}>Hmm...</span>
                </div>
                <div className = 'feedback-icon-wrap' id = {props.id + '-feedback-icon-wrap-bad'}>
                    <img
                    className = 'feedback-icon'
                    src={ img_bad }
                    width='16'
                    height='16'
                    alt='good'
                    id = {props.id + 'feedback-icon-bad'}
                    onClick = {evt => select_icon(evt)}/>
                    <span
                    className = 'feedback-icon-text'
                    id = {props.id + '-feedback-text-bad'}
                    onClick = {evt => select_icon(evt)}>OMG</span>
                </div>
            </div>
            <textarea className = 'feedback-memo' id = {props.id + '-feedback-memo'} placeholder = 'Leave memo here!'></textarea>
            <div className = 'feedback-done-wrap'>
                <button className = 'feedback-done' onClick = {evt => submit_memo(evt)}>Done</button>
            </div>
        </div>
    )
}


export default Feedback;