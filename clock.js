const secondsHand = document.getElementById('second')
const minutesHand = document.getElementById('minute')
const hoursHand = document.getElementById('hour')

function getTime() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  
  const timeInterval = 6
  
  secondsHand.style.transform = 'rotate(' + (second + timeInterval) + 'deg)'
  minutesHand.style.transform = 'rotate(' + (minute + timeInterval + second / 10) + 'deg)' 
  hoursHand.style.transform = 'rotate(' + (hour * 30 + minute / 2) + 'deg)' 
  
  
}

setInterval(getTime, 100)
