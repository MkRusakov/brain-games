#!/usr/bin/env node
// eslint-disable-next-line import/newline-after-import
import { getName, welcome } from '..';
welcome();
const userName = getName('What is your name? ');
console.log(`Hello, ${userName}`);
