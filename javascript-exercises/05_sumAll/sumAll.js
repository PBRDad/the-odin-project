const sumAll = function(num1, num2) {
    let x;
    let y;
    let sum;
    numArray = [num1, num2];
    if (typeof(num1) === "number" && typeof(num2) === "number" &&
        num1 > 0 && num2 > 0){
        if (num1 < num2){
            x = num1;
            y = num2;
        }
        else{
            x = num2;
            y = num1;
        }
        while (x < (y - 1)) {
            x++;
            numArray.push(x);
        }
        sum = numArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        );
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
