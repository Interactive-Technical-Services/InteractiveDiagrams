document.title = "2019 Advantium Oven"

var l1Color = 'rgb(0, 0, 0)';
var neutralColor = 'rgb(0,0,255)';
var energizedLoad = 'rgb(255,165,0)';

var deviceType = "not mobile";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  deviceType="mobile"
}

highlighterSelected = true;

var originalLineSize = .5;
var highlightedWidth = 1.45;

xhr = new XMLHttpRequest();
xhr.open("GET","../../js/schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");

var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);

schematic.setAttribute("width", screen.width);
schematic.setAttribute("height", screen.height); 
schematic.addEventListener("click", hideMenu);

function hideMenu(){
  // toolSelectors.style.display = "none";
  menuHidden = 1;
}
//Resize Window
var svgWindow = document.getElementById("mainWindow");
var svg = d3.select(schematic);
function resizeSVG(){
  var width = svgWindow.clientWidth;
  var height = svgWindow.clientHeight;
  svg
  .attr("width", width)
  .attr("height", height);
}
resizeSVG();
window.addEventListener("resize", resizeSVG)

var pam = document.getElementById('svg-pan-zoom-controls')
TweenMax.to('pam', 5, {x:-100})

//Set Path Codes
var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;

for(i=0; i<diagram1PathsLength; i++){
  diagram1Paths[i].style['stroke-linecap']="round";
  diagram1Paths[i].style.stroke = "Black";
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke','blue');
  path.setAttribute('fill','none');
  path.setAttribute('opacity',0);
  path.setAttribute('id',diagram1Paths[i].id + 'copy');

  if(deviceType == "mobile"){
    path.setAttribute('onclick','wireClicked(this);');
    path.setAttribute('ontouchstart','wireClicked(this);');
    path.setAttribute('ontouchend','wireClicked(this);');
    path.setAttribute('onmouseover','wireClicked(this);');
    }else{
      path.setAttribute('onclick','wireClicked(this);');
      path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
      path.setAttribute('onmouseout','notOverPath(this);');
    }
    path.style['stroke-linecap']="round";
    path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
    diagram1.appendChild(path);
    path.style["stroke-width"]= 3;
}

//Set Button Codes
var buttons = document.getElementById("partNameGroup").getElementsByTagName("rect");
var partNameGroupLength = buttons.length;
for(i=0; i<partNameGroupLength; i++){
  buttons[i].setAttribute('onmouseover','this.style.cursor = "pointer"');
  buttons[i].setAttribute('onclick','changeDropDown(this.id);'); 
}

function overPath(wire){
  if(highlighterSelected == true){
    wire.setAttribute("opacity", ".5"); 
  }
}

function notOverPath(wire){
  if(highlighterSelected == true){
    wire.setAttribute("opacity", "0");
  }
}

function colorPickerChange(e){
  var highlightColor = document.getElementById("colorPicker").value;
}

function modeChange(e){
  var modeSelectValue = document.getElementById("modeSelect").value;
  
  if(modeSelectValue === 'Simulation'){
    componentSelect.style.display = 'none';
    colorPicker.style.display = 'none';
  }
}

function wireClicked(wire){
  if(highlighterSelected == true){
    nameSplit = wire.id.split("copy");
    wire2 = document.getElementById(nameSplit[0]);
    wire2.style["stroke-width"]= highlightedWidth;
    wire2.style["stroke"]= document.getElementById("colorPicker").value;
    selectedPart = wire2.id;
    console.log(wire2.id)
  }
}



var partsList = [];
var partNameGroupList = partNameGroup.getElementsByTagName("rect");

for(i=0; i<partNameGroupList.length; i++){
  myPart = document.getElementById(partNameGroupList[i].id);
  var myLabel = $(myPart).attr('inkscape:label');
  partsList.push(myLabel);
  var option = document.createElement("option");
  option.value = myPart.id;
  option.text = myLabel;
  componentSelect.add(option);
}

