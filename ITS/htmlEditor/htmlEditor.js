

document.title = "HTML Editor"
xhr = new XMLHttpRequest();
xhr.open("GET","hvacDemoPartData/schematic.svg",false);
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
	path.style['stroke-linecap']="round";
	path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
	diagram1.appendChild(path);
	path.style["stroke-width"]= 3;	
}

var partsList = [];
var arr = [];
var partNameGroupList = partNameGroup.getElementsByTagName("path");
for(i=0; i<partNameGroupList.length; i++){
	partName = partNameGroupList[i].id.split("_")
	partsList.push(partName[0]);
	
	var result = partName[0].replace( /([A-Z])/g, " $1" );
	var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  	var option = document.createElement("option");
  	option.value = partName[0];
  	option.text = finalResult;
  	componentSelect.add(option);

	// arr.push(partName[0].toString());
}








function overPath(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
}

function notOverPath(wire){
nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", "0");
}



var highlightedWidth = 1.5;
function colorPickerChange(e){
	var highlightColor = document.getElementById("colorPicker").value;
}

function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	// TweenMax.to(wire2,.1,{stroke:document.getElementById("colorPicker").value, strokeWidth:highlightedWidth});
	wire2.style["stroke-width"]= 1.5;
	wire2.style["stroke"]= document.getElementById("colorPicker").value;
	selectedPart = wire2.id;
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


function clearHighlights(){
	for(i=0; i<diagram1PathsLength; i++){
		diagram1Paths[i].style['stroke-linecap']="round";
		diagram1Paths[i].style.stroke = "#000000";
		diagram1Paths[i].style["stroke-width"]= 1;	
	}
}
clearHighlights();


function componentChange(){
	// console.log(document.getElementById("componentSelect").value)
		// for(i=0; i<diagram1PathsLength; i++){
		// 	if(diagram1Paths[i].style.stroke != "rgb(0, 0, 0)"){
		// 	console.log(diagram1Paths[i].id + ".style.stroke = " + diagram1Paths[i].style.stroke);
		// 	rob.append(diagram1Paths[i].id + ".style.stroke = " + diagram1Paths[i].style.stroke)
		// 	console.log(diagram1Paths[i].style.stroke);
		// 	console.log();
		// }
	// }
}

