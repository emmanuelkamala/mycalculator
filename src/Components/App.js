import React from 'react';
import Display from './Display';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
import './App.css';

const app = () => { 
  return (
    <div className="app">
      <Display result = '0' />
      <ButtonPanel>
        <Button name="AC" value="clear" />
        <Button name="7" value="7" />
        <Button name="4" value="4" />
        <Button name="1" value="1" />
        <Button name="0" value="0" />

        <Button name="+/-" value="/" />
        <Button name="8" value="8" />
        <Button name="5" value="5" />
        <Button name="2" value="2" />
        <Button name="" value="" />

        <Button name="%" value="*" />
        <Button name="9" value="9" />
        <Button name="6" value="6" />
        <Button name="3" value="3" />
        <Button name="." value="fullstop" />

        <Button name="/" size="2" value="/" />
        <Button name="×" size="2" value="×" />
        <Button name="-" size="2" value="-" />
        <Button name="+" size="2" value="+" />
        <Button name="=" size="2" value="equal" />
      </ButtonPanel>
    </div>
  );
};

export default app;