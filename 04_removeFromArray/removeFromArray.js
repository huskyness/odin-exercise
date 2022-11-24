const removeFromArray = function(array, ...valuesToCheck) {
    return array.filter(value => !valuesToCheck.includes(value));;
};

// Do not edit below this line
module.exports = removeFromArray;
