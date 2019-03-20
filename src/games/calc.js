import { gamePlay, genarateNumber } from '..';

const getOperation = () => {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
};

const calcSetting = {
  description: 'What is the result of the expression?',
  answer: null,
  question() {
    const first = genarateNumber();
    const last = genarateNumber();
    const sign = getOperation();

    console.log(`Question: ${first} ${sign} ${last}`);
    this.calculation(first, last, sign);
  },
  errorMessage(mess) {
    console.log(`Your answer: ${this.answer}`);
    console.log(`'${mess}' is wrong answer ;(. Correct answer was '${this.answer}'.`);
  },
  calculation(first, last, sign) {
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
    this.answer = result;
  },
  getAnswer() {
    return String(this.answer);
  },

};


const calc = () => {
  console.log('calc.js');
  gamePlay(calcSetting);
};
export default calc;
