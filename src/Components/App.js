/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

function App() {
  return (
    <div id="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
