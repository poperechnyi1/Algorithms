let arrayForSorting = [41, 58, 31, 59, 26, 41, 0, -1, 225, 516, -1488, -666];
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

    console.log(25, array);
    console.log('Iteration ', iteration);
    let mergedArrays = [];
    for(var i = 0; i < array.length; i+=2)
    {
        let subArrayFirst = array[i];
        let subArraySecond = array[i + 1];
        // console.log(34, subArrayFirst);
        // console.log(35, subArraySecond);
        let containerArray = [];
        if(subArraySecond){
            if(subArrayFirst.length === subArraySecond.length)
            {
                let firstIndexIterator = 0 
                let secondIndexIterator = 0;
                console.log(firstIndexIterator, secondIndexIterator)
                for(var j = 0; j < subArrayFirst.length; j++)
                {
                    
                    let firstElement = subArrayFirst[firstIndexIterator];
                    let secondElement = subArraySecond[secondIndexIterator];

                    console.log(45, firstElement)
                    console.log(46, secondElement);
    
               
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
                console.log(59, containerArray);
    
                mergedArrays.push(containerArray);
            }   
        } 
        // else {
        //     // console.log('!!!!!!!!!! ', mergedArrays);
        //     // let containerArray = [];
        //     let previousSubArray = mergedArrays[0];
        //     let currentSubArray = subArrayFirst;
        //     // console.log('previousSubArray ', previousSubArray);
        //     // console.log('currentSubArray ', currentSubArray);

        //     for(var j = 0; j < previousSubArray.length; j++)
        //     {
        //         let firstElement = previousSubArray[j];
        //         let secondElement = currentSubArray[j];
    
        //         if(secondElement)
        //         {
        //             if(firstElement > secondElement)
        //             {
        //                 containerArray.push(secondElement);
        //                 containerArray.push(firstElement);
        //             }

        //             if(firstElement < secondElement)
        //             {
        //                 containerArray.push(firstElement);
        //                 containerArray.push(secondElement);
        //             }

        //             if(firstElement === secondElement)
        //             {
        //                 containerArray.push(firstElement);
        //                 containerArray.push(secondElement);
        //             }
        //         } else {
        //             containerArray.push(firstElement);
        //         }
        //     }

        //     mergedArrays = containerArray;
        // }
    }

    if(iteration === 1)
    {
        console.log(107, mergedArrays)
        return;
    }
    iteration++;

    if(Array.isArray(mergedArrays[0]))
    {
        return merge(mergedArrays);
    } else {
        console.log(57, mergedArrays);
    }

}