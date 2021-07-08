function mergeSortedArrays(arr1, arr2) {
  let valuesSet = new Set();
  arr1.forEach((element) => {
    valuesSet.add(element);
  });
  arr2.forEach((element) => {
    valuesSet.add(element);
  });
  let maxLength =
    valuesSet.size === 1 && arr1.length === arr2.length
      ? arr1.length
      : arr1.length + arr2.length;
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

console.log(mergeSortedArrays([0, 0], [-1, 0, 25, 135, 200, 300]));
