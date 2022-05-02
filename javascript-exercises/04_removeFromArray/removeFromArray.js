const removeFromArray = function() {
    let args = Array.from(arguments);
    let initArray = args.shift();
    for (i = 0; i < args.length; i++){
        for (x =0; x < initArray.length; x++){
            if (initArray[x] === args[i]){
                initArray.splice(x, 1);
            } 
        }
    }
    return initArray;
};

// Do not edit below this line
module.exports = removeFromArray;
