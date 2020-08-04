/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0'
    };
  }


  render() {
    return (
      <div id="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
export default App;