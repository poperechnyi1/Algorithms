
const array1 = ['a','b','c','x']
const array2 = ['z','y','i']

function findMatches(arr1, arr2)
{
  let exclusiveSet = new Set([...arr1])

  for (let j = 0; j < arr2.length; j++) {
    if (exclusiveSet.has(array2[j])) {
      console.log('Matching found')
      return true
    }
  }

  return false
}

console.log(findMatches(array1, array2))



