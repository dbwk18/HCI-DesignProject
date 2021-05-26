import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Mainpage from './Pages/Mainpage/Mainpage'
import Projectpage from './Pages/Projectpage/Projectpage'
import Subtaskpage from './Pages/Projectpage/Subtaskpage'
import Donetaskpage from './Pages/Projectpage/Donetaskpage'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Mainpage} exact={true} />
            <Route path="/Projects" component={Projectpage} />
            <Route path="/Subtasks" component={Subtaskpage} />
            <Route path="/Donetasks" component={Donetaskpage} />
            {/* Done Task 를 위한 Page 추가 필요해보임 */}
          </Switch>
        </div>
      </BrowserRouter>
    
  );
}

// export default App;
