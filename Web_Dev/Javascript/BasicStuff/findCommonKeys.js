// Find common keys between two objects

let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { b: 4, c: 5, d: 6 }

const set = new Set()
let ans = []

for (const key of Object.keys(obj1))
{
    set.add(key);
}

for ( const key of Object.keys(obj2))
{
    if(set.has(key))
    {
        ans.push(key);
    }
}

console.log(ans);