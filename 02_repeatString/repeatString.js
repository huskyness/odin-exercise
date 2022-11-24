const repeatString = function (word, loop) {
    if (loop >= 0) {
        var finalWord = "";
        for (let index = 0; index < loop; index++) {
            finalWord = finalWord + word;
        }
        return finalWord;
    }
    return 'ERROR';

};

// Do not edit below this line
module.exports = repeatString;
