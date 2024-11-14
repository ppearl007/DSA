const isPrime = (num) => {
    let divisors = []
    for (let i=2; i<num; i++){
      if (num % i === 0) {
        divisors.push(i)
      } 
    }
    console.log(divisors)
    if (num > 1 && divisors.length < 1) {
      console.log(`${num} is a prime`) 
      return true
    } else {
      console.log(`${num} is not a prime`) 
      return false
    }
  }
  
  // isPrime(40)
  
  
  // Complexity
  // n = input number
  // time: O(n)
  // space: O(1)
  
  
  
  // Alt solution is to go up to sqrt of n; that reduces complexity 
  // useful for really large numbers
  // time: O(sqrt(n))
  // space: O(1)
  
  const largePrime = (num) => {
    let divisors = []
    
    if (num > 1000) {
      num = Math.floor(Math.sqrt(num))
    }
  
    for (let i=2; i<num+1; i++){
      if (num % i === 0) {
        divisors.push(i)
      } 
    }
    console.log(divisors)
    
    if (num > 1 && divisors.length < 1) {
      console.log(`${num} is a prime`) 
      return true
    } else {
      console.log(`${num} is not a prime`) 
      return false
    }
  }
  
  largePrime(50222)
  