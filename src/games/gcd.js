import { gamePlay } from '..';
import genarateNumber from '../utility';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonFactor = (a, b) => (a % b === 0 ? b : getGreatestCommonFactor(b, a % b));
const gameData = () => {
  const x = genarateNumber(1, 50);
  const y = genarateNumber(1, 50);

  const gameAnswer = String(getGreatestCommonFactor(x, y));
  const questionGame = `Question: ${x} ${y}`;

  return { questionGame, gameAnswer };
};

const gcd = () => {
  gamePlay(gameDescription, gameData);
};
export default gcd;
