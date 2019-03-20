#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, getName, genarateNumber } from '..';

const even = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = getName('May I have your name? ');
  console.log(`Hello ${userName}`);

  const isEven = number => ((number % 2 === 0));
  const userAnswer = answer => ((answer === 'yes'));
  const start = () => {
    let countSteps = 0;
    const limitSteps = 3;
    for (countSteps; countSteps <= limitSteps;) {
      const getNumber = genarateNumber();
      console.log(`Question: ${getNumber}`);
      const answer = readlineSync.question('Your answer: ');
      if (userAnswer(answer) === isEven(getNumber)) {
        countSteps += 1;
        console.log('Correct!');
        if (countSteps === limitSteps) {
          console.log(`Congratulations, ${userName}!`);
          return;
        }
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  };

  start();
};
export default even;
