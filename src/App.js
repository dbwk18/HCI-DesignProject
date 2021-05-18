import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Mainpage from './Pages/Mainpage/Mainpage'
import Projectpage from './Pages/Projectpage/Projectpage'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Mainpage} exact={true} />
            <Route path="/Projects" component={Projectpage} />
          </Switch>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
