// count even and odd numbers in array

const arr = [12,3,4,5,5,6,7,8];

let ansObj = {};
let even   = 0;
let odd    = 0;

for ( let i = 0 ; i < arr.length ; i++)
{
    if(arr[i] % 2 == 0)
    {
        even++;
    }
    else
    {
        odd++;
    }
}

ansObj["even"] = even;
ansObj["odd"] = odd;

console.log(ansObj);