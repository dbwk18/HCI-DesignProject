import React from 'react';
import Board from './components/board';
import Card from './components/card';
import '/Categorybox.css';

function App() {
  return (
    <div className="App">
      <main className = "flexbox">

        
          <Board id = "board-1" className = "board">
            <img className = "icon" src = "./icons/pin.png" alt = "Pin board"></img>
            <div id = "pin-wrap">
            </div>
          </Board>
       

        
        <Board id = "board-2" className = "board">
          <img className = "icon" src = "./icons/family.png" alt = "Family board" ></img>
          <div id = "family-wrap">
            <Card id = "card-1" className="card" draggable="true">
              <p>Go to park</p>
            </Card>
            <Card id = "card-2" className="card" draggable="true">
              <p>Pick up kid from academy</p>
            </Card>
            <Card id = "card-5" className="card" draggable="true">
              <p>Pick up kid from soccer field</p>
            </Card>
          </div>
        </Board>
        

        <Board id = "board-3" className = "board">
          <img  className = "icon" src = "./icons/private.png" alt = "Private board" ></img>
          <div id = "private-wrap">
            <Card id = "card-3" className="card" draggable="true">
              <p>Go to yoga class</p>
            </Card>
          </div>
        </Board>

        <Board id = "board-4" className = "board">
          <img className = "icon" src = "./icons/work.png" alt = "Work board"></img>
          <div id = "work-wrap">
            <Card id = "card-4" className="card" draggable="true">
              <p>Meeting with client B</p>
            </Card>
            <Card id = "card-6" className="card" draggable="true">
              <p>Re-designing A logo project due</p>
            </Card>
          </div>
        </Board>


      </main>
    </div>
  );
}

export default App;
