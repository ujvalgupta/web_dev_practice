// count word occurences in an array -> keep it case insensitive
// Its a good practice to have semicolons at the end of lines where needed. Even if you don't add, the JS interpreter automatically inserts semicolons where needed using ASI ( Automatic Semicolon Insertion )

let arr = ["Hello","My","Name","name","is","Ujval","UG","ujVal","gupta"];

let occurences = {}

for (let i = 0; i < arr.length ; i++)
{
    let str = arr[i].toLowerCase();
    if(!(str in occurences)) { // for checking if a key is present in object
        occurences[str] = 1;
    }
    else {
        occurences[str]=occurences[str]+1;
    }
}

console.log(occurences);