// capitalize string values inside object

let obj = {
    A : "rahul",
    B : 3,
    C : "ujval"
}

for ( const [key,value] of Object.entries(obj))
{
    if ( typeof(value) == "string")
    {
        obj[key] = value[0].toUpperCase() + value.substring(1);
    }
}

console.log(obj)