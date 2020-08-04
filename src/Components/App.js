import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app"> { this.props.children }
        <Display />
        <ButtonPanel>
          <Button label="AC" value="clear" />
          <Button label="7" value="7" />
          <Button label="4" value="4" />
          <Button label="1" value="1" />
          <Button label="0" value="0" />

          <Button label="+/-" value="/" />
          <Button label="8" value="8" />
          <Button label="5" value="5" />
          <Button label="2" value="2" />
          <Button label="" value="" />

          <Button label="%" value="*" />
          <Button label="9" value="9" />
          <Button label="6" value="6" />
          <Button label="3" value="3" />
          <Button label="." value="fullstop" />

          <Button label="/" size="2" value="/" />
          <Button label="×" size="2" value="×" />
          <Button label="-" size="2" value="-" />
          <Button label="+" size="2" value="+" />
          <Button label="=" size="2" value="equal" />
        </ButtonPanel>
      </div>
    );
  }
}

App.propTypes = { children: PropTypes.node };

export default App;