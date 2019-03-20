#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, getName, genarateNumber } from '..';

const calc = () => {
  welcome();
  console.log('What is the result of the expression?');
  const userName = getName('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const getOperation = () => {
    const number = Math.floor(Math.random() * 3);
    let result;
    if (number === 0) {
      result = '+';
    } else if (number === 1) {
      result = '-';
    } else {
      result = '*';
    }
    return result;
  };

  const calculation = (first, last, sign) => {
    let result;
    if (sign === '+') {
      result = first + last;
    } else if (sign === '-') {
      result = first - last;
    } else {
      result = first * last;
    }
    return result;
  };

  const start = () => {
    let countSteps = 0;
    const limitSteps = 3;

    for (countSteps; countSteps <= limitSteps;) {
      const first = genarateNumber();
      const last = genarateNumber();
      const sign = getOperation();
      const result = calculation(first, last, sign);

      console.log(`Question: ${first} ${sign} ${last}`);
      const userAnwer = readlineSync.question('Your answer: ');
      if (parseInt(userAnwer, 10) === parseInt(result, 10)) {
        countSteps += 1;
        console.log('Correct!');
        if (countSteps === limitSteps) {
          console.log(`Congratulations, ${userName}`);
          return;
        }
      } else {
        console.log(`Question: ${first} ${sign} ${last}`);
        console.log(`Your answer: ${userAnwer}`);
        console.log(`'${userAnwer}' is wrong answer ;(. Correct answer was '${result}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  };

  start();
};
export default calc;
