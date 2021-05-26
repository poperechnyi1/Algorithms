// What is the Big O of the below function? (Hint, you may want to go line by line)
let inputArr = new Array(1000).fill('Kote')

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3;//O(1)

  for (let i = 0; i < input.length; i++) { //O(n)
    console.log(a)//O(n)
    let stranger = true;//O(n)
    a++;//O(n)
  }
  return a;//O(1)
}

funChallenge(inputArr)

// it is O(4n + 3) linear