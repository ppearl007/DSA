// Linear search
// return the index position if the target value exists in the array 
// O(n) - fast for small to medium datasets but slow for large datasets

const linearSearch = (array, value) => {

    for (let i=0; i<arr.length; i++) {
      if (array[i] === value) {
        return i	
      }
    }
  
    return -1
  }
  
  linearSearch([1,2,3,4,5], 3)