const sumAll = function(first, second) {
    if(first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)){
        return 'ERROR';
    }else{
        let min= 0;
        let max =0;
        if(first<second){
            min = first
            max = second
        }else{
            min = second;
            max = first
        }
        let sum = 0;
        while(min < max+1){
            sum += min;
            min ++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
