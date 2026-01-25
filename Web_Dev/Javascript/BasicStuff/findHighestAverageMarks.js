// Find the student with highest average marks

const obj = {
    "Rahul" : [70,90],
    "Mohit" : [10,20,50],
    "Kuchi" : [90,160]
}

let sum = 0.0;
let student = "";
let average = 0.0;
let maxSum = Number.MIN_SAFE_INTEGER;

for ( const [key,value] of Object.entries(obj))
{
    sum = 0.0;
    for ( let i = 0 ;i < value.length ; i++)
    {
        sum+= value[i];
    }
    average = sum / value.length;
    if(sum > maxSum)
    {
        maxSum = sum;
        student = key;
    }
}

console.log("Student with the highest average marks is "+student);