// find object by values greater than 50

const obj = {
    A : 40,
    B : 140,
    C : 50,
    D : 90
}

let ansObj = {}

for ( const [key,value] of Object.entries(obj))
{
    if(value > 50)
    {
        ansObj[key] = value
    }
}

console.log(ansObj)