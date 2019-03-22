#!/usr/bin/env node
// eslint-disable-next-line import/newline-after-import
import { getName } from '..';

console.log('Welcome to the Brain Games!');
const userName = getName('What is your name? ');
console.log(`Hello, ${userName}`);
