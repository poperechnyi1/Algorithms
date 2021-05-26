// What is the Big O of the below function? (Hint, you may want to go line by line)
let inputArr = new Array(1000).fill('Kote')

function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    console.log(a)
    let stranger = true;
    a++;
  }
  return a;
}

funChallenge(inputArr)

// it is O(n) linear