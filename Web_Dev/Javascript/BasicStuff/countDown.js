// Create a counter that counts down from 30 to 0 --> using setIntervals

let counter = 30;
function count () {
    if(counter>=0)
    {
        console.log("Counter is "+ counter);
        counter--;
    }
    else
    {
        clearInterval(intervalId);
    }
}
let intervalId = setInterval(count,1000);