// Sumzero

const addToZero = num => {
    for(let i = 0; i<num.length; i++) {
        for(let j=0; j<num.length; j++) {
            if (num[i] + num[j] == 0) {
                return true
            }
        }
    }
    return false
}

console.log(addToZero([]))
// -> False

console.log(addToZero([1]))
// -> False

console.log(addToZero([1, 2, 3]))
// -> False

console.log(addToZero([1, 2, 3, -2]))
// -> True

//This function has a runtime complexity of O(n^2)


//Unique Chars

const hasUniqueChars = word => {
    let wordArr = word.split("")
    let wordSet = [...new Set(wordArr)]
    return wordArr.length == wordSet.length
}

console.log(hasUniqueChars("Monday")) //true
console.log(hasUniqueChars("Moonday")) //false

//This function has a runtime complexity of O(n) because it has to loop over the array to turn it 
//into a set.


//Pangram check

const isPangram = phrase => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.split("")
    let count = 0
    alphabet.forEach(letter=>{
        if (phrase.includes(letter)) {
            count+=1
        }
    })
    return count == 26 ? true : false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True

console.log(isPangram("I like cats, but not mice"))
// -> False

//Time complexity of this one is O(n) because we need to check each letter of the phrase


//Longest Word 

const findLongestWord = arr => {return arr.sort((a,b)=> {return b.length - a.length}).slice(0,1)}

console.log(findLongestWord(["hi", "hello"]))


//This time complexity of this function is O(n)