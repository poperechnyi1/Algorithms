function mergeSortedArrays(arr1, arr2) {
  let maxLength = arr1.length + arr2.length;
  let mergedArray = [];
  if (arr1.length === 0 && arr2.length === 0) {
    return "Ooops arrays are empty";
  }

  mergedArray = merge(maxLength, arr1, arr2);

  if (mergedArray.length !== maxLength) {
    return "Ooop something wrong with realization fo algorithm";
  }
  return mergedArray;
}

function merge(iterationCount, arr1, arr2) {
  let mergedArray = [];
  let iterationCount1 = 0;
  let iterationCount2 = 0;
  for (let i = 0; i < iterationCount; i++) {
    if (
      (iterationCount1 === 0 && iterationCount2 === 0) ||
      iterationCount1 === iterationCount2
    ) {
      if (arr1[iterationCount1] === arr2[iterationCount2]) {
        mergedArray.push(arr1[iterationCount1]);
        mergedArray.push(arr2[iterationCount2]);
        iterationCount1++;
        iterationCount2++;
        continue;
      }

      if (arr1[iterationCount1] > arr2[iterationCount2]) {
        console.log(35);
        mergedArray.push(arr2[iterationCount2]);
        iterationCount2++;
        continue;
      }

      if (arr1[iterationCount1] < arr2[iterationCount2]) {
        console.log(41);
        mergedArray.push(arr1[iterationCount1]);
        iterationCount1++;
        continue;
      }
    } else {
      if (arr1[iterationCount1] === arr2[iterationCount2]) {
        mergedArray.push(arr1[iterationCount1]);
        mergedArray.push(arr2[iterationCount2]);
        iterationCount1++;
        iterationCount2++;
        continue;
      }

      if (arr1[iterationCount1] > arr2[iterationCount2]) {
        mergedArray.push(arr2[iterationCount2]);
        iterationCount2++;
        continue;
      }

      if (arr1[iterationCount1] < arr2[iterationCount2]) {
        mergedArray.push(arr1[iterationCount1]);
        iterationCount1++;
        continue;
      }
    }
  }

  if (arr1.length - 1 > iterationCount1) {
    for (let j = iterationCount1; j < arr1.length; j++) {
      mergedArray.push(arr1[j]);
    }
  }

  if (arr2.length - 1 > iterationCount2) {
    for (let k = iterationCount2; k < arr2.length; k++) {
      mergedArray.push(arr2[k]);
    }
  }

  return mergedArray;
}

console.log(
  mergeSortedArrays(
    [-7, -6, -5, -4, -3, -2, -1, 0, 8],
    [-105, 23, 88, 100, 110, 130, 140, 150, 160, 170]
  )
);
