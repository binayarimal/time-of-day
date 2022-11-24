
/*
  Create a web page that uses JavaScript to determine the current hour,
  and presents a different image, custom message, and color based on each
  of the following times of day:

  Morning (5am to 12 noon)
  Afternoon (12 noon to 6pm)
  Evening (6pm to 11pm)
  Night (11pm to 5am)
*/

let myDate = new Date();
let myHour = myDate.getHours();
let myDay = myDate.getDay();
document.getElementById("current-time").innerHTML = myHour;
let currDay = ""; 
let currGreeting ="";
let currImage = "";
let currColor = "";



function currentTime(){
if (myHour >= 5 && myHour < 12){
    currGreeting = "Good Morning!";
    currImage = "morning.jpg";
    currColor = "yellow";
    
} else if (myHour >= 21 && myHour < 18){
    currGreeting = "Good Afternoon!";
    currImage = "afternoon.jpg";
    currColor = "green";

} else if (myHour >= 18 && myHour < 23){
    currGreeting = "Good Evening!";
    currImage = "evening.jpg";
    currColor = "orange";
    
} else {
    currGreeting = "Good Night!";
    currImage = "night.jpg";
    currColor = "blue";
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

//Here we are placing the greeting on the page
document.getElementById("greetings").innerHTML = currGreeting;

//Here we are changing the background color of the HTML tag
document.querySelector("html").style.backgroundColor = currColor;

// add images path to myPic 
currImage = "images/" + currImage;

// here we change the source
document.getElementById("timePic").src =  currImage;

document.getElementById("currentDay").innerHTML = currDay;
document.getElementById("currentYear").innerHTML = myDate.getFullYear();




