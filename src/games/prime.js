import { gamePlay } from '..';
import genarateNumber from '../utility';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let count = 2; count < number; count += 1) {
    if (number % count !== 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const questionGame = genarateNumber(0, 499);
  const gameAnswer = isPrime(questionGame) ? 'yes' : 'no';


  return { questionGame, gameAnswer };
};

const prime = () => {
  gamePlay(gameDescription, gameData);
};

export default prime;
