/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */

import React, {Component} from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: '',
      renderResult: false,
      error: false,
    };
  }

  handleClick = (btnName) => {
    this.setState(prevState => calculate(prevState, btnName));
  }

  render() {
    return (
      <div id="app">
        <Display outcome={this.state.next} operator={this.state.operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
