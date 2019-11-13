
function itsClock(){
    welcome=document.getElementById('welcome')
    var todaysDate = new Date()
    let hours, seconds,minutes;
    hours = todaysDate.getHours()
    minutes = todaysDate.getMinutes()
    seconds = todaysDate.getSeconds()


    let meridian;
    if(todaysDate.getHours() >= 12){
        meridian = 'PM'
        welcome.textContent="Good Afternoon dear"
    }else if(todaysDate.getHours >= 16){
        welcome.textContent="Good Evening sweetheart"
    }else if(todaysDate.getHours >= 20){
        welcome.textContent="Good Night Baby"
    }else{
        meridian = 'AM'
        welcome.textContent="Good Morning dear"
    }


    if(hours > 12){
        hours = hours-12
    }

    if(seconds < 10){
     seconds = '0'+ seconds
    }
    if(minutes < 10){
       minutes = '0'+minutes
    }

    document.getElementById('demo').textContent = `${hours} : ${minutes}: ${seconds}s  ${meridian} !`
}
function updateClock(){
    itsClock()
}
setInterval(updateClock, 1000)
