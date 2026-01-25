// swap keys and values of objects

let obj = {
    "a":"b",
    "c":"d",
    "e":"f"
}

for ( const [key,value] of Object.entries(obj)) {
    obj[value] = key;
    delete obj[key];
}
console.log(obj);