import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Mainpage from './Pages/Mainpage/Mainpage'
import App from './App';
import Popup from './Pages/Popup/Popup'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Mainpage}/>
          <Route exact path="/add_schedule" component={Popup}/>
        </Switch>
      </Router>
    )
  }
}
export default Routes;