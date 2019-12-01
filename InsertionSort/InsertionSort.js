//Simple insertion sort

let arrayForSorting = [41, 58, 31, 59, 26, 41, 0, -1];

function SortByRisingOrder() {
  for (let j = 0; j < arrayForSorting.length; j++) {
    let key = arrayForSorting[j];
    let i = j - 1;
    while (i >= 0 && arrayForSorting[i] > key) {
      arrayForSorting[i + 1] = arrayForSorting[i];
      i = i - 1;
    }
    arrayForSorting[i + 1] = key;
  }
  console.log("There is a sorted array in rising order: ", arrayForSorting);
}

function SortByDescendingOrder() {
  for (let j = 0; j < arrayForSorting.length; j++) {
    let key = arrayForSorting[j];

    for (var i = j - 1; i >= 0 && key > arrayForSorting[i]; i--) {
      arrayForSorting[i + 1] = arrayForSorting[i];
      arrayForSorting[i] = key;
    }
  }

  console.log("There is a sorted array in descending order: ", arrayForSorting);
}

SortByDescendingOrder();
SortByRisingOrder();
