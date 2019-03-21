import readlineSync from 'readline-sync';
import { welcome, getName, genarateNumber } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const x = genarateNumber(50);
const y = genarateNumber(50);
let divider;
const iter = (x1, y1, acc) => {
  if (x % acc === 0 && y % acc === 0) {
    divider = acc;
    return;
  }
  if (acc <= 1) {
    divider = 1;
    return;
  }

  // eslint-disable-next-line no-param-reassign
  iter(x1, y1, acc -= 1);
};
iter(x, y, (x < y) ? y : x);
console.log(`Question: ${x} ${y}`);

const gcd = () => {
  
};
export default gcd;
