const a = 'welcome to the jungle'

// function to find longest word in a string
function findLongestWord(str) {
  const words = str.split(' ')
  let longestWord = ''
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }
  return longestWord
}

// export the function
module.exports = findLongestWord
