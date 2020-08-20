import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: '',
      renderResult: false,
      errorOccurance: false,
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