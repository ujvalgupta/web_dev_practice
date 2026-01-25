// Group People By city

let obj = {
    "UG" : "UP",
    "ujval" : "Delhi",
    "PG" : "Gurugram",
    "KS" : "Delhi"
}

let ans = {}

for ( const [key,value] of Object.entries(obj))
{
    if (value in ans)
    {
        ans[value].push(key);
    }
    else
    {
        let arr = [];
        arr.push(key);
        ans[value] = arr;
    }
}

console.log(ans);