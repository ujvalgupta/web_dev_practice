// Create a terminal clock --> HH:MM:SS

let minutes = 0;
let hours   = 0;
let seconds = 0;

function timerClock()
{
    seconds++;
    if ( seconds==60 )
    {
        minutes++;
        seconds = 0;
        if ( minutes == 60 )
        {
            hours++;
            minutes = 0;
            if ( hours == 24 )
            {
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
        }
    }
    let printTime="";
    if (hours<10)
    {
        printTime = "0"+hours+":";
    }
    else
    {
        printTime = hours + ":";
    }
    if (minutes<10)
    {
        printTime = printTime+"0"+minutes+":";
    }
    else
    {
        printTime = printTime+ minutes + ":";
    }
    if (seconds < 10)
    {
        printTime = printTime+"0"+seconds;
    }
    else
    {
        printTime = printTime + seconds;
    }
    console.log("Time is "+printTime);
}
setInterval(timerClock,1000);