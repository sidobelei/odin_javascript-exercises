const sumAll = function(node1, node2) {
    let sum = 0;
    let start;
    let end;
    let nodes = [node1, node2];
    for (const node of nodes) {
        if (Number.isInteger(node) === false || node < 0) {
            return "ERROR";
        }
    }

    if (node1 < node2) {
        start = node1;
        end = node2;
    }
    else {
        start = node2;
        end = node1;
    }

    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
