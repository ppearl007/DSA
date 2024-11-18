// Intersection

// take in two arrays and find the elements that are common to both
// order of elements does not matter 

let arr1 = [4, 2, 1, 6]
let arr2 = [3, 6, 9, 2, 10]


const intersect = (a, b) => {
    let intersection = []

    // for (let num1 of arr1) {
    //   for (let num2 of arr2) {
    //     if(num1 === num2)  {
    //       console.log(`${num1} is found in both arrays`)
    //     }
    //   }
    // }

    for (let num1 of arr1) {
        arr2.includes(num1) && intersection.push(num1)
    }

    return intersection
}

intersect(arr1, arr2);

// above approach is a nested loop 
// .includes() also does a linear scan under the hood so its really just another O(n) 

// time: O(n^2)
// space: O(min(arr1, arr2))


// optimal/alt approach is to use a set which is a hashed data structure and has a constant time lookup
// add first array to a set and compare those to elements in second array


const set1 = new Set(arr1); // adding elements runs in O(n)
let result = []

// looping over elements also runs in O(n)
for (let num2 of arr2) {
    set1.has(num2) && result.push(num2)
}

console.log(result)

// since they're not nested loops, time complexity is much better
// time: O(n+m)
