// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () =>{
    test("Takes two numbers and returns the sum", () => {
        expect(addThemUp(10,4)).toEqual(14);
        expect(addthemUp(4,6)).toEqual(10);
    })
})


// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (arg1, arg2) => {
    return (arg1 + arg2);
}

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () =>{
    test("Takes base and height of a triangle and returns the area", () =>{
        expect(triangleArea(10,5)).toEqual(25)
    })
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (arg1, arg2) =>{
    return ((arg1 * arg2)/2)
}