//Simple insertion sort

let arrayForSorting = [58, 31, 41, 59, 26, 41, 0, -1];

// sort in rising order
for (let j = 0; j < arrayForSorting.length; j++) {
  let key = arrayForSorting[j];
  let i = j - 1;
  while(i>=0 && arrayForSorting[i] > key)
  {
    arrayForSorting[i+1] = arrayForSorting[i];
    i = i-1;
  }
  arrayForSorting[i+1] = key;
}

console.log("There is a sorting in rising order: ", arrayForSorting);

//sort in descending order
