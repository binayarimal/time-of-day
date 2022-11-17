


myDate = new Date();
myHour = myDate.getHours();
myDay = myDate.getDay();
document.getElementById("current-time").innerHTML = myHour;
let currDay; 
let currGreeting;
let currImage;
let currColor;

function currentTime(){
if (myHour > 4 && myHour < 12){
    currGreeting = "Good Morning!";
    currImage = "images/morning.jpg";
    currColor = "yellow";
    
} else if (myHour > 11 && myHour < 18){
    currGreeting = "Good Afternoon!";
    currImage = "images/afternoon.jpg";
    currColor = "green";

} else if (myHour > 17 && myHour < 24){
    currGreeting = "Good Evening!";
    currImage = "images/evening.jpg";
    currColor = "orange";
    
} else {
    currGreeting = "Good Night!";
    currImage = "images/night.jpg";
    currColor = "grey";
}

}
function getCurrentDay(){
    switch (myDay) {
        case 0:
          currDay = "Sunday";
          break;
        case 1:
          currDay = "Monday";
          break;
        case 2:
          currDay = "Tuesday";
          break;
        case 3:
          currDay = "Wednesday";
          break;
        case 4:
          currDay = "Thursday";
          break;
        case 5:
          currDay = "Friday";
          break;
        case 6:
          currDay = "Saturday";
      }
}
getCurrentDay();
currentTime();

document.getElementById("currentYear").innerHTML = myDate.getFullYear();
document.getElementById("greetings").innerHTML = currGreeting;
document.getElementById("timePic").src = currImage;
document.getElementById("greetings").style.backgroundColor = currColor;
document.getElementById("currentDay").innerHTML = currDay;




