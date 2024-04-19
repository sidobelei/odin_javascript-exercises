const palindromes = function (string) {
    string = string.toLowerCase().replaceAll(".", "").replaceAll(",", "").replaceAll(" ", "").replaceAll("!", "");
    let reversed = string;
    reversed = reversed.split("").reverse().join("");
    return reversed === string;
};

// Do not edit below this line
module.exports = palindromes;
