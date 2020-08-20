/* eslint-disable no-param-reassign */

import operate from './operate';

const attatchButton = (target, adder) => {
  const splitTarget = target.split('');
  if (adder === '.' && splitTarget.includes(adder)) {
    return target;
  }
  if ((splitTarget[0] === '0') && (splitTarget.length === 1) && (adder === '.')) {
    return (target + adder);
  }
  if ((splitTarget[0] === '0') && (splitTarget.length > 1) && (splitTarget[1] !== '.')) {
    splitTarget.shift();
    splitTarget.push(adder);
    return splitTarget.join('');
  }
  if ((splitTarget[0] === '0') && (splitTarget.length === 1) && (splitTarget[1] !== '.')) {
    splitTarget.shift();
    splitTarget.push(adder);
    return splitTarget.join('');
  }
  splitTarget.push(adder);
  return splitTarget.join('');
};
const invertNumber = (text) => {
  const value = text.split('');
  if (value[0] === '-') {
    value.shift();
  } else {
    value.unshift('-');
  }
  return value.join('');
};
const calculate = ({
  total, next, operation, renderResult, error,
}, btnName) => {
  switch (btnName) {
    case 'AC':
      total = '0';
      next = '0';
      operation = '';
      renderResult = false;
      error = false;
      break;
    case '=':
      if (!renderResult && !error) {
        total = operation ? operate(total, next, operation) : next;
        next = total;
        renderResult = true;
        if (total === 'Infinity') {
          total = '0';
          error = true;
        }
      }
      operation = '';
      break;
    case '+/-':
      next = invertNumber(next);
      renderResult = false;
      error = false;
      break;
    case '/':
    case 'X':
    case '-':
    case '+':
    case '%':
      if (!renderResult && !error) {
        total = operation ? operate(total, next, operation) : next;
        next = total;
        renderResult = true;
      }
      if (total === 'Infinity') {
        total = '0';
        operation = '';
        error = true;
      }
      if (!error) {
        operation = btnName;
      }
      break;
    default:
      next = renderResult ? btnName : attatchButton(next, btnName);
      renderResult = false;
      error = false;
      break;
  }
  return {
    total, next, operation, renderResult, error,
  };
};
export default calculate;
