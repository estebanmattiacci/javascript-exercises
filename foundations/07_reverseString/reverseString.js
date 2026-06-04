const reverseString = function(str) {
    // const strArr = Array.from(str);
    // const n = strArr.length;
    // for (let i = 0; i < (n / 2); i++) {
    //     const toReplacePos = (n - 1) - i;
    //     [strArr[i], strArr[toReplacePos]] = [strArr[toReplacePos], strArr[i]];
    // }
    // return strArr.reduce((result, currentValue) => result + currentValue);
    return str.split("").reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
