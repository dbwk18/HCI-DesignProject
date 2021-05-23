import React, {useState, useEffect} from 'react';
import * as calendar_info from '../calendar_infomation.js'

function Schedule(props) {
    const day_info = calendar_info.day_info
    const month = parseInt(props.month)
    const date = parseInt(props.date)
    var calendar_location = day_info[props.month].indexOf(props.date)
    var calendar_row = parseInt(calendar_location / 7)
    var calendar_col = calendar_location % 7
    console.log('-==============================')
    return(
        <div id = {'schedule_' + month + '_' + calendar_row + '_' + calendar_col}
        className = {'schedule ' + 'row' + calendar_row + " col" + calendar_col + ' ' + props.category}>
            {
                props.title.length > 15 ? props.title.slice(0, 15) + '...' : props.title
            }
        </div>
    )
}

export default Schedule