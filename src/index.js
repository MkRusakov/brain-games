import readlineSync from 'readline-sync';

const numberOfRounds = 3;
export default (description, gameSetting) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  const startGame = () => {
    for (let countSteps = 0; countSteps < numberOfRounds;) {
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
