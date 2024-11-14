// Max Value
// return the max no in array; take in an array and find the max value
// initialize max to some small no e.g. negative infinity

const arr = [4, 7, 5, 9, 12]

const findMax = (array) => {
  let max = -Infinity

  for (let num of array) {
    if (num > max) {
      max = num
    }
  }
  return max
}

findMax(arr)

// edge cases

// an array of negative numbers is why initializing the max with -ve infinity instead of 0 is important
// -ve infinity is still less than any regular -ve number

const negArr = [-3, -5, -1]

// complexity  
// n = array length
// time = O(n)
// space = O(1) - just tracking current element and max no
