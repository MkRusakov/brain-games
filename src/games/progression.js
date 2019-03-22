import { gamePlay } from '..';
import genarateNumber from '../utility';

const gameDescription = 'What number is missing in the progression?';

const gameData = () => { 
  const length = 10;
  const range = genarateNumber(2, length);
  const progression = [];
  const beginNum = genarateNumber(5, 50);

  for (let count = 0; count < length; count += 1) {
    progression.push(beginNum + range * count);
  }

  const selectItem = genarateNumber(0, length - 1);
  const gameAnswer = String(progression[selectItem]);

  progression[selectItem] = ' .. ';

  const questionGame = progression;

  return { questionGame, gameAnswer };
};

const progression = () => {
  gamePlay(gameDescription, gameData);
};
export default progression;
