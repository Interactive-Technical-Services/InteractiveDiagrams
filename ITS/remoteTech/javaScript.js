document.title = "31-51493ITS"

function handleHome(){
  instructionWindow.innerHTML =
    "Step 1: "+
    "Select FF and FZ temperature range in forms below."+
    "<br><br><br>Freezer Temperature<br>"+
    "<select id='step1A' class='select-css'>"+
    "<option value='fzCold'>Less than -15°F</option>"+
    "<option value='fzNormal'>(-15°F) - (10°F)</option>"+
    "<option value='fzWarm'>More than 10°F</option>"+
    "</select>"+
    "<br><br>"+
    "Fresh Food Temperature"+
    "<br>"+
    "<select id='step1B' class='select-css'>"+
    "<option value='ffCold'>Less than 34°F</option>"+
    "<option value='ffNormal'>35°F - 43°F</option>"+
    "<option value='ffWarm'>43°F - Ambient</option>"+
    "<option value='ffHot'>Above Ambient</option>"+
    "</select><br><br>"+
    "<input id='mySubmit' type='submit' value='Submit' class='select-css' onclick='handleSubmit()' ontouchstart='handleSubmit()'>"+
    "<br><br>";

  illustrationWindow.innerHTML = instructionStart;
}
handleHome();

function changeImage(image){
  illustrationWindow.innerHTML="<img src=" + image + " class='responsive'>"
}

function handleSubmit(){
  fzTemp = step1A.value;
  ffTemp = step1B.value;

  if(step1A.value == "fzCold" && step1B.value == "ffCold"){
   illustrationWindow.innerHTML =
    "<img src='coldControlImage.jpg' class='responsive'><br><br>"+
    "<img src='coldControlLoc.jpg' class='responsive'>";
   instructionWindow.innerHTML =
    "<span class='negative'>Replace Cold Control (Thermostat)</span><br><br>"+
    "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  }

  if(fzTemp == "fzCold" && ffTemp == "ffNormal"){
    illustrationWindow.innerHTML="";

    instructionWindow.innerHTML=
      "<span class='negative'>Airfow between FF and FZ is restricted.</span><br><br>"+
      "<span class='positive'><span style = color:green>Check:</span><br><a href='javascript:changeImage(&quot;coldControlLoc.jpg&quot;)'>Return air</a> from fresh food to freezer.<br>"+
      "<a href='javascript:changeImage(&quot;coldControlImage.jpg&quot;)'>Supply air</a> from freezer to fresh food.<br><br>"+
      "Visually inspect ducts for frost blocking airflow.</span><br><br>"+
      "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  }

  if(fzTemp == "fzCold" && ffTemp == "ffWarm"){
    illustrationWindow.innerHTML="";

    instructionWindow.innerHTML=
      "<span class='negative'>Airfow between FF and FZ is restricted.</span><br><br>"+
      "<span class='positive'><span style = color:green>Check:</span><br><a href='javascript:changeImage(&quot;coldControlLoc.jpg&quot;)'>Return air</a> from fresh food to freezer.<br>"+
      "<a href='javascript:changeImage(&quot;coldControlImage.jpg&quot;)'>Supply air</a> from freezer to fresh food.<br><br>"+
      "Visually inspect ducts for frost blocking airflow.</span><br><br>"+
      "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  }

  if(fzTemp == "fzCold" && ffTemp == "ffHot"){
    illustrationWindow.innerHTML="";

    instructionWindow.innerHTML=
      "<span class='negative'>Heat source inside refrigerator is stuck on.</span><br><br>"+
      "<span class='positive'><span style = color:green>Check:</span><br><a href='javascript:changeImage(&quot;lightSwitch.jpg&quot;)'>Door switch</a> to ensure switch is turning off interior light.<br><br>"+
      "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  }

  if(fzTemp == "fzNormal" && ffTemp == "ffCold"){
    illustrationWindow.innerHTML = "Need to get."
  }

  if(fzTemp == "fzNormal" && ffTemp == "ffNormal"){
    illustrationWindow.innerHTML = "Intermittent Issue: Temperature readings are normal."
  }

  if(fzTemp == "fzNormal" && ffTemp == "ffWarm"){
    illustrationWindow.innerHTML = "Food load is blocking airflow in FF section."
  }

  if(fzTemp == "fzNormal" && ffTemp == "ffWarm"){
    illustrationWindow.innerHTML = "Check: Door switch.<br>Fresh food light is not turning off when door is closed."
  }

  if(fzTemp == "fzWarm" && ffTemp == "ffCold"){
    illustrationWindow.innerHTML = "Need to get"
  }

  if(fzTemp == "fzWarm" && ffTemp == "ffNormal"){
    illustrationWindow.innerHTML = "Need to get"
  }

  if(fzTemp == "fzWarm" && ffTemp == "ffWarm"){
    illustrationWindow.innerHTML = "Need to do more checks."
  }

  if(fzTemp == "fzWarm" && ffTemp == "ffHot"){
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

