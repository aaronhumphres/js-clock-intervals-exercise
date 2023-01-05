const secondsHand = document.getElementById('second')
const minutesHand = document.getElementById('minute')
const hoursHand = document.getElementById('hour')

function getTime() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  let hours = now.getHours() 
   if (hours > 12) {
    hours = hours  - 12
   }
  let hourDegrees = 30
  const degreesModifier = 6
  //console.log(hours)

  secondsHand.style.transform = 'rotate(' + (seconds * degreesModifier) + 'deg)'
  minutesHand.style.transform = 'rotate(' + (minutes * degreesModifier) + 'deg)' 
  hoursHand.style.transform = 'rotate(' + (hours * hourDegrees) + 'deg)' 
  
  
}

setInterval(getTime, 100)
