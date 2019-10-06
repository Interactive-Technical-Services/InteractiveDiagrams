xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);
// schematic.classList.add("right");
console.log("This" + mainWindow.childNodes.length)

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
	TweenMax.to(wire2,.1,{stroke:highlightColor, strokeWidth:2});
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
			scaleUp = scaleUp - .25;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}






//Samsung Pinch Zoom
    // mainPage.addEventListener("touchstart", function(ev){
    //     	var l = ev.touches.length;
    //     	if (l > 1) { 

    	var tracks = [];
schematic.on("touchmove", function (event) {

    //only run code if the user has two fingers touching
    if (event.originalEvent.touches.length === 2) {

        //track the touches, I'm setting each touch as an array inside the tracks array
        //each touch array contains an X and Y coordinate
        tracks.push([ [event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY], [event.originalEvent.touches[1].pageX, event.originalEvent.touches[1].pageY] ]);
    }
}).on("touchstart", function () {
    //start-over
    tracks = [];
}).on("touchend", function () {
    //now you can decide the scale that the user chose
    //take the track points that are the closest and determine the difference between them and the points that are the farthest away from each other
});



// schematic.addEventListener('gesturechange', function(e) {
// 	e.preventDefault();
//     if (e.scale < 1.0 && scaleUp > 1) {
//         scaleUp = scaleUp - .01;
// 			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
//     } else if (e.scale > 1.0) {
//         scaleUp = scaleUp + .01;
//     	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
//     }
// }, false);   

// var scaleUp = 1;
// function zoomSchematic(e){
// 	e.preventDefault();
// 	switch(e.detail>0 && scaleUp>1) {
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
// }

function componentChange(){
	display = document.getElementById("componentSelect").value;
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

// TweenMax.to(schematic, 0, {x:500, y:75, scaleX:1, scaleY:1, transformOrigin: "50% 50%", ease: Power0.easeNone});


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

function resetDiagram(){
	
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

   		case "rgb(24, 24, 24)":
   		grayArray.push(diagram1Paths[i].id);
   		break;

   		case "rgb(0, 0, 0)":
   		whiteArray.push(diagram1Paths[i].id);
   		break;
		
		}

	}
	console.log("TweenMax.to([" + grayArray + "], .1, {stroke:'gray'});");
	console.log("TweenMax.to([" + blueArray + "], .1, {stroke:'blue'});");
	console.log("TweenMax.to([" + yellowArray + "], .1, {stroke:'yellow'});");
	console.log("TweenMax.to([" + orangeArray + "], .1, {stroke:'orange'});");
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

//////////////////////////////////////////////////////////

var highlightedWidth = 1.4;
var OFMorangeArray = [OFM_path];
var OFMgrayArray = [path1518,path1667,path146,path9549,path9557,path120];
var OFMyellowArray = [path1512,path142,path154,path124,path5855,path5900,path9564];

var COMPorangeArray = [COMP_path];
var COMPgrayArray = [path2000,path146,path1667,path1518];
var COMPyellowArray = [path1512,path142,path154,path5875];
var COMPblueArray = [path98,path54,path64];

var IFMhighStaticorangeArray = [IFMhighStatic_path];
var IFMhighStaticgrayArray = [path2000,path146,path1667,path1518];
var IFMhighStaticyellowArray = [path1512,path142,path154,path5875];
var IFMhighStaticblueArray = [path98,path54,path64];

var buttons = document.getElementById("componentButtons").childNodes;
var buttonsLength = buttons.length;

for(i=0; i<buttonsLength; i++){
	buttons[i].setAttribute('onclick','showPartData(this);');
	buttons[i].setAttribute('onmouseover','this.style.cursor = "pointer";');	
}

function showPartData(selectedPart){
	clearHighlights();
	selectedPart = selectedPart.id.split("_");
	selectedPart = selectedPart[0];
	switch(selectedPart) {

		case "OFM":
			TweenMax.to(OFMorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(OFMgrayArray, .1, {stroke:"gray", strokeWidth:highlightedWidth});
  			TweenMax.to(OFMyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
   		break;

   		case "COMP":
			TweenMax.to(COMPorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(COMPgrayArray, .1, {stroke:"gray", strokeWidth:highlightedWidth});
  			TweenMax.to(COMPyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(COMPblueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
   		break;

   		case "IFMhighStatic":
			TweenMax.to(IFMhighStaticorangeArray, .1, {stroke:"orange", strokeWidth:highlightedWidth});
  			TweenMax.to(IFMhighStaticgrayArray, .1, {stroke:"gray", strokeWidth:highlightedWidth});
  			TweenMax.to(IFMhighStaticyellowArray, .1, {stroke:"yellow", strokeWidth:highlightedWidth});
  			TweenMax.to(IFMhighStaticblueArray, .1, {stroke:"blue", strokeWidth:highlightedWidth});
   		break;
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



