document.title = "31-51493ITS"
function handleSubmit(){
  fzTemp = step1A.value;
  ffTemp = step1B.value;

  var illustrationWindow = document.getElementById("illustrationWindow");
console.log("fzTemp " + step1A.value)
console.log("ffTemp " + step1B.value)
  if(step1A.value == "fzCold" && step1B.value == "ffCold"){
    console.log("too cold")
   document.getElementById("illustrationWindow").innerHTML = "Check:<br>Replace Cold Control (Thermostat)<br><br><img src='coldControlImage.jpg' width='50%'><br><br><img src='coldControlLoc.jpg'>"
  }

  if(step1A.value == "fzCold" && step1B.value == "ffNormal"){
    illustrationWindow.innerHTML = "Check:<br>Air supply from freezer to fresh food.<br>Return air supply from fresh food to freezer."
  }

  if(step1A.value == "fzCold" && step1B.value == "ffWarm"){
    illustrationWindow.innerHTML = "Check:<br>Air supply from freezer to fresh food.<br>Return air supply from fresh food to freezer."
  }

  if(step1A.value == "fzCold" && step1B.value == "ffHot"){
    illustrationWindow.innerHTML = "Check: Door switch.<br>Fresh food light is not turning off when door is closed."
  }

  if(step1A.value == "fzNormal" && step1B.value == "ffCold"){
    illustrationWindow.innerHTML = "Need to get."
  }

  if(step1A.value == "fzNormal" && step1B.value == "ffNormal"){
    illustrationWindow.innerHTML = "Intermittent Issue: Temperature readings are normal."
  }

  if(step1A.value == "fzNormal" && step1B.value == "ffWarm"){
    illustrationWindow.innerHTML = "Food load is blocking airflow in FF section."
  }

  if(step1A.value == "fzNormal" && step1B.value == "ffWarm"){
    illustrationWindow.innerHTML = "Check: Door switch.<br>Fresh food light is not turning off when door is closed."
  }

  if(step1A.value == "fzWarm" && step1B.value == "ffCold"){
    illustrationWindow.innerHTML = "Need to get"
  }

  if(step1A.value == "fzWarm" && step1B.value == "ffNormal"){
    illustrationWindow.innerHTML = "Need to get"
  }

  if(step1A.value == "fzWarm" && step1B.value == "ffWarm"){
    illustrationWindow.innerHTML = "Need to do more checks."
  }

  if(step1A.value == "fzWarm" && step1B.value == "ffHot"){
    illustrationWindow.innerHTML = "Check: Door switch.<br>Fresh food light is not turning off when door is closed."
  }

  

//   switch(step1a.value) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
}

// Thermostat Issue:<ul style="list-style-type: disc"><li>Make sure food inside the Fresh Food compertment isnt <a href=""> blocking airflow from Freezer</a>.</li><li>Check Freezer return duct for blockage. <a href="">Blockage?</a>.</li><li>Replace Thermostat.</li></ul>

