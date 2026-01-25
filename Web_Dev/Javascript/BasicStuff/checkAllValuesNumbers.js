// check if all values in objects are numbers

let obj = { a: 1, b: 3, c: 3 }

let ans = true;
for (const [key,value] of Object.entries(obj))
{
    if (typeof(value) != "number")
    {
        ans = false;
        break;
    }
}

console.log(ans);
