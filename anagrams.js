// Anagrams are strings that contain the same characters but in any order
// take two strings and return if true or false

const anagram = (string1, string2) => {
  
    let arr1 = string1.split('').sort()
    let arr2 = string2.split('').sort()
    
    maxLen = Math.max(arr1.length, arr2.length)
    
    for (let i=0; i<maxLen; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log('these two strings are not anagrams')
        return false
      }
    }
    
    console.log('these two strings are anagrams')
    return true
  }

  anagram('cats', 'stac')
  
  // alt approach is to make an object with count of characters and check if they are equal. this approach works in Python but will have a much longer solution in JS since there's no elegant way to check equality of two objects
  
  // const charCount = (str) => {
  //   let count = {};
    
  //   for (char of str) {
  //     if (char !== count) {
  //       count[char] = 0
  //     }
  //     count[char] += 1
  //   }
  //   return count
  // }
  
  // const isAnagram = (str1, str2) => {
  //   const obj1 = charCount(str1)
  //   const obj2 = charCount(str2)
  //   console.log(obj2)
  //   console.log(JSON.stringify(obj1) == JSON.stringify(obj2))
  // }
  

  