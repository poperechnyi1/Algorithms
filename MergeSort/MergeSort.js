let arrayForSorting = [41, 58, 31, 59, 26, 41, 0, -1, 225, 516, -1488, -666];
let temporaryArray = [];
let iteration = 0;
let counter = 0;


console.log('Income array ', arrayForSorting);
merge(arrayForSorting)
arrayForSorting = mergeSort(temporaryArray);
console.log("Result of sorting ", arrayForSorting)



function merge(array) {
    if(array.length > 0)
    {
        let middleOfArray = array.length >> 1;
        if(array.length !== 1)
        {
            counter ++;
            return (merge(array.slice(0, middleOfArray)), merge(array.slice(middleOfArray)));
        } else {
            temporaryArray.push(array);
        }
    }
}

function mergeSort(array) {
    if(array.length < 2)
    {
        return array.flat();
    }

    let mergedArrays = [];
    for(var i = 0; i < array.length; i+=2)
    {
        let subArrayFirst = array[i];
        let subArraySecond = array[i + 1];

        let containerArray = [];
        if(subArraySecond){
                const amountOfOperations = subArrayFirst.length + subArraySecond.length;
                let firstIndexIterator = 0 
                let secondIndexIterator = 0;
                for(var j = 0; j < amountOfOperations; j++)
                {
                    
                    let firstElement = subArrayFirst[firstIndexIterator];
                    let secondElement = subArraySecond[secondIndexIterator];

                    if(firstElement !== undefined && secondElement !== undefined)
                    {

                        if(firstElement > secondElement)
                        {
                            containerArray.push(secondElement);
                            secondIndexIterator++;
                        }
    
                        if(firstElement < secondElement)
                        {
                            containerArray.push(firstElement);
                            firstIndexIterator++;
                        }
    
                        if(firstElement === secondElement)
                        {
                            containerArray.push(firstElement);
                            containerArray.push(secondElement);
                            firstIndexIterator++;
                            secondIndexIterator++;
                        }
                    }

                    if(firstElement !== undefined && secondElement === undefined){
                        containerArray.push(firstElement);
                        firstIndexIterator++;
                    }

                    if(secondElement !== undefined && firstElement === undefined){
                        containerArray.push(secondElement);
                        secondIndexIterator++;
                    }

                }

                mergedArrays.push(containerArray); 
        } else if(mergedArrays.length === 1 && subArrayFirst) {
            
                let previousSubArray = mergedArrays[0];
                let currentSubArray = subArrayFirst;

                let firstIndexIterator = 0 
                let secondIndexIterator = 0;
                const amountOfOperations = previousSubArray.length + currentSubArray.length;
    
                for(var j = 0; j < amountOfOperations; j++)
                {
                    let firstElement = previousSubArray[firstIndexIterator];
                    let secondElement = currentSubArray[secondIndexIterator];
                    if(firstElement !== undefined && secondElement !== undefined)
                    {
    
                        if(firstElement > secondElement)
                        {
                            containerArray.push(secondElement);
                            secondIndexIterator++;
                        }
    
                        if(firstElement < secondElement)
                        {
                            containerArray.push(firstElement);
                            firstIndexIterator++;
                        }
    
                        if(firstElement === secondElement)
                        {
                            containerArray.push(firstElement);
                            containerArray.push(secondElement);
                            firstIndexIterator++;
                            secondIndexIterator++;
                        }
                    }
    
                    if(firstElement !== undefined && secondElement === undefined){
                        containerArray.push(firstElement);
                        firstIndexIterator++;
                    }
    
                    if(secondElement !== undefined && firstElement === undefined){
                        containerArray.push(secondElement);
                        secondIndexIterator++;
                    }
                }
    
                mergedArrays = containerArray;           
        } else {
            mergedArrays.push(subArrayFirst);
        }
    }

    iteration++;

    if(Array.isArray(mergedArrays[0]) && mergedArrays.length > 1)
    {
        return mergeSort(mergedArrays);
    } else {
        return mergedArrays.flat();
    }

}