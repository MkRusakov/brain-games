import gamePlay from '..';
import genarateNumber from '../utility';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let count = 2; count <= Math.sqrt(number); count += 1) {
    if (number % count === 0) {
      return false;
    }
  }
  return number > 1;
};

const gameData = () => {
  const questionGame = genarateNumber(2, 499);
  const gameAnswer = isPrime(questionGame) ? 'yes' : 'no';

  return { questionGame, gameAnswer };
};

export default () => {
  gamePlay(gameDescription, gameData);
};
