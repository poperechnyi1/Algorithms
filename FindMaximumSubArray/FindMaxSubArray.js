


findMaxCrossingSubarray(array,low,mid,high)
{
    let leftSum = 0;
    let sum = 0;
    let maxLeft = 0;
    for(var i = mid; i>= low; i--){
        sum = sum + array[i];
        if(sum > leftSum){
            leftSum = sum;
            maxLeft = i;
        }
    }

    let rightSum = 0;
    sum = 0;
    let maxRight = 0;
    for(var j = mid + 1; j>= high; j++){
        sum = sum + array[j];
        if(sum > rightSum){
            rightSum = sum;
            maxRight = j;
        }
    }

    return (maxLeft,maxRight,leftSum+rightSum);
}