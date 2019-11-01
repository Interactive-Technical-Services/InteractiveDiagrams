document.title = "31-51493ITS";
var pam = "";
var myData = [];
function doStuff(data) {
  myData = data;
}

function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

parseData("Unit Data.csv", doStuff);




function handleHome(){
  instructionWindow.innerHTML =
    "<h4>1) Select FF and FZ temperature range.</h4>"+
    "Freezer Temperature<br>"+
    "<select id='step1A' class='select-css'>"+
    "<option value=512>Less than -15°F</option>"+
    "<option value=256>(-15°F) - (10°F)</option>"+
    "<option value=128>More than 10°F</option>"+
    "</select>"+
    "<br><br>"+
    "Fresh Food Temperature"+
    "<br>"+
    "<select id='step1B' class='select-css'>"+
    "<option value=64>Less than 34°F</option>"+
    "<option value=32>35°F - 43°F</option>"+
    "<option value=16>43°F - Ambient</option>"+
    "<option value=8>Above Ambient</option>"+
    "</select>"+
    "<h4>2) Select components that are currently running.</h4>"+
    "<form>"+
      "<input type='checkbox' id='checkbox2'> Evaporator Fan Motor<br>"+
      "<input type='checkbox' id='checkbox1'> Condenser Fan Motor<br>"+
      "<input type='checkbox' id='checkbox0'> Compressor<br>"+
    "</form>"+
    "<h4>3) Click Submit.</h4>"+
    "<input id='mySubmit' type='submit' value='Submit' class='select-css' onclick='handleSubmit()' ontouchstart='handleSubmit()'>"

  // illustrationWindow.innerHTML = instructionStart;
}
handleHome();



function changeImage(image){
  illustrationWindow.innerHTML="<img src=" + image + " class='responsive'>"
}

function handleSubmit(){
  compValue=0;
  conFanValue=0;
  evapFanValue=0;
  if(checkbox0.checked == true){
    compValue = 1;
  }else{
    compValue = 0;
  }
  if(checkbox1.checked == true){
    conFanValue = 2;
  }else{
    conFanValue = 0;
  }
  if(checkbox2.checked == true){
    evapFanValue = 4;
  }else{
    evapFanValue = 0;
  }
  
  fzTemp = Number(step1A.value);
  ffTemp = Number(step1B.value);
  computedScore = fzTemp+ffTemp+compValue+conFanValue+evapFanValue;
  pam = "";
  console.log(computedScore)
  for(i=0; i<myData.length; i++){
    if(computedScore == myData[i][11])
      pam=myData[i][0]
    console.log(pam)
  illustrationWindow.innerHTML = "This: " + pam;
  }




  // if(step1A.value == "fzCold" && step1B.value == "ffCold"){
  //  illustrationWindow.innerHTML =
  //   "<img src='coldControlImage.jpg' class='responsive'><br><br>"+
  //   "<img src='coldControlLoc.jpg' class='responsive'>";
  //  instructionWindow.innerHTML =
  //   "<span class='negative'>Replace Cold Control (Thermostat)</span><br><br>"+
  //   "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  // }

  // if(fzTemp == "fzCold" && ffTemp == "ffNormal"){
  //   illustrationWindow.innerHTML="";

  //   instructionWindow.innerHTML=
  //     "<span class='negative'>Airfow between FF and FZ is restricted.</span><br><br>"+
  //     "<span class='positive'><span style = color:green>Check:</span><br><a href='javascript:changeImage(&quot;coldControlLoc.jpg&quot;)'>Return air</a> from fresh food to freezer.<br>"+
  //     "<a href='javascript:changeImage(&quot;coldControlImage.jpg&quot;)'>Supply air</a> from freezer to fresh food.<br><br>"+
  //     "Visually inspect ducts for frost blocking airflow.</span><br><br>"+
  //     "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  // }

  // if(fzTemp == "fzCold" && ffTemp == "ffWarm"){
  //   illustrationWindow.innerHTML="";

  //   instructionWindow.innerHTML=
  //     "<span class='negative'>Airfow between FF and FZ is restricted.</span><br><br>"+
  //     "<span class='positive'><span style = color:green>Check:</span><br><a href='javascript:changeImage(&quot;coldControlLoc.jpg&quot;)'>Return air</a> from fresh food to freezer.<br>"+
  //     "<a href='javascript:changeImage(&quot;coldControlImage.jpg&quot;)'>Supply air</a> from freezer to fresh food.<br><br>"+
  //     "Visually inspect ducts for frost blocking airflow.</span><br><br>"+
  //     "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  // }

  // if(fzTemp == "fzCold" && ffTemp == "ffHot"){
  //   illustrationWindow.innerHTML="";

  //   instructionWindow.innerHTML=
  //     "<span class='negative'>Heat source inside refrigerator is stuck on.</span><br><br>"+
  //     "<span class='positive'><span style = color:green>Check:</span><br><a href='javascript:changeImage(&quot;lightSwitch.jpg&quot;)'>Door switch</a> to ensure switch is turning off interior light.<br><br>"+
  //     "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  // }

  // if(fzTemp == "fzNormal" && ffTemp == "ffCold"){
  //   illustrationWindow.innerHTML="";

  //   instructionWindow.innerHTML=
  //     "<span class='negative'>Food load in ff section is too low.</span><br><br>"+
  //     "<span class='positive'>Advise tennant to increase load to 75% by either adding food or adding gallon jugs of water.</span><br><br>"+
  //     "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  // }

  // if(fzTemp == "fzNormal" && ffTemp == "ffNormal"){
  //   illustrationWindow.innerHTML="";

  //   instructionWindow.innerHTML=
  //     "<span class='neutral'>Intermittent issue: Temperature readings are normal.</span><br><br>"+
  //     "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";
  // }

 

  // if(fzTemp == "fzNormal" && ffTemp == "ffWarm"){
  //   illustrationWindow.innerHTML="";

  //   instructionWindow.innerHTML = "Step 2: "+
  //   "Is door sealing when closed?"+
  //   "<br><br>"+
  //   "<center><input id='fzNormalffWarmYes' type='submit' value='Yes' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>"+
  //   "&nbsp;&nbsp;&nbsp;"+
  //   "<input id='fzNormalffWarmNo' type='submit' value='No' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>"+
  //   "<br><br>"+
  //   "<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'></center>";
  // }

  // if(fzTemp == "fzWarm" && ffTemp == "ffCold"){
  //   illustrationWindow.innerHTML = "Need to get"
  // }

  // if(fzTemp == "fzWarm" && ffTemp == "ffNormal"){
  //   illustrationWindow.innerHTML = "Need to get"
  // }

  // if(fzTemp == "fzWarm" && ffTemp == "ffWarm"){
  //   illustrationWindow.innerHTML = "Need to do more checks."
  // }

  // if(fzTemp == "fzWarm" && ffTemp == "ffHot"){
  //   illustrationWindow.innerHTML = "Check: Door switch.<br>Fresh food light is not turning off when door is closed."
  // }
}

// Thermostat Issue:<ul style="list-style-type: disc"><li>Make sure food inside the Fresh Food compertment isnt <a href=""> blocking airflow from Freezer</a>.</li><li>Check Freezer return duct for blockage. <a href="">Blockage?</a>.</li><li>Replace Thermostat.</li></ul>

