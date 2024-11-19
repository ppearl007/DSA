// recursion

// basically a fn that calls itself
// should have base case or stopping condition and a recursive step

const countdown = (num) => {
    if (num === 0) {              // base case
        console.log('end of recursion')
        return
    }
    console.log(num)
    countdown(num - 1)              // recursive step
}

// countdown(5)

// an alternate pattern is having a recursive fn call itself while it is yet to fully resolve. in this case, it will not execute the lines below the recursive step till it resolves the inner calls
// then when it gets to the innermost frame and the base case where it returns, it returns back to the caller. ie. to the immediate outer frame. this then repeats till it gets to the outermost frame

const count = () => {
    if (num === 0) {
        console.log('end of recursion')
        return
    }
    console.log(`entering ${num}`)
    count(num - 1)
    console.log(`returning ${num}`)
}

// count(2)


// solve a sum of array using recursion

const sumArr = (a) => {

    if (a.length === 0) {
        return 0
    }

    console.log(a)
    return a[0] + sumArr(a.slice(1))
}

// or short version

let sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));

// sum([3,2])
sumArr([2, 5, 6, 7])


  // time and space: O(n^2)