const repeatString = function(string, num) {
    let repeater = "";
    if (num >= 0){
        if (string == "") {
            return repeater;
        }
        else {
            for (i = 0; i < num; i++){
                
                repeater += string;
            }
            return repeater;
        }
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
