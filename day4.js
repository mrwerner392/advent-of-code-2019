
// // Part 1
// const checkValidity = num => {
//   const numStr = num.toString()
//   const digits = numStr.split('').map(digit => parseInt(digit, 10))
//   let valid = false
//   let currentDigit = digits[0]
//   for (let i = 1; i < digits.length; i++) {
//     if (digits[i] === currentDigit) {
//       valid = true
//     }
//     if (digits[i] < currentDigit) {
//       return false
//     }
//     currentDigit = digits[i]
//   }
//   return valid
// }


// Part 2
const checkValidity = num => {
  const numStr = num.toString()
  const digits = numStr.split('').map(digit => parseInt(digit, 10))
  let valid = false
  let currentDigit = digits[0]
  let streak = 1
  let streaks = []
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === currentDigit) {
      streak++
    } else {
      streaks.push(streak)
      streak = 1
    }
    if (digits[i] < currentDigit) {
      return false
    }
    currentDigit = digits[i]
  }
  streaks.push(streak)
  if (streaks.includes(2)) valid = true;
  return valid
}


console.log(checkValidity(113456)); // true
console.log(checkValidity(113454)); // false
console.log(checkValidity(222222)); // false
console.log(checkValidity(123456)); // false
console.log(checkValidity(987654)); // false
console.log(checkValidity(234556)); // true
console.log(checkValidity(335556)); // true
console.log(checkValidity(335533)); // false
console.log(checkValidity(111133)); // true

const start = 138307
const end = 654504

const countValids = (start, end) => {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (checkValidity(i)) count++;
  }
  return count
}

console.log(countValids(start, end));
