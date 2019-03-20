#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, getName, genarateNumber } from '..';

const gcd = () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  const userName = getName('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let countSteps = 0;
  const limitSteps = 3;

  for (countSteps; countSteps <= limitSteps;) {
    const x = genarateNumber(50);
    const y = genarateNumber(50);
    let divider;
    console.log(`Question: ${x} ${y}`);

    const iter = (x1, y1, acc) => {
      if (x % acc === 0 && y % acc === 0) {
        divider = acc;
        return;
      }
      if (acc <= 1) {
        divider = 1;
        return;
      }

      // eslint-disable-next-line no-param-reassign
      iter(x1, y1, acc -= 1);
    };
    iter(x, y, (x < y) ? y : x);

    const userAnwer = readlineSync.question('Your answer: ');

    if (parseInt(userAnwer, 10) === parseInt(divider, 10)) {
      countSteps += 1;
      if (countSteps === limitSteps) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      console.log('Correct!');
    } else {
      console.log(`Your answer: ${userAnwer}`);
      console.log(`'${userAnwer}' is wrong answer ;(. Correct answer was '${divider}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};
export default gcd;
