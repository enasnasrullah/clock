const secondHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
function SetDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    const min = now.getMinutes()
    const minDegrees = ((min / 60) * 360) + 90
    minHand.style.transform = ` rotate (${minDegrees}deg)`
    const hour = now.getHours()
    const hourDegree = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegree}deg)`

}
setInterval(SetDate, 1000);