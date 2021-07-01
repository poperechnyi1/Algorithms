function reverseString(str) {
  let lengthStr = str.length
  let reversedString = ""

  for (let i = lengthStr - 1; i>=0; i-- ) {
    reversedString += str[i]
  }

  return reversedString
}

console.log(reverseString('Hi My name is Andrei'))