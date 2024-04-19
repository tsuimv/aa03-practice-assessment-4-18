/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

***********************************************************************/

function printAndPause(nums) {
    if (nums.length) {
        let number = nums.shift(); // takes the first element of the nums array
        console.log(number); // prints out that element
        setTimeout(() => {
            // setTimeout to recursively call back to the printAndPause function, and delaying it by the number that was printed previously
            printAndPause(nums);
        }, number);
    } else {
        return;
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = printAndPause;
} catch {
    module.exports = null;
}
