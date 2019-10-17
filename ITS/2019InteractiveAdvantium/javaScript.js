xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);
TweenMax.to(mainWindow, 0, {x:100, y:-200});

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
	path.setAttribute('onclick','wireClicked(this);');
	path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
	path.setAttribute('onmouseout','notOverPath(this);');
	path.style['stroke-width']=1;
	path.style['stroke-linecap']="round";
	path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
	diagram1.appendChild(path);
	path.style["stroke-width"]= 3;
	path.setAttribute('touchmove','wireClicked(this);');	
}

function overPath(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
}

function notOverPath(wire){
nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", "0");
}

var highlightColor = "black";
function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	TweenMax.to(wire2,.1,{stroke:highlightColor, strokeWidth:highlightedWidth});
	selectedPart = wire2.id;
	console.log(highlightColor)
}

// TweenMax.to(schematic, .5, {scaleX:1, scaleY:1, x:-50, y:-200, transformOrigin: "50% 50%", ease: Power0.easeNone});
var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});

// schematic.addEventListener('mousewheel', function(e){zoomSchematic(e)}, false);
mainWindow.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);
mainWindow.addEventListener('mousewheel', chromeMouseWheelEvent);

function chromeMouseWheelEvent(e){
	console.log(e)
	e.preventDefault();
	switch(e.wheelDelta<0 && scaleUp>1) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .1;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .1;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}






//Samsung Pinch Zoom
    // mainPage.addEventListener("touchstart", function(ev){
    //     	var l = ev.touches.length;
    //     	if (l > 1) { 

schematic.addEventListener('gesturechange', function(e) {
	e.preventDefault();
    if (e.scale < 1.0 && scaleUp > 1) {
        scaleUp = scaleUp - .01;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    } else if (e.scale > 1.0) {
        scaleUp = scaleUp + .01;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    }
}, false);   

var scaleUp = 1;
function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0 && scaleUp>1) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .1;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .1;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}


