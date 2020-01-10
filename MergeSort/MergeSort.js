let arrayForSorting = [41, 58, 31, 59, 26, 41, 0, -1, 225, 516, -1488, -666];

let counter = 0
function mergeSort(array) {
    
    let middleOfArray = array.length >> 1;
    console.log(counter, array);
    if(array.length !== 1)
    {
        counter ++;
        return (mergeSort(array.slice(0, middleOfArray)), mergeSort(array.slice(middleOfArray)));
    }
}

mergeSort(arrayForSorting);