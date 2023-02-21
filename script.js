var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");


var clock = setInterval(
    function time(){
        var datenow = new Date();
        var hr = datenow.getHours();
        var min = datenow.getMinutes();
        var sec = datenow.getSeconds();

        if(hr < 10){
            hr ="0" + hr;
        }
        if(min<10){
            min ="0" + min;
        }

        if(sec < 10){
            sec = "0" + sec;
        }

        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;

    }



)