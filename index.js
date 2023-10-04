function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}


// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove spaces and convert the string to lowercase
  str = str.replace(/\s/g, '').toLowerCase();
  
  // Reverse the string and compare it to the original
  const reversedStr = str.split('').reverse().join('');
  
  return str === reversedStr;

/* 
  Add your pseudocode here
*/function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

/*
  Add written explanation of your solution here
  This isPalindrome function returns either true or false. When the input string is the same forwards and backwards, it returns true.
  That means that if the input string is the same after I reverse it, it returns true.
  For instance, "abba" in reverse is also "abba", and "racecar" in reverse is also "racecar", so my solution returns true for these cases.
  "ab" in reverse is "ba", and "robot" in reverse is "tobor", so my solution returns false for these cases.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
  
}

}

module.exports = isPalindrome;
