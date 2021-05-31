
const array1 = ['a','b','c','x']
const array2 = ['z','y','x']

let exclusiveSet = new Set([...array1])
console.log(exclusiveSet.values())

for (let j = 0; j < array2.length; j++)
{
  if (exclusiveSet.has(array2[j])) {
    console.log('Matching found')
    break;
  }
}

