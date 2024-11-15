// most frequent character
// take in a string and return the character that appears the most no of times
// if there are any ties, return the character that appears earlier

const charCount = (str) => {
    let count = {};

    for (char of str) {
        count[char] = (count[char] ?? 0) + 1  //check if k/v exists or initialize it to 1
    }

    let mostFreq = {};

    // console.log(Object.keys(mostFreq).length)

    for (const [key, value] of Object.entries(count)) {
        if (value === Math.max(...Object.values(count)) && Object.keys(mostFreq).length === 0) {
            mostFreq[key] = value
            // console.log(`${key}: ${value}`);
        }
    }
    
    return Object.keys(mostFreq)[0]
}

charCount('balloon')