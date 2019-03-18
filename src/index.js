const readlineSync = require('readline-sync');
export const getName = () => {
  console.log('index.js');
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello ${name}`);
}
