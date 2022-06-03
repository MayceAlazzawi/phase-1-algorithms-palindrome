const isPalindrome = (word) => {
  let arr = []
  for (let i = word.length - 1; i >= 0; i--) {
    arr.push(word[i]);
  }
  let reversed = arr.join("")
 const isWordPalindrome = word === reversed ? true : false;
 console.log(isPalindrome)
 return isWordPalindrome;
}
isPalindrome("awe")

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("=>", isPalindrome("ab"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

// module.exports = isPalindrome;
