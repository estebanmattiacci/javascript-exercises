const reverseString = function(str) {
    let result = str;
    console.log(str);
    for (let i = 0; i < Math.floor(str.length / 2); i ++) {
        const j = (str.length - 1) - i;
        console.log("i is " + i +"");

        const strInit = str.slice(0, i);
        const strFinal = str.slice(j + 1, str.length);
        const strMiddle = str.slice(i + 1, j);
        result = strInit + str[j] + strMiddle + str[i] + strFinal;
        console.log("sup");
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
