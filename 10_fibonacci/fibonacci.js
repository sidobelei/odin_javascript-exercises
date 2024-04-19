const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    }
    else if (isNaN(index) === false) {
        index = Number(index);
    }

    let sequence = [0, 1];
    if (index > 1) {
        for (let i = 2; i < index + 1; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
