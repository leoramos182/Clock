function updateTime(){
    //HORA DO RIO DE JANEIRO
    var currentTime = new Date()
    var currentHours = currentTime.getHours()
    var currentMinutes = currentTime.getMinutes()
    var currentSeconds = currentTime.getSeconds()
    //HORA DE NEW YORK
    var currentHourNY = currentTime.getHours() - 2 
    //HORA DE SYDNEY
    var currentHourSYD = currentTime.getHours() + 13

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes 
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds

    //var timeOfDay = (currentHours < 12) ? "AM" : "PM"
    currentHours  = (currentHours > 12) ? currentHours - 12 : currentHours
    currentHourNY = (currentHourNY > 12) ? currentHourNY - 12 : currentHourNY
    currentHourSYD = (currentHourSYD > 12) ? currentHourSYD - 24 : currentHourSYD
    var timeOfDay = (currentHours < 12) ? "AM" : "PM"
    var timeOfDaySyd = (currentHourSYD < 12) ? "AM" : "PM"

    var currentTimeStringNY = currentHourNY + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay
    var currentTimeStringRJ = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay
    var currentTimeStringSYD = currentHourSYD + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDaySyd
    
    document.getElementById("clock").innerHTML = currentTimeStringNY
    document.getElementById("clock2").innerHTML = currentTimeStringRJ
    document.getElementById("clock3").innerHTML = currentTimeStringSYD
    
}

updateTime();
setInterval("updateTime()",1000)



