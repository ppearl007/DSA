// Binary search

// O(log n) - not the most efficient with small dataset but is great for large sets > 1M elements

// finds the position of a target value within a sorted array. 
// Half of the array is eliminated during each 'step'
// start in the middle of the array and check if the middle element is equal to the target. 
// if equal, return that index.
// if not equal, then check if target is greater than or less than middle value. 
// if target is higher, by moving the pointer, disregard/eliminate the left half since your target is not in that section.
// if target lower, disregard/eliminate the right half.
// repeat the elimination process till you find the target


const arrayGen = (length) => {
    let arr = []

    for (let i = 0; i < length; i++) {
        arr[i] = i
    }

    return arr
}

const binarySearch = (arr, target) => {
    // console.log(arrayGen(1000))

    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let middle = Math.floor(low + (high - low) / 2)
        let currentValue = arr[middle]
        console.log(low, currentValue, high)

        if (currentValue < target) {
            low = middle + 1
        } else if (currentValue > target) {
            high = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

binarySearch(arrayGen(1000), 579)