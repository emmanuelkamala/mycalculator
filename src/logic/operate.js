/* eslint-disable import/extensions */

import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let outcome = '';
  switch (operation) {
    case '+':
      outcome = Big(numberOne).plus(numberTwo).toString();
      break;
    case '-':
      outcome = Big(numberOne).minus(numberTwo).toString();
      break;
    case 'X':
      outcome = Big(numberOne).times(numberTwo).toString();
      break;
    case '/':
      outcome = numberTwo === '0' ? 'Infinity' : Big(numberOne).div(numberTwo).toString();
      break;
    case '%':
      outcome = Big(numberOne).div('100').times(numberTwo).toString();
      break;
    default:
      break;
  }
  return outcome;
};

export default operate;