// Find the largest value key

obj = {
    A : 10,
    B : 140,
    C : 50
}

let largest = Number.MIN_SAFE_INTEGER;
let largestKey;

for ( const[key,value] of Object.entries(obj))
{
    if( obj[key]>largest)
    {
        largest = obj[key];
        largestKey = value;
    }
}

console.log("Largest key is "+ largestKey);