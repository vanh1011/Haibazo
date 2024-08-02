import './App.css';
import React, { useState } from 'react';
import useStore from './store';
import Points from './Points';

function App() {

  const { pointsA, pointsB, status, increasePoints, resetPoints } = useStore();

  return (
   
    <div className="App">
    <h1>{status}</h1>
    <div className="character">
      <h2>Character A</h2>
      <Points points ={pointsA}  />
    </div>
    <div className="character">
      <h2>Character B</h2>
      <Points points ={pointsB}  />
    </div>
    <button onClick={increasePoints}>Race</button>
    {(pointsA > 1 || pointsB > 1) && <button onClick={resetPoints}>Reset</button>}
  </div>
  
  
  );
}

export default App;
