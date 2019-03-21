import { gamePlay } from '..';
import genarateNumber from '../utility';

const getOperation = () => {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
};
const calculation = (first, last, sign) => {
  let result;

  switch (sign) {
    case '+':
      result = first + last;
      break;
    case '-':
      result = first - last;
      break;
    default:
      result = first * last;
  }
  return result;
};

const gameDescription = 'What is the result of the expression?';

const gameData = () => {
  const first = genarateNumber();
  const last = genarateNumber();
  const sign = getOperation();

  const gameAnswer = String(calculation(first, last, sign));
  const questionNum = `${first} ${sign} ${last}`;

  return { questionNum, gameAnswer };
};

const calc = () => {
  gamePlay(gameDescription, gameData);
};
export default calc;
