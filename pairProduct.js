// pair product
// take in array as input. and take in target product
// then return a pair of indices whose elements can be multiplied to produce the target. the indices have to be unique

//simple solution is to use nested for loops 
const pairProduct = (arr, tgt) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let product = arr[i] * arr[j];
            if (product === tgt && i != j) {
                console.log(`indices where product of ${arr[i]} and ${arr[j]} equals ${tgt} are ${i} and ${j}`)
                return [i, j]
            }
        }
    }
}

pairProduct([3, 2, 5, 4, 1], 8)

// Above solution is the brute force approach and less efficient
// time: O(n^2)
// space: O(1)


// Better/ Optimized solution is to use a hash map to keep track of the value and index of elements that have been examined. 
// then perform an operation to divide the target with the current element; then check if the result exists in the object being tracked

const pairProd = (newArr, targt) => {
    let previous = {}

    newArr.forEach((elem, idx) => {
        previous[elem] = idx
        let complement = targt / elem

        if (complement in previous && idx !== previous[complement]) {
            console.log(`${idx} and ${previous[complement]} are the indices of the two numbers in the array that produce ${targt}`)
            return [idx, previous[complement]]
        }
    })
}

pairProd([3, 2, 5, 4, 1], 8)

  // Complexity
  // time: O(n)
  // space: O(n)