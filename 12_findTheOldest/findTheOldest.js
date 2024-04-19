const findTheOldest = function(people) {
    people.sort(function (a, b) {
        if ("yearOfDeath" in a === false) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if ("yearOfDeath" in b === false) {
            b.yearOfDeath = new Date().getFullYear();
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth) 
    })
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
