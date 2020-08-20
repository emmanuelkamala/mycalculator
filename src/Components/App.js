import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/calculate';

function App() {
  return (
    <div id="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
