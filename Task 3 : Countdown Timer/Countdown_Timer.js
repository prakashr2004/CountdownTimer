
var countDownDate = new Date("Dec 16, 2023 11:30:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("D").innerHTML= days +" "+"Days";
  document.getElementById("H").innerHTML= hours +" "+"Hours";
  document.getElementById("M").innerHTML= minutes +" "+"Minutes";
  document.getElementById("S").innerHTML= seconds +" "+"Seconds";
    
  if (distance < 0) {
    // clearInterval(x);
    document.getElementById("D").innerHTML= "00 Day" 
    document.getElementById("H").innerHTML= "00 hours" 
    document.getElementById("M").innerHTML= " 00 minutes";
    document.getElementById("S").innerHTML= "00  seconds" ;
    }
}, 1000);