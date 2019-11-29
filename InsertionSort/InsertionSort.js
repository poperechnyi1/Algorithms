//Simple insertion sort

let arrayForSorting = [58, 31,41,59,26,41,0];

// sort in rising order
for(let i = 1; i < arrayForSorting.length; i++)
{
    let key = arrayForSorting[i];

    while(i>0 && arrayForSorting[i - 1] >key)
    {
        j = i - 1;
        arrayForSorting[i] = arrayForSorting[j];
        arrayForSorting[j] = key;
        i = j;
    }
}

console.log("There is a sorting in rising order: ",arrayForSorting);