import playGame from '..';
import genarateNumber from '../utility';

const operators = ['+', '-', '*'];
const calculation = (first, last, sign) => {
  switch (sign) {
    case '+':
      return first + last;
    case '-':
      return first - last;
    default:
      return first * last;
  }
};

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const first = genarateNumber();
  const last = genarateNumber();
  const sign = operators[genarateNumber(0, operators.length)];

  const correctAnswer = String(calculation(first, last, sign));
  const question = `${first} ${sign} ${last}`;

  return { question, correctAnswer };
};

const calc = () => {
  playGame(gameDescription, getGameData);
};
export default calc;
