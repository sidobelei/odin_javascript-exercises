const removeFromArray = function(array, ...removedNums) {
    const newArray = [];
    let match = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < removedNums.length; j++) {
            if (array[i] === removedNums[j]) {
                match = true;
            }
        }
        if (match === false) {
            newArray.push(array[i]);
        }
        else {
            match = false;
        }
    }
    console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
