#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, askName } from '..';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');

askName('May I have your name? ');

const genarateNumber = () => Math.floor(Math.random() * 100);

let count = 0;
const correctAnswer = 3;

const comparison = number => ((number % 2 === 0) ? 'yes' : 'no');

const start = () => {
  const getNumber = genarateNumber();
  console.log(`Question: ${getNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === comparison(getNumber)) {
    count++;
    console.log('Correct!');
    if (count === correctAnswer) {
      console.log('Congratulations, Bill!');
      return;
    }
    start();
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again, Bill!");
  }
};
start();
