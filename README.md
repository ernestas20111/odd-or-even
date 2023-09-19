# odd-or-even-number
Is number odd or even

## Usage
*isOdd* and *isEven* can be used either as a **class**
```
const OddOrEvenNumber = require('odd-or-even-number');

const oddOrEvenNumber = new OddOrEvenNumber(2);

console.log(oddOrEvenNumber.isOdd()); // false
console.log(oddOrEvenNumber.isEven()); // true
```
or as **functions**
```
const { isOdd, isEven } = require('odd-or-even-number');

console.log(isOdd(2)); // false
console.log(isEven(2)); // true
```
