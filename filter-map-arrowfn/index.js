// ARROW FUNCTIONS

const sum = (a,b) => {
    return a +b;
}

console.log(sum(2,3))


// Given an array return array where every value is multiplied by 2
// MAP
let arr = [1,2,3,4];

function double(x) {
    return x * 2;
}

// Not inplace updation
const result = arr.map(double);
console.log(result);

const newArr = result.map((i)=> i * 2);
console.log(newArr);

// FILTER 

const input = [8,9,34,2,57,8,9,0,3,1];
const ans = input.filter((i) => i % 2 === 0);
console.log(ans);
