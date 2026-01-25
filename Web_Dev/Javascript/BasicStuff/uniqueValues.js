// Unique values across all object arrays 


let obj = {
    x : [1,2,3],
    y : [2,3,4],
    z : [4,5]
}

const set = new Set();

for ( const [key,value] of Object.entries(obj))
{
    for( let i = 0 ; i < value.length ; i++)
    {
        set.add(value[i]);
    }
}

console.log(set);