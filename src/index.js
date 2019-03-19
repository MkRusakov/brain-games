import readlineSync from 'readline-sync';
export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
export const askName = (question) => {
  const name = readlineSync.question(question);
  console.log(`Hello ${name}`);
};
