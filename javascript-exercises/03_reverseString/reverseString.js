const reverseString = function(string) {
    let sArray = [];
    let rArray = [];
    let rString = "";
    for (i = 0; i < string.length; i++){
        sArray.push(string.charAt(i));
    }
    rArray = sArray.reverse();
    rString = rArray.join("");

    return rString;
};

// Do not edit below this line
module.exports = reverseString;
