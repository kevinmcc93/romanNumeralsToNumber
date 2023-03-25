// Author: Kevin McCarthy
// Date: 2023-03-25

function romanToNumber(romanNumeral) {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentChar = romanNumeral[i]
    const nextChar = romanNumeral[i + 1]
    
    const currentValue = romanNumeralsMap[currentChar]
    const nextValue = romanNumeralsMap[nextChar]

    /* 
      Check if the next value exists and is greater than the current value
      IF SO: subtract the currentValue from the nextValue, then add the difference to the result value we want to return,
      IF NOT: add current value to result
    */ 
    if (nextValue && nextValue > currentValue) {
      let difference = nextValue - currentValue
      result = result + difference
      i++
    } else {
      result = result + currentValue
    }
  }

  return result;
}

// Example test cases
console.log(`Article II should become: Artcile ${romanToNumber("II")}`)
console.log(`Article IV should become: Artcile ${romanToNumber("IV")}`)
console.log(`Article VIII should become: Artcile ${romanToNumber("VIII")}`)
console.log(`Article LXXXIX should become: Artcile ${romanToNumber("LXXXIX")}`)
console.log(`Article XCII should become: Artcile ${romanToNumber("XCII")}`)