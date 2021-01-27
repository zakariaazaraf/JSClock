const numbers = document.querySelectorAll(".spans"),
    second = document.querySelector(".second"),
    minute = document.querySelector(".minute"),
    hour = document.querySelector(".hour")

let dateNow = new Date(),
    rotateValueSecond = 6 * dateNow.getSeconds(),
    rotateValueMinute = 6 * dateNow.getMinutes(),
    rotateValueHour
if (dateNow.getHours() > 12) {
    rotateValueHour = 30 * (dateNow.getHours() - 12)
} else {
    rotateValueHour = 30 * dateNow.getHours() + (dateNow.getMinutes() / 2)
}

second.style.transform = "translate(0, 11.11%) rotate(" + rotateValueSecond + "deg)"
rotateValueSecond += 6;

minute.style.transform = "translate(0, 25%) rotate(" + rotateValueMinute + "deg)"
rotateValueMinute += 6;

hour.style.transform = "translate(0, 42.85%) rotate(" + rotateValueHour + "deg)"
rotateValueHour += 3;



turnSecond = () => {
    if (rotateValueSecond > 360) {
        rotateValueSecond = 6;
    }

    second.style.transform = "translate(0, 11.11%) rotate(" + rotateValueSecond + "deg)"
    rotateValueSecond += 6;

    if (rotateValueMinute > 360) {
        rotateValueMinute = 0.1;
    }

    minute.style.transform = "translate(0, 25%) rotate(" + rotateValueMinute + "deg)"
    rotateValueMinute += 0.1;


}

turnMinute = () => {
    if (rotateValueMinute > 360) {
        rotateValueMinute = 6;
    }

    minute.style.transform = "translate(0, 25%) rotate(" + rotateValueMinute + "deg)"
    rotateValueMinute += 6;

}

turnHour = () => {
    if (rotateValueHour > 360) {
        rotateValueHour = 3;
    }

    hour.style.transform = "translate(0, 42.85%) rotate(" + rotateValueHour + "deg)"
    rotateValueHour += 3;

}



let clockSecond = setInterval(turnSecond, 1000),
    /* clockMinute = setInterval(turnMinute, 1000 * 60), */
    clockHour = setInterval(turnHour, 1000 * 300),
    increment = 30

numbers.forEach(item => {

    item.style.transform = "rotate(" + increment + "deg)"
    item.firstChild.style.transform = "translate(-50%) rotate(-" + increment + "deg)"
    increment += 30
})
