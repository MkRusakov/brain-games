import playGame from '..';
import genarateNumber from '../utility';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonFactor = (a, b) => (a % b === 0 ? b : getGreatestCommonFactor(b, a % b));
const getGameData = () => {
  const x = genarateNumber(1, 50);
  const y = genarateNumber(1, 50);

  const correctAnswer = String(getGreatestCommonFactor(x, y));
  const question = `${x} ${y}`;

  return { question, correctAnswer };
};

export default () => {
  playGame(gameDescription, getGameData);
};
