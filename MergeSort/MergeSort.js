let arrayForSorting = [41, 58, 31, 59, 26, 41, 0, -1, 225, 516, -1488, -666];
let temporaryArray = [];

let counter = 0
function mergeSort(array) {
    
    let middleOfArray = array.length >> 1;
    console.log(counter, array);
    if(array.length !== 1)
    {
        counter ++;
        return (mergeSort(array.slice(0, middleOfArray)), mergeSort(array.slice(middleOfArray)));
    } else {
        temporaryArray.push(array);
    }
}

mergeSort(arrayForSorting)

console.log(21, merge(temporaryArray));

function merge(array) {
    console.log(23, array);
    let condition = array.length > 1;
    let index = 0;
    let mergedArrays = [];
    while(condition)
    {
        if(index < array.length)
        {
            let firstElement = null;
            let secondElement = null;
            if(array[index].length > array[index + 1].length)
            {
                for(var i = 0; i< array[index].length; i ++)
                {
                    firstElement = array[index][i];
                    secondElement = array[index + 1][i];

                    if(firstElement > secondElement) 
                    {
                        mergedArrays.push([secondElement, firstElement]);
                    }

                    if(firstElement < secondElement)
                    {
                        mergedArrays.push([firstElement, secondElement])
                    }

                    if(firstElement === secondElement)
                    {
                        mergedArrays.push([firstElement, secondElement])
                    }
                }
            }

            if(array[index].length < array[index + 1].length)
            {
                for(var i = 0; i< array[index + 1].length; i ++)
                {
                    firstElement = array[index][i];
                    secondElement = array[index + 1][i];

                    if(firstElement > secondElement) 
                    {
                        mergedArrays.push([secondElement, firstElement]);
                    }

                    if(firstElement < secondElement)
                    {
                        mergedArrays.push([firstElement, secondElement])
                    }

                    if(firstElement === secondElement)
                    {
                        mergedArrays.push([firstElement, secondElement])
                    }
                }
            }

            if(array[index].length === array[index + 1].length)
            {
                for(var i = 0; i< array[index + 1].length; i ++)
                {
                    firstElement = array[index][i];
                    secondElement = array[index + 1][i];

                    if(firstElement > secondElement) 
                    {
                        mergedArrays.push([secondElement, firstElement]);
                    }

                    if(firstElement < secondElement)
                    {
                        mergedArrays.push([firstElement, secondElement])
                    }

                    if(firstElement === secondElement)
                    {
                        mergedArrays.push([firstElement, secondElement])
                    }
                }
            }
            
            index += 2;
        } else {
            condition = false;
        }

    }

    if(Array.isArray(mergedArrays[0]))
    {
        return merge(mergedArrays);
    } else {
        console.log(57, mergedArrays);
    }
    
}