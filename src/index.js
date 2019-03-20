import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
export const getName = (question) => {
  const name = readlineSync.question(question);
  return name;
};
export const genarateNumber = (number = 100) => Math.floor(Math.random() * number);


export const gamePlay = (gameSetting) => {
	console.log('Welcome to the Brain Games!');
	console.log(gameSetting.description);

	const userName = getName('May I have your name? ');
	console.log(`Hello ${userName}`);
	const startGame = () => {

		const limitSteps = 3;
		for (let countSteps = 0; countSteps <= limitSteps;) {
			gameSetting.question();
		  
		  const userAnswer = readlineSync.question('Your answer: ');
		  if (userAnswer === gameSetting.getAnswer()) {
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

	startGame();
}