#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, askName } from '..';

welcome();
console.log('What is the result of the expression?');
askName('May I have your name? ');

const count = 0;
const correctAnswer = 3;
const getOperation = () => {
	const number = Math.floor(Math.random() * 3);
	let result;
	if (number === 0) {
		result = '+';
	} else if(number === 1) {
		result = '-';
	} else {
		 result = '*';
	}
	return result;
}
const qwe = (first, last) => {
	const number = Math.floor(Math.random() * 3);
	let result;
	console.log(111);
}

const genarateNumber = () => Math.floor(Math.random() * 100);

const start = () => {
	const first  = genarateNumber();
	const last = genarateNumber();
	const sign = getOperation();

	const res = qwe(first, last)

	//let expression = first sign last ;

	console.log(`Question: ${first} ${sign} ${last}`);
	const userAnwer = readlineSync.question('Your answer: ');
	if (userAnwer === expression) {
		count += 1;
		console.log('Correct!');
		if (count === correctAnswer) {
			console.log(`Congratulations, 'ИМЯ`)
		};
		start()
	} else {
		console.log(`Question: ${first} ${sign} ${last}`);
		console.log(`Your answer: ${userAnwer}`);
		console.log(`'${userAnwer}' is wrong answer ;(. Correct answer was '${expression}'.`);
		console.log(`Let's try again, ДОБАВИТЬ ПЕРЕМЕННУЮ ИМЯ!`)
	}

}

start();