import { gamePlay, genarateNumber } from '..';

const isEven = number => ((number % 2 === 0));

const model = {
  description: 'Answer "yes" if number even otherwise answer "no".',
  number: null,
  errorMessage(mess) {
    console.log(`'${mess}' is wrong answer ;(. Correct answer was 'no'.`);
  },
  question() {
    const getNumber = genarateNumber();
    console.log(`Question: ${getNumber}`);
    this.number = getNumber;
  },
  getAnswer() {
    const answer = isEven(this.number) ? 'yes' : 'no';
    return answer;
  },

};

const even = () => {
  gamePlay(model);
};
export default even;
