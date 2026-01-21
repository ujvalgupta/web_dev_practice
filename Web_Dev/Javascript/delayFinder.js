// calculate the time it takes between a setTimeout call and the inner function actually running
// performance is a global webapi object provided by browser runtime that exposes high resolution , monotonic timing
// can use DateTime as well but it only gives milliseconds stuff

let startTime = performance.now();

setTimeout(()=>{
    let executedAt = performance.now();
    let delay = executedAt - startTime;
    console.log("Delay in execution in milliseconds is "+delay);
},0)