function resetPartWindow(){
	var partDataWindowDivs = partDataWindow.getElementsByTagName("div");
	for(i=0; i<partDataWindowDivs.length; i++){
		partDataWindowDivs[i].style.display = "none";
	}
}
resetPartWindow();
document.getElementById("componentSelect").value = "NONE";
document.getElementById("START").style.display="block";
function componentChange(){
	clearHighlights();
	resetPartWindow()
  COMP.style.display = "none";
  START.style.display = "none";
	switch(document.getElementById("componentSelect").value){

		case "ovenLamp":
			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path14249,path14247,heaterTCO], .1, {stroke:"red"});
			TweenMax.to([ovenLamp], .1, {stroke:"orange"});
			TweenMax.to([path17156,path11626,path10586,ry2Blade,path10528,path14654,path14656,path10736,path10734,path10008,path3872], .1, {stroke:"blue"});
			TweenMax.to(ry2Blade,1,{rotation:26});
			TweenMax.to(ry2Bladecopy,1,{rotation:26});
			ry2Rotated=true;
		
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;

			ovenLampDiv.style.display="block";
   		break;

   		case "fanMotor":
			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path10480,path10482,path11778,path10478,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([fanMotor], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path10736,path14656,path18201,path5914,ry3Blade,path5828,path5808], .1, {stroke:"blue"});
			TweenMax.to(ry3Blade,1,{rotation:26});
			TweenMax.to(ry3Bladecopy,1,{rotation:26});
			ry3Rotated=true;
	
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;

			fanMotorDiv.style.display="block";
   		break;

   		case "convMotor":
			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path10480,path10482,path11778,path11688,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([convectionFanMotor], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path10736,path14656,path18201,path18235,path18269,path6268,ry5Blade,path6266,path11700,path11702], .1, {stroke:"blue"});
			TweenMax.to(ry5Blade,1,{rotation:26});
			TweenMax.to(ry5Bladecopy,1,{rotation:26});
			ry5Rotated=true;
			
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;

			convMotorDiv.style.display="block";
   		break;

   		case "turntableMotor":
			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path10480,path10482,path11778,path10478,path10478,path10748,path11694,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([turntableMotor], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path10736,path14656,path18201,path18235,path18269,path5422,ry7Blade,path6458,path11712], .1, {stroke:"blue"});
			TweenMax.to(ry7Blade,1,{rotation:26});
			TweenMax.to(ry7Bladecopy,1,{rotation:26});
			ry7Rotated=true;
			
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;

			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;

			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;

			turntableMotorDiv.style.display="block";
   		break;

   		case "damperMotor":
			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path10480,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([damperMotor], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path10736,path14656,path18201,path18235,ry4Blade,path6100,path10746,path6102], .1, {stroke:"blue"});
			TweenMax.to(ry4Blade,1,{rotation:26});
			TweenMax.to(ry4Bladecopy,1,{rotation:26});
			ry4Rotated=true;
			
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;
			damperMotorDiv.style.display="block";
   		break;

   		case "upperHeater1":
   			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path7632,path7622,path10466,path11718,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([upperHeater1], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path3900,ry19Blade,path3902,path10490,path10488,path18514,path3478,ry15Blade,path3476,path18517,path11754,path11756,path19994], .1, {stroke:"blue"});
			TweenMax.to(ry15Blade,1,{rotation:26});
			TweenMax.to(ry15Bladecopy,1,{rotation:26});
			ry15Rotated=true;
			TweenMax.to(ry19Blade,1,{rotation:26});
			TweenMax.to(ry19Bladecopy,1,{rotation:26});
			ry19Rotated=true;
			
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;
			upperHeater1Div.style.display="block";
   		break;

   		case "upperHeater2":
   			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path7632,path7622,path10466,path11726,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([upperHeater2], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path3900,ry19Blade,path3902,path18514,path19994,path3664,ry16Blade,path3662,path11760,path11762], .1, {stroke:"blue"});
			TweenMax.to(ry16Blade,1,{rotation:26});
			TweenMax.to(ry16Bladecopy,1,{rotation:26});
			ry16Rotated=true;
			TweenMax.to(ry19Blade,1,{rotation:26});
			TweenMax.to(ry19Bladecopy,1,{rotation:26});
			ry19Rotated=true;
			
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true
			upperHeater2Div.style.display="block";
   		break;

   		case "lowerHeaterCeramic":
   			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path14875,path11730,path10748,path10478,path11778,path10482,path10480,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([lowerHeaterCeramic], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path3900,ry19Blade,path3902,path18514,path11768,path11766,path3782,ry13Blade,path3784,path10492,path19982], .1, {stroke:"blue"});
			TweenMax.to(ry13Blade,1,{rotation:26});
			TweenMax.to(ry13Bladecopy,1,{rotation:26});
			ry13Rotated=true;
			TweenMax.to(ry19Blade,1,{rotation:26});
			TweenMax.to(ry19Bladecopy,1,{rotation:26});
			ry19Rotated=true;
			
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;

			lowerHeaterCeramicDiv.style.display="block";
   		break;

   		case "highVoltageTransformer":
   			clearHighlights();
			TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path10730,path6738,PISBlade,path7632,path7622,heaterTCO,magnetronTCO], .1, {stroke:"red"});
			TweenMax.to([highVoltageTransformer], .1, {stroke:"orange"});
			TweenMax.to([path3872,path10008,path10734,path3900,ry19Blade,path3902,path19982,path18560,path4272,ry8Blade,path4270,path18563,path7630,path7624], .1, {stroke:"blue"});
			TweenMax.to(ry8Blade,1,{rotation:26});
			TweenMax.to(ry8Bladecopy,1,{rotation:26});
			ry8Rotated=true;
			TweenMax.to(ry19Blade,1,{rotation:26});
			TweenMax.to(ry19Bladecopy,1,{rotation:26});
			ry19Rotated=true;
			
			TweenMax.to(PISBlade,1,{rotation:28});
			TweenMax.to(PISBladecopy,1,{rotation:28});
			PISRotated=true;
		
			TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
			doorSwitchRotated=true;
		
			TweenMax.to(MISBlade,1,{rotation:28});
			TweenMax.to(MISBladecopy,1,{rotation:28});
			MISRotated=true;

			highVoltageTransformerDiv.style.display="block";
   		break;

   		case "NONE":
      START.style.display="block";
   			TweenMax.to(NONEorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
			TweenMax.to(NONEblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
			TweenMax.to(NONEbrownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
  			TweenMax.to(NONEyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(NONEredArray, .1, {stroke:"red", strokeWidth:highlightedWidth});
  			TweenMax.to(NONEvioletArray, .1, {stroke:"rgb(238,130,238)", strokeWidth:highlightedWidth});
  			TweenMax.to(NONEgreenArray, .1, {stroke:"green", strokeWidth:highlightedWidth});
  			TweenMax.to(NONEgrayArray, .1, {stroke:"gray", strokeWidth:highlightedWidth});
  			TweenMax.to(NONEblueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
   		break;	
   		
   	}
}

function colorPickerChange(e){
	highlightColor = document.getElementById("colorPicker").value;
}

// partDataWindow.style.display = "none";
function showHidePartsDataWindow(){
	 partsWindowVisibility = partDataWindow.style.display;
	 if(partsWindowVisibility === "none"){
	 	partDataWindow.style.display = "inline";
	 	partDataButton.innerHTML = "HIDE PART DATA"
	 }else{
	 	partDataWindow.style.display = "none";
	 	partDataButton.innerHTML = "SHOW PART DATA"
	 }
}



var blackArray = [];
var redArray = [];
var greenArray = [];
var blueArray = [];

var purpleArray = [];
var yellowArray = [];
var orangeArray = [];
var brownArray = [];

var pinkArray = [];
var grayArray = [];
var whiteArray = [];

var clickedPart = "";
function resetDiagram(){
	console.log(clickedPart);
	for(i=0; i<diagram1PathsLength; i++){
		switch(diagram1Paths[i].style.stroke) {

		case "rgb(0, 0, 0)":
  		blackArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(255, 0, 0)":
   		redArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(0, 0, 255)":
  		blueArray.push(diagram1Paths[i].id);
   		break;

		case "rgb(128, 0, 128)":
   		purpleArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(255, 255, 0)":
   		yellowArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(255, 165, 0)":
   		orangeArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(165, 42, 42)":
   		brownArray.push(diagram1Paths[i].id);
   		break;

  		case "rgb(255, 192, 203)":
   		pinkArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(105, 105, 105)":
   		grayArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(0, 0, 0)":
   		whiteArray.push(diagram1Paths[i].id);
   		break;
		
		}

	}
	// console.log(clickedPart.concat(grayArray));
	// console.log(clickedPart.concat("grayArray"));
	console.log(grayArray)
	console.log(redArray)
	console.log(blueArray)
	console.log(orangeArray)
	// console.log("var " + clickedPart.concat("grayArray") + " = [" + grayArray +"];");
	
	// var IFMhighStaticorangeArray = [blueArray];
	// var OFMgrayArray = [path1518,path1667,path146,path9549,path9557,path120];

// 	console.log("TweenMax.to([" + blueArray + "], .1, {stroke:'blue'});");
// 	console.log("TweenMax.to([" + yellowArray + "], .1, {stroke:'yellow'});");
// 	console.log("TweenMax.to([" + orangeArray + "], .1, {stroke:'orange'});");
}

//Clear Diagram Highlights
function clearHighlights(){
	for(i=0; i<diagram1PathsLength; i++){
		diagram1Paths[i].style['stroke-linecap']="round";
		diagram1Paths[i].style.stroke = "Black";
		diagram1Paths[i].style["stroke-width"]= .7;	
	}
}
clearHighlights();

// var highlightedWidth = 1.5;

// var buttons = document.getElementById("componentButtons").childNodes;
// var buttonsLength = buttons.length;

// for(i=0; i<buttonsLength; i++){
// 	buttons[i].setAttribute('onclick','showPartData(this);');
// 	buttons[i].setAttribute('onmouseover','this.style.cursor = "pointer";');	
// }

//////////////////////////////////////////////////////////














function showPartData(selectedPart){
	// clearHighlights();
	selectedPart = selectedPart.id.split("_");
	selectedPart = selectedPart[0];
	console.log("Did this work? ");

	switch(selectedPart) {

		case "COMP":
			TweenMax.to(COMPorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(COMPblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
  			TweenMax.to(COMPblueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
  			TweenMax.to(COMPyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(COMPgreenArray, .1, {stroke:"green", strokeWidth:highlightedWidth});
   		break;

   		case "OFM":
			TweenMax.to(OFMorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(OFMblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
  			TweenMax.to(OFMyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(OFMbrownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
   		break;
   		case "CONTACTOR":
			TweenMax.to(CONTACTORorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			// TweenMax.to(OFMblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
  			// TweenMax.to(OFMyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			// TweenMax.to(OFMbrownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
   		break;

   // 		case "IFMhighStatic":
			// TweenMax.to([IFMhighStaticgrayArray], .1, {stroke:'gray'});
   // 		break;
   	}


	// selectedPartblackArray = selectedPart.toString() + "blackArray";
	// selectedPartblackArray.toString();
	// pam = selectedPartblackArray;
	// var rob = document.getElementById(selectedPartblackArray.toString())
	// console.log(OFMblackArray)
	// console.log(selectedPart[0]+ "blackArray")
	
	
	TweenMax.to([blackArray], .1, {stroke:'red'});




	// clearHighlights();
	// TweenMax.to([fanMotor], .1, {stroke:"orange"});
	// TweenMax.to([path3872,path10008,path10734,path10736,path14656,path18201,path5914,ry3Blade,path5828,path5808], .1, {stroke:"blue"});
	// TweenMax.to(ry3Blade,1,{rotation:26});
	// TweenMax.to(ry3Bladecopy,1,{rotation:26});
	// ry3Rotated=true;
	
	// TweenMax.to(PISBlade,1,{rotation:28});
	// TweenMax.to(PISBladecopy,1,{rotation:28});
	// PISRotated=true;

	// TweenMax.to(doorSwitchBlade,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
	// TweenMax.to(doorSwitchBladecopy,1,{rotation:28, transformOrigin: "100% 0%", ease: Power0.easeNone});
	// doorSwitchRotated=true;

	// TweenMax.to(MISBlade,1,{rotation:28});
	// TweenMax.to(MISBladecopy,1,{rotation:28});
	// MISRotated=true;
}





















///////////////////////////////////////////////////////
// xhr = new XMLHttpRequest();
// xhr.open("GET","schematic.svg",false);
// xhr.overrideMimeType("image/svg+xml");
// xhr.send("");
// var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);
// schematic.classList.add("center");

// var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
// var diagram1PathsLength = diagram1Paths.length;
// for(i=0; i<diagram1PathsLength; i++){
// 	var pathCopy = document.createElementNS('http://www.w3.org/2000/svg', 'pathCopy');
// 	pathCopy.setAttribute('stroke','blue');
// 	pathCopy.setAttribute('fill','none');
// 	pathCopy.setAttribute('opacity',0);
// 	pathCopy.setAttribute('id',diagram1Paths[i].id + 'copy');
// 	pathCopy.setAttribute('onclick','wireClicked(this);');
// 	pathCopy.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
// 	pathCopy.setAttribute('onmouseout','notOverPath(this);');
// 	pathCopy.style['stroke-width']=1;
// 	pathCopy.style['stroke-linecap']="round";
// 	diagram1Paths[i].style['stroke-linecap']="round";
// 	pathCopy.setAttribute("d", diagram1Paths[i].getAttribute("d"));
// 	diagram1.appendChild(pathCopy);
// 	pathCopy.style["stroke-width"]= 3;	
// }

// function overPath(wire){
// 	nameSplit = wire.id.split("copy");
// 	wire.setAttribute("opacity", ".5"); 
// }

// function notOverPath(wire){
// nameSplit = wire.id.split("copy");
// 	wire.setAttribute("opacity", "0");
// }

// function wireClicked(wire){
// 	nameSplit = wire.id.split("copy");
// 	wire2 = document.getElementById(nameSplit[0]);
// 	TweenMax.to(wire2,.1,{stroke:highlightColor});
// 	selectedPart = wire2.id;
// }

// var diagram1Drag = Draggable.create(schematic, {zIndexBoost:false});

// TweenMax.to(schematic, 0, {x:600, y:75, scaleX:1, scaleY:1, transformOrigin: "50% 50%", ease: Power0.easeNone});
// zoomSlider.value=schematic._gsTransform.scaleX;
// var scaleUp = schematic._gsTransform.scaleX;
// function zoomSchematic(e){
// 	e.preventDefault();
// 	switch(e.detail>0) {
// 		case true:
// 		if(scaleUp > .5 ){
// 			scaleUp = scaleUp - .25;
// 			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
// 		}
// 		break;
// 		case false:
// 		scaleUp = scaleUp + .25;
//     	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
//         break;
//     }
//     zoomSlider.value=scaleUp;
// }


// zoomSlider.addEventListener("input", update);
// function update(){
// 	TweenMax.set(schematic, {scaleX:zoomSlider.value, scaleY:zoomSlider.value, transformOrigin: "50% 50%", ease: Power0.easeNone});
// }






////////////////////



