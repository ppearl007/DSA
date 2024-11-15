// pair sum
// take in array as input. and take in target sum
// then return a pair of indices whose elements sum to the target. the indices have to be unique

const pairSum = (arr, tgt) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === tgt && i != j) {
                console.log(`indices where sum of ${arr[i]} and ${arr[j]} equals ${tgt} are ${i} and ${j}`)
                return [i, j]
            }
        }
    }
}

pairSum([3, 2, 5, 4, 1], 8)

// Above solution is the brute force approach and less efficient
// time: O(n^2)
// space: O(1)


// Better/ Optimized solution is to use a hash map to keep track of the value and index of elements that have been examined. 
// then perform an operation to subtract the current element from the target and check if the result exists in the object being tracked

const pairs = (newArr, targt) => {
    let previous = {}

    newArr.forEach((elem, idx) => {
        previous[elem] = idx
        let subtract = targt - elem

        if (subtract in previous && idx !== previous[subtract]) {
            console.log(`second approach: ${idx} and ${previous[subtract]}`)
            return [idx, previous[subtract]]
        }
    })
}

pairs([3, 2, 5, 4, 1], 8)

  // Complexity
  // time: O(n)
  // space: O(n)