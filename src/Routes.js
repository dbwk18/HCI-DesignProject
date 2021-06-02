import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Mainpage_calendar from './Pages/Mainpage/Mainpage_calendar'
import Mainpage_categorybox from './Pages/Mainpage/Mainpage_categorybox'
import Mainpage_task3 from './Pages/Mainpage/Mainpage_task3'
import Projectpage from './Pages/Projectpage/Projectpage'
import Subtaskpage from './Pages/Projectpage/Subtaskpage'
import Donetaskpage from './Pages/Projectpage/Donetaskpage'

class Routes extends React.Component {

    render() {
        return (
            // <DndProvider backend={HTML5Backend}>
            <Router>
                <Switch>
                    <Route exact path="/HCI-DesignProject" component={Mainpage_calendar}/>
                    <Route exact path="/HCI-DesignProject/calendar" component={Mainpage_calendar}/>
                    <Route exact path="/HCI-DesignProject/categorybox" component={Mainpage_categorybox}/>
                    <Route exact path="/mainpage3" component={Mainpage_task3}/>
                    <Route path="/Projects" component={Projectpage} />
                    <Route path="/Subtasks" component={Subtaskpage} />
                    <Route path="/Donetasks" component={Donetaskpage} />
                </Switch>
            </Router>
            // </DndProvider>
        )
    }
}
export default Routes;