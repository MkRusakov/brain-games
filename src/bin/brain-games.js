#!/usr/bin/env node
// eslint-disable-next-line import/newline-after-import
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('What is your name? ');
console.log(`Hello, ${userName}`);
