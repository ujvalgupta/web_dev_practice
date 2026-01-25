// convert object query to string

const obj = {
    A : "ujval",
    B : "rahul"
}

let ans = ""

ans = "\""
let len = Object.entries(obj).length;
let count = 0;
for ( const [key,value] of Object.entries(obj))
{
    count++
    ans+= key +"="+value;
    if(count<len)
    {
        ans+= '&';
    }
    else
    {
        ans+="\"";
    }
}

console.log(ans);