// Write a program to print the biggest number in an array

const numbers     = [1,2,9,8,10,1,3];
let biggestNumber = Number.MIN_SAFE_INTEGER;

let arraySize = numbers.length;
for(let i=0 ; i < arraySize; i++)
{
    biggestNumber = Math.max(biggestNumber,numbers[i]);
}

console.log("Biggest number is "+biggestNumber);