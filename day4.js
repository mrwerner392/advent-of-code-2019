const checkValidity = num => {
  const numStr = num.toString()
  const digits = numStr.split('').map(digit => parseInt(digit, 10))
  let valid = false
  let currentDigit = digits[0]
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === currentDigit) {
      valid = true
    }
    if (digits[i] < currentDigit) {
      return false
    }
    currentDigit = digits[i]
  }
  return valid
}

// console.log(checkValidity(113456));
// console.log(checkValidity(113454));
// console.log(checkValidity(222222));
// console.log(checkValidity(123456));
// console.log(checkValidity(987654));
// console.log(checkValidity(234556));

const start = 138307
const end = 654504

const countValids = (start, end) => {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (checkValidity(i)) count++
  }
  return count
}

console.log(countValids(start, end));
