import playGame from '..';
import genarateNumber from '../utility';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const length = 10;
  const range = genarateNumber(2, length);
  const progression = [];
  const begin = genarateNumber(5, 50);

  for (let count = 0; count < length; count += 1) {
    progression.push(begin + range * count);
  }

  const hiddenNumIndex = genarateNumber(0, length - 1);
  const correctAnswer = progression[hiddenNumIndex].toString();

  progression[hiddenNumIndex] = ' .. ';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const progression = () => {
  playGame(gameDescription, getGameData);
};
export default progression;
