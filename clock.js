function updateTime(){
    //HORA DO RIO DE JANEIRO
    var currentTime = new Date()
    var currentHours = currentTime.getHours()
    var currentMinutes = currentTime.getMinutes()
    var currentSeconds = currentTime.getSeconds()
    //HORA DE NEW YORK
    var currentHourNY = currentTime.getHours() - 1 
    //HORA DE SYDNEY
    var currentHourSYD = currentTime.getHours() + 13
    if(currentHourSYD >= 24){
        currentHourSYD = 1
    }
    else{
    }
    if(currentHours < 24){
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes 
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds
    }
    else{
        currentHours = 0
    }
    var currentTimeStringNY = currentHourNY + ":" + currentMinutes + ":" + currentSeconds
    var currentTimeStringRJ = currentHours + ":" + currentMinutes + ":" + currentSeconds
    var currentTimeStringSYD = currentHourSYD + ":" + currentMinutes + ":" + currentSeconds
    
    document.getElementById("clock").innerHTML = currentTimeStringNY
    document.getElementById("clock2").innerHTML = currentTimeStringRJ
    document.getElementById("clock3").innerHTML = currentTimeStringSYD
    
}

updateTime();
setInterval("updateTime()",1000)



