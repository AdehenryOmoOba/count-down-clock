// Select DOM element
let day = document.getElementById("day")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let time = document.getElementById("time")
let newYear = document.getElementById("new-year")

let dayCircle = document.getElementById("day-circle")
let hourCircle = document.getElementById("hour-circle")
let minuteCircle = document.getElementById("minute-circle")
let secondsCircle = document.getElementById("seconds-circle")

let dayDot = document.querySelector('.day-dot')
let hourDot = document.querySelector('.hour-dot')
let minuteDot = document.querySelector('.minute-dot')
let secondsDot = document.querySelector('.seconds-dot')

// Target end time
let endDate = '01/01/2023 00:00:00' // mm/dd/yyyy

let timerID = setInterval(() => {

                // Set time 
                let timeLeft = new Date(endDate).getTime() - new Date().getTime()

                let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))

                let hrRem = timeLeft % (1000 * 60 * 60 * 24)
                let hours = Math.floor(hrRem / (1000 * 60 * 60))

                let minRem = timeLeft % (1000 * 60 * 60)
                let minutes =  Math.floor(minRem / (1000 * 60))

                let secRem = timeLeft % (1000 * 60)
                let seconds = Math.floor(secRem / 1000)

                // Update DOM
                day.firstChild.textContent = days
                hour.firstChild.textContent = hours
                minute.firstChild.textContent = minutes
                second.firstChild.textContent = seconds

                // Animate SVG Stroke
                dayCircle.style.strokeDashoffset = 440 - (440 * days) / 365
                hourCircle.style.strokeDashoffset = 440 - (440 * hours) / 24
                minuteCircle.style.strokeDashoffset = 440 - (440 * minutes) / 60
                secondsCircle.style.strokeDashoffset = 440 - (440 * seconds) / 60

                // Animate SVG dots
                dayDot.style.transform = `rotateZ(${days * 0.986}deg)` // 360 deg / 365 days = 0.986
                hourDot.style.transform = `rotateZ(${hours * 15}deg)` // 360 deg / 24 hours = 15
                minuteDot.style.transform = `rotateZ(${minutes * 6}deg)` // 360 deg / 60 minutes = 6
                secondsDot.style.transform = `rotateZ(${seconds * 6}deg)` // 360 deg / 60 secounds= 6

                // Remove circles that are done counting
                if(days === 0) dayCircle.parentElement.parentElement.remove()
                if(hours === 0) hourCircle.parentElement.parentElement.remove()
                if(minutes === 0) minuteCircle.parentElement.parentElement.remove()

                // When clock counts to zero, clear setInterval, remove element with id 'time' from DOM and add element with id 'new-year' to DOM
                if(timeLeft <= 0){
                    clearInterval(timerID)
                    time.style.display = "none"
                    newYear.style.display = "block"
                }

            }, 1000);