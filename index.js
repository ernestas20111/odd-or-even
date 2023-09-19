'use strict';

class OddOrEven {
    constructor(number) {
        validateNumberAndThrow(number);
        this.number = number;
    }

    isOdd() {
        return isOdd(this.number);
    }

    isEven() {
        return isEven(this.number);
    }
}

const validateNumberAndThrow = (number) => {
    const absoluteNumber = Math.abs(number);

    if(isNaN(absoluteNumber)) {
        throw new Error('expected a number');
    }
    if (!Number.isInteger(absoluteNumber)) {
      throw new Error('expected an integer');
    }
    if (!Number.isSafeInteger(absoluteNumber)) {
      throw new Error('value exceeds maximum possible integer value');
    }
}

function isOdd(number) {
    validateNumberAndThrow(number);
    return number % 2 !== 0;
}

function isEven(number) {
    validateNumberAndThrow(number);
    return number % 2 === 0;
}

module.exports = OddOrEven;
module.exports.isOdd = isOdd;
module.exports.isEven = isEven;