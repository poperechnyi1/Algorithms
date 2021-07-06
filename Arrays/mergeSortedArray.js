function mergeSortedArrays(arr1, arr2) {
  let maxLength = 0
  let mergedArray = []
  if (arr1.length > 0 && arr1.length > arr2.length) {
    maxLength = arr1.length
    mergedArray = merge(maxLength, arr1, arr2)
  } else if (arr2.length > 0 && arr2.length > arr1.length) {
    maxLength = arr2.length
    mergedArray = merge(maxLength, arr2, arr1)
  } else if (arr2.length === arr1.length) {
    console.log(11)
    maxLength = arr2.length
    mergedArray = merge(maxLength, arr2, arr1)
  } else if (arr1.length === 0 && arr2.length === 0){
    return 'Ooops arrays are empty'
  }

  return mergedArray
}

function merge(iterationCount, arr1, arr2) {
  let mergedArray = []
  let currentIndexArr1 = 0
  let currentIndexArr2 = 0
  for (let i = 0; i < iterationCount; i++)
  {
    if (i < arr1.length && i < arr2.length) {
      if (arr1[i] === arr2[i]) {
        mergedArray.push(arr1[i])
        mergedArray.push(arr2[i])
        currentIndexArr1++
        currentIndexArr2++
        break;
      }

      if (arr1[i] < arr2[i]) {
        mergedArray.push(arr1[i])
        currentIndexArr1++
        break;
      } 

      mergedArray.push(arr2[i])
      currentIndexArr2++
    }

    if (i < arr1.length && i >= arr2.length) {
      mergedArray.push(arr1[i])
    } 

    if (i >= arr1.length && i < arr2.length) {
      mergedArray.push(arr2[i])
    }
  }

  return mergedArray
}

console.log(mergeSortedArrays([0, 3, 4, 5, 31, 32], [3, 4, 6, 7, 30, 35]));