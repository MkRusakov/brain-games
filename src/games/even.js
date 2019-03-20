import { gamePlay, genarateNumber } from '..';

const isEven = number => ((number % 2 === 0));

const model = {
  description: 'Answer "yes" if number even otherwise answer "no".',
  number: null,
  question() {
    const getNumber = genarateNumber();
    console.log(`Question: ${getNumber}`);
    this.number = getNumber;
  },
  getAnswer() {
    // eslint-disable-next-line no-unused-expressions
    (isEven(this.number)) ? 'yes' : 'no';
  },

};

const even = () => {
  gamePlay(model);
};
export default even;
