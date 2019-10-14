xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);

var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;
for(i=0; i<diagram1PathsLength; i++){
	diagram1Paths[i].style['stroke-linecap']="round";
	diagram1Paths[i].style.stroke = "Black";

	// var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	// path.setAttribute('stroke','blue');
	// path.setAttribute('fill','none');
	// path.setAttribute('opacity',0);
	// path.setAttribute('id',diagram1Paths[i].id + 'copy');
	// path.setAttribute('onclick','wireClicked(this);');
	// path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
	// path.setAttribute('onmouseout','notOverPath(this);');
	// path.style['stroke-width']=1;
	// path.style['stroke-linecap']="round";
	// path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
	// diagram1.appendChild(path);
	// path.style["stroke-width"]= 3;
	// path.setAttribute('touchmove','wireClicked(this);');	
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

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});

// schematic.addEventListener('mousewheel', function(e){zoomSchematic(e)}, false);
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);
schematic.addEventListener('mousewheel', chromeMouseWheelEvent);



function mouseWheelEvent(e){
	console.log("fired" + e.wheelDelta)
}

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

var COMPorangeArray = [COMP_path];
var COMPblackArray = [path4022,path3844,path3900,path3908,path3904,path3896,path3820,path3932,path51987,path4022,path52044,path3904];
var COMPblueArray = [path6460,path52055];
var COMPyellowArray = [path52051,path6468];
var COMPgreenArray = [path134];

var OFMorangeArray = [OFM_path];
var OFMblackArray = [path4022,path51987,path3932,path3820,path3896,path3908,path3900,path3844,path10328,path52163,path10328,path10364,path3904];
var OFMbrownArray = [path52160,path6452];
var OFMyellowArray = [path52157,path6468,path3924,path3920,path52062,path42844];
var OFMgreenArray = [path7024];

var CCHorangeArray = [CCH_path];
var CCHblackArray = [path52078,path52441];

var CC1CC2orangeArray = [C1C2_path];
var CC1CC2brownArray = [path52497];
var CC1CC2blueArray = [path10942];

var CC1CC2CoilControlsorangeArray = [HPS_path,LPS_path];
var CC1CC2CoilControlsblackArray = [path11640,path56541];
var CC1CC2CoilControlsblueArray = [path11090,path11170];

var IDMorangeArray = [IDM_path, CAP2_path];
var IDMbrownArray = [path9918,path9914];
var IDMredArray = [path52339,path52333,path52131];
var IDMvioletArray = [path52342,path52122];
var IDMyellowArray = [path52345,path52118,path52116];
var IDMredArray = [path52339,path52333,path52333,path52131];

var IFMorangeArray = [IFM_path];
var IFMblackArray = [path52298,path52296];
var IFMbrownArray = [path52285,path52406];
var IFMredArray = [];
var IFMvioletArray = [];
var IFMyellowArray = [path4086,path52168];
var IFMgreenArray = [path5808,path52174];

var MGVorangeArray = [MGV_path];
var MGVblackArray = [];
var MGVbrownArray = [path8900];
var MGVblueArray = [path52427];
var MGVredArray = [];
var MGVvioletArray = [];
var MGVyellowArray = [];
var MGVgreenArray = [path7390];
var MGVgrayArray = [path52421];

var TRANHVorangeArray = [TRAN_path];
var TRANHVblackArray = [path52378];
var TRANHVbrownArray = [path3657];
var TRANHVblueArray = [];
var TRANHVredArray = [path52412];
var TRANHVvioletArray = [];
var TRANHVyellowArray = [path52097];
var TRANHVgreenArray = [];
var TRANHVgrayArray = [];

var NONEorangeArray = [];
var NONEblackArray = [];
var NONEbrownArray = [];
var NONEblueArray = [];
var NONEredArray = [];
var NONEvioletArray = [];
var NONEyellowArray = [];
var NONEgreenArray = [];
var NONEgrayArray = [];

