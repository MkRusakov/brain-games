import { gamePlay } from '..';
import genarateNumber from '../utility';

const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if a number is even, otherwise answer "no".';

const gameData = () => {
  const randomNum = genarateNumber();
  const gameAnswer = isEven(randomNum) ? 'yes' : 'no';
  const questionNum = randomNum;

  return { gameDescription, questionNum, gameAnswer };
};

const even = () => {
  gamePlay(gameDescription, gameData);
};

export default even;
