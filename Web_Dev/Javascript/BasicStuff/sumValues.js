// sum values in object arrays
// this program shows how to create new object entries, plus how to traverse an object

let obj = {
    food : [10,20,30],
    travel : [30,40],
    bills : [60,90]
}

let ansObj = {};
let sum = 0;
for ( const [key,value] of Object.entries(obj))
{
    sum = 0; 
    for (let i = 0;i<value.length;i++)
    {
        sum = sum + value[i];
    }
    ansObj[key]=sum;
}

console.log(ansObj);