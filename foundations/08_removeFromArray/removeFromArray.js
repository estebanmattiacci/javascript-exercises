const removeFromArray = function(arr, ...args) {
    // for (let i = 0; i < arr.length; i++) {
    //     console.log("arr at i"+ arr + "  " + i);
    //     if (args.includes(arr[i])) {
    //         console.log("splitting");
    //         arr.splice(i, 1);
    //         i--;
    //     }
    //
    // }
    // return arr;
    return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
