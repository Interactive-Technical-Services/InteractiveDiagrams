document.title = "31-51493ITS"

function handleHome(){
  document.getElementById("illustrationWindow").innerHTML = 'Before Testing:<ul style="list-style-type: disc"><li>Fresh Food and Freezer section should be loaded to at least 75% capacity.</li><li>Set temperature control setting to "Normal".</li> <li>Allow unit to run for 24 hours.</li></ul>'
}

function handleSubmit(){
  fzTemp = step1A.value;
  ffTemp = step1B.value;

  var illustrationWindow = document.getElementById("illustrationWindow");
  if(step1A.value == "fzCold" && step1B.value == "ffCold"){
   document.getElementById("illustrationWindow").innerHTML = "Replace Cold Control (Thermostat)<br><br><img src='coldControlImage.jpg' class='responsive'><br><br><img src='coldControlLoc.jpg' class='responsive'>"
  }

  if(step1A.value == "fzCold" && step1B.value == "ffNormal"){
    illustrationWindow.innerHTML = "Airfow between FF and FZ is restricted.<br><br>Check:<br><a href='returnDuct.jpg' target=&quot;_blank&quot;>Air supply</a> from freezer to fresh food.<br>Visually inspect for frost blocking return.<br><br><a href='returnDuct.jpg' target=&quot;_blank&quot;>Return air</a> from fresh food to freezer."
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