function sortSelect(selElem) {
    var tmpAry = new Array();
    for (var i=0;i<selElem.options.length;i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    for (var i=0;i<tmpAry.length;i++) {
        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }
    return;
}

sortSelect(componentSelect)

//Change DropDown when component is clicked on diagram.
function changeDropDown(e){
  newDropDownValue = e.split("_")[0];
  for(i=0; i<componentSelect.length; i++){
    if(newDropDownValue == componentSelect[i].value){
      componentSelect.value = newDropDownValue;
      componentChange();
    } 
  }
}

//Do when Dropdown is changed.
function componentChange(){

  //Edit Here/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // TweenMax.to([MISBlade,MISBladecopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry2Blade,ry2Bladecopy], .5, {rotation:20, transformOrigin: "0% 100%", ease: Power0.easeNone});
  // TweenMax.to([pis,piscopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry3Blade,ry3Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry5Blade,ry5Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry7Blade,ry7Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry4Blade,ry4Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry15Blade,ry15Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry16Blade,ry16Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry13Blade,ry13Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([ry11Blade,ry11Bladecopy], .5, {rotation:-20, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([doorSwitchBlade,doorSwitchBladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  // TweenMax.to([damperSwitch,damperSwitchcopy], .5, {rotation:0, transformOrigin: "0% 100%", ease: Power0.easeNone});
  // TweenMax.to([path5615,path5613,path5615copy,path5613copy], 0, {autoAlpha:0});
  // TweenMax.to([path5619,path5617,path5619copy,path5617copy], 0, {autoAlpha:0});
  // TweenMax.to([ry8Blade,ry8Bladecopy], .5, {rotation:40, transformOrigin: "0% 100%", ease: Power0.easeNone});

  // clearHighlights();
  // blackArray = componentSelect.value + "BlackArray";
  // darkGrayArray = componentSelect.value + "DarkGrayArray";
  // lightGrayArray = componentSelect.value + "LightGrayArray";
  // aquamarineArray = componentSelect.value + "AquamarineArray";
  // blueArray = componentSelect.value + "BlueArray";
  // purpleArray = componentSelect.value + "PurpleArray";
  // violetArray = componentSelect.value + "VioletArray";
  // pinkArray = componentSelect.value + "PinkArray";
  // yellowGreenArray = componentSelect.value + "YellowGreenArray";
  // yellowArray = componentSelect.value + "YellowArray";
  // orangeArray = componentSelect.value + "OrangeArray";
  // redArray = componentSelect.value + "RedArray";
  // brownArray = componentSelect.value + "BrownArray";
  // textArray = componentSelect.value + "Text";
  
  // try {
  //   TweenMax.to(eval("obj =" + blackArray), .1, {stroke:"rgb(0, 0, 0)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + darkGrayArray), .1, {stroke:"rgb(169, 169, 169)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + lightGrayArray), .1, {stroke:"rgb(211, 211, 211)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + aquamarineArray), .1, {stroke:"rgb(127, 255, 212)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + blueArray), .1, {stroke:"rgb(0, 0, 255)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + purpleArray), .1, {stroke:"rgb(128, 0, 128)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + violetArray), .1, {stroke:"rgb(238, 130, 238)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + pinkArray), .1, {stroke:"rgb(255, 192, 203)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + yellowGreenArray), .1, {stroke:"rgb(154, 205, 50)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + yellowArray), .1, {stroke:"rgb(255, 255, 0)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + orangeArray), .1, {stroke:"rgb(255, 165, 0)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + redArray), .1, {stroke:"rgb(255, 0, 0)", strokeWidth:highlightedWidth});
  //   TweenMax.to(eval("obj =" + brownArray), .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
  //   partDataWindow.innerHTML = eval("obj =" + textArray);
  // }catch(e){};
  // switch(componentSelect.value) {
  //   //Edit Here/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //   case "lampOven":
  //   TweenMax.to([ry2Blade,ry2Bladecopy], .5, {rotation:0, transformOrigin: "0% 100%", ease: Power0.easeNone});
  //   break;

  //   case "motorFan":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry3Blade,ry3Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "conFanMotor":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry5Blade,ry5Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "motorTurntable":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry7Blade,ry7Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "motorDamper":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry4Blade,ry4Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "heaterUpper1":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry15Blade,ry15Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "heaterUpper2":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry16Blade,ry16Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "heaterLower":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry13Blade,ry13Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "heaterConvection":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([ry11Blade,ry11Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "switchPrimaryOpen":
  //   TweenMax.to([pis,piscopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "switchPrimaryClose":
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "switchDoorOpen":
  //   TweenMax.to([doorSwitchBlade,doorSwitchBladecopy], .5, {rotation:40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

  //   case "switchDamperOpen":
  //   TweenMax.to([damperSwitch,damperSwitchcopy], .5, {rotation:-40, transformOrigin: "0% 100%", ease: Power0.easeNone});
  //   break;

  //   case "boardRelayDCPower":
  //   TweenMax.to([path5615,path5613], .5, {autoAlpha:1});
  //   break;

  //   case "boardSBCDCSupply":
  //   TweenMax.to([path5619,path5617], 0, {autoAlpha:1});
  //   break;

  //   case "mag":
  //   TweenMax.to([ry8Blade,ry8Bladecopy], .5, {rotation:0, transformOrigin: "0% 100%", ease: Power0.easeNone});
  //   TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   TweenMax.to([dlbRelaySwitch,dlbRelaySwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  //   break;

    
  // }
  // for(i=0; i<partNameGroupList.length; i++){
  //   partNameGroupList[i].setAttribute('fill','green');
  //   partNameGroupList[i].style.fill = "blue";
  // }
  // try{document.getElementById(componentSelect.value).style.fill = "red";}
  // catch(e){};
  
}

componentChange()

function clearHighlights(){
  for(i=0; i<diagram1Paths.length; i++){
    part = diagram1Paths[i].id;
    part = part.split("copy")

    if(part.length === 1){
    diagram1Paths[i].style['stroke-linecap']="round";
    diagram1Paths[i].style.stroke = "#000000";
    diagram1Paths[i].style["stroke-width"]= originalLineSize; 
    } 
  }
}

clearHighlights();

var blackArray = [];
var grayArray = [];
var lightGrayArray = [];
var darkGrayArray = [];
var aquamarineArray = [];
var blueArray = [];
var purpleArray = [];
var violetArray = [];
var pinkArray = [];
var yellowGreenArray = [];
var yellowArray = [];
var orangeArray = [];
var redArray = [];
var brownArray = [];

function getColors(){
  blackArray = [];
  grayArray = [];
  lightGrayArray = [];
  darkGrayArray = [];
  aquamarineArray = [];
  blueArray = [];
  purpleArray = [];
  violetArray = [];
  pinkArray = [];
  yellowGreenArray = [];
  yellowArray = [];
  orangeArray = [];
  redArray = [];
  brownArray = [];
    for(i=0; i<diagram1PathsLength; i++){
      if(diagram1Paths[i].style["stroke-width"] != originalLineSize + "px") {
        switch(diagram1Paths[i].style.stroke) {
        case "rgb(0, 0, 0)":
          blackArray.push(diagram1Paths[i].id);
        break;
        case "rgb(169, 169, 169)":
          darkGrayArray.push(diagram1Paths[i].id);
            break;
        case "rgb(211, 211, 211)":
          lightGrayArray.push(diagram1Paths[i].id);
            break;
        case "rgb(127, 255, 212)":
          aquamarineArray.push(diagram1Paths[i].id);
            break;
        case "rgb(0, 0, 255)":
          blueArray.push(diagram1Paths[i].id);
            break;
        case "rgb(128, 0, 128)":
          purpleArray.push(diagram1Paths[i].id);
            break;
        case "rgb(238, 130, 238)":
          violetArray.push(diagram1Paths[i].id);
            break;
        case "rgb(255, 192, 203)":
          pinkArray.push(diagram1Paths[i].id);
            break;
        case "rgb(154, 205, 50)":
          yellowGreenArray.push(diagram1Paths[i].id);
            break;
        case "rgb(255, 255, 0)":
          yellowArray.push(diagram1Paths[i].id);
            break;
        case "rgb(255, 165, 0)":
          orangeArray.push(diagram1Paths[i].id);
            break;
        case "rgb(255, 0, 0)":
          redArray.push(diagram1Paths[i].id);
            break;
        case "rgb(165, 42, 42)":
          brownArray.push(diagram1Paths[i].id);
            break;
        }
      }
    }
    // console.log("var " + componentSelect.value + "BlackArray = [" + blackArray + "];" + "\n" + "var " + componentSelect.value + "DarkGrayArray = [" + darkGrayArray + "];" + "\n" + "var " + componentSelect.value + "LightGrayArray = [" + lightGrayArray + "];" + "\n" + "var " + componentSelect.value + "AquamarineArray = [" + aquamarineArray + "];" + "\n" + "var " + componentSelect.value + "BlueArray = [" + blueArray + "];" + "\n" + "var " + componentSelect.value + "PurpleArray = [" + purpleArray + "];" + "\n" + "var " + componentSelect.value + "VioletArray = [" + violetArray + "];" + "\n" + "var " + componentSelect.value + "PinkArray = [" + pinkArray + "];" + "\n" + "var " + componentSelect.value + "YellowGreenArray = [" + yellowGreenArray + "];" + "\n" + "var " + componentSelect.value + "YellowArray = [" + yellowArray + "];" + "\n" + "var " + componentSelect.value + "OrangeArray = [" + orangeArray + "];" + "\n" + "var " + componentSelect.value + "RedArray = [" + redArray + "];" + "\n" + "var " + componentSelect.value + "BrownArray = [" + brownArray + "];");
}

//Toggle Edit Functions = Alt + e
window.addEventListener("keydown", toggleEditor);
function toggleEditor(){
  if(event.keyCode == 69 && event.altKey){
    // getColors();
  }
}






// function redrawSchematic(){
//   clearHighlights();
// for(var i=0; i<l1_1Array.length; i++){
//   for(var a=0; a<l1_1Array.length; a++){
//   if(l1_1Array[i]  != l1TestArray[0]){
//     var me = document.getElementById(l1_1Array[i])
//     TweenMax.to([me], 0, {strokeWidth:highlightedWidth});
//   }else{
//     break;
//   } 
// }
//   if(i === l1_1Array.length-1){
//     l1_1State = 'good'
//   }else{
//     l1_1State = 'bad';
//   }
// }

// for(var i=0; i<l1_2AArray.length; i++){
//   if(l1_2AArray[i]  != l1TestArray[0] && l1_1State === "good"){
//     var me = document.getElementById(l1_2AArray[i])
//     TweenMax.to([me], 0, {strokeWidth:highlightedWidth});
//   }else{
//     break;
//   } 
//   if(i === l1_2AArray.length-1){
//     l1_2AState = 'good'
//   }else{
//   l1_2AState = 'bad';
//   }
// }
// }


// Loads

componentSelect.style.display = 'none';
colorPicker.style.display = 'none';

openDoor.addEventListener('click', function(){
  TweenMax.to([pis,piscopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  pisOpen = true;
  TweenMax.to([mis,miscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  misOpen = false;
  TweenMax.to([doorSwitch,doorSwitchcopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  doorSwitchOpen = true;
  TweenMax.to([ovenLampRelay,ovenLampRelaycopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
  ovenLampRelayOpen = !ovenLampRelayOpen;
});

closeDoor.addEventListener('click', function(){
  TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  pisOpen = false;
  TweenMax.to([mis,miscopy], .5, {rotation:40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  misOpen = true;
  TweenMax.to([doorSwitch,doorSwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  doorSwitchOpen = false;
  TweenMax.to([ovenLampRelay,ovenLampRelaycopy], .5, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
  ovenLampRelayOpen = !ovenLampRelayOpen;
});

microwave.addEventListener('click', function(){
  TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  pisOpen = false;
  TweenMax.to([mis,miscopy], .5, {rotation:40, transformOrigin: "100% 0%", ease: Power0.easeNone});
  misOpen = true;
  TweenMax.to([doorSwitch,doorSwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone});
  doorSwitchOpen = false;
  TweenMax.to([ovenLampRelay,ovenLampRelaycopy], .5, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
  ovenLampRelayOpen = !ovenLampRelayOpen;
});

var fuseOpen = false;
fuse_btn.addEventListener("click", moveFuse);
function moveFuse(){
  if(fuseOpen === false){
    TweenMax.to(fuse, .5, {autoAlpha:0, onStart:redrawSchematic});
  }else{
    TweenMax.to(fuse, .5, {autoAlpha:1, onComplete:redrawSchematic});
  }
  fuseOpen = !fuseOpen
}

ovenTCO_btn.addEventListener("click", moveOvenTCO);
var ovenTCOOpen = false;
function moveOvenTCO(){
  if(ovenTCOOpen === false){
        TweenMax.to([ovenTCO,ovenTCOcopy], .5, {x:3, ease: Power0.easeNone, onStart:redrawSchematic});
      }else{
        TweenMax.to([ovenTCO,ovenTCOcopy], .5, {x:0, ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    ovenTCOOpen = !ovenTCOOpen
}

heaterTCO_btn.addEventListener("click", moveheaterTCO);
var heaterTCOOpen = false;
function moveheaterTCO(){
  if(heaterTCOOpen === false){
        TweenMax.to([heaterTCO,heaterTCOcopy], .5, {x:3, ease: Power0.easeNone, onStart:redrawSchematic});
      }else{
        TweenMax.to([heaterTCO,heaterTCOcopy], .5, {x:0, ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    heaterTCOOpen = !heaterTCOOpen
}

magTCO_btn.addEventListener("click", movemagTCO);
var magTCOOpen = false;
function movemagTCO(){
  if(magTCOOpen === false){
        TweenMax.to([magTCO,magTCOcopy], .5, {x:3, ease: Power0.easeNone, onStart:redrawSchematic});
      }else{
        TweenMax.to([magTCO,magTCOcopy], .5, {x:0, ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    magTCOOpen = !magTCOOpen
}

pis_btn.addEventListener("click", movepis);
var pisOpen = false;
function movepis(){
  if(pisOpen === false){
    TweenMax.to([pis,piscopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
      }else{
        TweenMax.to([pis,piscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    pisOpen = !pisOpen
}

ry1Blade_btn.addEventListener("click", movery1Blade);
var ry1BladeOpen = true;
TweenMax.to([ry1Blade,ry1Bladecopy], 0, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
function movery1Blade(){
  if(ry1BladeOpen === false){
    TweenMax.to([ry1Blade,ry1Bladecopy], .5, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
  }else{
    TweenMax.to([ry1Blade,ry1Bladecopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
  }
    ry1BladeOpen = !ry1BladeOpen;
}

mis_btn.addEventListener("click", movemis);
TweenMax.to([mis,miscopy], 0, {rotation:40, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
var misOpen = true;
function movemis(){
  if(misOpen === false){
    TweenMax.to([mis,miscopy], .5, {rotation:40, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
      }else{
        TweenMax.to([mis,miscopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    misOpen = !misOpen
}

//Neutral

dlbRelay_btn.addEventListener("click", movedlbRelay);
TweenMax.to([dlbRelay,dlbRelaycopy], 0, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
var dlbRelayOpen = true;
function movedlbRelay(){
  if(dlbRelayOpen === false){
    TweenMax.to([dlbRelay,dlbRelaycopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
      }else{
        TweenMax.to([dlbRelay,dlbRelaycopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    dlbRelayOpen = !dlbRelayOpen
}

ovenLampRelay_btn.addEventListener("click", moveovenLampRelay);
TweenMax.to([ovenLampRelay,ovenLampRelaycopy], 0, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
var ovenLampRelayOpen = true;
function moveovenLampRelay(){
  console.log('clicked')
  if(ovenLampRelayOpen === false){
    TweenMax.to([ovenLampRelay,ovenLampRelaycopy], .5, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
      }else{
        TweenMax.to([ovenLampRelay,ovenLampRelaycopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    ovenLampRelayOpen = !ovenLampRelayOpen
}

fanMotorRelay_btn.addEventListener("click", movefanMotorRelay);
TweenMax.to([fanMotorRelay,fanMotorRelaycopy], 0, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
var fanMotorRelayOpen = true;
function movefanMotorRelay(){
  console.log('clicked')
  if(fanMotorRelayOpen === false){
    TweenMax.to([fanMotorRelay,fanMotorRelaycopy], .5, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
      }else{
        TweenMax.to([fanMotorRelay,fanMotorRelaycopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    fanMotorRelayOpen = !fanMotorRelayOpen
}

damperMotorRelay_btn.addEventListener("click", movedamperMotorRelay);
TweenMax.to([damperMotorRelay,damperMotorRelaycopy], 0, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
var damperMotorRelayOpen = true;
function movedamperMotorRelay(){
  console.log('clicked')
  if(damperMotorRelayOpen === false){
    TweenMax.to([damperMotorRelay,damperMotorRelaycopy], .5, {rotation:-25, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
      }else{
        TweenMax.to([damperMotorRelay,damperMotorRelaycopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    damperMotorRelayOpen = !damperMotorRelayOpen
}

//DC Components
doorSwitch_btn.addEventListener("click", movedoorSwitch);
var doorSwitchOpen = false;
function movedoorSwitch(){
  if(doorSwitchOpen === false){
    TweenMax.to([doorSwitch,doorSwitchcopy], .5, {rotation:-40, transformOrigin: "100% 0%", ease: Power0.easeNone,onStart:redrawSchematic});
      }else{
        TweenMax.to([doorSwitch,doorSwitchcopy], .5, {rotation:0, transformOrigin: "100% 0%", ease: Power0.easeNone,onComplete:redrawSchematic});
    }
    doorSwitchOpen = !doorSwitchOpen
}




function redrawSchematic(){
  clearHighlights();

  var l1Pot = [fuse.id,path4973.id,path4823.id];
  var nPot = [];
  console.log(l1Pot)

  ovenLampL1 = false;
  ovenLampN = false;

  fanMotorL1 = false;
  fanMotorN = false;

  damperMotorL1 = false;
  damperMotorN = false;
  

  TweenMax.to([path4394,path4979], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
  if(fuseOpen === false){
    TweenMax.to([fuse,path4973,path4823], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
    l1Pot.push(fuse.id,path4973.id,path4823.id)
  }
  
  if(fuseOpen === false && ovenTCOOpen == false){
    TweenMax.to([ovenTCO,path10444], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
  }

  if(fuseOpen === false && ovenTCOOpen == false && heaterTCOOpen == false){
    TweenMax.to([heaterTCO,path14249,path10730,path5071,path4857], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
    ovenLampL1 = true;
  }

  if(fuseOpen === false && ovenTCOOpen == false && heaterTCOOpen == false && magTCOOpen == false){
    TweenMax.to([magTCO,path5065,path6738,path10744,path10740,path5420,path5418,ry1Blade], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
    ovenLampL1 = true;
  }

  if(fuseOpen === false && ovenTCOOpen == false && heaterTCOOpen == false && magTCOOpen == false && ry1BladeOpen == false){
    TweenMax.to([path5320], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
    ovenLampL1 = true;
  }

  if(fuseOpen === false && ovenTCOOpen == false && heaterTCOOpen == false && magTCOOpen == false && pisOpen == false){
    TweenMax.to([pis,path10480,path10482,path11778,path10478,path10748,path11730,path7632,path7622,path10466,path11718], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
    ovenLampL1 = true;
    fanMotorL1 = true;
    damperMotorL1 = true;
  }
  
  if(fuseOpen === false && ovenTCOOpen == false && heaterTCOOpen == false && magTCOOpen == false && pisOpen == false && misOpen == false){
    TweenMax.to([pis,path10480,path10482,path11778,path10478,path10748,path11730,path7632,path7622,path10466,path11718], .1, {stroke:l1Color, strokeWidth:highlightedWidth});
    ovenLampL1 = true;
    fanMotorL1 = true;
    damperMotorL1 = true;
  }

  //Neutral
  TweenMax.to([path3872,path10008,path10734,path3900,path10736,path14656,path10742,dlbRelay,path14654,path10528,ovenLampRelay,path18201,path5914,path18235,path6102,path18269,path6268,path5422,fanMotorRelay,damperMotorRelay], .1, {stroke:neutralColor, strokeWidth:highlightedWidth});
  if(dlbRelayOpen === false){
    TweenMax.to([fuse,path4973,path4823], .1, {stroke:neutralColor, strokeWidth:highlightedWidth});
  }

  if(ovenLampRelayOpen == false){
    TweenMax.to([path10586,path11626], .1, {stroke:neutralColor, strokeWidth:highlightedWidth});
    ovenLampN = true;
  }

  if(fanMotorRelayOpen == false){
    TweenMax.to([path5828,path5808], .1, {stroke:neutralColor, strokeWidth:highlightedWidth});
    fanMotorN = true;
  }

  if(damperMotorRelayOpen == false){
    TweenMax.to([path6100,path10746], .1, {stroke:neutralColor, strokeWidth:highlightedWidth});
    damperMotorN = true;
  }






  if(ovenLampL1 === true && ovenLampN === true){
    TweenMax.to([ovenLamp,path17156,path14247], .1, {stroke:energizedLoad, strokeWidth:highlightedWidth});
  }

  if(fanMotorL1 === true && fanMotorN === true){
    TweenMax.to([fanMotor], .1, {stroke:energizedLoad, strokeWidth:highlightedWidth});
  }

  if(damperMotorL1 === true && damperMotorN === true){
    TweenMax.to([damperMotor], .1, {stroke:energizedLoad, strokeWidth:highlightedWidth});
  }
}

redrawSchematic()

// TweenMax.staggerFromTo(['#path5587'], 5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%', ease: Power0.easeNone, delay:2})
// TweenMax.to(['#path5587'], 5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%', ease: Power0.easeNone, delay:2})