/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

***********************************************************************/

const VOWELS = ["a", "e", "i", "o", "u"];
const mostFrequentVowel = function (words, counter = {}) {
    let objCheck = Object.entries(counter).length; // reassinging counter length to objCheck

    if (!words.length && !objCheck) {
        // if words.length and counter is empty, return ""
        return "";
    }

    if (!words.length && objCheck) {
        // if words is empty
        let highestCount = 0; // you set highest count to 0
        let highLetter; // initializing variable for the highest count of letter

        for (let key in counter) {
            // if the key at counter is higher than variable highestCount
            if (counter[key] > highestCount) {
                // we set highestCount to our key at counter
                highestCount = counter[key]; // we then set the earlier created highLetter variable to the key
                highLetter = key;
            }
        }
        return highLetter; // return to grab the highest letter out
    }

    let word = words.pop(); // creating a new variable which will pop off each word in the array
    for (let i = 0; i < word.length; i++) {
        // iterating through the popped off word
        let letter = word[i]; // variable for each letter in the word
        if (VOWELS.includes(letter)) {
            // if the letter is a variable
            if (counter[letter]) {
                // if the letter is already present in the counter object...
                counter[letter]++; // you increase the count by 1
            } else {
                // if the letter is not present in the counter object...
                counter[letter] = 1; // set the letter equal to the one to put the letter in the counter object
            }
        }
    }
    return mostFrequentVowel(words, counter); // return to get the letter
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = mostFrequentVowel;
} catch {
    module.exports = null;
}
