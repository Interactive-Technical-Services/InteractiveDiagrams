document.title = "31-51493ITS"



function handleSubmit(){
  fzTemp = step1A.value;
  ffTemp = step1B.value;

  if(step1A.value == "fzCold" && step1B.value == "ffNormal"){
    illustrationWindow.innerHTML += "<br>Check:<br>Airflow from freezer to fresh food."
  }

  if(step1A.value == "(-20°F) - (-10°F)" && step1B.value == "(35°F) - (42°F)"){
    illustrationWindow.innerHTML = "Not Possible Recheck Temps."
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
