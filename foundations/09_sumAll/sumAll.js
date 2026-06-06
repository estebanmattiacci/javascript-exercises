const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || Math.sign(num1) < 0 || Math.sign(num2) < 0) {
        return "ERROR";
    }
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);

    let counter = min;
    for (let i = min + 1; i < max + 1; i++) {
        counter += i;
    }
    return counter;
};

// Do not edit below this line
module.exports = sumAll;
