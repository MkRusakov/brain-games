import { gamePlay } from '..';
import genarateNumber from '../utility';

const gameDescription = 'What number is missing in the progression?';

const gameData = () => {
  const range = genarateNumber(2, 10);
  const maxNumbers = 10;
  const progression = [];
  const beginNum = genarateNumber(5, 50);

  for (let count = 0; count < maxNumbers; count += 1) {
    progression.push(beginNum + range * count);
  }

  const selectItem = genarateNumber(0, maxNumbers - 1);
  const gameAnswer = String(progression[selectItem]);

  progression[selectItem] = '..';

  const questionGame = `Question: ${progression}`;

  return { questionGame, gameAnswer };
};

const progression = () => {
  gamePlay(gameDescription, gameData);
};
export default progression;