//ColorPicker Colors
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
	for(i=0; i<diagram1PathsLength; i++){
		// console.log(document.getElementById("componentSelect").value)
		if(diagram1Paths[i].style["stroke-width"] != "1px") {
			// console.log(diagram1Paths[i].style.stroke);
			// TweenMax.to([path4394,path14236,ovenTCO,path14232,path10442,fuse,path10444,path14249,path14247,heaterTCO], .1, {stroke:"red"});
			// TweenMax.to([fanMotorBlackArray], .1, {stroke:"red"});
			switch(diagram1Paths[i].style.stroke) {
			
			//Black
			case "rgb(0, 0, 0)":
				blackArray.push(diagram1Paths[i].id);
			break;
	
        	//DarkGray
			case "rgb(169, 169, 169)":
				darkGrayArray.push(diagram1Paths[i].id);
        	break;
	
        	//LightGray
			case "rgb(211, 211, 211)":
				lightGrayArray.push(diagram1Paths[i].id);
        	break;
	
        	//Aquamarine
			case "rgb(127, 255, 212)":
				aquamarineArray.push(diagram1Paths[i].id);
        	break;
	
        	//Blue
			case "rgb(0, 0, 255)":
				blueArray.push(diagram1Paths[i].id);
        	break;
	
        	//Purple
			case "rgb(128, 0, 128)":
				purpleArray.push(diagram1Paths[i].id);
        	break;
	
        	//Violet
			case "rgb(238, 130, 238)":
				violetArray.push(diagram1Paths[i].id);
        	break;
	
        	//Pink
			case "rgb(255, 192, 203)":
				pinkArray.push(diagram1Paths[i].id);
        	break;
	
        	//YellowGreen
			case "rgb(154, 205, 50)":
				yellowGreenArray.push(diagram1Paths[i].id);
        	break;
	
        	//Yellow
			case "rgb(255, 255, 0)":
				yellowArray.push(diagram1Paths[i].id);
        	break;
	
        	//Orange
			case "rgb(255, 165, 0)":
				orangeArray.push(diagram1Paths[i].id);
        	break;
	
        	//Red
			case "rgb(255, 0, 0)":
				redArray.push(diagram1Paths[i].id);
        	break;
	
        	//Brown
			case "rgb(165, 42, 42)":
				brownArray.push(diagram1Paths[i].id);
        	break;
        }
    	}
	}
	// console.log("var " + componentSelect.value + "BlackArray = [" + blackArray + "];");
	// console.log("var " + componentSelect.value + "DarkGrayArray = [" + darkGrayArray + "];");
	// console.log("var " + componentSelect.value + "LightGrayArray = [" + lightGrayArray + "];");
	// console.log("var " + componentSelect.value + "AquamarineArray = [" + aquamarineArray + "];");
	// console.log("var " + componentSelect.value + "BlueArray = [" + blueArray + "];");
	// console.log("var " + componentSelect.value + "PurpleArray = [" + purpleArray + "];");
	// console.log("var " + componentSelect.value + "VioletArray = [" + violetArray + "];");
	// console.log("var " + componentSelect.value + "PinkArray = [" + pinkArray + "];");
	// console.log("var " + componentSelect.value + "YellowGreenArray = [" + yellowGreenArray + "];");
	// console.log("var " + componentSelect.value + "YellowArray = [" + yellowArray + "];");
	// console.log("var " + componentSelect.value + "OrangeArray = [" + orangeArray + "];");
	// console.log("var " + componentSelect.value + "RedArray = [" + redArray + "];");
	// console.log("var " + componentSelect.value + "BrownArray = [" + brownArray + "];");

	rob.innerHTML = "var " + componentSelect.value + "BlackArray = [" + blackArray + "];" + "<br>" + "var " + componentSelect.value + "DarkGrayArray = [" + darkGrayArray + "];" + "<br>" + "var " + componentSelect.value + "LightGrayArray = [" + lightGrayArray + "];" + "<br>" + "var " + componentSelect.value + "AquamarineArray = [" + aquamarineArray + "];" + "<br>" + "var " + componentSelect.value + "BlueArray = [" + blueArray + "];" + "<br>" + "var " + componentSelect.value + "PurpleArray = [" + purpleArray + "];" + "<br>" + "var " + componentSelect.value + "VioletArray = [" + violetArray + "];" + "<br>" + "var " + componentSelect.value + "PinkArray = [" + pinkArray + "];" + "<br>" + "var " + componentSelect.value + "YellowGreenArray = [" + yellowGreenArray + "];" + "<br>" + "var " + componentSelect.value + "YellowArray = [" + yellowArray + "];" + "<br>" + "var " + componentSelect.value + "OrangeArray = [" + orangeArray + "];" + "<br>" + "var " + componentSelect.value + "RedArray = [" + redArray + "];" + "<br>" + "var " + componentSelect.value + "BrownArray = [" + brownArray + "];";
	

}





















// var partsList = [];
// var partNameGroupList = partNameGroup.getElementsByTagName("path");
// for(i=0; i<partNameGroupList.length; i++){
// 	partName = partNameGroupList[i].id.split("_")
// 	partsList.push(partName[0]);
	
// 	var result = partName[0].replace( /([A-Z])/g, " $1" );
// 	var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

//   	var option = document.createElement("option");
//   	option.value = partName[0];
//   	option.text = finalResult;
//   	componentSelect.add(option);

//   	var div = document.createElement('div');
//   	div.id = partName[0] + "Div";
//   	div.innerHTML = arrays[partName[0] + "Array"];
//   	partDataWindow.appendChild(div);
// }


 



// var highlightedWidth = 1.5;

// var buttons = document.getElementById("componentButtons").childNodes;
// var buttonsLength = buttons.length;

// for(i=0; i<buttonsLength; i++){
// 	buttons[i].setAttribute('onclick','showPartData(this);');
// 	buttons[i].setAttribute('onmouseover','this.style.cursor = "pointer";');	
// }

//////////////////////////////////////////////////////////














