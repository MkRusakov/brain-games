import gamePlay from '..';
import genarateNumber from '../utility';

const gameDescription = 'What number is missing in the progression?';

const gameData = () => {
  const length = 10;
  const range = genarateNumber(2, length);
  const progression = [];
  const begin = genarateNumber(5, 50);

  for (let count = 0; count < length; count += 1) {
    progression.push(begin + range * count);
  }

  const hiddenNumIndex = genarateNumber(0, length - 1);
  const gameAnswer = String(progression[hiddenNumIndex]);

  progression[hiddenNumIndex] = ' .. ';

  const questionGame = progression.join(' ');

  return { questionGame, gameAnswer };
};

const progression = () => {
  gamePlay(gameDescription, gameData);
};
export default progression;
