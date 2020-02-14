// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const isBoiling = (arg1) => {
    if (arg1 > 212){
        return `${arg1} is above boiling point.`;
    } else if (arg1 === 212) {
        return `${arg1} is at boiling point.`;
    } else {
        return `${arg1} is below boiling point.`;
    }
}

console.log(isBoiling(temp1));
console.log(isBoiling(temp2));
console.log(isBoiling(temp3));


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

const multiplier = arg1 => {
    let newArray =[]
    for (let i = 0; i < arg1.length ; i++) {
        newArray.push(arg1[i] * 5);
    }
    return newArray
}

console.log(multiplier(myNumbers1));

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const betterMultiplier = arg1 => {
    return arg1.map(arg => arg * 5)
}

console.log(betterMultiplier(myNumbers2));

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const vowelRemoval = arg1 => {
    return arg1.replace(/[aeiou]/g, "")
}

console.log(vowelRemoval(stringWithVowels1));
console.log(vowelRemoval(stringWithVowels2));

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const vowelRemovalSecond = arg1 => {
    if (typeof arg1 === "string"){
    return arg1.replace(/[aeiou]/g, "")
    } else {
        return "You have not entered a string"
    }
}

console.log(vowelRemovalSecond(notAString1));
console.log(vowelRemovalSecond(notAString2));

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const catFinder = arg1 =>{
    let catArray = arg1.filter(cat => cat.animal === "cat")
    return catArray;
}

console.log(catFinder(toonimals));

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const catsBegone = arg1 =>{
    let catsGoAway = arg1.filter(noCat => noCat.animal !== "cat")
    let namesOnly = catsGoAway.map(v => v.name)
    return namesOnly;
}

console.log(catsBegone(toonimals));