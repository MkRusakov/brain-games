import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
export const getName = (question) => {
  const name = readlineSync.question(question);
  return name;
};

export const gamePlay = (description,gameSetting) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = getName('May I have your name? ');
  console.log(`Hello ${userName}`);
  const startGame = () => {
    const limitSteps = 3;
    for (let countSteps = 0; countSteps <= limitSteps;) {
      const gameData = gameSetting();
      console.log(`Question: ${gameData.questionNum}`);
      
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === gameData.gameAnswer) {
        countSteps += 1;
        console.log('Correct!');
        if (countSteps === limitSteps) {
          console.log(`Congratulations, ${userName}!`);
          return;
        }
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.gameAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  };

  startGame();
};
