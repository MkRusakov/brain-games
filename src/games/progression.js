import { gamePlay } from '..';
import genarateNumber from '../utility';

const gameDescription = 'What number is missing in the progression?';

const gameData = () => {
  const range = genarateNumber(2, 10);
  const progressionLength = 10;
  let beginNum = genarateNumber(5, 50);

  const arr = [];

  for (let count = 0; count < progressionLength; count += 1) {
    beginNum += range;
    arr.push(beginNum);
  }

  const gameAnswer = String(arr[genarateNumber(0, arr.length - 1)]);
  const index = arr.indexOf(parseInt(gameAnswer, 10));
  arr[index] = '..';
  const questionGame = `Question: ${arr}`;

  return { questionGame, gameAnswer };
};

const progression = () => {
  gamePlay(gameDescription, gameData);
};
export default progression;
