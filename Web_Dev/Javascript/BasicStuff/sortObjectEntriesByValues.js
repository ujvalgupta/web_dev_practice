// Sort object entries by values

let obj = {
    a : 3,
    b : 1,
    c : 2
}

let ansArray = []

function compareValues(a,b) {
    return a[1]-b[1]
}

for (const [key,value] of Object.entries(obj))
{
    ansArray.push([key,value]);
}

ansArray.sort(compareValues);
console.log(ansArray);