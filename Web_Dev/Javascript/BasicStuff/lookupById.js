// convert array of objects to lookup by id

let arr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

const ansObj = {};

for ( let i = 0 ; i < arr.length ; i++)
{
    ansObj[arr[i].id] = arr[i];
}

console.log(ansObj);