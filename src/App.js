<<<<<<< HEAD
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
=======
// import './App.css';
// import React from 'react';
// import Mainpage from './Pages/Mainpage/Mainpage'
 
// function App() {
//   return (
//     <div>
//       <Mainpage />
//     </div>
//   );
// }
>>>>>>> 2174701eec00143ca9653db979ca0ef6a783b3d7

// export default App;
