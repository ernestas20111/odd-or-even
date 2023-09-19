# odd-or-even
Is odd or even

## Usage
*isOdd* and *isEven* can be used either as a **class**
```
const OddOrEven = require('odd-or-even');

const oddOrEven = new OddOrEven(2);

console.log(oddOrEven.isOdd()); // false
console.log(oddOrEven.isEven()); // true
```
or as **functions**
```
const { isOdd, isEven } = require('odd-or-even');

console.log(isOdd(2)); // false
console.log(isEven(2)); // true
```
