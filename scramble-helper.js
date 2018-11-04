// Create a function that reverses a word
function reverseWord (word) {
    let newWord = '';
    for (let i = word.length-1; i>=0; i--) {
        newWord += word[i];
    }
    return newWord
}

// console.log(reverseWord("hello"))

function reverseWordList(array) {
    let newArray = []
    for (let k of array){
        newArray.push(reverseWord(k))
    }
    return newArray
}

// console.log(reverseWordList(['hello', 'goodbye', 'hola', 'adios']))
// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.



// Create a function that returns a random word from an array

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomWord(array) {
    return array[getRandomInt(array.length)]
}

// console.log(getRandomWord(['hello', 'goodbye', 'hola', 'adios']))




function makeMap(array){
    let map = {}
    for (let word of array){
        map[reverseWord(word)] = word
    }
    return map
}

// console.log(makeMap(['hello', 'goodbye', 'hola', 'adios']))


function checkGuess(guess, word, map) {
    let cleanGuess = guess.toLowerCase().trim();
    if (word === cleanGuess){

        // let winner = document.getElementById('winning')
        // winner.addEventListener("mouseover", winner.target.style.backgroundColor = "red");
        let elem = document.querySelector('winning');
        console.log(elem)
        elem.style.color =  red;

        return 'You are correct!';

    }
    else {
        return `Sorry, incorrect. The word was ${word}`
    }
}

console.log(checkGuess('hello', 'hello', makeMap(['hello', 'goodbye', 'hola', 'adios'])))

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


function changeColor(newColor) {
  let elem = document.getElementById('welcome');
  console.log(elem)
  elem.style.color = newColor;
}


function playGame(){
        const WORDS     = ["booger", "apple", "hackbright", "mango"];
        let playing = true;

        while (playing) {
            let word = reverseWord(getRandomWord(WORDS))
            let map = makeMap(WORDS)

            alert(word)

            let guess = prompt('Guess the word')

            alert(checkGuess(guess, map[word], map))

            playing = confirm("Press OK to keep playing or Cancel to quit.");
        }

        alert("Goodbye!");
}

