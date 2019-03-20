#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, getName, genarateNumber } from '..';

const even = () => {
  let count = 0;
  const correctAnswer = 3;

  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = getName('May I have your name? ');
  console.log(`Hello ${userName}`);

  const comparison = number => ((number % 2 === 0) ? 'yes' : 'no');

  const start = () => {
    const getNumber = genarateNumber();
    console.log(`Question: ${getNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === comparison(getNumber)) {
      count += 1;
      console.log('Correct!');
      if (count === correctAnswer) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      start();
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
    }
  };
  start();
};
export default even;