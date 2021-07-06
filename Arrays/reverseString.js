function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return 'hmm that is not good'
  let lengthStr = str.length
  let reversedString = ""

  for (let i = lengthStr - 1; i>=0; i-- ) {
    reversedString += str[i]
  }

  return reversedString
}

console.log(reverseString('Hi My name is Andrei'))