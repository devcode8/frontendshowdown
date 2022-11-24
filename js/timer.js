time="25 nov 2022 11:00:00";
const countDate = new Date(time).getTime();
var x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML= d + "d ";
    document.getElementById("hours").innerHTML= hrs + "h  ";
    document.getElementById("minutes").innerHTML= min + "m ";
    document.getElementById("seconds").innerHTML= sec + "s ";

    if(distance<0){
        x= setInterval(0);
        document.getElementById("timer").innerHTML= "No event is available now";
    }
})
