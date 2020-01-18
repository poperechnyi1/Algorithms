function merge(left, right) {
    let arr = [];
    console.log('left', left);
    console.log('right', right);
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    console.log(11, arr)
    return arr.concat(left.slice().concat(right.slice()));
  }
  
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    console.log('middle', middle);
    console.log('income left', left);
    console.log('income right', right);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const array = [9, 2, 5, 6, 4] //[9, 2, 5, 6, 4, 3, 7, 10, 1, 8, -22, 0, -1, -111];

  console.log("START")
  console.log(mergeSort(array));