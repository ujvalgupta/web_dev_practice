// flatten object of arrays into 1 single array

let obj = {
    A : [1,2,3],
    B : [4,5],
    C : [6,7]
}

let ans = []

for ( const [key,value] of Object.entries(obj))
{
    for ( let i = 0; i < value.length ; i++)
    {
        ans.push(value[i]);
    }
}

console.log(ans);