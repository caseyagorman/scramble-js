// Create a function that reverses a word
function reverseWord (word) {
    let newWord = '';
    for (let i = word.length-1; i>=0; i--) {
        newWord += word[i];
    }
    return newWord
}

console.log(reverseWord("hello"))

function reverseWordList(array) {
    let newArray = []
    for (let k of array){
        newArray.push(reverseWord(k))
    }
    return newArray
}

console.log(reverseWordList(['hello', 'goodbye', 'hola', 'adios']))
// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.



// Create a function that returns a random word from an array

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomWord(array) {
    return array[getRandomInt(array.length)]
}

console.log(getRandomWord(['hello', 'goodbye', 'hola', 'adios']))




function makeMap(array){
    let map = {}
    for (let word of array){
        map[reverseWord(word)] = word
    }
    return map
}

console.log(makeMap(['hello', 'goodbye', 'hola', 'adios']))


function checkGuess(guess, word, map) {
    if (map[guess]){
        console.log(word);
        return word;
    }
    else {
        console.log(`Sorry, incorrect. The word was ${word}`);
    }
}

checkGuess ('ollh', 'hello', makeMap(['hello', 'goodbye', 'hola', 'adios']))

// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.
function scrambleWord(word) {
    let letters = word.split('');

    for (let i = letters.length-1; i>0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let tmp = letters[i];
        letters[i] = letters[j];
        letters[j] = tmp;
    }
    return letters.join('')
}

console.log(scrambleWord('hello'))

// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
