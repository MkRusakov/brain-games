import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
export const getName = (question) => {
	const name = readlineSync.question(question);
	return name;
}
export const genarateNumber = () => Math.floor(Math.random() * 100);