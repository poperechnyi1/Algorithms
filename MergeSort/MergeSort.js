let arrayForSorting = [41, 58, 31];  //[41, 58, 31, 59, 26, 41, 0, -1, 225, 516, -1488, -666];
let temporaryArray = [];

let counter = 0
function mergeSort(array) {
    
    let middleOfArray = array.length >> 1;
    // console.log(counter, array);
    if(array.length !== 1)
    {
        counter ++;
        return (mergeSort(array.slice(0, middleOfArray)), mergeSort(array.slice(middleOfArray)));
    } else {
        temporaryArray.push(array);
    }
}

mergeSort(arrayForSorting)

let iteration = 0;
console.log(21, merge(temporaryArray));

function merge(array) {
    if(array.length < 2)
    {
        return array;
    }

    console.log(25, array);
    console.log('Iteration ', iteration);
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

                        // console.log(43, firstElement);
                        //     console.log(44, secondElement);
                    
                        if(firstElement > secondElement)
                        {
                            containerArray.push(secondElement);
                            secondIndexIterator++;
                            // continue;
                            // containerArray.push(firstElement);
                        }
    
                        if(firstElement < secondElement)
                        {
                            containerArray.push(firstElement);
                            firstIndexIterator++;
                            // continue;
                            // containerArray.push(secondElement);
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
                console.log(59, containerArray);
    
                mergedArrays.push(containerArray); 
        } else {
            
            let previousSubArray = mergedArrays[0];
            let currentSubArray = subArrayFirst;

            console.log('previousSubArray ', previousSubArray);
            console.log('currentSubArray ', currentSubArray);
            // console.log('previousSubArray ', previousSubArray);
            // console.log('currentSubArray ', currentSubArray);
            let firstIndexIterator = 0 
            let secondIndexIterator = 0;
            const amountOfOperations = previousSubArray.length + currentSubArray.length;

            for(var j = 0; j < amountOfOperations; j++)
            {
                let firstElement = previousSubArray[firstIndexIterator];
                let secondElement = currentSubArray[secondIndexIterator];
                if(firstElement !== undefined && secondElement !== undefined)
                {

                    // console.log(43, firstElement);
                    //     console.log(44, secondElement);
                
                    if(firstElement > secondElement)
                    {
                        containerArray.push(secondElement);
                        secondIndexIterator++;
                        // continue;
                        // containerArray.push(firstElement);
                    }

                    if(firstElement < secondElement)
                    {
                        containerArray.push(firstElement);
                        firstIndexIterator++;
                        // continue;
                        // containerArray.push(secondElement);
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
        }
    }

    if(iteration === 2)
    {
        console.log(107, mergedArrays)
        return;
    }
    iteration++;

    if(Array.isArray(mergedArrays[0]))
    {
        return merge(mergedArrays);
    } else {
        // console.log(57, mergedArrays);
        return mergedArrays;
    }

}