document.getElementById("componentSelect").value = "NONE";
function componentChange(){
	console.log(document.getElementById("componentSelect").value);
	clearHighlights();
	switch(document.getElementById("componentSelect").value){

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

   		case "CCH":
			TweenMax.to(CCHorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(CCHblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
   		break;

   		case "CC1CC2":
			TweenMax.to(CC1CC2orangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(CC1CC2blueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
  			TweenMax.to(CC1CC2brownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
   		break;

   		case "CC1CC2CoilControls":
			TweenMax.to(CC1CC2CoilControlsorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(CC1CC2CoilControlsblueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
  			TweenMax.to(CC1CC2CoilControlsblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
   		break;

   		case "IDM":
   			TweenMax.to(IDMorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
			TweenMax.to(IDMbrownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
  			TweenMax.to(IDMyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(IDMredArray, .1, {stroke:"red", strokeWidth:highlightedWidth});
  			TweenMax.to(IDMvioletArray, .1, {stroke:"rgb(238,130,238)", strokeWidth:highlightedWidth});
   		break;

   		case "IFM":
   			TweenMax.to([IDFarrow1,IDFarrow2,IDFarrow3,IDFarrow4,IDFarrow5,IDFline], 0, {autoAlpha:1});
   			TweenMax.to(IFMorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
			TweenMax.to(IFMblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
			TweenMax.to(IFMbrownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
  			TweenMax.to(IFMyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(IFMredArray, .1, {stroke:"red", strokeWidth:highlightedWidth});
  			TweenMax.to(IFMvioletArray, .1, {stroke:"rgb(238,130,238)", strokeWidth:highlightedWidth});
  			TweenMax.to(IFMgreenArray, .1, {stroke:"green", strokeWidth:highlightedWidth});
   		break;

   		case "MGV":
   			TweenMax.to(MGVorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
			TweenMax.to(MGVblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
			TweenMax.to(MGVbrownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
  			TweenMax.to(MGVyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(MGVredArray, .1, {stroke:"red", strokeWidth:highlightedWidth});
  			TweenMax.to(MGVvioletArray, .1, {stroke:"rgb(238,130,238)", strokeWidth:highlightedWidth});
  			TweenMax.to(MGVgreenArray, .1, {stroke:"green", strokeWidth:highlightedWidth});
  			TweenMax.to(MGVgrayArray, .1, {stroke:"gray", strokeWidth:highlightedWidth});
  			TweenMax.to(MGVblueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
   		break;

   		case "TRANHV":
   			TweenMax.to(TRANHVorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
			TweenMax.to(TRANHVblackArray, .1, {stroke:"black", strokeWidth:highlightedWidth});
			TweenMax.to(TRANHVbrownArray, .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});
  			TweenMax.to(TRANHVyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(TRANHVredArray, .1, {stroke:"red", strokeWidth:highlightedWidth});
  			TweenMax.to(TRANHVvioletArray, .1, {stroke:"rgb(238,130,238)", strokeWidth:highlightedWidth});
  			TweenMax.to(TRANHVgreenArray, .1, {stroke:"green", strokeWidth:highlightedWidth});
  			TweenMax.to(TRANHVgrayArray, .1, {stroke:"gray", strokeWidth:highlightedWidth});
  			TweenMax.to(TRANHVblueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
   		break;

   		case "NONE":
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

partDataWindow.style.display = "none";
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
	TweenMax.to([IDFarrow1,IDFarrow2,IDFarrow3,IDFarrow4,IDFarrow5,IDFline], 0, {autoAlpha:0});
}
clearHighlights();

var highlightedWidth = 1.5;

var buttons = document.getElementById("componentButtons").childNodes;
var buttonsLength = buttons.length;

for(i=0; i<buttonsLength; i++){
	buttons[i].setAttribute('onclick','showPartData(this);');
	buttons[i].setAttribute('onmouseover','this.style.cursor = "pointer";');	
}

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



