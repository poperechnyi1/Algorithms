//there is a realization https://medium.com/@paulrohan/maximum-sum-of-subarray-a-javascript-implementaion-1cf512a58ea9

var maxSequence = function(arr){

    var curr_max = 0, max_so_far = 0;
  
    for(var i = 0; i < arr.length; i++){  
      curr_max = Math.max(0, curr_max + arr[i]);
      max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
  }
  
  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6 : [4, -1, 2, 1]