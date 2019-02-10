/// AAA pattern
const unitTest = (testTitle, () => {
// The Arrange section of a unit test method initializes objects and sets the value of the data that is passed to the method under test.
// The Act section invokes the method under test with the arranged parameters.
// The Assert section verifies that the action of the method under test behaves as expected.
});

/**
 * @description simple js test
 */

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;

if (result === expected) {
    console.log(`tests pass ✅`);
} else {
    throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;

if (result === expected) {
    console.log(`tests pass ✅`);
} else {
    throw new Error(`${result} is not equal to ${expected}`);
}
