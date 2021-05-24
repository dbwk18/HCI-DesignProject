import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Mainpage_calendar from './Pages/Mainpage/Mainpage_calendar'
import Mainpage_categorybox from './Pages/Mainpage/Mainpage_categorybox'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Mainpage_calendar}/>
                <Route exact path="/categorybox" component={Mainpage_categorybox}/>
                </Switch>
            </Router>
        )
    }
}
export default Routes;