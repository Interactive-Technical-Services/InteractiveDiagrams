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
  outputText = "";
  console.log(computedScore)
  for(i=0; i<myData.length; i++){
    if(computedScore == myData[i][11])
      outputText=myData[i][0];
  illustrationWindow.innerHTML = outputText;
  }
}


