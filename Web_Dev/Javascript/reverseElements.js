// Write a program that reverses all the elements of an array

const array = [0,1,2,3,4]
const arraySize = array.length

for (let i = 0 ; i < arraySize/2 ; i++)
{
    let temp = array[i];
    array[i] = array[arraySize-1-i];
    array[arraySize-1-i] = temp;
}

console.log("Elements of reversed array are... ");
for (let i = 0;i < arraySize; i++)
{
    console.log (array[i]);
}