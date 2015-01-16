var endAlert = 60;
var startHours,
    startMinutes,
    startSeconds,
    timer,
    endTimer;

function setTime() {
    var getHours = document.getElementById('hours');
    var getMinutes = document.getElementById('minutes');
    var getSeconds = document.getElementById('seconds');

    var valHours = getHours.value;
    var valMinutes = getMinutes.value;
    var valSeconds = getSeconds.value;

    startHours = parseInt(valHours, 10);
    startMinutes = parseInt(valMinutes, 10);
    startSeconds = parseInt(valSeconds, 10);

    timer = setInterval(countDown, 1000)
}

function countDown() {
    document.getElementById('countdown').innerHTML = startHours + ' : ' + startMinutes + ' : ' + startSeconds;
    if(startSeconds === 0){
        if(startMinutes === 0){
            if(startHours === 0){
                clearInterval(timer);
                endTimer = setInterval(blinkBackground, 1000);
            } else {
                startHours--;
                startMinutes = 60;
                startSeconds = 60;
            }
        }else {
            startMinutes--;
            startSeconds = 30;
        }
    }else{
        startSeconds--;
    }
}

function blinkBackground() {
    if (endAlert === 0) {
        clearInterval(endTimer);
        document.body.style.backgroundColor = "white";
        document.getElementById('audio_file').innerHTML = ''
    } else {
        document.getElementById('audio_file').innerHTML = "<audio autoplay='autoplay'><source src='alarm.mp3'></audio>";
        if (document.body.style.backgroundColor === "white") {
            document.body.style.backgroundColor = "blue";
        } else if (document.body.style.backgroundColor === "blue") {
            document.body.style.backgroundColor = "green";
        } else if (document.body.style.backgroundColor === "green") {
            document.body.style.backgroundColor = "red";
        } else if (document.body.style.backgroundColor === "red"){
            document.body.style.backgroundColor = "blue";
        }
        endAlert--;
    }
}

function cancelAlert(){
    endAlert = 0;
}


