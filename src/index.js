import readlineSync from 'readline-sync';

export const getName = (question) => {
  const name = readlineSync.question(question);
  return name;
};

export const gamePlay = (description, gameSetting) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = getName('May I have your name? ');
  console.log(`Hello ${userName}`);
  const startGame = () => {
    const limitSteps = 3;
    for (let countSteps = 0; countSteps < limitSteps;) {
      const gameData = gameSetting();
      const { questionGame, gameAnswer } = gameData;
      console.log(`Question: ${questionGame}`);

      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === gameAnswer) {
        countSteps += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };

  startGame();
};
