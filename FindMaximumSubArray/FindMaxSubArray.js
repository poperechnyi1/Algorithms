
var arrayExample = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


function findMaxCrossingSubarray(array,low,mid,high)
{
    let leftSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let maxLeft = 0;
    for(var i = mid; i>= low; i--){
        sum = sum + array[i];
        if(sum > leftSum){
            leftSum = sum;
            maxLeft = i;
        }
    }

    let rightSum = Number.NEGATIVE_INFINITY;
    sum = 0;
    let maxRight = 0;
    for(var j = mid + 1; j<= high; j++){
        sum = sum + array[j];
        if(sum > rightSum){
            rightSum = sum;
            maxRight = j;
        }
    }

    return {
        maxLeft,
        maxRight,
        sum: leftSum+rightSum
    };
}


console.log(findMaxCrossingSubarray(arrayExample,0,5,9));
