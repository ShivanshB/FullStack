import logo from './logo.svg';
import Button from './Button';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {setCount(count + 1)};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Count!</h1>
        <button onClick ={updateCount}>click me!</button>
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
