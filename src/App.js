import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Mainpage from './Pages/Mainpage/Mainpage'
import Projectpage from './Pages/Projectpage/Projectpage'
import Subtaskpage from './Pages/Projectpage/Subtaskpage'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Mainpage} exact={true} />
            <Route path="/Projects" component={Projectpage} />
            <Route path="/Subtasks" component={Subtaskpage} />
          </Switch>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
