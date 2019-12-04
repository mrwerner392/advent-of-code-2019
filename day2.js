
let input = [
  1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,19,5,23,2,13,23,27,1,10,27,31,2,6,31,35,1,9,35,39,2,10,39,43,1,43,9,47,1,47,9,51,2,10,51,55,1,55,9,59,1,59,5,63,1,63,6,67,2,6,67,71,2,10,71,75,1,75,5,79,1,9,79,83,2,83,10,87,1,87,6,91,1,13,91,95,2,10,95,99,1,99,6,103,2,13,103,107,1,107,2,111,1,111,9,0,99,2,14,0,0
]

// Part 1
const execute = data => {
  let position = 0
  while (position <= data.length - 1) {
    if (data[position] === 1) {
      data[data[position + 3]] =
      data[data[position + 1]] + data[data[position + 2]]
      position += 4
      continue
    } else if (data[position] === 2) {
      data[data[position + 3]] =
      data[data[position + 1]] * data[data[position + 2]]
      position += 4
      continue
    } else if (data[position] === 99) {
      return data
    } else {
      return console.log('something went wrong');
    }
  }
  return data
}

// console.log(execute(input)[0]);

// Part 2

// input = [
//   1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,19,5,23,2,13,23,27,1,10,27,31,2,6,31,35,1,9,35,39,2,10,39,43,1,43,9,47,1,47,9,51,2,10,51,55,1,55,9,59,1,59,5,63,1,63,6,67,2,6,67,71,2,10,71,75,1,75,5,79,1,9,79,83,2,83,10,87,1,87,6,91,1,13,91,95,2,10,95,99,1,99,6,103,2,13,103,107,1,107,2,111,1,111,9,0,99,2,14,0,0
// ]

const findInputs = data => {
  let noun = 0
  let verb = 0
  let testData = []
  while (noun < 100) {
    data[1] = noun
    while (verb < 100) {
      data[2] = verb
      testData = [...data]
      // console.log(data[0], data[1], data[2], testData[0], testData[1], testData[2])
      let result = execute(testData)
      // console.log(!!result, noun, verb);
      if (result && result[0] === 19690720) {
        return console.log(100 * noun + verb)
      }
      verb++
    }
    noun++
    verb = 0
  }
  // console.log(noun, verb);
}

findInputs(input)
